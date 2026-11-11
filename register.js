document.getElementById("registerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let pesan = document.getElementById("pesan");

    pesan.className = "";

    if (username == "" || email == "" || password == "" || confirmPassword == "") {
        pesan.innerHTML = "Semua kolom harus diisi!";
    }
    else if (password != confirmPassword) {
        pesan.innerHTML = "Konfirmasi Password Tidak Sesuai!";
    }
    else {

        let akun = JSON.parse(localStorage.getItem("akun")) || [];

        let usernameAda = akun.some(function(data) {
            return data.username == username;
        });

        let emailAda = akun.some(function(data) {
            return data.email == email;
        });

        if (usernameAda) {
            pesan.innerHTML = "Username Sudah Digunakan!";
        }
        else if (emailAda) {
            pesan.innerHTML = "Email Sudah Terdaftar!";
        }
        else {

            let akunBaru = {
                username: username,
                email: email,
                password: password
            };

            akun.push(akunBaru);

            localStorage.setItem("akun", JSON.stringify(akun));

            pesan.innerHTML = "REGISTRASI BERHASIL!";

            pesan.className = "berhasil";

            document.getElementById("registerForm").reset();

            setTimeout(function(){  window.location.href = "login.html";
            }, 1500);
        }
    }

});