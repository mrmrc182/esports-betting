const {Currency} = require("../models");

const RE_UP_FREQUENCY = 86400000; // millesconds in a day
const RE_UP_AMOUNT = 100; // credits gained for logging in each day
const STARING_AMOUNT = 1000; // amount  of credits a new user starts with

const checkToAddCurrency = async (userId) => {
    const currency = await Currency.findOne({ userId });

    if (!currency) {
        throw new AuthenticationError("User does not have a currency model.");;
    }

    const dt = Date.now() - currency.lastReUp;

    if (dt < RE_UP_FREQUENCY) {return}

    // user is not on a streak
    if (dt > RE_UP_FREQUENCY * 2) {
        await Currency.findOneAndUpdate(
            { userId }, 
            { $inc: { amount: RE_UP_AMOUNT },
            lastReUp: Date.now(),
            daysStreak: 0},
            {new: true});    
        return;
    }

    // user is on a streak
    await Currency.findOneAndUpdate(
        { userId }, 
        { $inc: { amount: RE_UP_AMOUNT , daysStreak: 1},
        lastReUp: Date.now()},
        {new: true});

};

module.exports = {
    checkToAddCurrency,
};