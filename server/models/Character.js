const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const raceSchema = require("./Race");
const abilitiesSchema = require("./Abilities");
const skillsSchema = require("./Skills");
const savingThrowsSchema = require("./savingThrows");
const characterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    class: [
      {
        class: {
          type: Schema.Types.ObjectId,
          ref: "Class",
        },
        classLevel: {
          type: Number,
        },
      },
    ],
    subClass: [{ type: Schema.Types.ObjectId, ref: "SubClass" }],
    race: raceSchema,
    abilities: abilitiesSchema,
    skills: skillsSchema,
    savingThrows: savingThrowsSchema,
    gear: [{ type: Schema.Types.ObjectId, ref: "Gear" }],
    magicItems: [{ type: Schema.Types.ObjectId, ref: "MagicItem" }],
    Currency: {
      pp: {
        type: Number,
        default: 0,
      },
      gp: {
        type: Number,
        default: 0,
      },
      ep: {
        type: Number,
        default: 0,
      },
      sp: {
        type: Number,
        default: 0,
      },
      cp: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// CHARACTER LEVEL
characterSchema.virtual("characterLevel").get(function () {
  const levels = this.class.map((obj) => obj.classLevel);
  return levels.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
});

//  PROFICIENCY BONUS
characterSchema.virtual("proficiencyBonus").get(function () {
  const currentLevel = this.class
    .map((obj) => obj.classLevel)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return Math.ceil(currentLevel / 4 + 1);
});

// ATTUNEMENT COUNT
// characterSchema.virtual("attunementCount").get(function () {
//   return this.magicItems.filter((obj) => obj.attunement.attuned).length;
// });

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
