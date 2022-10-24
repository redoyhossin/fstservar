const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const Port = process.env.Port || 5000;
const productcollection = require('./Data/Product.json');

app.get('/', (req, res) => {
    res.send('now servar running');
});

app.get('/allproduct', (req, res) => {
    res.send(productcollection)
})

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const singleitem = productcollection?.find((p) => p.id == id);
    if (!singleitem) {
        res.send('no data found');
    }
    res.send(singleitem)
})
app.listen(Port, () => {
    console.log('runnin servar') 
});

module.exports = app;


