//current page highlighting from: http://eznetu.com/current-link.html
$(function(){
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
    }
  });
});




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content. From: http://www.w3schools.com/howto/howto_js_dropdown.asp */
/* move left from: http://stackoverflow.com/questions/23593929/html-javascript-move-image-by-onmouseover-on-a-button*/
function myFunction() {
    var butn = document.getElementsByClassName("dropbtn")[0];
    document.getElementById("myDropdown").classList.toggle("show");
    if (document.getElementById("myDropdown").clientWidth==0) {
      butn.style.position="relative";
      document.getElementById("content2").style.padding= "0 0 0 0";
    }
    else {
      butn.style.position="absolute";
      document.getElementById("content2").style.padding= "4em 4em 4em 4em";
    }

}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var butn = document.getElementsByClassName("dropbtn")[0];
    if (document.getElementById("myDropdown").clientWidth>0) {
      butn.style.position="relative";
      document.getElementById("content2").style.padding= "0 0 0 0";
    }
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}