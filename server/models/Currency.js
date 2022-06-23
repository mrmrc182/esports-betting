const { Schema, model } = require("mongoose");

const currencySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    amount: {
      type: Number,
      default: 1000,
    },
    lastReUp: {
      type: Number,
      default: Date.now(),
    },
    daysStreak: {
        type: Number,
        default: 0,
    }
  }
);

const Currency = model("Currency", currencySchema);

module.exports = Currency;