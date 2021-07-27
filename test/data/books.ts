import {wrapCopiedResults} from "neo-forgery";


// GRAPHQL

export const BOOKS_QUERY = `
query {
  books {
    author
    title
  }
}
`

export const BOOKS_PARAMS = {}

export const BOOKS_OUTPUT = {
    "books": [
        {
            "author": "Kate Chopin",
            "title": "The Awakening"
        },
        {
            "author": "Paul Auster",
            "title": "City of Glass"
        },
        {
            "author": "F. Scott Fitzgerald",
            "title": "The Great Gatsby"
        },
        {
            "author": "Toni Morrison",
            "title": "Beloved"
        },
    ]
}

// NEO4J QUERY

export const booksNeo4jOutput = wrapCopiedResults(
    [
        {
            "keys": [
                "this"
            ],
            "length": 1,
            "_fields": [
                {
                    "title": "The Awakening",
                    "author": "Kate Chopin"
                }
            ],
            "_fieldLookup": {
                "this": 0
            }
        },
        {
            "keys": [
                "this"
            ],
            "length": 1,
            "_fields": [
                {
                    "title": "City of Glass",
                    "author": "Paul Auster"
                }
            ],
            "_fieldLookup": {
                "this": 0
            }
        },
        {
            "keys": [
                "this"
            ],
            "length": 1,
            "_fields": [
                {
                    "title": "The Great Gatsby",
                    "author": "F. Scott Fitzgerald"
                }
            ],
            "_fieldLookup": {
                "this": 0
            }
        },
        {
            "keys": [
                "this"
            ],
            "length": 1,
            "_fields": [
                {
                    "title": "Beloved",
                    "author": "Toni Morrison"
                }
            ],
            "_fieldLookup": {
                "this": 0
            }
        },
    ]
)
export const booksNeo4jQuery = `
MATCH (this:Book)
RETURN this { .author, .title } as this
`
