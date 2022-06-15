const select = document.querySelector("#valor");
const checkBoxes = document.querySelectorAll(".checkbox");
const model = document.querySelector("#model");
const btn = document.querySelector("#send");

function actualizedSelect() {
  const { value } = select.options[select.selectedIndex];
  return value;
}

function checkBox() {
  let selected = 0;
  checkBoxes.forEach(function (el) {
    if (el.checked) {
      selected++;
    }
  });
  return selected;
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (model.value) {
    const valueFipe = actualizedSelect();
    const additional = checkBox();
    const calculate =
      (valueFipe === 1 ? 70 : 70 + valueFipe * 10) + additional * 5;

    const redirect = confirm(
      `O valor da mensalidade é de R$ ${calculate},00. \nCaso queira continuar a contratação via whatsapp clique no OK`
    );
    if(redirect){
        location.href='https://contate.me/vprotectionoficial1'
    }
  } else {
    alert(`Você se esqueceu de preencher um campo`);
  }
});
