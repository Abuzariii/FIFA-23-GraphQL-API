const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // Enable GraphiQL for testing queries
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
