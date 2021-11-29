const btn = document.querySelector("#send");

btn.addEventListener("click", function(){
   
    const name = document.querySelector("#name");
    const value = name.value;
    console.log (value)
    const age = document.querySelector("#age")
    const ageValue = age.value;
    if (ageValue > 18){
        console.log("Cadastro confirmado")
        const names = []
        names.push(value)
        console.log(names)
        //console.log(names.length)
    }else{
        console.log("Cadastro não realizado")
    }
})
 