const { Schema, model } = require("mongoose");

const subClassSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  //   the index of feature levels will corelate with the features index
  feautureLevels: [
    {
      type: Number,
    },
  ],
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

const SubClass = model("SubClass", subClassSchema);

module.exports = SubClass;
