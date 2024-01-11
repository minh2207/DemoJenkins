const express = require('express');
const app = express();
const port = 3030;

app.get('/', function(req, res){
    res.send("This is old version");
})

app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong");
    }
    console.log("server is running port:  " + port);
})
