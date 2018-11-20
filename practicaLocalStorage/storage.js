


var nuevoRegistro = {
    correo: "correo@ejamplo.com",
    contra: "1234",
    nombre: "Ejemplo"
}

alum.usuarios.push(nuevoRegistro);



var alumnos = {
    usuarios: [
        {
            correo: "correo@ejamplo.com",
            contra: "1234",
            nombre: "Ejemplo"
        },
        {
            
        },
        {

        },
        {

        }
    ]
}   


localStorage.setItem("alumnosData", JSON.stringify(alumnos));

// var alum = localStorage.getItem("alumnosData");
var alum = localStorage.alumnosData;

alum = JSON.parse(alum);

console.log(alum.primerSemestre[2]);