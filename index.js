let idade =18

let anoEvento=2021
let mesEvento=12
let diaEvento=30

let nomeCadastrados = ['Igor','Carlos', 'Ricardo', 'Caio'] 
let nomePalestrantes = ['Ana Paula', 'Roberto']

let confirmaPalestrante = false  //Diferencia cadastro de participantes do evento e palestrantes

let cadastroParticipantes = 'Reinaldo' // Adiciona participante ao evento e lista
let cadastroPalestrantes = 'Murilo'    // Adiciona palestrantes ao evento e lista

nomePalestrantes.push(cadastroPalestrantes)
nomeCadastrados.push(cadastroParticipantes)

let qtdParticipantes = nomeCadastrados.length;
let qtdPalestrantes = nomePalestrantes.length;
let limitePart = 6

let dataAtual = new Date()   //Mostra data atual 
let dataEvento = new Date(anoEvento, mesEvento-1, diaEvento) //Valor dos mês -1 pois os meses estão em vetores de 0 a 11 -- Define a data do evento após valor das entradas


if (confirmaPalestrante == false){
        if (dataAtual < dataEvento & qtdParticipantes <= limitePart &&  idade >= 18) {
            
            console.log(`Compra feita, a data do evento será: ${diaEvento}/${mesEvento}/${anoEvento}`)
            console.log(`Lista de cadastrados`)
            console.log("----------------------------------------------------")
            
                for (let indice = 0; indice < qtdParticipantes; indice++){
                    let listaParticipantes = nomeCadastrados[indice];
                    console.log(listaParticipantes)
                }
                    console.log("----------------------------------------------------")
                    console.log(`Lista de Palestrantes`)
                    console.log("----------------------------------------------------")
                    
                    for (let indice = 0; indice < qtdPalestrantes; indice++){
                        const listaPalestrantes = nomePalestrantes[indice];
                        console.log(listaPalestrantes);
                    }
    }else{      
        
        if (dataAtual > dataEvento){
            console.log(`Compra invalida, data do evento já ocorreu:${diaEvento}/${mesEvento}/${anoEvento} `)
        }
            if (qtdParticipantes > limitePart){
                    console.log(`O evento já está com limite máximo de pessoas.`)
            }
                if(idade < 18){
                        console.log(`Menores de idade não são permitidos no evento.`)
                }
    }
}else{
    console.log(`Cadastro de palestrante: ${cadastroPalestrantes} no evento efetuado`)
}
