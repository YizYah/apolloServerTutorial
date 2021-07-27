import {wrapCopiedResults} from "neo-forgery";

// GRAPHQL

export const CREATE_BOOKS_MUTATION = `
mutation($createBooksInput: [BookCreateInput!]!) {
  createBooks(input: $createBooksInput) {
    books {
      title,
      author
    }
  }
}
`

export const CREATE_BOOKS_PARAMS = {
    "createBooksInput": [
        {
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald"
        },
        {
            "title": "Beloved",
            "author": "Toni Morrison"
        }
    ]
}

export const CREATE_BOOKS_OUTPUT = {
    "books": [
        {
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald"
        },
        {
            "title": "Beloved",
            "author": "Toni Morrison"
        }
    ]
}

// NEO4J QUERY
export const createBooksNeo4jQuery = `
CALL {
CREATE (this0:Book)
SET this0.title = $this0_title
SET this0.author = $this0_author
RETURN this0
}
CALL {
CREATE (this1:Book)
SET this1.title = $this1_title
SET this1.author = $this1_author
RETURN this1
}



RETURN 
this0 { .title, .author } AS this0, 
this1 { .title, .author } AS this1
`
export const createBooksNeo4jParams = {
    "this0_title": "The Great Gatsby",
    "this0_author": "F. Scott Fitzgerald",
    "this1_title": "Beloved",
    "this1_author": "Toni Morrison"
}
export const createBooksNeo4jOutput = wrapCopiedResults([
    {
        "keys": [
            "this0",
            "this1"
        ],
        "length": 2,
        "_fields": [
            {
                "title": "The Great Gatsby",
                "author": "F. Scott Fitzgerald"
            },
            {
                "title": "Beloved",
                "author": "Toni Morrison"
            }
        ],
        "_fieldLookup": {
            "this0": 0,
            "this1": 1
        }
    }
])
