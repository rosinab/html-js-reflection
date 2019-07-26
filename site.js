$(document).ready(function(){
  $('.caro').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    mobileFirst: true
  });
});

$('.slider')
.slideReveal({
  trigger: $("#hamburger"),
  overlay: true
});
$(document).ready(function(){
  $("#hamburger").click(function(){
    $(".slider").addClass("sidebar");
    $(".slider").removeClass("hide");
  });
  $(".slide-reveal-overlay").click(function(){
    $(".slider").removeClass("sidebar");
    $(".slider").addClass("hide");
  });
});

$(document).ready(function(){
if (typeof
  (Storage) !== "undefined") {
let tess = sessionStorage.getItem("cookie")
if (!tess) {
$('#cook')
.append("<div id='cookie'> We use technical and analytics cookies to ensure that the user can have the best experience. <br><br> These last for 1 day. <br><br><button id = 'cookies'> Click to Accept</button></div>");
// alert("We use technical and analytics cookies to ensure that the user can have the best experience.");
} else {
document.getElementById("cook")
}
}
})


$(document).ready(function(){
$("#cookies").click(function() {
  sessionStorage.setItem("cookie", "true")
  $("#cookie").remove();
}); 
});

Cookies.set('cookie1', 'true', {expires: 1, path: '/'});



