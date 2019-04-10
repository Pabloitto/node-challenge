const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to the challenge')
})

app.listen(8089, function () {
  console.log('Server is running on 8089!')
})
