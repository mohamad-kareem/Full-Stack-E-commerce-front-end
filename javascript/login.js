let signin_btn = document.getElementById('Signin');
signin_btn.addEventListener('click', signin);

function signin() {
    let email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value;
    let data = new FormData();
    data.append('email', email);
    data.append('password', password);
    axios.post('http://localhost/-Full-Stack-E-commerce--back-end-/login.php', data)
        .then(function (res) {
            console.log(res.data);
            console.log(window.sessionStorage.getItem('id'));
            
            if (res.data.response === "email not found") {
                alert("Email not found. Please try again.");
            } else if (res.data.response === "Incorrect password") {
                alert("Incorrect password. Please try again.");
            } else {
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
