const toggle = document.getElementById("toggle-btn");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  console.log(this.classList);
  if (this.classList.toggle('bi-brightness-high-fill')) {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
    body.style.transition = "1.2s";
  } else {
    body.style.backgroundColor = "#000000";
    body.style.color = "#fff";
    body.style.transition = "1.2s";
  }
});
