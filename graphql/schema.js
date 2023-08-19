const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} = require("graphql");
const {
  TopPlayers,
  TopPlayersByClub,
  TopPlayersByNationality,
  PlayerByName,
  PlayerByPreferredFoot,
  PlayersByInternationalReputation,
  PlayersByWeakFootPerformance,
} = require("./queries");
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
    Top_Players_By_Club: {
      type: new GraphQLList(PlayerType),
      args: {
        club: { type: GraphQLString },
      },
      resolve: TopPlayersByClub,
    },
    Top_Players_By_Nationality: {
      type: new GraphQLList(PlayerType),
      args: {
        nationality: { type: GraphQLString },
      },
      resolve: TopPlayersByNationality,
    },
    Player_By_Name: {
      type: new GraphQLList(PlayerType),
      args: {
        name: { type: GraphQLString },
      },
      resolve: PlayerByName,
    },
    Player_By_Preferred_Foot: {
      type: new GraphQLList(PlayerType),
      args: {
        foot: { type: GraphQLString },
      },
      resolve: PlayerByPreferredFoot,
    },
    Player_By_International_Reputation: {
      type: new GraphQLList(PlayerType),
      args: {
        limit: { type: GraphQLInt },
      },
      resolve: PlayersByInternationalReputation,
    },
    Player_By_Weak_Foot_Ability: {
      type: new GraphQLList(PlayerType),
      args: {
        limit: { type: GraphQLInt },
      },
      resolve: PlayersByWeakFootPerformance,
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
