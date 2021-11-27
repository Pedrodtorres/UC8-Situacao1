let idade = 1
let anoEvento=2022
let mesEvento=12
let diaEvento=28
let nomeCadastrados = ['Igor','Carlos', 'Ricardo', 'Caio'] 
let nomePalestrantes = ['Ana Paula', 'Roberto']
let qtdParticipantes = nomeCadastrados.length;
let limitePart = 100
let dataAtual = new Date()
let dataEvento = new Date(anoEvento, mesEvento-1, diaEvento) //Valor dos mês -1 pois os meses estão em vetores de 0 a 11

if (dataAtual < dataEvento && qtdParticipantes < limitePart &&  idade > 18) {
    console.log(`Compra feita, a data do evento será: ${diaEvento}/${mesEvento}/${anoEvento}`)  
}else{      
        if (dataAtual > dataEvento){
            console.log(`Compra invalida, data do evento já ocorreu:${diaEvento}/${mesEvento}/${anoEvento} `)
        }
            if (qtdParticipantes > limitePart){
                console.log('O evento já está com limite máximo de pessoas.')
            }
                if(idade < 18){
                    console.log('Menores de idade não são permitidos no evento.')
                }
    }




