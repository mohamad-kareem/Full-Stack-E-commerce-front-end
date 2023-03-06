let signup_btn = document.getElementById('Signup-button');
signup_btn.addEventListener('click', signup);

function signup() {
    let first_name = document.getElementById('First_name').value;
    let last_name = document.getElementById('Last_name').value;
    let email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value;
    

    let data = new FormData();
    data.append('first_name', first_name);
    data.append('last_name', last_name);
    data.append('email', email);
    data.append('password', password);
    

    
    axios({
        "method": "post",
        "url": "http://localhost/-Full-Stack-E-commerce--back-end-/registration.php",
        "data": data
    }).then((result) => {
        console.log(result)
        if (result.data.status == "success") {
            alert("signed up")
            window.location.href = 'index.html';

        }
    }).catch((err) => {
        console.error(err)
    });
}