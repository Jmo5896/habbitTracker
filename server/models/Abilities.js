const { Schema } = require("mongoose");

const abilitiesSchema = new Schema({
  strength: [
    {
      type: Number,
    },
  ],
  dexterity: [
    {
      type: Number,
    },
  ],
  constitution: [
    {
      type: Number,
    },
  ],
  intelligence: [
    {
      type: Number,
    },
  ],
  wisdom: [
    {
      type: Number,
    },
  ],
  charisma: [
    {
      type: Number,
    },
  ],
});

module.exports = abilitiesSchema;
