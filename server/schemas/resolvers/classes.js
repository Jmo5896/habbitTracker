const { Class } = require("../../models");

module.exports = {
  Query: {
    allClasses: async (parent, args, context) => {
      console.log(context.user);
      return [];
    },
  },

  Mutation: {
    addClass: async (parent, args, context) => {
      await Class.create(args.class);
      return "Class has been added";
    },
  },
};
