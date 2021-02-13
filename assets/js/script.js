
window.onscroll = function() { 
   progressbar(); // ejecuta progress bar
   document.getElementById("yearSpan").innerHTML = new Date().getFullYear(); // obtiene año actual
};

// progress bar
 progressbar = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress").style.width = scrolled + "%";
}


