const { text } = require('express');
const mongoose = require('mongoose'); //todo lo que interactue con la base de datos requiere "mongoose"

const productSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true, 'Ingrese un nombre'], //es un array porque puede ser true o false, ((validacion))
        },
        cantidad: {
            type: Number,
            required : true,
            default: 0
        },
        precio: {
            type: Number,
            required: true,
            
        },
        categoria: {
            type: String,
        
        }


    },
    {
        timestamps: true,
    }
);


const Product = mongoose.model('Product', productSchema);

module.exports= Product;

