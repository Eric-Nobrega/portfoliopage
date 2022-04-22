// set state
// default is darkmode True

$(".colorChangeBtn").on("click", darkMode);

function lightMode() {
  // change btn text
  $(".colorChangeBtn").text("Dark Mode.");

  // body
  $("body").addClass("dark-mode");

  // navbar
  $("#navbar").removeClass("navbar-dark bg-dark");
  $("#navbar").addClass("navbar-light bg-light light-nav");

  // links
  $("#linkOne").addClass("text-black");
  $("#linkTwo").addClass("text-black");

  // contact section
  $("#contactsection").removeClass("contactsection");
  $("#contactsection").addClass("bg-secondary text-white");

  // footer
  $(".footer").addClass("bg-white text-black");

  // change button function
  $(".colorChangeBtn").off("click").on("click", darkMode);

  // change footer github image
  $("#github-img").attr("src", "data/githublight.png");
}

function darkMode() {
  $(".colorChangeBtn").text("Light Mode.");

  // body
  $("body").removeClass("dark-mode");

  // navbar
  $("#navbar").removeClass("navbar-light bg-light light-nav");
  $("#navbar").addClass("navbar-dark navbar");

  // links
  $("#linkOne").removeClass("text-black");
  $("#linkTwo").removeClass("text-black");

  // contact section
  $("#contactsection").addClass("contactsection");
  $("#contactsection").removeClass("bg-secondary");

  // footer
  $(".footer").removeClass("bg-white text-black");

  // change button function
  $(".colorChangeBtn").off("click").on("click", darkMode);
  $(".colorChangeBtn").off("click").on("click", lightMode);

  // change footer github image
  $("#github-img").attr("src", "data/darkmodegithub.png");
}

// defining the function isInViewport
$.fn.isInViewport = function () {
  let elementTop = $(this).offset().top;
  let elementBottom = elementTop + $(this).outerHeight();

  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(".fadein").css("opacity", "0");

$(document).ready(function () {
  $(window).scroll(function () {
    $(".fadein").each(function (i) {
      var bottom_of_element =
        $(this).offset().top / 2 + $(this).outerHeight() / 2;
      var bottom_of_window = $(window).scrollTop() / 2 + $(window).height() / 2;

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1" }, 750);
      }
    });
  });
});

// copy to clipboard function
function copyToClipboard(text) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(text).select();
  document.execCommand("copy");
  $temp.remove();
}

// image copy to clipboard
$(document).ready(function () {
  $("#email-img").on("click", function () {
    copyToClipboard($("#email-icon").val());
    alert("Email Copied To Clipboard.");
  });
});
