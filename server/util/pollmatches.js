// pollMatches = () => {
// getLastTime db query
// IF lastTime && now - lastTime < pollInterval
//     run pollMatches after waiting (lastTime + pollInterval - now)
//     return
// ELSE
//    query api for all matches on or after 1 day ago
//    update or create matches in database
//    update lastTime to now
//    run pollMatches after waiting poll interval

// config model with lastPollTime
// environment variable pollInterval

//}

const { MatchPoll } = require("../models");
const { dateScalar } = require("../schemas/customScalars");

const pollInterval = process.env.POLL_INTERVAL;
const test = Date.now();
console.log(test);

const pollMatches = async () => {
  try {
    const now = Date.now();
    const poll = await MatchPoll.find({});

    if (poll.length === 0) {
      await MatchPoll.create({ lastPoll: now });
      setTimeout(pollMatches, pollInterval);
    } else {
      const lastPollTime = poll[0].lastPoll;

      if (now - lastPollTime < pollInterval) {
        const timeTillNextPoll = pollInterval - now - lastPollTime;
        setTimeout(pollMatches, timeTillNextPoll);
      } else {
        await MatchPoll.findOneAndUpdate(
          { id: 0 },
          { lastPoll: now },
          { new: true }
        );
        setTimeout(pollMatches, pollInterval);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  pollMatches,
};
