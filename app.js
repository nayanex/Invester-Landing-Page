var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('mongoose-type-email');
mongoose.connect('mongodb://localhost:27017/invester');

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
        console.log("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
        process.exit(1);
      });
  });

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );