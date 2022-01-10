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


//single product GET route
router.get("/product/:id", async(req, res, next) => {
    try {
        const product = await Product.findById(req.params.id)
        const context = {
            product: product,
        }
        return res.render("product", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

//product edit route
router.get("/product/:id/edit", async(req, res, next) => {
    try {
        const product = await Product.findById(req.params.id)
        const context = {
            product: product,
        }
        return res.render("edit", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

//product PUT (edit) route
router.put("/product/:id", (req,res,next) => {
    Product.findByIdAndUpdate(
        req.params.id, 
        {
            $set: req.body,
        },
        {
            new:true,
        },
        (error, updatedProduct) => {
            if(error) {
                console.log(error);
                req.error = error;
                return next();
            }
            return res.redirect(`/product/${updatedProduct.id}`)
        }
    )
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