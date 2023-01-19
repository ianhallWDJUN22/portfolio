document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("portfolio JS imported successfully!");
  },
  false
);

//This function makes the text in the "About" section slide
//up into view apon scrolling down and disapear when scrolling back up

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 70;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);



// Below are the functions to display the info of an individual project when that project is hovered over.
// A CSS relational hover: tag would not work in this case as the divs were not connected


const mediaQuery = window.matchMedia('(min-width: 1061px)')



document.getElementById("project1").onmouseover = function () {
  
  if (mediaQuery.matches) {
  mouseOver();
  }
};
document.getElementById("project1").onmouseout = function () {
  mouseOut();
};

function mouseOver() {
  document.getElementById("info1").style.display = "block";
}

function mouseOut() {
  document.getElementById("info1").style.display = "none";
}




document.getElementById("project2").onmouseover = function () {
  if (mediaQuery.matches) {
  mouseOver2();
  }
};
document.getElementById("project2").onmouseout = function () {
  mouseOut2();
};

function mouseOver2() {
  document.getElementById("info2").style.display = "block";
}

function mouseOut2() {
  document.getElementById("info2").style.display = "none";
}




document.getElementById("project3").onmouseover = function () {
  if (mediaQuery.matches) {
  mouseOver3();
  }
};
document.getElementById("project3").onmouseout = function () {
  mouseOut3();
};

function mouseOver3() {
  document.getElementById("info3").style.display = "block";
}

function mouseOut3() {
  document.getElementById("info3").style.display = "none";
}
