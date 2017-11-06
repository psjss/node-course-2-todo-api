//const MongoClient =  require('mongodb').MongoClient;
const {MongoClient, ObjectID} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');
db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a00b0cc590c6a9310b77163')
    }, {
          $set: {
              completed: true
          }
       },
    {
     returnOriginal: false
    }).then((result) => {
        console.log(result);
});


db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a00b4ceb949cf2264cbaa56")
}, {
    $set: {
        name: "Duke"
    },
    $inc: {
        age: 1
    }
}, {
    returnOriginal: false
    }).then((result) => {
    console.log(result);
});
   //db.close();
});