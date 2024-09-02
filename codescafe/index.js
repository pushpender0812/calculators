const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook',(req,res) => {
    res.send('drishti yadav')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})