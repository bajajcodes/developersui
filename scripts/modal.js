const closeBtn = document.querySelector("#modalCloseBtn");
const modal = document.querySelector("#modal");
const modalToggler = document.querySelector("#modalToggler");
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
modalToggler.addEventListener("click", () => {
  modal.style.display = "block";
});
