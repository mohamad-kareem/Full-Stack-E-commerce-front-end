const dropdown_selection=document.getElementById("dropdown");
dropdown_selection.addEventListener("change",function(){
    const loc = this.options[this.selectedIndex].value;
    // Get the query string from the URL
const queryString = window.location.search;

// Create a new URLSearchParams object from the query string
const urlParams = new URLSearchParams(queryString);

// Get the value of the 'email' parameter
const email = urlParams.get('email');

// Log the email to the console
console.log(email);
    //const id = window.sessionStorage.getItem('id'); //sessionnn
    window.open(loc+ '?email=' + email);
    
});




// Get the slideshow element and all its slides
const slideshow = document.getElementById('slideshow');
const slides = slideshow.querySelectorAll('.slide');
let activeSlide = 0;
slides[activeSlide].classList.add('active');
function changeSlide() {
  slides[activeSlide].classList.remove('active');
  
  activeSlide = (activeSlide + 1) % slides.length;
  slides[activeSlide].classList.add('active');
}
setInterval(changeSlide, 2000);
