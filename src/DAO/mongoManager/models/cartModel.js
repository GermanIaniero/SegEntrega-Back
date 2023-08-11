//import mongoose from "mongoose";

//const cartCollection = "cart";

const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = Schema({
  _id: Schema.Types.ObjectId,
  quantity: Number,
  products: [{ type: Schema.Types.ObjectId, ref: 'products' }]
});



/* 
const cartSchema = new mongoose.Schema({
  products: [{ id: Number, quantity: Number }],

  debe ser object id con referencia a producto  
}); */

const cartModel = mongoose.model(cartCollection, cartSchema);

export default cartModel;
