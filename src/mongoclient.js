

function getClient () {

    const uri = "mongodb+srv://mongoUsername:mongoPassword@meetingsapp-cluster.wj1r3.mongodb.net/meetingsApp?retryWrites=true&w=majority";

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true });

return client

}