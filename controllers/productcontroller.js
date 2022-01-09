const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


router.get("/", async(req,res,next) => {
    try{
        res.send("Product route")
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

module.exports = router;