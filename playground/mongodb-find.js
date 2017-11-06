// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //    console.log('Unable to fetch todos.', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Count todos: ${count}`);
    // }, (err) => {
    //    console.log('Unable to count todos.', err);
    // });

    db.collection('Users').find({name: 'Danilo'}).toArray().then((docs) => {
        // console.log(`You have ${count} todos pending.`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos.', err);
    });

    db.close();
});