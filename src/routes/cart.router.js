import { Router } from 'express'
import cartModel from "../DAO/mongoManager/models/cartModel.js";

const router = Router()
//const cartManager = new CartManager()

/*router.get('/', async (req, res) => {
   // const result = await cartManager.list()
    //res.send(result)
    const carts = await cartModel.find().lean().exec()
    console.log(carts)
    res.render('cart', { carts }) 
}) */

router.get('/', async (req, res) => {
    // const result = await cartManager.list()
     //res.send(result)
     const carts = await cartModel.find().lean().exec()
     console.log(carts)
     res.send(carts) 
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

router.post('/:cid/products/:pid', async (req, res) => {
  
        const pid = req.params.pid
        const cid = req.params.cid 
    
        try{
            const resultDelCarrito = await cartModel.find({ _id: cid }).exec();
            console.log(resultDelCarrito)
            resultDelCarrito[0].products.push(pid)
            const result = await cartModel.findByIdAndUpdate (cid, {products: resultDelCarrito[0].products}) 
            
            console.log(result)
            res.send(result)
         }catch (err) {
             console.log(err)
             res.send(err)
 
     }   
 }) 


router.delete('/:cid/products/:pid', async (req, res) => {
    const pid = req.params.pid
    const cid = req.params.cid 
     
    try{
        /*const resultDelCarrito = await cartModel.find({ _id: cid }).exec();
        //resultDelCarrito = await cartModel.find({ id: resultDelCarrito._id }).exec();
        
        //await cartModel.deleteOne({ cid: pid })

        console.log (resultDelCarrito)*/

        let result = await cartModel.deleteProductById(cid, pd)
        if (result.modifiedCount === 0) return res.send("Producto no encontrado")

        //res.send({ status: "sucess", payload: result })
    } catch (err) {
        res.send({ status: "failed", error: err })
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

