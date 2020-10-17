let mongoDB = 'mongodb+srv://main:aI1LqxdtX01o3AHV@cluster0.heozr.mongodb.net/Cluster0?retryWrites=true&w=majority';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());
// Include controller of the entity
app.use(require('./routes/users'));


const mongoose = require('mongoose');
const run = async() =>{
    await mongoose.connect(mongoDB,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    });
};

run().catch(error => console.error(error));

app.listen(PORT, () =>{
        console.log('Servidor lanzado en puerto', PORT);
})


