
const exress = require("express");
const app = express();


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tc:tceluzuz@tc-p6gdc.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

app.listen(3000, () => {

  console.log("listening on 3000");

  client.connect(err => {
    const collection = client.db("tc").collection("tc");
    // perform actions on the collection object
    collection.insert("Huber");
    console.log(collection);
    //client.close();
    console.log(error);
  });
  
});
