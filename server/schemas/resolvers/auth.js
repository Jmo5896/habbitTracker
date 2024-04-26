const { User } = require("../../models");
const { signToken, AuthenticationError } = require("../../utils/auth");

module.exports = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        console.log(userData);
        return userData;
      }

      throw AuthenticationError;
    },
  },

  Mutation: {
    //  {
    //   email: 'justin.m.moore5896@gmail.com',
    //   password: 'Password2024'
    // }
    addUser: async (parent, args) => {
      // console.log(User);
      try {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      } catch (error) {
        console.log("addUser Error", error);
        throw AuthenticationError;
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};
