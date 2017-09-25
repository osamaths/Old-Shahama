const express = require('express');
const app = express();
const fs = require('fs');
// ************************
const port = process.env.PORT || 3000;
app.use(express.static ( __dirname + '/'));
app.use(express.static ( __dirname + '/src/css'));
app.get ('/', (req, res) => {
  fs.readFile ('src/html/index.html', (err, data) => {
    if (err) throw err;
    res.write (data);
    res.end();
  });
});

app.listen ( port, () => {
  console.log('server listing on port ', port);
});
