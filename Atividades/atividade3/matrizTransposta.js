/*function transporMatriz(A) {
    console.log("Matriz original:");
    for (let i = 0; i < A.length; i++) {
        console.log(A[i]);
    }

    const transposta = [];
    for (let i = 0; i < A[0].length; i++) {
        transposta.push([]);
        for (let j = 0; j < A.length; j++) {
            transposta[i].push(A[j][i]);
        }
    }

    console.log("Matriz transposta:");
    for (let i = 0; i < transposta.length; i++) {
        console.log(transposta[i]);
    }
}

const minhaMatriz = [
    [1, 2],
    [3, 4],
    [5, 5]
];

transporMatriz(minhaMatriz);*/

 function transporMatriz(A){
    let matrizString = ' ';

    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A.length; j++){
            matrizString += A[i][j] + ' ';
        }
        matrizString += '\n';
    }
    console.log(matrizString);

    let matrizTranspostaString = '';
    for(let j = 0; j < A[0].length; j++){
        for(let i = 0; i < A.length; i++){
            matrizTranspostaString +=A[i][j] + ' ';
        }
        matrizTranspostaString += '\n';
    }
    console.log(matrizTranspostaString);
 

 const A = [
    [1, 45]
    [3, 54]
    [5, 67]
 ]
}
128000
151200
118800