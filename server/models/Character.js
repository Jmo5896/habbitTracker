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
    level: {
      type: Number,
    },
    abilities: {
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
    },
    skills: {
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
    },
    savingThrows: {
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
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
// STAT VIRTUALS
characterSchema.virtual("myScores").get(function () {
  return Object.entries(this.abilities).map(([score, list]) => {
    const stat = list.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    return {
      [`${score}Score`]: stat,
      [`${score}Modifier`]: Math.floor((stat - 10) / 2),
    };
  });
});

// SKILL VIRTUALS
characterSchema.virtual("mySkills").get(function () {
  const skills = {};
  Object.entries(this.skills).forEach(([skill, obj]) => {
    let total = obj.additional;
    if (obj.proficient) {
      if (obj.expertise) {
        total += this.proficiency_bonus;
      }
      total += this.proficiency_bonus;
    }
    let bonus = "";
    if (skill === "Athletics") {
      bonus = "strength";
    } else if (
      skill === "Acrobatics" ||
      skill === "Sleight of Hand" ||
      skill === "Stealth"
    ) {
      bonus = "dexterity";
    } else if (
      skill === "Arcana" ||
      skill === "History" ||
      skill === "Investigation" ||
      skill === "Nature" ||
      skill === "Religion"
    ) {
      bonus = "intelligence";
    } else if (
      skill === "Animal Handling" ||
      skill === "Insight" ||
      skill === "Medicine" ||
      skill === "Perception" ||
      skill === "Survival"
    ) {
      bonus = "wisdom";
    } else if (
      skill === "Deception" ||
      skill === "Intimidation" ||
      skill === "Performance" ||
      skill === "Persuasion"
    ) {
      bonus = "charisma";
    }
    const stat = this.abilities[bonus].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    total += Math.floor((stat - 10) / 2);

    skills[`${skill}Bonus`] = total;
    skills[`${skill}Passive`] = total + 10;
  });
  return skills;
});

characterSchema.virtual("mySavingThrows").get(function () {
  const data = {};
  Object.entries(this.savingThrows).forEach(([score, obj]) => {
    let total = obj.additional;
    if (obj.proficient) {
      if (obj.expertise) {
        total += this.proficiency_bonus;
      }
      total += this.proficiency_bonus;
    }
    const stat = this.abilities[bonus].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    total += Math.floor((stat - 10) / 2);
    data[score] = total;
  });
  return data;
});

const Character = model("Character", characterSchema);

module.exports = Character;
