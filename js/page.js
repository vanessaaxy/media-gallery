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
