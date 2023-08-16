const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} = require("graphql");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    items: {
      type: new GraphQLList(GraphQLInt),
      args: {
        limit: { type: GraphQLInt }, // Add the "limit" argument
      },
      resolve(parent, args) {
        // In a real application, you would fetch the array of numbers from a data source
        const items = [1, 2, 3, 4, 5, 7, 8, 34, 234];
        return items.slice(0, args.limit);
      },
    },
    name: {
      type: GraphQLString,
      //   args: {
      //     limit: { type: GraphQLInt }, // Add the "limit" argument
      //   },
      resolve(parent, args) {
        // In a real application, you would fetch the array of numbers from a data source
        const name = "Abzuar";
        return name;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
