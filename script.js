let usernameBenar = "loopify_music";
let passwordBenar = "12345";

document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == usernameBenar && password == passwordBenar) {
        window.location.href = "index.html";
    }
    else if (username != usernameBenar && password != passwordBenar) {
        document.getElementById("pesan").innerHTML = "Username dan Password Salah!";
    }
    else if (username != usernameBenar) {
        document.getElementById("pesan").innerHTML = "Username Salah!";
    }
    else if (password != passwordBenar) {
        document.getElementById("pesan").innerHTML = "Password Salah!";
    }

});