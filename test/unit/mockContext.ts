const { querySet } = require('./querySet')

const { mockDriver, mockSessionFromQuerySet } = require('neo-forgery')
const session = mockSessionFromQuerySet(querySet)
const driver = mockDriver(session)

export function context({event, context}: { event: any, context: any }): any {

    return ({
        event,
        context,
        driver,
    });
}
