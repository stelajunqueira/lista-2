function chefe(){
    //criar matriz 3x4 - 3 alunos 4 notas cada
    let matriz = [] //uma matriz é um vetor
    matriz [0] = [] //a posicao zero da matriz vai ser um vetor
    matriz [1] = []
    matriz [2] = [] //linha 3
    /* se fossem 30 alunos:
    for (let i=; i<30; i++){
        matriz[i] = []
    }
    */
    cadastra(matriz)
    calculamedia(matriz)
}

function cadastra(mat){ //quando alteramos mat, alteramos matriz
    for(let i=0; i<3 /*pq são 3 linhas*/; i++){ //são 3 alunos
        alert (`Informe 4 notas para o aluno ${i+1}`)
        for (let j=0; j<4; j++){ //são 4 notas
            mat[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        }
    }
}

function calculamedia(mat){
    // vamos usar um vetor auxiliar
    let vetor = [0,0,0] //quantidade de alunos (3)
    for (let i=0; i<2; i++){ //para cada aluno
        for (let j=0; j<4; j++){ //para cada nota
            vetor[i] = vetor[i] + mat[i][j] //observar a sintaxe
        }
        //quando acabarem as notas:
        vetor[i] = veotr[i] / 4
    }
    console.log (`As médias são ${vetor}`)

}