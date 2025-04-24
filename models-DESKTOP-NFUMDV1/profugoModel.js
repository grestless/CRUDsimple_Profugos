const { text } = require('express');
const mongoose = require('mongoose'); //todo lo que interactue con la base de datos requiere "mongoose"

const profugoSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true, 'Ingrese el nombre del profugo'], //es un array porque puede ser true o false, ((validacion))
        },
        recompensa: {
            type: Number,
            required : true,
            default: 0
        },
        dni: {
            type: Number,
            required: true,
            
        },
        ultimaUbic:{
            type: String,
            required: true
        },
        delito:{
            type: String,
            required: true
        },
        img: {
            type: String,
            required: false
        }



    },
    {
        timestamps: true,
    }
);


const Profugo = mongoose.model('Profugos', profugoSchema);

module.exports= Profugo;

