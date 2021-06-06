const express = require('express');
const app = express();
const calculadoraIMC = require('./calculadoraIMC');
const port = 3000;



//routes

app.get('/', (req, res) =>{
    let  peso  = req.query.peso;
    let altura = req.query.altura;  

    let imc = calculadoraIMC.efetuaCalculoIMC(peso, altura);
    let status = calculadoraIMC.retornaStatusIMC(imc);

    let json = {imc: imc, status: status };

    res.json(json);

})




//Servidor
app.listen(port,() =>{
    const data =  Date();
    console.log(`servidor rodando na porta: ${port} em : ${data}`)
})