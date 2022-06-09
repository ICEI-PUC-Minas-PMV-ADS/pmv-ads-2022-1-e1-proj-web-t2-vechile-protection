
var btnSingnin = document.querySelector("#signin");
var btnSingnup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSingnin.addEventListener("click" , function(){
    body.className = "sign-in-js"
})
btnSingnup.addEventListener("click" , function(){
    body.className = "sign-up-js"
})



