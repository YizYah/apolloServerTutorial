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
