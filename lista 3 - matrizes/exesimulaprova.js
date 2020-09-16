/*Cadastro de uma matriz que tem 4 times de basquete e existem 3  
campeonatos que o time esta participando:
- nome do time de basquete
- quantidade de pontos que o time fez no jogo 0,1,2
- cidade do time
- media de pontos que o time fez, inicializa com zero
- time que mais fez pontos em cada jogo */


function chefe(){
    let matriz = [] //pontos do time em cada jogo
    let vetor = [] //times
    cadastra(matriz, vetor)
    calculaMediadePontos(matriz,vetor)
    calculaTimemaisPontosRodade(matriz,vetor)
}

function cadastra(mat,vet){
    for (let i=0; i<4; i++){ //pra cada time
        let objeto = new Object()
        objeto.nome = prompt(`Informe nome`)
        objeto.cidade = prompt(`Informe a cidade`)
        objeto.media = 0
        //insere o time no vetor:
        vet.push(objeto)
        //insere os pontos:
        mat[i] = [] //cria o vetor dentro da matriz
        for (let j=0; j<3; j++){
            mat[i][j] = Number(prompt(`Quantidade de pontos no jogo ${j+1}`))
            //coloca j+1 pq se não ia aparecer primeiro no jogo 0,1,2, ai com o 
            // +1 vai aparecer jogo 1,2,3
        }
    }
}

function calculaMediadePontos(mat,vet){
    for(let i=0; i<4; i++){ //para cada time
        for (let j=0; j<3; j++){ //para cada partida
            vet[i].media = vet[i].media + mat[i][j]
        }
        //terminamos de somar
        vet[i].media = vet[i].media / 3
    }
    console.log(vet)
}

function calculaTimemaisPontosRodade(mat,vet){
    for(let j=0; j<3; j++){
        maispontos = mat[0][j] //primeirotime fez mais pontos
        nomeMaispontos = vet[o].nome //nome do primeiro time fez mais pontos
        for (let i=0; i<4; i++){
            if(mat[i][j] > maispontos){
                maispontos = mat[i][j] //atualiza maior pontos
                nomeMaispontos = vet[i].nome //atualiza o nome que tem mais pontos
            }
        }
        //verificou-se a rodada
        console.log(`Na rodade ${j+1} o time ${nomeMaispontos} fez ${maispontos}`)
    }
}