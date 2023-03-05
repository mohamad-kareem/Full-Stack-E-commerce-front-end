

let signin_btn = document.getElementById('Signin')
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
        console.log(window.sessionStorage.getItem('id'))
        

    }).catch(function (err) {
        console.log(err);
    })

}