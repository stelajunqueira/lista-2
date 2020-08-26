
function chefe(){
    var vetor = [] // vetor de escopo global, pq vai ser ele que vamos passar nos parâmetros da função
    //entrada de dados
    do{
        var opcao = Number(prompt("Digite 1- req1; 2-req2; 3-req3; 4-req4; 5- req5; 6- sair."))
        switch(opcao){
            case 1: requisito1(vetor)
                    break
            case 2: requisito2(vetor)
                    break
            case 3: requisito3(vetor)
                    break
            case 4: requisito4(vetor)
                    break
            case 5: requisito5(vetor)
                    break
            case 6: console.log("Programa encerrado")
                    break
            default: console.log("Opção inválida")
        }
        requisito1(vetor)
        requisito2(vetor)
        requisito3(vetor)
        requisito4(vetor)
        requisito5(vetor)       
    }
    while (opcao != 6)

}
function requisito1(vet){ // vet aponta pra vetor

}
function requisito2(vet){
    
}
function requisito3(vet){
    
}
function requisito4(vet){
    
}
function requisito5(vet){
    
}