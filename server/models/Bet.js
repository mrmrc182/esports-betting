const { Schema, model } = require("mongoose");

const betSchema = new Schema(
    {
        username: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        betAmount: {
            type: Number,
            required: true,
        },
        matchDate: {
            type: Number,
            required: true,
        },
        teamA: {
            type: Number,
            required: true,
        },
        teamB: {
            type: Number,
            required: true,
        },
        winner: {
            type: Number,
            required: false,
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
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Bet = model("Bet", betSchema);

module.exports = User;