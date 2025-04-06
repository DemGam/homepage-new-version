"use strict";

window.addEventListener("load", function () {
  var elem = document.querySelector(".game-collection");
  var msnry = new Masonry(elem, {
    itemSelector: ".game-item",
    columnWidth: ".grid-sizer",
    gutter: ".gutter-sizer",
    percentPosition: true,
  });

  const the_animation = document.querySelectorAll(".animated");

  if (the_animation.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animation");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    for (let i = 0; i < the_animation.length; i++) {
      const elements = the_animation[i];
      observer.observe(elements);
    }
  }

  const emailInput = document.getElementById("emailInput");
  const errorMessage = document.getElementById("error-message");

  document
    .getElementById("emailForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const emailValue = emailInput.value;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (!emailPattern.test(emailValue)) {
        errorMessage.style.display = "block";
        emailInput.classList.add("error");
      } else {
        errorMessage.style.display = "none";
        emailInput.classList.remove("error");
        console.log("Subscribed");
      }
    });

  emailInput.addEventListener("focus", function () {
    errorMessage.style.display = "none";
    emailInput.classList.remove("error");
  });
});
