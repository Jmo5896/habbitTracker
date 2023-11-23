const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const habitSchema = new Schema(
  {
    title: {
      type: String,
      required: "You need to give your habit a name",
      minlength: 1,
      maxlength: 50,
      trim: true,
    },
    description: {
      type: String,
      required: "You need to give your habit a description!",
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
    increase_decrease: {
      // true = increase, false = decrease
      type: Boolean,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    tally: [
      {
        createdAt: {
          type: Date,
          default: Date.now,
          get: (timestamp) => dateFormat(timestamp),
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

habitSchema.virtual("tallyCount").get(function () {
  return this.tally.length;
});

const Habit = model("Habit", habitSchema);

module.exports = Habit;
