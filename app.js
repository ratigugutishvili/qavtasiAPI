const express = require('express')
const cors = require("cors");
const Sales = require('./modules/sales');
app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;


// const corsOptions = {
//     origin: '*',
//     methods: 'GET, POST, PUT, DELETE',
//     // allowedHeaders: 'Content-Type',
// };


// app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./db');
app.get('/sales', async (req,res)=>{
    const sales = await Sales.find()
    // console.log(sales);
    res.status(200)
    res.json({sales:sales})
})



app.post('/newsale',(req,res)=>{
    const { name ,city, mobile ,email,value,adress } = req.body
    
    const newsale = new Sales
    newsale.name = name
    newsale.city = city
    newsale.mobile = mobile
    newsale.adress = adress
    newsale.email = email
    newsale.value = value

    newsale.save()

    res.json({true:'okj'})
    res.status(200)
})

app.get('/',(req,res)=>{
    res.status(200)
    res.json({message:'ok'})
})

app.delete('/delete/:expenseId', async (req,res)=>{
    const salename = req.params.expenseId
    const deleted = await Sales.deleteOne({name:salename})
    console.log(deleted);
    console.log(salename);
    res.json({id: salename})
    res.status(200)
})


app.listen(port,()=>{
    console.log('runningg'+ port);
})