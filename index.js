const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const loggingMiddleware = function (req, res, next){
    console.log('LOGING')
    next ();
}

app.use(loggingMiddleware);

const authMiddleware = function (req, res, next) {
    console.log ('Authentication')
    next();
};

app.use(authMiddleware);

const validationMiddleware = function (req, res, next){
    console.log('Validation')
    next ();
}
app.use(validationMiddleware);

app.get('/', (req, res) => {
    console.log("Madhumita")
    console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})