const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav_item"),
  header = document.getElementById("header");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav_menu--open");
  changeIcon();
});

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav_menu--open")) {
      navMenu.classList.remove("nav_menu--open");
    }
    changeIcon();
  });
});

function changeIcon() {
  if (navMenu.classList.contains("nav_menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// copy button
function copyText() {
  navigator.clipboard.writeText
    ("achernova@ucsd.edu");
}

// scroll
const scroll_animation = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 250,
  reset: false,
});

scroll_animation.reveal(".home_content, .about_content");
scroll_animation.reveal(".flower_img", { origin: "top" });

scroll_animation.reveal(
  ".home_info-wrapper, .skills_title, .skills_list, .experience_name, .experience_item, .service_card, .project_content, .testimonial_wrapper, .footer_content",
  { delay: 250, interval: 100 }
);

scroll_animation.reveal(".experience_footer-text, .contact_content", { origin: "left", });

scroll_animation.reveal(".experience_footer .btn, .contact_btn", { origin: "right" });