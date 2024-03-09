const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const characterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    race: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    proficiency_bonus: {
      type: Number,
    },
    // ABILITIES
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
    //  SKILLS
    acrobatics: {
      proficient: {
        type: Boolean,
      },
      expertise: {
        type: Boolean,
      },
      bonus: {
        type: Number,
      },
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

characterSchema.virtual("strength score").get(function () {
  return this.strength.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
});

characterSchema.virtual("dexterity score").get(function () {
  return this.dexterity.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
});

characterSchema.virtual("constitution score").get(function () {
  return this.constitution.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
});

characterSchema.virtual("intelligence score").get(function () {
  return this.intelligence.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
});

characterSchema.virtual("wisdom score").get(function () {
  return this.wisdom.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
});

characterSchema.virtual("charisma score").get(function () {
  return this.charisma.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
});

const Character = model("Character", characterSchema);

module.exports = Character;
