const { Schema } = require("mongoose");

const raceSchema = new Schema({
  abilityScoreBonus: {
    bonus1: {
      type: String,
    },
    bonus2: {
      type: String,
    },
  },
  speed: {
    type: Number,
  },
  size: {
    feet: {
      type: Number,
    },
    inches: {
      type: Number,
    },
    weight: {
      type: Number,
    },
  },
  languages: [
    {
      type: String,
    },
  ],
  age: {
    type: Number,
  },
});

module.exports = raceSchema;
