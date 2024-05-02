const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();  
//===============================

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
//====================================


//routes
app.get('/', (req, res) => {
    res.send('va para dalloooooot jajajaj')
})

app.get ('/blog', (req, res) => {
    res.send('gaaarnaachoo!!!!');
})

app.get('/products', async (req, res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products)
    } 
    catch(error){
        res.status(500).json({message: error.message})
    }

})

app.get('/products/:id', async (req, res) => {
    try{
        const {id} = req.params
        const product = await Product.findById(id); 
        res.status(200).json(product)
    } catch(error){
        res.status(500).json({message: error.message})
    }
})
//====================================
//create
app.post('/products', async (req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
//===================================
//update
app.put('/products/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){ //si no podemos encontrar el producto en la db
            return res.status(404).json({message: 'Cannot find product with ID ${id}'})
        }
        const updatedProduct = await Product.findById(id); 
        res.status(200).json(updatedProduct)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//================================
//delete
app.delete('/products/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: 'Cannot find product with ID ${id}'})
        }
        res.status(200).json(product)

    } catch(error){
        res.status(500).json({message: error.message})
    }
})


//=============================
mongoose.set('strictQuery', false);
mongoose
.connect('mongodb://localhost:27017/')
.then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => console.log('Server started on port 3000'));
    
})
.catch(() => {
    console.log(error)
})