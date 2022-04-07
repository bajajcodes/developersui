let stars;
document.addEventListener("DOMContentLoaded", () => {
  stars = document.querySelectorAll(".reviewStars span");

  stars.forEach((item) => {
    item.addEventListener("click", function () {
      var rating = this.getAttribute("data-rating");
      return SetRatingStar(rating, stars);
    });
  });
});

function SetRatingStar(rating, stars) {
  let len = stars.length;

  for (var i = 0; i < len; i++) {
    if (i < rating) {
      stars[i].style.color = "darkorange";
    } else {
      stars[i].style.color = "black";
    }
  }
}
