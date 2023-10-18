const express = require('express')

const app = express();
const test = require('./routes/user')

app.use('/check',test);

app.listen(3001, () => {
    console.log("Server 3001")
})