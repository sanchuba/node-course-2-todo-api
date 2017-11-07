const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://danilo:Rick1989@ds151355.mlab.com:51355/todo-app-api' || 'mongodb://localhost:27017/TodoApp', {useMongoClient: true});

module.exports = {mongoose};