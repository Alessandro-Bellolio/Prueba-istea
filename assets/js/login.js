const valid_user = "juanperez@gmail.com";
const valid_pass = "1787742836863899";
const Submit_button = document.getElementById("Send");
const Warn_info = document.getElementById("Warning");
let mail_in = document.getElementById("Input_mail");
let clave_in = document.getElementById("Input_clave");

Submit_button.addEventListener("click", function(event){
    if(mail_in.value == ""){
        event.preventDefault();
        Warn_info.innerText = "Email campo requerido";
    } else if(clave_in.value == ""){
        event.preventDefault();
        Warn_info.innerText = "Clave campo requerido";
    } else if(clave_in.value.length < 8 || clave_in.value.length > 16){
        event.preventDefault();
        Warn_info.innerText = "Su clave debe tener entre 8 y 16 numeros";
    } else if(valid_user !== mail_in.value){
        event.preventDefault();
        Warn_info.innerText = "Email incorrecto";
    } else if(valid_pass !== clave_in.value){
        event.preventDefault();
        Warn_info.innerText = "Clave incorrecta";
    } else{
        alert("Bienvenido!");
    }
});