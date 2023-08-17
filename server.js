const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Database connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB........");
  const schema = require("./graphql/schema");
  // Middleware to use GraphQL at /graphql endpoint
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});
