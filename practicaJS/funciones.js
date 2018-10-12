

function saludar(nombre){
    var contenedor = document.getElementById('saludar');
    for(let i = 0; i < 10; i++){
        contenedor.innerHTML += "<p>"+nombre+"</p>";
    }
}

function sumar(a, b){
    return parseInt(a) + parseInt(b);
}

function restar(a, b) {
    return a - b;
}

function dividir(a, b){
    return (b > 0) ? a/b : 0;
}

function multiplicar(a, b){
    return a*b;
}

function realizarOperacion(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let suma = sumar(a, b);
    let resta = restar(a, b);
    let div = dividir(a, b);
    let multi = multiplicar(a, b);

    document.getElementById("rsum").textContent = suma;
    document.getElementById("rres").textContent = resta;
    document.getElementById("rdiv").textContent = div;
    document.getElementById("rmul").textContent = multi;
}


function getHora(){
    let hora = new Date();
    segundos = hora.getSeconds();
    minutos = hora.getMinutes();
    horas = hora.getHours();
    if(horas > 12){
        horas -= 12;
        horas = "0"+horas;
    }
    if(minutos < 10){
        minutos = "0"+minutos;
    }
    milisegundos = hora.getMilliseconds();
    dia = hora.toDateString();
    document.getElementById("segundos").textContent = segundos;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("horas").textContent = horas;
    document.getElementById("milisegundos").textContent = milisegundos;
    document.getElementById("dia").textContent = dia;
}


setInterval(getHora, 100);
