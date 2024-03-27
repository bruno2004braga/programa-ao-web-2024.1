function transporMatriz(A) {
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

transporMatriz(minhaMatriz);
