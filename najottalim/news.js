const loader = document.querySelector(".loader");
window.addEventListener('DOMContentLoaded', () => {
  loader.style.display = 'none';
})

const bodyItem = document.querySelector('body');
const themebtn = document.querySelector(".themebtn");
const sunIcon = document.querySelector(".fa-sun");

themebtn.addEventListener("click", () => {
  bodyItem.classList.toggle("darktheme");
  if (sunIcon.classList.contains("fa-sun")) {
    sunIcon.classList.remove("fa-sun");
    sunIcon.classList.add("fa-moon", "rotate180"); // add "rotate180" class here
  } else {  
    sunIcon.classList.remove("fa-moon", "rotate180"); // remove "rotate180" class here
    sunIcon.classList.add("fa-sun");
  }
})


league1.forEach((i) => {
  i.addEventListener("click", () => {
    league1.forEach((t) => t.classList.remove("active"));
    i.classList.add("active");
  });
});

league2.forEach((i) => {
  i.addEventListener("click", () => {
    league2.forEach((t) => t.classList.remove("active"));
    i.classList.add("active");
  });
});