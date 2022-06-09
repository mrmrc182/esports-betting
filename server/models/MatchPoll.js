const { Schema, model } = require("mongoose");

const matchPollSchema = new Schema({
  id: {
    type: Number,
    required: true,
    default: 0,
    unique: true,
  },
  lastPoll: {
    type: Number,
    required: true,
    default: Date.now(),
  },
});

const MatchPoll = model("MatchPoll", matchPollSchema);

module.exports = MatchPoll;
