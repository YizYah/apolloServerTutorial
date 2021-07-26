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
