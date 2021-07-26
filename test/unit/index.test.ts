import {newServer} from "../../src/newServer";

const test = require('ava');

import {ApolloServer} from "apollo-server";
import {context} from "./mockContext";

const server: ApolloServer = newServer(context)

import {CREATE_BOOKS_OUTPUT, CREATE_BOOKS_PARAMS, CREATE_BOOKS_MUTATION} from "../data/createBooks";
import {BOOKS_PARAMS, BOOKS_QUERY} from "../data/books";


interface Book {
    author: string;
    title: string;
}

test('createBooks', async (t: any) => {

    let result: any
    result = await server.executeOperation({
        query: CREATE_BOOKS_MUTATION,
        variables: CREATE_BOOKS_PARAMS,
    });

    console.log(`result = ${JSON.stringify(result)}`)
    console.log(`result.errors = ${JSON.stringify(result.errors)}`)
    t.true(result.errors === undefined);

    t.deepEqual(
        // @ts-ignore
        result.data.createBooks,
        CREATE_BOOKS_OUTPUT
    );
});

test('books', async (t: any) => {
    const result = await server.executeOperation({
        query: BOOKS_QUERY,
        variables: BOOKS_PARAMS,
    });

    console.log(`result = ${JSON.stringify(result)}`)
    t.true(result.errors === undefined);

    if(!result || !result.data || !result.data.books) throw new Error('no results for books query...')
    if(!result.data.books.filter) throw new Error('error in list of books returned for books')
    const portionOfOutput = result.data.books.filter((book:Book)=>book.author='Toni Morrison')

    t.true(portionOfOutput.length > 0);
});
