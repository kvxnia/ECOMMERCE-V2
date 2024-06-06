function verifi() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "elias" && password == "123") {
        alert("¡Inicio de sesión correcto!");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}