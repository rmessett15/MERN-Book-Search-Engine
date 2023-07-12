const { User, Book } = require("../models");
const { signToken } = require("../utils/auth")

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.find({ _id: context.user._id });
      }
      throw new Error("user not found");
    },
  },
  Mutation: {
    login: async (parent, args) => {
      const user = await User.findOne({ email: args.email });
      if (!user) {
        throw new Error("user not found");
      }
      const isCorrectPassword = await user.isCorrectPassword(args.password);
      console.log(!isCorrectPassword);
      if (!isCorrectPassword) {
        
        throw new Error("incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $push: {
              savedBooks: args.input,
            },
          },
          { new: true }
        );
        return updatedUser;
      }
      throw new Error("user not found");
    },
    removeBook: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $pull: {
              savedBooks: args.bookId,
            },
          },
          { new: true }
        );
        return updatedUser;
      }
      throw new Error("user not found");
    },
  },
};

module.exports = resolvers;
