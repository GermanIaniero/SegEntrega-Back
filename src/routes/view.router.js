import { Router } from "express";
//import ProductManager from '../manager/product.manager.js'
import productModel from "../DAO/mongoManager/models/productModel.js";
import chatModel from "../DAO/mongoManager/models/modelMessage.js"

const router = Router()
//const productManager = new ProductManager()

router.get('/', async (req, res) => {

    const page = parseInt(req.query?.page || 1)
    const limit = parseInt(req.query?.limit || 10)

    const queryParams = req.query?.query || '' //query=price,5
    const query = {}

    if(queryParams) {
        const field = queryParams.split(',')[0]
        let value = queryParams.split(',')[1]

        if(!isNaN(parseInt(value))) value = parseInt(value)

        query[field] = value
    }
    //*************************************** */

    const sortOrder = req.query?.sort
    console.log("aca el sort")
    

    const result = await productModel.paginate(query, {
        page,
        sort: { 'price': sortOrder === 'desc' ? -1 : 1 }, 
        limit,
        lean: true // Pasar a formato JSON
    })

    result.prevLink = result.hasPrevPage ? `/?page=${result.prevPage}&limit=${limit}` : ''
    result.nextLink = result.hasNextPage ? `/?page=${result.nextPage}&limit=${limit}` : ''

    console.log(result)
    const objetoPedido = { status: "success" , 
    payload: result.docs, 
    totalPages:result.totalPages,
    prevPage:result.prevPage,
    nextPage:result.nextPage,
    page:result.page,
    hasPrevPage:result.hasPrevPage,
    hasNextPage:result.hasNextPage,
    prevLink:result.prevLink,
    nextLink:result.nextLink,
    } 
    res.render('home', result)
    //const products = await productModel.find().lean().exec()
    //res.render('home', { products })    
})

router.get('/realTimeProducts', async (req, res) => {
    const products = await productModel.find().lean().exec()
    res.render('realTimeProducts', { products })
})

router.get('/form-products', async (req, res) => {
    res.render('form', {})
})

router.get('/chat', async (req, res) => {
    //res.render('chat', {}) // 

    const chat = await chatModel.find().lean().exec()
    res.render('chat', { chat })
})

router.post('/form-products', async (req, res) => {
    const data = req.body
    const result = await productModel.create(data)

    res.redirect('/')
}) 

router.post('/chat', async (req, res) => {
    const data = req.body
    const result = await chatModel.create(data)
    res.send(result)
}) 

export default router