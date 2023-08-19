const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
} = require("graphql");

const PlayerType = new GraphQLObjectType({
  name: "Player",
  fields: {
    ID: { type: GraphQLInt },
    Name: { type: GraphQLString },
    Age: { type: GraphQLInt },
    Nationality: { type: GraphQLString },
    Overall: { type: GraphQLInt },
    Club: { type: GraphQLString },
    Value: { type: GraphQLInt },
    Wage: { type: GraphQLString },
    Preffered_Foot: { type: GraphQLString },
    International_Reputation: { type: GraphQLFloat },
    Weak_Foot: { type: GraphQLFloat },
    Skill_Moves: { type: GraphQLFloat },
    Work_Rate: { type: GraphQLString },
    Body_Type: { type: GraphQLString },
    Height: { type: GraphQLString },
    Weight: { type: GraphQLString },
    Release_Clause: { type: GraphQLString },
    Kit_Number: {
      type: GraphQLString,
      resolve: (parent) => {
        // Handle NaN values in Kit_Number
        if (isNaN(parent.Kit_Number)) {
          return null; // Convert NaN to null
        }
        return parent.Kit_Number;
      },
    },
  },
});

module.exports = { PlayerType };
