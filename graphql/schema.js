const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} = require("graphql");
const { TopPlayers } = require("./queries");
const { PlayerType } = require("./types");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    Top_Players: {
      type: new GraphQLList(PlayerType),
      args: {
        limit: { type: GraphQLInt },
      },
      resolve: TopPlayers,
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
