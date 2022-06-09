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

const checkBoxes = document.querySelectorAll(".checkbox")
const btn = document.querySelector("#send")


function atualizouSelect(){
    const select = document.querySelector("#valor")
    const optionValue = select.options[select.selectedIndex]

    return optionValue.value
}

btn.addEventListener("click", function(e) {
    e.preventDefault()

    const valueFipe = atualizouSelect()
    const tabela = valueFipe === 0 ? 80: 80 + valueFipe*10

    let selected = 0

    checkBoxes.forEach(function(el){

        if(el.checked) {
            selected++
        }
    })

    console.log(tabela+ 5*selected)
    return selected
})


