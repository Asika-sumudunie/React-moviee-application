const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


var readJSON  = require('./movies.json');

app.get('/movies',(req,res)=>{
    res.writeHead(200, {"Content-Type": "text/json"});
    const JSONobj = JSON.stringify(readJSON);


    console.log(JSONobj);
    res.end(JSON.stringify(readJSON));
})

app.listen(3001,()=>{

    console.log("Listing post 3001");
})