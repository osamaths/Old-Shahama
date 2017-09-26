const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./db/index');
// ************************

const port = process.env.PORT || 3000;
app.use (bodyParser.urlencoded());
app.use(express.static ( __dirname + '/'));
app.use(express.static ( __dirname + '/css'));

app.post('/addToWatchList', (req, res) => {
  console.log(JSON.stringify(req.body));
  var x = new db({
     title: req.body.title,
     imgURL: req.body.imgURL,
     desc: req.body.desc
  })
  x.save((err) => {
    if (err)
    console.log(err);
  })
})
app.get ('/', (req, res) => {
  fs.readFile ('html/index.html', (err, data) => {
    if (err) throw err;
    res.write (data);
    res.end();
  });
});

app.get ('/mywatchlist', (req, res) => {
  db.find({}, (err, data) => {
    if (err)
    console.log(err);
    else {
      res.send(data);
      res.end();
    }
  })
});

app.get ('/movies', (req, res) => {
  db.find({}, (err, data) => {
    if (err){
      console.log(err);
    }else{
      res.send(JSON.stringify(data));
    }
  })
})
app.listen ( port, () => {
  console.log('server listing on port ', port);
});
