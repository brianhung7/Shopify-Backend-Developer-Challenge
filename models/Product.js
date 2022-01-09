require("../config/db.connection");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please Provide a Title."],
        },
        image: {
            type: String,
            require: true,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
            min: 0,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);
productSchema.index({'$**': 'text'});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;