"use strict";

const bodyItem = document.querySelector('body');
const league1 = document.querySelectorAll(".league1");
const league2 = document.querySelectorAll(".league2");
const themebtn = document.querySelector(".themebtn");

themebtn.addEventListener("click", () => {
  bodyItem.classList.toggle("changeTheme");
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
