const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
} = require("graphql");

const ItemType = new GraphQLObjectType({
  name: "Item",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    hello: {
      type: GraphQLString,
      resolve(parent, args) {
        return "Hello from GraphQL!";
      },
    },
    items: {
      type: new GraphQLList(ItemType),
      resolve(parent, args) {
        // In a real application, you would fetch the array of items from a data source
        const items = [
          { id: "1", name: "Item 1" },
          { id: "2", name: "Item 2" },
          { id: "3", name: "Item 3" },
        ];
        return items;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
