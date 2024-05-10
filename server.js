const express = require('express');
const mongoose = require('mongoose');
const Profugos= require('./models/profugoModel');
const app = express();  
//===============================

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
//====================================


//routes
app.get('/', (req, res) => {
    res.send('probando probando')
})

app.get ('/blog', (req, res) => {
    res.send('123 123 123!!!!');

})
//================================
//read
app.get('/profugos', async (req, res) => {
    try{
        const profugo = await Profugos.find();
        res.status(200).json(profugo)
    } 
    catch(error){
        res.status(500).json({message: error.message})
    }

})

app.get('/profugos/:id', async (req, res) => {
    try{
        const {id} = req.params
        const profugo = await Profugos.findById(id); 
        res.status(200).json(profugo)
    } catch(error){
        res.status(500).json({message: error.message})
    }
})
//====================================
//create
app.post('/profugos', async (req, res) => {
    try{
        const profugo = await Profugos.create(req.body)
        res.status(200).json(profugo)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
//===================================
//update
app.put('/profugos/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const profugo = await Profugos.findByIdAndUpdate(id, req.body);
        if(!profugo){ //si no podemos encontrar el profugo en la db
            return res.status(404).json({message: 'No se encontro el profugo con el ID ${id}'})
        }
        const updatedProfugo = await Profugos.findById(id); 
        res.status(200).json(updatedProfugo)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//================================
//delete
app.delete('/profugos/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const profugo = await Profugos.findByIdAndDelete(id);
        if(!profugo){
            return res.status(404).json({message: 'No se encontro el profugo con el ID ${id}'})
        }
        res.status(200).json(profugo)

    } catch(error){
        res.status(500).json({message: error.message})
    }
})


//=============================
mongoose.set('strictQuery', false);
mongoose
.connect('mongodb://localhost:27017/')
.then(() => {
    console.log('MongoDB conectado');
    app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));
    
})
.catch(() => {
    console.log(error)
})