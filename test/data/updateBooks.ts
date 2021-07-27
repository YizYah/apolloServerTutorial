import {wrapCopiedResults} from "neo-forgery";

// GRAPHQL

export const UPDATE_BOOKS_MUTATION = `
mutation ($bookWhere: BookWhere, $updateBooksUpdate: BookUpdateInput){
  updateBooks(where: $bookWhere, update: $updateBooksUpdate) {
    books {
      title,
      author
    }
  }
}
`

export const UPDATE_BOOKS_PARAMS = {
    "bookWhere": {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald"
    },
    "updateBooksUpdate": {
        "title": "Gatsby JS"
    }
}

export const UPDATE_BOOKS_OUTPUT = {
    "books": [
        {
            "title": "Gatsby JS",
            "author": "F. Scott Fitzgerald"
        },
    ]
}

// NEO4J QUERY

export const updateBooksNeo4jQuery = `
MATCH (this:Book)
WHERE this.title = $this_title AND this.author = $this_author

SET this.title = $this_update_title

RETURN this { .title, .author } AS this
`
export const updateBooksNeo4jParams = {
    "this_title": "The Great Gatsby",
    "this_author": "F. Scott Fitzgerald",
    "this_update_title": "Gatsby JS"
}
export const updateBooksNeo4jOutput = wrapCopiedResults(
    [
        {
            "keys": [
                "this"
            ],
            "length": 1,
            "_fields": [
                {
                    "title": "Gatsby JS",
                    "author": "F. Scott Fitzgerald"
                }
            ],
            "_fieldLookup": {
                "this": 0
            }
        }
    ]
)
