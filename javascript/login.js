let signin_btn = document.getElementById('Signin');
signin_btn.addEventListener('click', signin);

function signin() {
    let email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value;
    let data = new FormData();
    data.append('email', email);
    data.append('password', password);
    

    axios.post('http://localhost/-Full-Stack-E-commerce--back-end-/login.php', data).then(function (res) {
        console.log(res.data)
        // window.localStorage.setItem('user_id', res.data.user_id)
        // window.sessionStorage.setItem('user_id', res.data.user_id)
        window.sessionStorage.setItem('email', res.data.email);// sessionnnnnn
        console.log(window.sessionStorage.getItem('email'))
        alert("you are signed in ")
        let url = `index.html?email=${email}`;
        window.location.href = url;
    }).catch(function (err) {
        console.log(err);
    });

    // axios.post('http://localhost/-Full-Stack-E-commerce--back-end-/checkadmin.php', data).then(function (result) {
    //     console.log(result.data.status);
    //     if (result.data.status == "success") {
    //         alert("Admin signed in!")
    //         window.location.href = 'admin.html';
    //     }
    // }).catch(function (err) {
    //     console.log(err);
    // });

}

const pointingToForgetPassword = document.getElementById("Pointing-to-forgetpassword");
const forgotPasswordForm = document.getElementById("forgot-password-form");

pointingToForgetPassword.addEventListener("click", () => {
    console.log("Forgot password clicked");
    forgotPasswordForm.style.display = "block";
  });

