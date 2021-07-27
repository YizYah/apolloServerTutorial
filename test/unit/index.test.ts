import {newServer} from "../../src/newServer";

const test = require('ava');

import {ApolloServer} from "apollo-server";
import {context} from "./mockContext";

const server: ApolloServer = newServer(context)

import {CREATE_BOOKS_OUTPUT, CREATE_BOOKS_PARAMS, CREATE_BOOKS_MUTATION} from "../data/createBooks";
import {BOOKS_PARAMS, BOOKS_QUERY} from "../data/books";
import {UPDATE_BOOKS_MUTATION, UPDATE_BOOKS_OUTPUT, UPDATE_BOOKS_PARAMS} from "../data/updateBooks";
import {DELETE_BOOKS_MUTATION, DELETE_BOOKS_PARAMS} from "../data/deleteBooks";


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

test('updateBooks', async (t: any) => {
    const result = await server.executeOperation({
        query: UPDATE_BOOKS_MUTATION,
        variables: UPDATE_BOOKS_PARAMS,
    });

    t.true(result.errors === undefined);

    if (!result.data) throw new Error('no results for updateBooks')

    t.deepEqual(
        // @ts-ignore
        result.data.updateBooks.books[0],
        UPDATE_BOOKS_OUTPUT.books[0]
    );
});


test('deleteBooks', async (t: any) => {
    const result = await server.executeOperation({
        query: DELETE_BOOKS_MUTATION,
        variables: DELETE_BOOKS_PARAMS,
    });

    console.log(`result.errors = ${JSON.stringify(result.errors)}`)
    t.true(result.errors === undefined);

    if (!result.data) throw new Error('no results for deleteBooks')
    t.true(result.data.deleteBooks.nodesDeleted && result.data.deleteBooks.nodesDeleted > 0);
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
