/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showMenu() {
  document.getElementById("dropdown-menu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('#navbar button') && !e.target.matches('.dropdown-content')) {
  var myDropdown = document.getElementById("dropdown-menu");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
