// window.onscroll = function() {
//   myFunction()
// };
//
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;
//
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
$(document).ready(function() {
  $("ul li").click(function() {
    if ($(this).hasClass("check")) {
      $(this).removeClass("check");
    } else {
      $(this).addClass("check");
    }
  })
  $("ol li").click(function() {
    $(".steps").css("background-image", "none");
      var number = $("ol li").index(this);
      $(".steps img").fadeOut();
      number++;
      $(".steps img:nth-child("+number+")").fadeIn();
    if ($(this).hasClass("strike")) {
      $(this).removeClass("strike");
    } else {
      $(this).addClass("strike");
    }
  })
})
