// preloader meni

window.onload = function() {

  document.getElementById('preloader');
  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none'
    
  }, 1000);
}


// back to top button

mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


AOS.init();


