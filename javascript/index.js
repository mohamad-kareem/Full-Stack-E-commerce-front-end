const dropdown_selection=document.getElementById("dropdown");
dropdown_selection.addEventListener("change",function(){
    const loc = this.options[this.selectedIndex].value;
    window.open(loc);
});




// Get the slideshow element and all its slides
const slideshow = document.getElementById('slideshow');
const slides = slideshow.querySelectorAll('.slide');

// Set the first slide to be active
let activeSlide = 0;
slides[activeSlide].classList.add('active');

// Create a function to change the active slide
function changeSlide() {
  // Remove the active class from the current slide
  slides[activeSlide].classList.remove('active');
  
  // Increment the active slide index, or reset to 0 if at the end
  activeSlide = (activeSlide + 1) % slides.length;
  
  // Add the active class to the next slide
  slides[activeSlide].classList.add('active');
}

// Call the changeSlide function every 5 seconds
setInterval(changeSlide, 2000);
