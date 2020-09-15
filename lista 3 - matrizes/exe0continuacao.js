
/*EXE: criar um programa que:
- cadastre as notas e solicita o nome do aluno
- mostrar a maior nota em cada prova e quem tirou essa nora
- mostrar a menor nota de cada aluno
- */

function chefe(){
    //criar matriz 3x4 - 3 alunos 4 notas cada
    let matriz = [] //uma matriz é um vetor
    let vetor= [] //vetor de alunos
    cadastra(matriz, vetor) //passamos a matriz de notas e o vetor de alunos
    calculamedia(matriz,vetor)
    calculaMaiornotaporprova(matriz,vetor)
    calculaMenornotadeumaluno(matriz, vetor) 
}

function cadastra(mat, vet){ //quando alteramos mat, alteramos matriz
    for(let i=0; i<3 /*pq são 3 linhas*/; i++){ //são 3 alunos
        //informar as notas do aluno
        let obj = new Object()
        obj.nome = prompt(`Informe o nome do aluno`)
        obj.codigo = Number(prompt(`Informe o código do aluno`))
        obj.media = 0 //vai inicializar a media com zero
        //insere aluno no vetor
        vet.push(obj) 
        alert (`Informe 4 notas para o aluno ${i+1}`)
        //criamos um vetor dentro da matriz:
        mat[i] = []
        for (let j=0; j<4; j++){ //são 4 notas
            mat[i][j] = Number(prompt(`Informe a nota ${j+1}`))
        }
    }
}

function calculamedia(mat,vet){
    for (let i=0; i<3; i++){ //para cada aluno
        for (let j=0; j<4; j++){ //para cada nota
            vet[i].media = vet[i].media + mat[i][j] //observar a sintaxe
        }
        //quando acabarem as notas:
        vet[i].media = vet[i].media / 4
    }
    console.log (vet)

}

function calculaMaiornotaporprova(mat,vet){
    for(let j=0; j<4; j++){ //pra cada prova
        let maiornota = mat[0][j] //assume que o primeiro aluno tem a maior nota
        let nomemaior = vet[0].nome //assume que o primeiro aluno tem a maior nota
        for (let i=0; i<3; i++){
            if (mat[i][j]> maiornota){
                maiornota = mat[i][j] // atualiza a nota maior
                nomemaior = vet[i].nome //pq o "i" que sao os alunos
            }
        }
        console.log(`Aluno com maior nota na prova ${j} foi ${nomemaior} com noma ${maiornota}`)
    }
}

function calculaMenornotadeumaluno(mat,vet){
    for (let i=0; i<3; i++){ //para cada aluno
        let menornota = mat[i][0] //menor nota é a primeira
        for (let j=0; j<4; j++){ //para cada nota
            if (mat[i][j] < menornota){
                menornota = mat[i][j]
            }
        }
        //quando acabarem as notas:  
        console.log (`O aluno ${vet[i].nome} tem menor nota ${menornota}`)
    }

}