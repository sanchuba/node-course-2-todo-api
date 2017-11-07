const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5a00736a5f2d3b477c28305c';

if (!ObjectID.isValid(id)) {
    return console.log('Not a valid ID.', id);
}

Todo.find({
    _id: id
}).then((todos) => {
    if(todos.length > 0) {
        console.log('Todos', todos);
    } else return console.log('Id not found.');
});

Todo.findOne({
    _id: id
}).then((todo) => {
    if(!todo) {
        return console.log('Id not found.');
    }
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found.');
    }
    console.log('Todo by Id', todo);
}).catch((e) => console.log('Unable to get todo', e));