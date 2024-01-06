const express = require('express')
const cors = require("cors");
const Sales = require('./modules/sales');
app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080


app.use(cors(corsOpt));
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
require('./db')

app.get('/sales', async (req,res)=>{
    const sales = await Sales.find()
    // console.log(sales);
    res.status(200)
    res.json({sales:sales})
})

app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:3000', 'https://qavtasi.ge'];
    const origin = req.headers.origin;
  
    if (allowedOrigins.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
    }
  
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

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