//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connect to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("unable to do", err);
  });

  //client.close();
});
