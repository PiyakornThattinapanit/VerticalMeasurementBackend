const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3001;
const app = express();
app.use(cors(port));
app.use(bodyParser.json({ type: 'application/json'}));

var led = true;

app.post('/api',(req,res) => {
    consolr.log(led);
    console.log('in');
    res.set('Content-Type','text/plain');
    res.send({value :!led});
})
app.post('/',(req,res) => {
    consolr.log(led);
    console.log('in');
    res.set('Content-Type','text/plain');
    res.send({value :!led});
})
app.get('/api',(req,res) => {
    console.log("//Get api...");
        res.set('Content-Type','text/plain');
        if (led) {
            res.send({value : 1});
        }
        else {
            res.send({value : 0});
        }
        console.log(led);
})
app.listen(port,'0.0.0.0' | 'localhost', function() {
    console.log("Server running on localhost port : " + port);
})