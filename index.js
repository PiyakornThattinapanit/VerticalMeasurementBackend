const express = require('express');
const session = require('express-session');
const app = express();
// const test = require('./routes/user')

// app.use('/check',test);

app.use(
    session({
        secret: "key that will sign cookie", //string secret on browser
        resave: false,
        saveUninitialized: false, //why the browser not see cookie
    })
);

app.get("/", (req,res) => {
    req.session.isAuth = true;
    console.log(req.session);
    console.log(req.session.id);
    res.send("Hello Session yovyov");
})

app.listen(3001, () => {
    console.log("Server 3001")
})