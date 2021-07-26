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
