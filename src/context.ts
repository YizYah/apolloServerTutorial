    const neo4j = require('neo4j-driver');
    const driver = neo4j.driver(
        process.env.DB_URI,
        neo4j.auth.basic(
            process.env.DB_USER,
            process.env.DB_PASSWORD,
        ),
    );

    export function context({event, context}: { event: any, context: any }): any {

        return ({
            event,
            context,
            driver,
        });
    }
