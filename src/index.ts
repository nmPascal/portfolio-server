import express from "express";
import "dotenv-flow/config.js";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schemas";
import data from "./data/db.json";

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/graphql", graphqlHTTP({
    schema,
    rootValue: data,
    graphiql: true,
}));

app.use(cors());

app.listen(PORT, () =>
    console.log(`Server running on port http://localhost:${PORT}`)
);