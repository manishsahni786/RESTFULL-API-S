const express = require('express');
const app = express();
const port = 6000

app.use(express.json());
app.get('/',(req,res)=>{
    res.json('Hello Everone!')
})

app.get('/Home',(req,res)=>{
    res.json('This is home route.') 
})
app.get('/tshirt',(req,res)=>{
    res.status(200).json({
        't-shirt': '👕',
        'size': 'Medium'
    })``
})
app.post('/tshirt/:ID',(req,res)=>{
     const {ID}= req.params;
     const {logo}= req.body;

     if(!logo)
        res.status(418).send({message : "We need a logo for t-shirt !"})
     else 
     res.send({
    't-shirt': `👕 with your ${logo} and ID of ${ID}`,
    })
})

app.listen(port,(error)=>{
    if(!error)
        console.log(`Server is started on port ${port}`);
    else
        console.log("An error occured server can'nt start");
})