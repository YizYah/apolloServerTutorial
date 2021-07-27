Apollo Server with Unit Testing Partial Solution
----------
This is a solution to the [tutorial for a TS Apollo Server with Unit Tests](https://medium.com/p/4ab14ac46654/edit).)

The tutorial shows how to test an Apollo Server using neo4j with [neo-forgery](https://www.npmjs.com/package/neo-forgery).

To run the test, first run `npm i` and then 
call `npm test`.

If you'd like to get this to work for a real database, add a `.env` file with info for your database (as explained in the tutorial).  Then you can call
```
npm run int-test
```
to run the full integration test.
