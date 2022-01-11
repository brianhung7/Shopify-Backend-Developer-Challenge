const express = require("express");
const app = express(); 
const methodOverride = require("method-override")

const multer = require('multer')
const upload = multer({dest: 'uploads/'})

//Controllers
const productCtrl = require("./controllers/productcontroller.js");

//Body Parser Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(upload.single('image'))
app.use('/uploads', express.static('uploads'));

//Routes
app.use("/", productCtrl)


app.set("view engine", "ejs");


app.get('/*', function(request,response){
    response.send("Wrong way! 404ed!"); 
});

app.listen(process.env.PORT || 4000, function(){
    console.log("I am live on port 4000");
});