let usernameBenar = "loopify_music";
let passwordBenar = "12345";

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let pesan = document.getElementById("pesan");

        if (username == usernameBenar && password == passwordBenar) {
            window.location.href = "beranda.html";
        } else {
            pesan.innerHTML = "LOGIN GAGAL!<br>Username atau Password Salah!";
        }
    });
}