const { Schema, model } = require("mongoose");

const magicItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  attunement: {
    needAttunemnet: {
      type: Boolean,
      required: true,
    },
    attuned: {
      type: Boolean,
      default: false,
    },
  },
  value: {
    // this will always be in gold
    type: Number,
  },
  weight: {
    type: Number,
    required: true,
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

const MagicItem = model("MagicItem", magicItemSchema);

module.exports = MagicItem;
