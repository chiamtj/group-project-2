require('dotenv').config()
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Movie Tracker')
})
 
app.listen(process.env.PORT, ()=> {
  console.log ('Listening on port 3000 ...');
});