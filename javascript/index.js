const dropdown_selection=document.getElementById("dropdown");
dropdown_selection.addEventListener("change",function(){
    const loc = this.options[this.selectedIndex].value;
    window.open(loc);
});


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
