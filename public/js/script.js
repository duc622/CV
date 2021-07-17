const body = document.querySelector("body")
const switchBtn = document.querySelector(".slider")
const github = document.querySelector("#github")
const facebook = document.querySelector("#facebook")
const loading = document.querySelector(".loading")
const content = document.querySelector(".content")
const dropdownItem = document.querySelectorAll(".drop")
const title = document.querySelectorAll(".title")
const backToTop = document.querySelector("#back-to-top")
const menu = document.querySelector("#menu")
const img = document.querySelectorAll("img")
//
document.addEventListener("scroll", () => {
  if (isInViewport(title[2])) {
    title[2].style.visibility = "visible"
    title[2].classList.add("animate__fadeInDown")
  }
  img.forEach(element => {
    if (isInViewport(element)) {
      element.style.visibility = "visible"
      element.classList.add("animate__fadeInUp")
    }
  });
})
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})
for (let i = 0; i < dropdownItem.length; i++) {
  title[i].addEventListener("click", () => {
    title[i].scrollIntoView(true);
  })
}
for (let i = 0; i < dropdownItem.length; i++) {
  dropdownItem[i].addEventListener("click", () => {
    title[i].scrollIntoView(true);
  })
}
$(document).ready(() => {
  setTimeout(() => {
    loading.style.display = "none"
    content.style.display = "block"
  }, 1000)

})
switchBtn.addEventListener("click", () => {
  let className = body.className
  if (className == "dark-mode") {
    body.className = "light-mode"
    github.classList.remove("btn-light")
    github.classList.add("btn-dark")
    facebook.classList.remove("btn-light")
    facebook.classList.add("btn-dark")
    backToTop.classList.remove("btn-light")
    backToTop.classList.add("btn-dark")
    menu.classList.remove("btn-light")
    menu.classList.add("btn-dark")
  }
  else {
    body.className = "dark-mode"
    github.classList.remove("btn-dark")
    github.classList.add("btn-light")
    facebook.classList.remove("btn-dark")
    facebook.classList.add("btn-light")
    backToTop.classList.remove("btn-dark")
    backToTop.classList.add("btn-light")
    menu.classList.remove("btn-dark")
    menu.classList.add("btn-light")

  }
})