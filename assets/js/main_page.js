const Buscar = document.getElementById("Buscar");
const Campo = document.getElementById("Input");
let personajeData = {};

function LlenarCampos(data){
    personajeData = JSON.parse(data);
    if(personajeData.name === undefined){
        alert("Personaje NO encontrado");
    } else {
        document.getElementById("name").innerHTML = personajeData.name;
        document.getElementById("height").innerHTML = personajeData.height;
        document.getElementById("mass").innerHTML = personajeData.mass;
        document.getElementById("hair_color").innerHTML = personajeData.hair_color;
        document.getElementById("skin_color").innerHTML = personajeData.skin_color;
        document.getElementById("eye_color").innerHTML = personajeData.eye_color;
        document.getElementById("birth_year").innerHTML = personajeData.birth_year;
        document.getElementById("gender").innerHTML = personajeData.gender;    
    }
}

Buscar.addEventListener("click", function(){
    if(isNaN(Campo.value) || Campo.value == ""){
        alert("Ingrese un valor numerico");
    } else {
        fetch('https://swapi.dev/api/people/' + Campo.value)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            LlenarCampos(data);
        })
        .catch(function(err) {
            console.error(err);
            alert("Personaje NO encontrado");
        });
    }
});