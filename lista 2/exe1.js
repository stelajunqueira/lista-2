
function chefe(){
    var vendedores = []
        var vendas =[]
    do{        
        var opcao = Number(prompt("1-cadastra vendedor 2-cadastra venda 3-sair"))
        switch(opcao){
            case 1: cadastraVendedor(vendedores) //escopo global
                    break
            case 2: cadastraVendas(vendas, vendedores) //coloca os vendedores tb pra conferir se o vendedor que fez a venda existe 
            // é necessário o vetor de vendas e de vendedores
                    break
            case 3:
        }
    }
    while (opcao != 3)

}

function cadastraVendedor(vend){ //escopo local - vend faz referência para vendedores
    var objeto = new Object()
    objeto.codigo = Number(prompt("Informe o código do vendedor"))
    objeto.nome = prompt("Informe o nome")
    // verificar se o código já existe:
    for (var i=0; i<vend.length; i++){
        if(vend[i].codigo == objeto.codigo){
            console.log(`Código já existente`)
            return 0 // o return 0 sai da função
        }
    }
    // se ele não entrar no if ai vai inserir ele no vetor:
    vend.push(objeto)
    console.log(`Vendedor cadastrado com sucesso`)
}

function cadastraVendas(ven, vendor){ //ven representa vendas e vendor representa vendedor
    var objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código da venda`))
    objeto.vendedor = Number(prompt(`Informe código do vendedor`))
    objeto.mes = Number(prompt(`Informe o mês da venda`))
    objeto.valor = Number(prompt(`Informe o valor da venda`))
    // verifica se o código do vendedor existe, só assim vai poder adicionar a venda no vetor
    for (var i=0;i<vendor.length;i++){
        if(vendor[i].codigo == objeto.vendedor){
            for(var j=0; j<ven.length; j++){ //verifica se o vendedor já tem cadastro no mês
                if ((ven[j].vendedor == objeto.vendedor) && (ven[j].mes == objeto.mes)){
                    console.log(`Vneda já cadastrada neste mês para o vendedor`)
                    return 0 //sai da função
                }
            }
            //insere no vetor de vendas
            ven.push(objeto)
            console.log(`Venda inserida com sucesso`)
            console.log(objeto)
            return 0 //sai da função
        }
    }
    console.log(`Vnededor não existe`)

}

