import {wrapCopiedResults} from "neo-forgery";

// GRAPHQL

export const DELETE_BOOKS_MUTATION = `
mutation ($bookWhere: BookWhere){
  deleteBooks(where: $bookWhere) {
      nodesDeleted
  }
}
`

export const DELETE_BOOKS_PARAMS = {
    "bookWhere": {
        "title": "Gatsby JS",
        "author": "F. Scott Fitzgerald"
    }
}

export const DELETE_BOOKS_OUTPUT = {
    "nodesDeleted": 1
}

// NEO4J QUERY

export const deleteBooksNeo4jQuery = `
MATCH (this:Book)
WHERE this.title = $this_title AND this.author = $this_author
DETACH DELETE this
`
export const deleteBooksNeo4jParams = {
    "this_title": "Gatsby JS",
    "this_author": "F. Scott Fitzgerald"
}
export const deleteBooksNeo4jOutput = wrapCopiedResults(
    [],
    {
        "updateStatistics": {
            "_stats": {
                "nodesDeleted": 1,
            },
        },
    }
)
