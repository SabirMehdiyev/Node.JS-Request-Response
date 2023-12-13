const express = require('express');
const fs = require('fs');
const app = express();

const userData = fs.readFileSync('./data.json');
const products  = JSON.parse(userData);

app.get('/products', (req, res) =>{
    res.send(products);
});

app.listen(3001 , ()=>{
    console.log("server işlədi");
})

app.get('/products/:id', (req,res)=>{
    const productID = req.params.id;
    const selectedProduct = products.find(product=>product.id == productID)
    if(selectedProduct){

        res.send(selectedProduct)
    }
    else{
        res.status(404).send('istifadeci yoxdur')
    }
})