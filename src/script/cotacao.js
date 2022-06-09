function atualizouSelect(){

 
    let select = document.querySelector("#valor");
    let optionValue = select.options[select.selectedIndex];

    let value = optionValue.value;

    console.log(value);
}
atualizouSelect();