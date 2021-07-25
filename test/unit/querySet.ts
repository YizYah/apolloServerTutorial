import {dataToStored, QuerySpec, storedToData} from 'neo-forgery'

const createBooksQuery = `
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

const createBooksParams = {
    "this0_title": "The Great Gatsby",
    "this0_author": "F. Scott Fitzgerald",
    "this1_title": "Beloved",
    "this1_author": "Toni Morrison"
}

const createBooksOutput = {
    records:

        [
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
        ]
}

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

// console.log(`createBooksOutputOld = ${JSON.stringify(createBooksOutputOld)}`)
// console.log(`createBooksOutput = ${JSON.stringify(createBooksOutput)}`)
// console.log(`createBooksOutputData = ${JSON.stringify(storedToData(createBooksOutput))}`)

export const querySet: QuerySpec[] = [
    {
        name: 'createBooks',
        query: createBooksQuery,
        params: createBooksParams,
        output: createBooksOutput,
    }
]
