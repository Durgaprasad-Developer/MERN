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
        type:String,
        required: true
    },
    phone: {
        type:Number
    }
})

const UserModel = mongoose.model('users', ProductSchema)

module.exports = UserModel