const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//index view route
router.get("/", async(req,res,next) => {
    try{
        res.send("Product route")
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

//create product get route
router.get("/create", (req,res) => {
    return res.render("create")
})
module.exports = router;