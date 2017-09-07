const express = require('express');
const app = express();
var path = require("path");

app.use('/assets/style', express.static(path.join(__dirname, 'assets/style')));
app.use('/assets/images', express.static(path.join(__dirname, 'assets/images')));
app.use('/assets/js', express.static(path.join(__dirname, 'assets/js')));
app.use('/assets/fonts', express.static(path.join(__dirname, 'assets/fonts')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html" ));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});