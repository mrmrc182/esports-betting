const { Schema, model } = require("mongoose");

const matchSchema = new Schema(
    {
        matchId: {
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
        bets: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Bet',
            }
        ],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Match = model("Match", matchSchema);

module.exports = Match;