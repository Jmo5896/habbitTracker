module.exports = {
  types: `

type Class {
    name: String!
    features: [Features]!
}

type Features {
    name: String!
    actionType: String!
    duration: Int!
    description: String!
    featureLevel: [Int!]
}

input ClassInput {
    name: String!
    features: [FeatureInput]!
}

input FeatureInput {
    name: String!
    actionType: String!
    duration: Int!
    description: String!
    featureLevel: [Int!]
}

  `,
  queries: `
    allClasses: [Class]
    `,

  mutations: `
    addClass(class: ClassInput): String
    `,
};
