const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const { User, Bet } = require("../models");
const { signToken } = require("../util/auth");
const { dateScalar } = require("./customScalars");
const fetch = require("node-fetch");

const DEFAULT_IMG_URLA =
  "https://cdn.pandascore.co/images/team/image/3260/SHARKS.png";
const DEFAULT_IMG_URLB =
  "https://cdn.pandascore.co/images/team/image/125863/isurus_2020_infocard.png";

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
      console.log(ctx.user);
      return Bet.find({ userId: ctx.user._id });
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
  },
  Mutation: {
    createUser: async (parent, args) => {
      try {
        const user = await User.create({ ...args });
        const token = await signToken(user);
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
      return { token, user };
    },
    placeBet: async (parent, args) => {
      try {
        console.log({...args});
        const bet = await Bet.create({ ...args });
        return bet;
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = resolvers;
