import {QuerySpec} from 'neo-forgery'

const createBooksNeo4jQuery = `
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

const createBooksNeo4jParams = {
    "this0_title": "The Great Gatsby",
    "this0_author": "F. Scott Fitzgerald",
    "this1_title": "Beloved",
    "this1_author": "Toni Morrison"
}

const wrapCopiedResponse = (copiedResponse: any) => {
    return {records: copiedResponse }
}

const createBooksNeo4jOutput = wrapCopiedResponse([
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

// const createBooksOutput = dataToStored([{
//     this0: {
//         "author": "F. Scott Fitzgerald",
//         "title": "The Great Gatsby"
//     },
//     this1: {
//         "author": "Toni Morrison",
//         "title": "Beloved"
//     }
// }])


const booksNeo4jOutput = wrapCopiedResponse(
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

const booksNeo4jQuery = `
MATCH (this:Book)
RETURN this { .author, .title } as this
`

export const querySet: QuerySpec[] = [
    {
        name: 'createBooks',
        query: createBooksNeo4jQuery,
        params: createBooksNeo4jParams,
        output: createBooksNeo4jOutput,
    },
    {
        name: 'books',
        query: booksNeo4jQuery,
        params: {},
        output: booksNeo4jOutput,
    },
]
