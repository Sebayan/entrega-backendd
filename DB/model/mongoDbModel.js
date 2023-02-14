const mongoose = require('mongoose')
const { Schema, model } = mongoose


const productSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  title: { type: String, required: true },
  description: { type: String, required: true },
  code: { type: Number, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  thumbnail: { type: String, required: true }
})


const cartSchema = new Schema({
    timestamp: { type: Date, default: Date.now },
    products: { type: Array, required: true }
})


const chatSchema = new Schema({
  chatid: { type: String, required: true },
  chat: { type: Array, required: true } //[ {user: userSchema, message: messageSchema} ]
})



const productModel = model('Product', productSchema)
const cartModel = model('Cart', cartSchema)
const chatModel = model('Chat', chatSchema)



module.exports = { productModel, cartModel, chatModel }