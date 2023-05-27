const menu = document.querySelector(".header__menu-icon");
const header = document.querySelector(".header-bg");
menu.addEventListener("click", () => {
  header.classList.toggle("active");
});

const nav = document.querySelector(".header__nav");
const navObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      nav.classList.add("active");
    }
    else{
      nav.classList.remove("active");
    }
  });
}, { root: null, rootMargin: "-100px", threshold: 0 });

navObserver.observe(header);