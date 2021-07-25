import {newServer} from "./newServer";
import {context} from "./context";

newServer(context).listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
