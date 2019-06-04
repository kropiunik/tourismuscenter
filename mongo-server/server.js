
const express = require("express");
const app = express();


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tc:Mu593TcX8xKwjRAy@tc-p6gdc.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

app.listen(3000, () => {

  console.log("listening on 3000");

  client.connect(err => {
    console.log("try to connenct to mongodb");
    if(!err){
    const collection = client.db("tc").collection("users");
    // perform actions on the collection object
    console.log(collection);
    client.close();
    }else{
      console.log("OJE:" + err);
    }
  });
  
});


