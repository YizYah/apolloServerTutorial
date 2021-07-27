import {QuerySpec} from 'neo-forgery'

import {booksNeo4jOutput, booksNeo4jQuery} from "../data/books";
import {createBooksNeo4jOutput, createBooksNeo4jParams, createBooksNeo4jQuery} from "../data/createBooks";
import {updateBooksNeo4jOutput, updateBooksNeo4jParams, updateBooksNeo4jQuery} from "../data/updateBooks";
import {deleteBooksNeo4jOutput, deleteBooksNeo4jParams, deleteBooksNeo4jQuery} from "../data/deleteBooks";

export const querySet: QuerySpec[] = [
    {
        name: 'createBooks',
        query: createBooksNeo4jQuery,
        params: createBooksNeo4jParams,
        output: createBooksNeo4jOutput,
    },
    {
        name: 'updateBooks',
        query: updateBooksNeo4jQuery,
        params: updateBooksNeo4jParams,
        output: updateBooksNeo4jOutput,
    },
    {
        name: 'deleteBooks',
        query: deleteBooksNeo4jQuery,
        params: deleteBooksNeo4jParams,
        output: deleteBooksNeo4jOutput,
    },

    {
        name: 'books',
        query: booksNeo4jQuery,
        params: {},
        output: booksNeo4jOutput,
    },
]
