const { Schema, model } = require("mongoose");

const gearSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  value: {
    pp: {
      type: Number,
    },
    gp: {
      type: Number,
    },
    ep: {
      type: Number,
    },
    sp: {
      type: Number,
    },
    cp: {
      type: Number,
    },
  },
  weight: {
    type: Number,
  },
  usage: {
    action: {
      type: Boolean,
    },
    bonusAction: {
      type: Boolean,
    },
    reaction: {
      type: Boolean,
    },
    freeAction: {
      type: Boolean,
    },
    consumable: {
      type: Boolean,
    },
  },
});

const Gear = model("Gear", gearSchema);

module.exports = Gear;
