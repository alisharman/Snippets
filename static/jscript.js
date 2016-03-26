//current page highlighting from: http://eznetu.com/current-link.html
$(function(){
  var i = 0;
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
      i++
      console.log(i)
    }
  });
    if (i==0) {
        $('a.home').addClass('current');
    }
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

// Toggle text for picture gallery from: Toni Almeida http://jsfiddle.net/promatik/SFU4E/
$(document).ready(function () {
    $("#image1 img").click(function () {
        $("#image1 .text").fadeToggle();
    });
    $("#image2 img").click(function () {
        $("#image2 .text").slideToggle();
    });
     $("#image3 img").click(function () {
        $("#image3 .text").slideToggle();
    });
     $("#image4 img").click(function () {
        $("#image4 .text").slideToggle();
    });
    $("#image5 img").click(function () {
        $("#image5 .text").slideToggle();
    });
     $("#image6 img").click(function () {
        $("#image6 .text").slideToggle();
    });
     $("#image7 img").click(function () {
        $("#image7 .text").slideToggle();
    });
     $("#image8 img").click(function () {
        $("#image8 .text").slideToggle();
    });
     $("#image9 img").click(function () {
        $("#image9 .text").slideToggle();
    });
     $("#image10 img").click(function () {
        $("#image10 .text").slideToggle();
    });                             
});


// Close the dropdown menu if the user clicks outside of it
/*
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
*/

