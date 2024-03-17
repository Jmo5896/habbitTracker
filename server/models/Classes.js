const { Schema, model } = require("mongoose");

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  //   features index should relate to the character level
  features: [
    {
      actionType: {
        // action, bonus action, reaction, or static (permanent buff)
        type: String,
        required: true,
      },
      duration: {
        // number of rounds feature lasts, 1 would be instant, 1 minute would be 10 rounds, -1 would be indefinite (permanent buffs)
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
});

const Class = model("Class", classSchema);

module.exports = Class;
