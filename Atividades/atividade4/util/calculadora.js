/**
 * Soma dois números inteiros
<<<<<<< HEAD
 * @param  {Number} a
 * @param  {Number} b
 * @return {Number}   a soma entre a e b
 */
function somar(a, b) {
    return Number(a) + Number(b);
}

function subtrair(a, b) {
    return Number(a) - Number(b);
}

function multiplicar(a, b) {
    return Number(a) * Number(b);
}

function dividir(a, b) {
=======
 * @param {Number} a
 * @param {Number} b
 * @return {Number}   a soma entre a e b
 */

function somar(a, b){
    return Number(a) + Number(b);
}

function subtrair(a, b){
    return Number(a) - Number(b);
}

function multiplicar(a, b){
    return Number(a) * Number(b);
}

function dividir(a, b){
>>>>>>> e7195d6f90427b3872f1069613d0d9b826588434
    return Number(a) / Number(b);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};