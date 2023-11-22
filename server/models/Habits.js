const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const habitSchema = new Schema(
  {
    description: {
      type: String,
      required: "You need to leave a description!",
      minlength: 1,
      maxlength: 280,
      trim: true,
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
