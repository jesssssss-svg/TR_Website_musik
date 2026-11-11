let usernameBenar = "loopify_music";
let passwordBenar = "12345";

document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let pesan = document.getElementById("pesan");

    let akun = JSON.parse(localStorage.getItem("akun")) || [];

    let akunDitemukan = akun.find(function(data) {
        return data.username == username && data.password == password;
    });

    let usernameAda = akun.some(function(data) {
        return data.username == username;
    });

    if (akunDitemukan) {
        window.location.href = "index.html";
    }
    else if (!usernameAda) {
        pesan.innerHTML = "LOGIN GAGAL!<br>Username Salah!";
    }
    else {
        pesan.innerHTML = "LOGIN GAGAL!<br>Password Salah!";
    }

});