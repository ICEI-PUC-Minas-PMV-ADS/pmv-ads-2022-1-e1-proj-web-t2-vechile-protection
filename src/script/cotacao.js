/*function main(){

 
    
    const checkBoxes = document.querySelectorAll(".checkbox");
    const valores = [80, 90, 100, 110, 120, 130, 140, 150, 160, 170]; 

    var btn = document.querySelector("#send");

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        const select = document.querySelector("#valor");
    const optionValue = select.options[select.selectedIndex];
    const value = optionValue.value;

        var selecionados = 0;

        checkBoxes.forEach(function(el){

            if(el.checked) {
                selecionados++
            }
        })

        const valorFinal = valores[value] + (5*selecionados)

        alert(`O valor da mensalidade é de R$ ${valorFinal},00`);
    
    })
}
main();
*/

/*const checkBoxes = document.querySelectorAll(".checkbox")
const btn = document.querySelector("#send")


function atualizouSelect(){
    const select = document.querySelector("#valor")
    const optionValue = select.options[select.selectedIndex]

    return optionValue.value
}

btn.addEventListener("click", function(event) {
    event.preventDefault()

    const valueFipe = atualizouSelect()
    const tabela = valueFipe === 0 ? 80: 80 + valueFipe*10

    let selected = 0

    checkBoxes.forEach(function(el){

        if(el.checked) {
            selected++
        }
    })          

    const valueFinal = tabela + 5*selected;

    document.getElementById('valorfinal').innerHTML = `O valor da mensalidade é de R$ ${valueFinal},00`;

    
    return selected
})
*/


const select = document.querySelector("#valor")
const checkBoxes = document.querySelectorAll(".checkbox")
const btn = document.querySelector("#send")

function actualizedSelect(){
    const optionValue = select.options[select.selectedIndex]
    return optionValue.value
}

function checkBox(){
    let selected = 0
    checkBoxes.forEach(function(el){
        if(el.checked) {
            selected++
        }
    })
    return selected 
}

btn.addEventListener("click", function(e) {
    e.preventDefault()

    const valueFipe = actualizedSelect()
    const additional = checkBox()
    const calculate = (valueFipe === 1 ? 70 : 70 + valueFipe*10) + additional * 5

    document.getElementById('valorfinal').innerHTML = `O valor da mensalidade é de R$ ${calculate},00`;
    return calculate
})