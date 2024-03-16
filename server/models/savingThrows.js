const { Schema } = require("mongoose");

const savingThrowsSchema = new Schema({
  strength: {
    proficient: {
      type: Boolean,
    },
    expertise: {
      type: Boolean,
    },
    additional: {
      type: Number,
      default: 0,
    },
  },
  dexterity: {
    proficient: {
      type: Boolean,
    },
    expertise: {
      type: Boolean,
    },
    additional: {
      type: Number,
      default: 0,
    },
  },
  constitution: {
    proficient: {
      type: Boolean,
    },
    expertise: {
      type: Boolean,
    },
    additional: {
      type: Number,
      default: 0,
    },
  },
  intelligence: {
    proficient: {
      type: Boolean,
    },
    expertise: {
      type: Boolean,
    },
    additional: {
      type: Number,
      default: 0,
    },
  },
  wisdom: {
    proficient: {
      type: Boolean,
    },
    expertise: {
      type: Boolean,
    },
    additional: {
      type: Number,
      default: 0,
    },
  },
  charisma: {
    proficient: {
      type: Boolean,
    },
    expertise: {
      type: Boolean,
    },
    additional: {
      type: Number,
      default: 0,
    },
  },
});

module.exports = savingThrowsSchema;
