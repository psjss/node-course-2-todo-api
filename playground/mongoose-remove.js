const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((results) => {
//    console.log(results);
// });


Todo.findOneAndRemove

Todo.findByIdAndRemove('5a108b31227ab1b82ca4a645').then((todo) => {
    console.log(todo);
});


