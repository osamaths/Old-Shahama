var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/myapp');
var db = mongoose.connection;

db.once('open', () => {
  console.log('db is connected!');
}).on ('error', (err) => {
  console.log('connection error');
})

var movieSchema = new Schema({
  title: String,
  imgURL: String,
  desc: String
});

var Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;
