function cambiarColor(){
    let contenedor = document.getElementById('contenedorColor');
    let color = document.getElementById('color').value;
    contenedor.style.backgroundColor = color;
}

function cambiarColorTexto() {
    let contenedor = document.getElementById('contenedorColor');
    let color = document.getElementById('textColor').value;
    contenedor.style.backgroundColor = color;
    document.getElementById("entrada").textContent = color;
}


function arreglos(){
    let arreglo = [];
    // let arreglo = [1, "dos", [1, 2], {"po": "o"}, undefined, null];
    [2,2,2,2,2,2]
    
    console.log(arreglo.length);
    arreglo.push(1);
    arreglo.push(2);
    arreglo.push(2);
    arreglo.push(2);
    arreglo.push(2);
    arreglo.push(2);
    arreglo.push(2);
    arreglo.pop();
    arreglo.shift();
    console.log(arreglo.length);

    arreglo.map(function(elem){
        console.log(elem);
    });

    for(i in arreglo){
        console.log(i);
    }

    console.table(arreglo);
}
