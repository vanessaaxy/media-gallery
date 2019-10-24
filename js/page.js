//* Page Scripts
// Mobile Navigaton Toggle
function navToggle() { // creates a new function named navToggle
  var x = document.getElementById("main-nav"); // creates a variable set to #main-nav, main-nav is the ID to ensure that i can only open one element with this function. this affects the whole <nav> in html
    if (x.className === "topnav") { // if #main-nav has a class of .topnav,
    x.className += " responsive";   // then add a new class. require the space to seperate the words.
  } else {                          // if it doesn't,
    x.className = "topnav";         // set class to .topnav
  } //closes if-else
} //closes function

// slideshow function
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
