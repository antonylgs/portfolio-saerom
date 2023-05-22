// Navbar's animation

function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  isVisible = elemTop <= 350 && elemBottom >= 0;
  return isVisible;
}

const sections = document.querySelectorAll("section");

const navLi = document.querySelectorAll("nav ul li");

window.onscroll = function () {
  sections.forEach((section) => {
    if (isScrolledIntoView(section)) {
      navLi.forEach((li) => {
        li.classList.remove("active");
      });
      document
        .querySelector(`nav ul li a[href="#${section.id}"]`)
        .parentElement.classList.add("active");
    }
  });
};

// Section divider's animation

const dividers = document.querySelectorAll(".section-title-divider");

dividers.forEach((element) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-left-right");
      }
    });
  });
  observer.observe(element);
});

// Academic and professional experience's animation

const educations = document.querySelectorAll(".education, .experience");

educations.forEach((element) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-positive");
      }
    });
  });
  observer.observe(element);
});
