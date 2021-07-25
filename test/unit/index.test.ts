import {newServer} from "../../src/newServer";

const test = require('ava');

import {ApolloServer} from "apollo-server";
import {context} from "./mockContext";

const server: ApolloServer = newServer(context)

import {CREATE_BOOKS_OUTPUT, CREATE_BOOKS_PARAMS, CREATE_BOOKS_MUTATION} from "../data/createBooks";


test('createBooks', async (t: any) => {

    let result: any
    result = await server.executeOperation({
        query: CREATE_BOOKS_MUTATION,
        variables: CREATE_BOOKS_PARAMS,
    });

    t.true(!result.errors);

    t.deepEqual(
        // @ts-ignore
        result.data.createBooks,
        CREATE_BOOKS_OUTPUT
    );
});
