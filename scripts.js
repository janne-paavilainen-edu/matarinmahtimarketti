function myFunction() {
    var x = document.querySelector("nav")
    x.classList.toggle("responsive")
    }
/*
    x.className = x.className ? "responsive" : ""  
    if (x.className === "") {
      x.className = "responsive"
      } 
    else {
      x.className = ""
      }
    }
*/

document.addEventListener('DOMContentLoaded', function() {
  var currentLocation = window.location.href;
  var menuItems = document.querySelectorAll('nav a');

  menuItems.forEach(function(item) {
    if (item.href === currentLocation) {
      item.classList.add('active');
    }
  });
});