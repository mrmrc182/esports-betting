const { Schema, model } = require("mongoose");

const betSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    amount: {
      type: Number,
      required: true,
    },
    choice: {
      type: Number,
      required: true,
    },

    createdAt: {
      type: Number,
      default: Date.now(),
    },
    matchId: {
      type: Number,
      required: true,
    },
    teamA: {
      type: String,
      required: true,
    },
    teamB: {
      type: String,
      required: true,
    },
    choiceName: {
      type: String,
      required: true,
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Bet = model("Bet", betSchema);

module.exports = Bet;
