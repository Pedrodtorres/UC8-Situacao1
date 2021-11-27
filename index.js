var idade = 32

if (idade >= 18){
    console.log(`Idade permitida, ${idade} anos`)
}else{
    console.log(`Não possui idade, ${idade} anos`)
}
let anoEvento=2021
let mesEvento=10
let diaEvento=28

let data = new Date()
let dataEvento = new Date(anoEvento, mesEvento-1, diaEvento) //Valor dos mês -1 pois os meses estão em vetores de 0 a 11

console.log(data)
console.log(dataEvento)

if (data > dataEvento){
    console.log(`Data de compras se encerraram na data de: ${diaEvento}/${mesEvento}/${anoEvento}`)
}else{
    console.log("Compra feita")
}

