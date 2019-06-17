const express = require('express');
const Mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');


const PORT = 8080;
const app = express();
const path = '/graphql';

const Schema = require('../graphql/schema');
const Resolvers = require('../graphql/resolver');
const Connectors = require('../connector');

Mongoose.connect('mongodb://localhost/makgoli', (err) => {
  if (err) {
    return err;
  }
  return true;
});


const server = new ApolloServer({ typeDefs : Schema, resolvers : Resolvers, context : Connectors });

server.applyMiddleware({app, path});

app.listen(PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${PORT}/graphql`
));

