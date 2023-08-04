import { Router } from 'express'
import cartModel from "../DAO/mongoManager/models/cartModel.js";

const router = Router()
//const cartManager = new CartManager()

router.get('/', async (req, res) => {
   // const result = await cartManager.list()
    //res.send(result)
    const carts = await cartModel.find().lean().exec()
    console.log(carts)
    res.render('cart', { carts }) 
})

router.post('/', async (req, res) => {
   try {

   
    const result = await cartModel.create({})
    console.log(result)
    res.send(result)
    }catch (err) {
        console.log(err)
        res.send(err)

    }   
}) 

export default router

/*router.get('/:idc/:idp', async (req, res) => {
    const idc = parseInt(req.params.idc)
    const idp = parseInt(req.params.idp)

    const result = await cartManager.addProduct(idc, idp)
    res.send(result)
}) 

router.get('/', async (req, res) => {
    const result = await CartModel.find()
    res.send(result)
})

// Add product to cart
router.get('/:idc/:idp', async (req, res) => {
    const idc = req.params.idc
    const idp = req.params.idp
    const quantity = req.query.quantity || 1

    const cart = await CartModel.findById(idc)
    cart.products.push({ id: idp, quantity })
    const result = cart.save()

    res.send(result)
})

router.post('/', async (req, res) => {
    const result = await CartModel.create({products: []})
    res.send(result)
})

*/

