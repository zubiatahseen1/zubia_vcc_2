
let menuOpen = false;

function toggleMenu() {
  if(!menuOpen) { // open the menu
    $('.nav-mobile').animate({
      right: 0
    }, 420, 'swing');
  }
  else { // close the menu
    $('.nav-mobile').animate({
      right: -300
    }, 360, 'swing');
  }
  menuOpen = !menuOpen; // flips the state
} // toggleMenu()