import mongoose from "mongoose";

const cartCollection = "cart";

const cartSchema = new mongoose.Schema({
  products: [{ id: Number, quantity: Number }],
});

const cartModel = mongoose.model(cartCollection, cartSchema);

export default cartModel;
