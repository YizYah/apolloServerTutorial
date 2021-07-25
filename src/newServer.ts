import {Neo4jGraphQL} from '@neo4j/graphql';

import {ApolloServer} from "apollo-server";

require('dotenv').config();

const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
`;
const schema = new Neo4jGraphQL({
    typeDefs,
}).schema;

export function newServer(context: any):ApolloServer {
    const server: ApolloServer = new ApolloServer(
        {
            schema,
            context,
        });
    return server;
}
