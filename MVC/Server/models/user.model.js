const { text } = require('express');
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    user_name: {
        type:String,
        required: true
    },

    email: {
        type:String,
        required: true
    },

    password: {
        type:text,
        required: true
    },
    product_price: {
        type:Number,
        required:true
    },

    isInStock : {
        type: Boolean,
        required:true
    }
})

const UserModel = mongoose.model('products', ProductSchema)

module.exports = UserModel