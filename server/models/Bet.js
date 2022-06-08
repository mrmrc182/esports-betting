const { Schema, model } = require("mongoose");

const betSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        betAmount: {
            type: Number,
            required: true,
        },
        winnerChoice: {
            type: Number,
            required: true,
        },
        openBet: {
            type: Boolean,
            required: true,
            default: true,
        },
        createdAt: {
            type: Number,
            default: Date.now(),
        },
        matchBet: {
            type: Schema.Types.ObjectId,
            ref: 'Match'
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Bet = model("Bet", betSchema);

module.exports = Bet;