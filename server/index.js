const express = require('express');

const app = express();
port = 5000;

app.use("/api/hello", function(req, res){
    res.send({express: 'Hello From Express'})
})

app.listen(port, ()=> console.log(`Listening on port ${port}`));
