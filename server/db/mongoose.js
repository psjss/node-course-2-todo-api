var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://admin:admin@ds163745.mlab.com:63745/todoapp
};

mongoose.connect(db.localhost || db.mlab);

module.exports = {mongoose};
