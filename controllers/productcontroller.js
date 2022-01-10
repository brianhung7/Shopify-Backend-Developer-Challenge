const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//index view route
router.get("/", async(req,res,next) => {
    try{
        const allProducts = await Product.find()
        context = {
            allProducts: allProducts
        }
        res.render('all', context)
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

router.post("/create", async(req, res, next) => {
    try {
        // console.log(req.body)
        const newProduct = await Product.create(req.body);
        // console.log(newProduct)
        return res.redirect(`/`);
    } catch (error) {
        const context = {
            error,
        };
        console.log(context)
        return res.render("create", context);
    }
})

module.exports = router;