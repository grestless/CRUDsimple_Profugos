const { text } = require('express');
const mongoose = require('mongoose'); //todo lo que interactue con la base de datos requiere "mongoose"

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Ingrese un nombre'], //es un array porque puede ser true o false, ((validacion))
        },
        quantity: {
            type: Number,
            required : true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            
        },
        image: {
            type: String,
            required: false,
        }


    },
    {
        timestamps: true,
    }
);


const Product = mongoose.model('Product', productSchema);

module.exports= Product;

