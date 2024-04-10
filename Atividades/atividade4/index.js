<<<<<<< HEAD
const express  = require('express');
const calc     = require('./util/calculadora');
const app      = express();

app.get('/', function (req, res) {
=======
const express = require('express');
const calc = require('./util/calculadora.js')
const app = express();

app.get('/', function (req, res){
>>>>>>> e7195d6f90427b3872f1069613d0d9b826588434
    res.send('Calculadora - página inicial');
});

app.get('/somar/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let c = calc.somar(a, b);
    res.send(""+c);
});

<<<<<<< HEAD
app.get('/subtrair/:a/:b', function (req, res) {
=======
app.get('/substrair/:a/:b', function (req, res) {
>>>>>>> e7195d6f90427b3872f1069613d0d9b826588434
    let a = req.params.a
    let b = req.params.b
    let c = calc.subtrair(a, b);
    res.send(""+c);
<<<<<<< HEAD
});
=======
})
>>>>>>> e7195d6f90427b3872f1069613d0d9b826588434

app.get('/multiplicar/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let c = calc.multiplicar(a, b);
    res.send(""+c);
});

app.get('/dividir/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let c = calc.dividir(a, b);
    res.send(""+c);
});

const PORT = 8080;
<<<<<<< HEAD
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});

=======
app.listen(PORT, function() {
    console.log('app rodando na porta ' + PORT);
})
>>>>>>> e7195d6f90427b3872f1069613d0d9b826588434
