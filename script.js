let usernameBenar = "loopify_music";
let passwordBenar = "12345";

document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == usernameBenar && password == passwordBenar) {
        window.location.href="index.html";

    } else {
        document.getElementById("pesan").innerHTML = "Username atau Password Salah!";
    }

});