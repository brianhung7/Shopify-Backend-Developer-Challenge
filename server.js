const express = require("express");
const app = express(); 


app.get('/', function(request,response){
    response.send("Hello World"); 
});

app.listen(4000, function(){
    console.log("I am live on port 4000");
  });