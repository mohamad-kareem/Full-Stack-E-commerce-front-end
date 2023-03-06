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
        if(res.data.response == "logged in"){

            window.sessionStorage.setItem('email', res.data.email);// sessionnnnnn
            console.log(window.sessionStorage.getItem('email'))
            alert("you are signed in ")
            let url = `index.html?email=${email}`;
            window.location.href = url;
        }else{
            axios.post('http://localhost/-Full-Stack-E-commerce--back-end-/checkadmin.php', data).then(function (result) {
                console.log(result.data.status);
                if (result.data.status == "success") {
                    alert("Admin signed in!")
                    window.location.href = 'admin.html';
                }else{
                    alert("Wrong email or password!");
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    }).catch(function (err) {
        console.log(err);
    });

}

const pointingToForgetPassword = document.getElementById("Pointing-to-forgetpassword");
const forgotPasswordForm = document.getElementById("forgot-password-form");

pointingToForgetPassword.addEventListener("click", () => {
    console.log("Forgot password clicked");
    forgotPasswordForm.style.display = "block";
    let submit_forget = document.getElementById('submit-forgot-password');
    submit_forget.addEventListener('click', checkemail);

  });
  function checkemail(){
    let email = document.getElementById('Email1').value;
    let newpassword = document.getElementById('reset-input').value;
    let data = new FormData();
    data.append('email', email);
    data.append("password",newpassword)

    axios.post('http://localhost/-Full-Stack-E-commerce--back-end-/forgetpassword.php', data).then(function (res) {
        console.log(res.data)
        if(res.data.response == "email not found"){
            console.log(window.sessionStorage.getItem('email'))
            alert("wrong email")}
           else if (res.data.status == "success"){
            alert("password changed")

            }
        }).catch(function (err) {
        console.log(err);
    });


}
