const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const { User, Bet, Currency } = require("../models");
const { signToken } = require("../util/auth");
const { checkToAddCurrency } = require("../util/currency");
const { dateScalar } = require("./customScalars");
const fetch = require("node-fetch");
const { ObjectId } = require('mongodb');

const DEFAULT_IMG_URLA =
  "https://steamcdn-a.akamaihd.net/apps/csgo/blog/images/competitive_logo_large.png";

const DEFAULT_IMG_URLB =
  "https://steamcdn-a.akamaihd.net/apps/csgo/blog/images/competitive_logo_large.png";

const resolvers = {
  Date: dateScalar,
  Query: {
    me: async (parent, args, ctx) => {
      // if ctx.user is undefined, then no token or an invalid token was
      // provided by the client.
      if (!ctx.user) {
        throw new AuthenticationError("Must be logged in.");
      }
      return User.findOne({ email: ctx.user.email });
    },
    bets: async (parent, args, ctx) => {
      // if ctx.user is undefined, then no token or an invalid token was
      // provided by the client.
      if (!ctx.user) {
        throw new AuthenticationError("Must be logged in.");
      }
      return Bet.find({ userId: ctx.user._id });
    },
    openBets: async (parent, args, ctx) => {
      // if ctx.user is undefined, then no token or an invalid token was
      // provided by the client.
      if (!ctx.user) {
        throw new AuthenticationError("Must be logged in.");
      }
      const bet = await Bet.find({ userId: ctx.user._id })
      console.log(bet)
      return bet;
    },
    closedBets: async (parent, args, ctx) => {
      // if ctx.user is undefined, then no token or an invalid token was
      // provided by the client.
      if (!ctx.user) {
        throw new AuthenticationError("Must be logged in.");
      }
      const bet = await Bet.find({ userId: ctx.user._id })
      console.log(bet)
      return bet;
    },
    upcomingMatches: async () => {
      const response = await fetch(
        "https://api.pandascore.co/csgo/matches/upcoming",
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.API_AUTH,
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      const slicedData = data.slice(0, 12);
      const relevantData = slicedData
        .filter((obj) => obj.opponents.length >= 2)
        .map((obj) => {
          let urlA = obj.opponents[0].opponent.image_url;
          let urlB = obj.opponents[1].opponent.image_url;
          if (!urlA) {
            urlA = DEFAULT_IMG_URLA;
          }
          if (!urlB) {
            urlB = DEFAULT_IMG_URLB;
          }
          return {
            matchId: obj.id,
            liveUrl: obj.streams.official.raw_url,
            date: obj.scheduled_at,
            teamAName: obj.opponents[0].opponent.name,
            teamAId: obj.opponents[0].opponent.id,
            teamAUrl: urlA,
            teamBName: obj.opponents[1].opponent.name,
            teamBId: obj.opponents[1].opponent.id,
            teamBUrl: urlB,
          };
        });
      return relevantData;
    },
    currency: async (parent, args, ctx) => {
      if (!ctx.user) {
        throw new AuthenticationError("Must be logged in.");
      }
      const currency = await Currency.findOne({ userId: ctx.user._id });
      const retVal = { userId: currency.userId, amount: currency.amount }
      console.log(currency)
      return retVal;
    },
    leaderboard: async () => {
      try {
        const currency = await Currency
          .find()
          .sort({ amount: -1 })
          .limit(15)
          .populate("userId");

        const leaderboard = currency.map(userValue => {
          return {
            username: userValue.userId.username,
            amount: userValue.amount,
          }
        });
        return leaderboard;

      } catch (error) {
        throw error;
      }
    },
    rank: async (parent, args, ctx) => {
      let retval;
      await Currency.aggregate([
        {
          $setWindowFields: {
            sortBy: { amount: -1 },
            output: {
              rank: {
                $rank: {}
              }
            }
          }
        },
        {
          $match: {
            userId: ObjectId(ctx.user._id)
          }
        },
      ],
        (err, result) => {
          if (err) {
            throw err;
          } else {
            console.log(result[0]);
            retval = {
              username: ctx.user.username,
              amount: result[0].amount,
              rank: result[0].rank
            };
          }
        }
      );
      return retval;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      try {
        const user = await User.create({ ...args });
        const token = await signToken(user);
        await Currency.create({ userId: user.id });
        return { user, token };
      } catch (error) {
        if (error.name === "MongoError" && error.code === 11000) {
          const [[key, value]] = Object.entries(error.keyValue);
          throw new UserInputError(`${key} "${value}" already exists.`);
        }
        throw error;
      }
    },
    login: async (parent, args) => {
      const { email, password } = args;
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Invalid username or password");
      }
      const authentic = await user.isCorrectPassword(password);
      if (!authentic) {
        throw new AuthenticationError("Invalid username or password");
      }
      const token = await signToken(user);
      user.lastLogin = Date.now();
      await user.save();
      await checkToAddCurrency(user.id);
      return { token, user };
    },
    placeBet: async (parent, args) => {
      try {
        console.log({ ...args });
        const bet = await Bet.create({ ...args });
        return bet;
      } catch (error) {
        throw error;
      }
    },
    adjustCurrency: async (parent, args) => {
      const { userId, amount } = args;
      try {
        const currency = await Currency.findOneAndUpdate(
          { userId },
          { $inc: { amount } },
          { new: true });

        return currency;

      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = resolvers;
