// import libs
require('./config/db')
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport');
const session = require("express-session");
const LocalStrategy = require('passport-local').Strategy
const cors = require('cors')
const app = express();
const port = 3001;
const bodyParser = require('express').json;

const User = require('./models/User')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')

const authRouter = require('./routes/authen');
const addListTester = require('./routes/addlistuser');
const testerInfo = require('./routes/testerInfo-route');

const sessionConfig = {
    name: 'session-id',
    secret: 'cattishly-hunter-exorcist-vanquish',
    saveUninitialized: false,
    resave: false,
    cookie: { 
        httpOnly: false,
    }
}
app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.json())
app.use(cors(
    {origin: [
    'http://localhost:3000',
    ],
    credentials: true
}
))


app.use(bodyParser());
app.get("/", (req,res) => {
    req.session.isAuth = true;
    console.log(req.session);
    console.log(req.session.id);
    res.send("Hello Session yovyov");
})
app.use('/testerinfo',testerInfo)
app.use('/auth', authRouter)
app.use('/addlist',addListTester)


app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
// app.listen(port, () => {
//     console.log(`server running on port ${port}`);
// })
app.listen(port,'0.0.0.0' | 'localhost', function() {
    console.log("Server running on localhost port : " + port);
})