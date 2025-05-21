const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

const route =require('./routes/route')

app.use('/api', route)

app.get('/', (req, res) => {
    console.log("Madhumita")
    console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})