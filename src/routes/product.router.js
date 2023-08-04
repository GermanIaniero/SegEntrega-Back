import { Router } from "express";

import ProductDbManager from "../DAO/FileManager/productDb.manager.js"

const productDbManager = new ProductDbManager();
const router = Router()


// Listar pokemons
router.get('/', async (req, res) => {
    try {
        const products = await productDbManager.getProducts();
        res.send(products)
        /* .lean().exec() para que handlebars reconozca el modelo
            const pokemons = await pokeModel.find().lean().exec()
            
            res.render('list', { pokemons })  */
    } catch (err) {
        console.log(err)
    }
})

router.post('/create', async (req, res) => {
    try {
        const productNew = await productDbManager.setProduct(req.body); 
        
        console.log({ productNew })

        res.send("Product Created successfully")

        //pokeModel.insertMany()

       // console.log({ productGenerated });

        //res.redirect('/pokemon/' + pokemonGenerated.name)
    } catch(err) {
      console.log(err)
      res.send()
    }
})


// Pagina para crear pokemons (render HTML)\
router.get('/create', async (req, res) => {
    res.render('create', {})
})

// Crear Pokemon POST 


// Borrar pokemon
router.get('/delete/:id', async (req, res) => {
    const id = req.params.id

    await pokeModel.deleteOne({ _id: id })
    res.redirect('/pokemon')
})

// Obtener un pokemon (name)
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const pokemon = await pokeModel.findById(id)

    res.render('one', pokemon)
})



export default router