var idade = 2

if (idade >= 18){
    console.log(`Idade permitida, ${idade} anos`)
}else{
    console.log(`Não possui idade, ${idade} anos`)
}
let ano = 2021
let mes = 11
let dia = 28

let data = new Date()
let dataEvento = new Date(2021, 11, 27)
let testeData = Date.UTC()

console.log(data)
console.log(dataEvento)

if (data > dataEvento){
    console.log("Compra invalida, expirada a data de compra")
}else{
    console.log("Compra feita")
}

console.log(testeData)