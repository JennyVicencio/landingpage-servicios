// al hacer scroll...
window.onscroll = function() { 
   progressbar(); // ejecuta progress bar
   scrollFunction(); // scroll hacia arriba 
};

// progress bar
progressbar = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress").style.width = scrolled + "%";
}

// si te deslizas más de 30px aparece el botón
scrollFunction = () => {
   if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
     topbtn.style.display = "block";
   } else {
     topbtn.style.display = "none";
   }
 }
// cuando se hace click en el botón vas arriba de documento
gotop = () => {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

//enviar email de contacto
sendmail = () => {
   window.open('mailto:jennyfer.vicencio@gmail.com?subject=Quiero trabajar contigo&body=¡Hola! Deseo más información de tus servicios de __________');
}

// obtiene e inserta año actual al footer
document.getElementById("yearSpan").innerHTML = new Date().getFullYear();

// botón de contacto para enviar email
contactbtn.addEventListener("click", sendmail);
 