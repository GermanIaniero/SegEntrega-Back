import carDetailModel from "./DAO/mongoManager/models/cartDetailModel.js";
import productModel from "./DAO/mongoManager/models/productModel";
import mongoose from "mongoose";

const uri = "mongodb+srv://gerlian:1234@clusterger.mgws5uk.mongodb.net/"

mongoose.connect(uri, { dbName: 'eccommerce' })
    .then(async () => {
        console.log('DB connected')

        // Crear un documento en cada coleccion
        // =====================================================
        // await studentModel.create({
        //     name: 'Eri',
        // })

        // await courseModel.create({
        //     title: 'Defensa Contra las Artes Oscuras',
        //     description: 'Saber defenderse de ataques oscuros',
        //     difficulty: 5,
        //     topics: ['Spectro Patronus', 'Expeliermus'],
        //     professor: "Lupin"
        // })


        // Agregamos un curso al estudiante
        // =====================================================
        // const student = await studentModel.findOne({_id: '64c5336428d287744bb7852f'})
        // student.courses.push({course: "64c5336528d287744bb78531"})
        // const result = await studentModel.updateOne({_id: '64c5336428d287744bb7852f'}, student)
        // console.log(result)

        // Hacemos la busqueda
        // =====================================================
        const carDetailModel = await carDetailModel.find({_id: '64c5336428d287744bb7852f'})

        console.log(JSON.stringify(student, null, '\t'))

    })