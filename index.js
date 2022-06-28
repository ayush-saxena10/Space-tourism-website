// To add the mobile navigation animation

const navList = document.querySelector(".nav-list");
const toggler = document.querySelector(".button-toggler");

toggler.addEventListener("click", () => {
  var dataVisibleAttribute = navList.getAttribute("data-visible");

  if (dataVisibleAttribute==="false") {
    navList.setAttribute("data-visible", "true");
    toggler.setAttribute("aria-expanded", "true");
  }
  else {
    navList.setAttribute("data-visible", "false");
    toggler.setAttribute("aria-expanded", "false");
  }
})
