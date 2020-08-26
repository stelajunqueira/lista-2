
/* 1- receba um número inteiro e positivo, e retorne a soma dos números 
inteiros que existem entre 1 e esse número */
/* se n for 3: 1+2+2 = 6 */
function chefe(){
    var numero = Number(prompt("Informe um número")) // ele pega o que o cliente precisa
    var result = exe1(numero) //ta chamando a função do exe1
    console.log(`A soma dos números é ${result}`)
}
function exe1(n){
    var soma = 0
    for (var i=1; i<=n; i++){
        soma = soma + i
    }
    return soma
}




/* 2- recebe três números (horas, minutos e segundos), e converte para segundos */
function principal(){
    var hora = Number(prompt("Informe a hora"))
    var minuto = Number(prompt("Informe os minutos"))
    var segundo = Number(prompt("Informe os segundos"))
    var converte = segundos(hora, minuto, segundo)
    console.log (`Convertendo para segundos: ${converte}`)
}
function segundos(h,m,s){ 
    return (h*3600) + (m*60) + s
}


/* 3- receber duas cadeias de caracteres como parâmetros e retorne 0 se forem iguais,
se não, retornar o índice do primeiro caracter não coincidente*/
function exe3(cadeia1, cadeia2){
    // vão ter duas cadeias de caracteres passadas como parâmetros
    if (cadeia1 == cadeia2){
        return 0 // as duas cadeias são iguais
    }
    else{
        //percorre a cadeia1 e compara posição por posição com cadei2
        if(cadeia2.length > cadeia2.length){ //se a segunda palavra for maior que a primeira
            return cadeia1.length
        }
        else{
            for(var i=0; i<cadeia1.length; i++){
                if(cadeia1[i] != cadeia2[i]){ //é diferente
                    return i+1 //retorna a posição e sai da função
                    /*coloca i+1 pq comea na posição zero, ai mostraria a posição 
                    anterior pro usuário, pq ele não sabe que inicia no zero*/
                    // se ele sai da função é porque ele achoou uma posição que é diferente
            
                }    
            }   
        }
    }
}
function chefe(){
    var cad1 = prompt(`Informe a cadeia 1`)
    var cad2 = prompt(`Informe a cadeia 2`)
    var resultado = exe3(cad1, cad2)
    console.log(`O resultado é ${resultado}`)
}



/* 4- receber o raio de uma esfera, calcular e mostrar seu volume v=4/3*R^3 */
function principal(){
    var raio = Number(prompt("Informe o raio da esfera"))
    var volume = esfera(raio)
    console.log (`Volume da esfera: ${volume}`)
}
function esfera(r){ 
    return 4/3 * r**3
}


/* 5- receber um valor inteiro e verificar se é positivo ou negativo */
function principal(){
    var valor = Number(prompt("Informe o valor inteiro"))
    var resposta = posOUneg(valor)
    console.log (`O valor inserido é: ${resposta}`)
}
function posOUneg(v){ 
    if (v < 0){
        return `negativo`
    }
    else if (v >= 0) {
        return `positivo`
    }
}



/* 6- receber altura e sexo da pessoa, e retornar seu peso ideal 
peso homens: 72.7*alt-58
mulheres: 62.1*alt-44.7 */
function principal(){
    var altura = Number(prompt("Informe a altura da pessoa"))
    var sexo = prompt("Informe o sexo da pessoa (F/M)")
    var pesoideal = calcula(altura, sexo)
    console.log (`Peso ideal: ${pesoideal}`)
}
function calcula(a, s){ 
    if (s == 'F'){
        return 62.1 * a-44.7
    }
    else if (s == 'M') {
        return 72.7*a-58
    }
}



/* 7- fazer uma função que leia um número indeterminado de valores positivos
e retorna a média aritmética deles */
function chefe(){
    exe7()
}
//função testada
function exe7(){
    conta = 0
    soma = 0
    var numero = Number(prompt("Informe um número"))
    do{
        conta++ //soma1
        soma = soma + numero //acumulador
        numero = Number(prompt("Informe outro número. Digite número negativo para encerrar"))

    }
    while(numero > 0)
    console.log(`A média dos números informados é ${soma/conta}`)
}




/* 8- receber um valor inteiro e positivo e calcular seu fatorial */
function principal(){
    var valor = Number(prompt("Informe um valor inteiro positivo"))
    var fatorial = numero(valor)
    console.log(`O fatorial de ${valor} é: ${fatorial}`)
}
function numero(v){ 
    var um = 1
    var resultado = v
    do{
        resultado = resultado * (v - um)
        um++
    } 
    while(um < v)
    return resultado
}



/* 9- receber valor inteiro positivo e retornar a soma dos divisores desse valor */
function exe9(){
    var numero = Number(prompt("Informe um número"))
    var soma = 0
    for (var i = numero; i >= 1; i--){ // é i -- pq vai diminuindo
        if (numero % i == 0){
            soma = soma + i //soma dos divisores
        }
    }
    console.log(`Soma dos divisores é ${soma}`)
}
/*9/ 9
9 /8
9/7 foi diminuindo os divisores */




/* 13- 15 habitantes, sendo coletado: idade, sexo, salário, numero de filhos.
Fazer uma função que leia esses dados em um vetor. 
Fazer funções que recebam esse vetor, por parâmetro e retorne: média salarial 
dos habitantes, menor e maior idade, quantidade de mulheres com 3 filhos que 
recebe ate R$500. Uma função para cada cálculo.*/
function chefe(){
    // essa função que detém o vetor com escopo global
    var vetor = []
    // `> sabe que esse vetor tem escopo global pq vamos passá-lo como parâmetro nas funções
    do{
        var opcao = Number(prompt(`Escolha \n 1-Cadastrar \n 2-Média salários 
        \n 3-Menor e maior idade \n 4-Quantidade de mulheres \n 5-Sair do programa`))
        switch(opcao){
            case 1: entrada(vetor)
                    break
            case 2: mediasalario(vetor)
                    break
            case 3: menorMaioridade(vetor)
                    break
            case 4: quantidademulheres(vetor)
                    break
            case 5: console.log(`Obrigado por utilizar nosso programa`)
                    break
            default: console,log(`Opção inválida`)
        }
        /* é a mesama coisa que se tivesse feito:
        entrada(vetor)
        mediasalario(vetor)
        menorMaioridade(vetor)
        quantidademulher(vetor)
        só que da outra forma tem como o usuário escolher o que ele quer*/
    }  
    while (opcao != 5)  
} //vai precisar de 4 funções

function entrada(vet){
    console.log(`Entrou na função entrada`)
    var objeto = new Object() //criamos um objeto
    objeto.salario = Number(prompt(`Informe o salário`))
    objeto.numerofilhos = Number(prompt(`Informe o número de filhos`))
    objeto.sexo = prompt(`Informe o sexo (M/F)`).toUpperCase() //converte para maiúsculo
    objeto.idade = Number(prompt(`Informe a idade`))
    //insere no vetor
    vet.push(objeto) //insere no vetor
}

function mediasalario(vet){
    console.log(`Entrou na função média salário`)
    if (vet == []){
        console.log(`Nenhum habitante cadsatrado`)
    }
    else{
        var soma = 0
        for(var i=0; i<vet.length; i++){ // percorra o vetor
            soma = soma + vet[i].salario //acumula
        }
        console.log(`A média é ${soma/vet.length}`) //faz a média
    }
}

function menorMaioridade(vet){
    console.log(`Entrou na função menor maior idade`)
    if (vet.length == 0){
        console.log(`Nenhum habitante cadastrado`)
    }
    else{
        var menor = vet[0].idade // a idade do primeiro habitante é a menor
        var maior = vet[0].idade // a idade do primeiro habitante é a maior
        for(var i=1; i<vet.length; i++){ //percorre o vetor
            if(vet[i].idade > maior){
                maior = vet[i].idade
            }
            if (vet[i.idade < menor]){
                menor = vet[i].idade //atualiza o menor
            }
        }
        console.log(`Maior: ${maior} e menor: ${menor}`) //atualiza a menor
    }
}

function quantidademulheres(vet){
    console.log(`Entrou na função quantidade de mulheres`)
    if(vet.length == 0){
        console.log(`Nenhum habitante cadastrado`)
    }
    else{
        mulherFilhoSal = 0
        for (var i=0; i<vet.length;i++){
            if((vet[i].sexo == 'F') && (vet[i].numerofilhos == 3) && (vet[i].salario <= 500)){
                mulheresFilhoSal = mulherFilhoSal + 1
            }
        }
        console.log(`Quantidade mlheres com 3 filhos que recebe até R$500: ${mulherFilhoSal}`)
    }
}
/* usa vetor na chamada da função e vet dentro da função
porque são variáveis diferentes, mas referencial o mesmo local */
/* todos os vet apontam pro vetor principal, que é o da function chefe */
/* não usa o mesmo nome nos dois porque são coisas diferentes, tem 
memórias diferentes */
