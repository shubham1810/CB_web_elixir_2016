var mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/class_19'

MongoClient.connect(url, function (err, db) {
    if (err !== null) {
        throw err;
    }
    console.log("Connected correctly to the server");

    db.close();
});
