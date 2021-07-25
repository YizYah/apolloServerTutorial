import {newServer} from "../../src/newServer";

const test = require('ava');

import {ApolloServer} from "apollo-server";
import {context} from "../../src/context";
const server:ApolloServer = newServer(context)

import {CREATE_BOOKS_OUTPUT, CREATE_BOOKS_PARAMS, CREATE_BOOKS_MUTATION} from "../data/createBooks";

test('createBooks', async (t: any) => {

    console.log('starting...')
    let result: any
    try {
        result = await server.executeOperation({
            query: CREATE_BOOKS_MUTATION,
            variables: CREATE_BOOKS_PARAMS,
        });
    } catch (error) {
        console.log(error)
    }

    t.true(!result.errors);

    t.deepEqual(
        // @ts-ignore
        result.data.createBooks,
        CREATE_BOOKS_OUTPUT
    );
});
