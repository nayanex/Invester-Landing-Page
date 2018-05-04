var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('mongoose-type-email');
mongoose.connect('mongodb://heroku_zg1dkqqt:vvm3t52m8rgkt9aa4d13fqa5qf@ds113620-a0.mlab.com:13620,ds113620-a1.mlab.com:13620/heroku_zg1dkqqt?replicaSet=rs-ds113620');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./'));

var userSchema = new mongoose.Schema({
    email: {type: mongoose.SchemaTypes.Email, required: true},
    name: String
});

var User = mongoose.model('User', userSchema);

app.post("/new-user", (req, res) => {
    var myData = new User(req.body);
    myData.save()
      .then(item => {
        //res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });

app.get('/view-users',  function(req, res) {
    dbConn.then(function(db) {
        db.collection('users').find({}).toArray().then(function(feedbacks) {
            res.status(200).json(feedbacks);
        });
    });
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );