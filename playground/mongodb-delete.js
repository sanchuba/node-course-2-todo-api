// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server.');

    //deleteMany
    db.collection('Todos').deleteMany({text: 'Call grandma'}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Cannot delete todos.', err)
    });

    //deleteOne
    db.collection('Todos').deleteOne({text: 'Call grandma'}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Cannot delete todo.', err)
    });

    //fineOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Cannot delete todo.', err)
    });

    // db.close();
});