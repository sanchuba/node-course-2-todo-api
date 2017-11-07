const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({
//     completed: true
// }).then((todo) => {
//     console.log(todo);
// }, (e) => {
//     console.log('Cannot remove todo.')
// });

// Todo.findByIdAndRemove('5a017791ec312b2af47e545a').then((todo) => {
//     console.log(todo);
// }, (e) => {
//     console.log('Cannot remove todo.')
// });