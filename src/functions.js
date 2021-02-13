// const moreAboutMeSection = document.getElementById(".moreAboutMeSection");

function showMoreAboutMe() {
  document.getElementById("moreAboutMeSection").style.display = "grid";
  document.getElementById("showLessAboutMeBtn").style.display = "block";
  document.getElementById("about").style.margin = "30px 0px";
  document.getElementById("showMoreAboutMeBtn").style.display = "none";
}

function showLessAboutMe() {
  document.getElementById("moreAboutMeSection").style.display = "none";
  document.getElementById("showMoreAboutMeBtn").style.display = "block";
  document.getElementById("about").style.margin = "40px 0px";
  document.getElementById("about").style.margin = null;
  document.getElementById("showLessAboutMeBtn").style.display = "none";
}

function showContactform() {
  document.getElementById("contact-form").style.display = "flex";
}

window.onload = function () {
  var url = window.location.pathname;
  var searchParams = window.location.search;
  if (searchParams.includes("Successfully+Sent")) {
    alert("Message Sent!");
  } else if (searchParams.includes("Email+could+not+be+sent")) {
    alert("Sorry something went wrong there. Please try again!");
  }
};
