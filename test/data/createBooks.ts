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
