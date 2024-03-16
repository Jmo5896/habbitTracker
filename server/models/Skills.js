const { Schema } = require("mongoose");

const skillsSchema = new Schema({
  Acrobatics: {
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
  "Animal Handling": {
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
  Arcana: {
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
  Athletics: {
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
  Deception: {
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
  History: {
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
  Insight: {
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
  Intimidation: {
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
  Investigation: {
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
  Medicine: {
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
  Nature: {
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
  Perception: {
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
  Performance: {
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
  Persuasion: {
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
  Religion: {
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
  "Sleight of Hand": {
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
  Stealth: {
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
  Survival: {
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

module.exports = skillsSchema;
