
function chefe(){
    //alterou var por let, por ser um escopo local e não global:
    let vendedores = [] 
    let vendas =[]
    do{        
        let opcao = Number(prompt(`1-cadastra vendedor 2-cadastra venda 
        3-consulta vendas funcionario mês 4-consulta vendas funcionário 
        5-consulra funcionário com maior venda 6-sair`))
        switch(opcao){
            case 1: cadastraVendedor(vendedores) //escopo global, passando a referencia de vendedores
                    break
            case 2: cadastraVendas(vendas, vendedores) //coloca os vendedores tb pra conferir se o vendedor que fez a venda existe 
            // é necessário o vetor de vendas e de vendedores
                    break
            case 3: consultaVendasFuncionarioMes(vendas)
                    break
            case 4: consultaVendasFuncionario(vendas)
                    break
            case 5: consultaVendedorMaiorVenda(vendas)
                    break
            case 6: console.log(`Pograma encerrado`)
                    break
        }
    }
    while (opcao != 6)

}

function cadastraVendedor(vendor){ //escopo local - vendor faz referência para vendedores
    let objeto = new Object()
    objeto.codigo = Number(prompt("Informe o código do vendedor"))
    objeto.nome = prompt("Informe o nome")
    // verificar se o código já existe:
    for (let i=0; i<vendor.length; i++){
        if(vendor[i].codigo == objeto.codigo){
            console.log(`Código já existente`)
            return 0 // o return 0 sai da função
        }
    }
    // se ele não entrar no if ai vai inserir ele no vetor:
    vendor.push(objeto)
    console.log(`Vendedor cadastrado com sucesso`)
}

// tem que confirmar o vendedor também pra ver se a venda existe, por isso coloca ele como parametro nessa function tb
function cadastraVendas(ven, vendor){ //ven representa vendas e vendor representa vendedor
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código da venda`))
    objeto.vendedor = Number(prompt(`Informe código do vendedor`))
    objeto.mes = Number(prompt(`Informe o mês da venda`))
    objeto.valor = Number(prompt(`Informe o valor da venda`))
    // verifica se o código do vendedor existe, só assim vai poder adicionar a venda no vetor
    for (let i=0;i<vendor.length;i++){
        if(vendor[i].codigo == objeto.vendedor){
            for(let j=0; j<ven.length; j++){ //verifica se o vendedor já tem cadastro no mês
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
    console.log(`Vendedor não existe`)

}

function consultaVendasFuncionarioMes(ven){
    let vendedor = Number(prompt("Informe o código do vendedor"))
    let mes = Number(prompt("Informe o mês da venda"))
    for (let i=0; i<ven.length; i++){
        if ((ven[i].vendedor == vendedor) && (ven[i].mes == mes)){
            console.log(`Valor da venda ${ven[i].valor}`)
            return 0 //sai da função
        }
    }
    console.log(`Vendedor e/ou mês sem venda`)
} 

function consultaVendasFuncionario(ven){
    let vendedor = Number(prompt("Informe o código do vendedor"))
    let total = 0 
    for (let i=0; i<ven.length; i++){
        if (ven[i].vendedor == vendedor){
            total = total + ven[i].valor 
        }
    }
    if (total == 0){
        console.log(`Vendedor sem venda`)
    }
    else{
        console.log(`Valor total das vendas: ${total}`)
    }
    

}

function consultaVendedorMaiorVenda(ven){
    let mes = Number(prompt("Informe o mês da venda"))
    let codigovendedor //codigo do vendedor que mais vendeu
    let maiorvenda = 0 //maiorvenda
    //inicializa com zero pq não sabe se o primeiro valor adicionado é do mês solicitado
    for (let i=0; i<ven.length; i++){ //percorre o vetor de vendas
        if (ven[i].mes == mes){ //verifica se é um mês de interesse
            if(ven[i].valor > maiorvenda){ //achei maior venda
                //atualizar os valores maiores
                maiorvenda = ven[i].valor
                codigovendedor = ven[i].vendedor
            } 
        }
    }
    console.log(`A maior venda é de ${maiorvenda} feita pelo vendedor ${codigovendedor} no mês ${mes}`)
}

