const express = require("express");
const app = express(); 
const methodOverride = require("method-override")

//Controllers
const productCtrl = require("./controllers/productcontroller.js");

//Routes
app.use("/", productCtrl)


app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get('/*', function(request,response){
    response.send("Wrong way! 404ed!"); 
});

app.listen(4000, function(){
    console.log("I am live on port 4000");
});