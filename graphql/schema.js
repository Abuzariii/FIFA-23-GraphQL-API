const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
});

const MakeupUserType = new GraphQLObjectType({
  name: "MakeupUser",
  fields: {
    _id: { type: GraphQLString },
    email: { type: GraphQLString },
    fullName: { type: GraphQLString },
    contactNo: { type: GraphQLString },
    address: { type: GraphQLString },
  },
});

const OrderItemType = new GraphQLObjectType({
  name: "OrderItem",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLString },
    timestamp: { type: GraphQLString },
  },
});

const UserOrderType = new GraphQLObjectType({
  name: "UserOrder",
  fields: {
    _id: { type: GraphQLString },
    email: { type: GraphQLString },
    orders: { type: GraphQLList(OrderItemType) }, // Specify the type of orders as GraphQLList(OrderItemType)
  },
});

// Resolvers
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    userByEmail: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const User = require("../models/users");

        try {
          const user = await User.findOne({ email: args.email });
          return user;
        } catch (error) {
          throw new Error("Error fetching user: " + error.message);
        }
      },
    },
    makeupUserByEmail: {
      type: MakeupUserType,
      args: {
        email: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const MakeupUser = require("../models/makeup-users");

        try {
          const makeupUser = await MakeupUser.findOne({ email: args.email });
          return makeupUser;
        } catch (error) {
          throw new Error("Error fetching makeup user: " + error.message);
        }
      },
    },
    ordersByEmail: {
      type: UserOrderType,
      args: {
        email: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const userOrders = require("../models/orders");

        try {
          const makeupUser = await userOrders.findOne({ email: args.email });
          return makeupUser;
        } catch (error) {
          throw new Error("Error fetching makeup user: " + error.message);
        }
      },
    },
  },
});

// Mutation

const CreationResponseType = new GraphQLObjectType({
  name: "CreationResponse",
  fields: {
    message: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

const DeletionResponseType = new GraphQLObjectType({
  name: "DeletionResponse",
  fields: {
    email: { type: GraphQLString },
    message: { type: GraphQLString },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: CreationResponseType,
      args: {
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const User = require("../models/users");

        try {
          const newUser = new User({
            email: args.email,
            username: args.username,
            password: args.password,
          });

          const createdUser = await newUser.save();
          return {
            message: `User created with email: ${createdUser.email}`,
            email: createdUser.email,
          };
        } catch (error) {
          throw new Error("Error creating user: " + error.message);
        }
      },
    },
    deleteUser: {
      type: DeletionResponseType,
      args: {
        email: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const User = require("../models/users");

        try {
          const deletedUser = await User.findOneAndDelete({
            email: args.email,
          });

          if (!deletedUser) {
            throw new Error("User not found");
          }

          return {
            email: deletedUser.email,
            message: `User deleted with email: ${deletedUser.email}`,
          };
        } catch (error) {
          throw new Error("Error deleting user: " + error.message);
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
