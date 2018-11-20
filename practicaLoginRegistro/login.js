


var usuarios = {
    registros: []
};


document.getElementById("registrar").addEventListener("click", function(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let confPass = document.getElementById("confPass").value;

    if (localStorage.usuarios) usuarios.registros = JSON.parse(localStorage.usuarios).registros;

    if (pass != confPass) return alert("Las contraseñas no coinciden");
    let usuario = {
        username,
        email,
        pass
    }
    usuarios.registros.push(usuario);
    let usuariosParse = JSON.stringify(usuarios);
    localStorage.setItem("usuarios", usuariosParse);
    console.log(usuarios);
});



document.getElementById("entrar").addEventListener("click", function(){
    let user = document.getElementById("userLogin").value;
    let pass = document.getElementById("passLogin").value;
    
    if (localStorage.usuarios) usuarios.registros = JSON.parse(localStorage.usuarios).registros;
    

    for (let i = 0; i < usuarios.registros.length; i++){
        if (usuarios.registros[i].username === user && usuarios.registros[i].pass === pass){
            window.location.href = "principal.html"
        }
    }
    alert("no existes compa");
});