// import libs
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport');
const session = require('express-session')
const cors = require('cors')
const User = require('./models/User')
// const test = require('./models/addListUser')
const LocalStrategy = require('passport-local').Strategy
require('./config/db')
const app = require('express')();
const port = 3001;
const bodyParser = require('express').json;
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')

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

// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin','*')
//     res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Tyoe,Accept');
//     next();
// })
app.use(cors(
    {origin: [
    'http://localhost:3000',
    ],
    credentials: true
}
))



// const UserRouter = require('./api/User');
const authRouter = require('./routes/authen');
const addListTester = require('./routes/addlistuser');

app.use(bodyParser());
app.use('/auth', authRouter)
app.use('/addlist',addListTester)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})
