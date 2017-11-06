// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server.');

    //fineOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     text: 'laba tayo'
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Cannot update todo.', err)
    // });

    db.collection('Users').findOneAndUpdate({
        _id: ObjectID('59ff024547a7bd4540521968')
    }, {
        $inc: {
            age: -1
        },
        $set: {
            name: 'Danilo'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(`Unable to update user.`, err);
    });

    // db.close();
});