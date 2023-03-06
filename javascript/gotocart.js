let gocart = document.getElementById('c');
gocart.addEventListener('click', go);

function go() {
    // Get the query string from the URL
    const queryString = window.location.search;

    // Create a new URLSearchParams object from the query string
    const urlParams = new URLSearchParams(queryString);

    // Get the value of the 'email' parameter
    const email = urlParams.get('email');

    // Log the email to the console
    console.log(email);

    //const id = window.sessionStorage.getItem('id'); //sessionnn
    window.open('cart.html' + '?email=' + email);
}
