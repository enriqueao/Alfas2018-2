let minas = 5;
let vidas = 3;
let puntos = 0;

window.addEventListener('load', ()=>{
    document.getElementById("vidas").textContent = vidas;
    let numElements = document.querySelectorAll('.elemento').length;
    for (let m = 0; m < minas; m++) {
        let elemento = Math.round(Math.random() * (numElements - 1) + 1);
        let obj = document.getElementById(elemento);
        if (obj.classList.contains('blocked')){
            m--;
        } else {
            obj.dataset.mina = true;
        }
    }
    // for (let i = 0; i < 6; i++) {
    //     let elemento = Math.round(Math.random() * (numElements - 1) + 1);
    //     document.getElementById(elemento).classList.add('blocked');
    //     document.getElementById(elemento).classList.remove('elemento');
    // }
});

function restarVida(){
    let elementVidas = document.getElementById("vidas");
    if(vidas > 1){
        vidas--;
        elementVidas.textContent = vidas;
    } else {
        elementVidas.textContent = 0;
        finJuego();
    }
}

function sumaPts(puntosSuma){
    let pts = document.getElementById("pts");
    puntos += puntosSuma;
    pts.textContent = puntos;
}

function finJuego(){
    alert("Perdiste");
}

document.addEventListener('click', function(event){
    let obj = event.target;
    if (obj.className == "elemento"){
        if(obj.dataset.mina == "true"){
            restarVida();
            sumaPts(-200);
            obj.classList.add('seleccionado')
        } else {
            sumaPts(100);
            obj.classList.add('sin-mina')
        }
    } 
});