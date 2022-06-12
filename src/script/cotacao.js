const select = document.querySelector("#valor")
const checkBoxes = document.querySelectorAll(".checkbox")
const model = document.querySelector("#model")
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
    if(model.value){
        const valueFipe = actualizedSelect()
        const additional = checkBox()
        const calculate = (valueFipe === 1 ? 70 : 70 + valueFipe*10) + additional * 5
    
        document.getElementById('valorfinal').innerHTML = `O valor da mensalidade é de R$ ${calculate},00`
        return calculate
    }else{
        document.getElementById('valorfinal').innerHTML = `Você se esqueceu de preencher um campo`
    }
    
})