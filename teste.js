let btn = document.querySelector("#send");

btn.addEventListener("click", function(e){
    e.preventDefault();

    let name = document.querySelector("#name");
    let age = document.querySelector('#age')

    let nameValue = name.value;
    let ageValue = age.value;


    console.log(nameValue)
    console.log(ageValue)
});