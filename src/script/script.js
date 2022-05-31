const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {
    
    e.preventDefault();

    const valor = document.querySelectorAll("#valor"); 

    const valor1 = valor.value;

    console.log(valor1);
})