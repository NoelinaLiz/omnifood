"use strict";
//Selecting elements
const header = document.querySelector(".header");
const openMenu = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-icon");
const allLinks = document.querySelectorAll("a:link");

// ------ MOBILE MENU INTERACTIONS --------
// Open
openMenu.addEventListener("click", function () {
  header.classList.add("nav-open");
});

// Close
closeMenu.addEventListener("click", function () {
  header.classList.remove("nav-open");
});

//Smooth Scrolling

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    /*e.preventDefault();*/
    const href = link.getAttribute("href");

    //Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
    //Scroll to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //Scroll to Views
    /*if (href !=== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelectorAll(href);
      
      sectionEl.scrollIntoView({
        behavior:"smooth";
      });
    }*/
  });
});
// -------- STICKY NAVIGATION ----------
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);

//Greeting
console.log(
  "%c Hello there! 👋🏻 I'm Noeliza. Omnifood is a fictional food subscription company that offers healthy meals, 365 days per year. This project was part of an HTML & CSS online course 💻",
  "color:green"
);
