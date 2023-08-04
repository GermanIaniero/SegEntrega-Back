import cartModel from "../mongoManager/models/cartModel.js";


export default class CartDbManager{
    constructor() {
        /*getById = async (id) => {   
        }   
    */
    }
    getCart = async () => {
        return await cartModel.find();  
    }

    setCart = async (cart) => {
        return await cartModel.create(cart);
    }
    getCartbyId = async (cart) => {
        carrito =  cartModel.find({id})
        return await carrito
    }
    updateCart = async (id,product) => {
        return await cartModel.updateOne({_id:id},product);
    }

}