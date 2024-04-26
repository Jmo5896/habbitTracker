module.exports = {
  types: `
    type Character {
      _id: ID!
      name: String!
      description: String!
      class: [Class]!
      subClass: [Class]!
      race: Race!
      abilities: Abilities!
      skills: Skills!
      savingThrows: Abilities!
      gear: [Gear]!
      magicItems: [MagicItems]!
      Currency: Currency!
    }

    type Race {
        abilityBonus1: String!
        abilityBonus2: String!
        speed: Int!
        languages: [String]!
        age: Int!
    }

    type Abilities {
        strength: Int!
        dexterity: Int!
        constitution: Int!
        intelligence: Int!
        wisdom: Int!
        charisma: Int!
    }

    type Skills {
        acrobatics: Int!
        animalHandling: Int!
        arcana: Int!
        athletics: Int!
        deception: Int!
        history: Int!
        insight: Int!
        initimidation: Int!
        investigation: Int!
        medicine: Int!
        nature: Int!
        perception: Int!
        performance: Int!
        persuasion: Int!
        religion: Int!
        sleightOfHand: Int!
        stealth: Int!
        survival: Int!
    }

    type Gear {
        name: String!
        quantity: Int!
        value: Currency!
        weight: Int!
        usage: Usage!
    }

    type MagicItems {
        name: String!
        quantity: Int!
        attunement: Attunement!
        value: Int!
        weight: Int!
        usage: Usage!
    }

    type Usage {
        action: Boolean!
        bonusAction: Boolean!
        reaction: Boolean!
        freeAction: Boolean!
        consumable: Boolean!
    }

    type Attunement {
        needAttunement: Boolean!
        attuned: Boolean!
    }

    type Currency {
        pp: Int!
        gp: Int!
        ep: Int!
        sp: Int!
        cp: Int!
    }
  `,
  queries: ``,

  mutations: ``,
};
