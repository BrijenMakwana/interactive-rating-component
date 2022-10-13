const btn = document.getElementById("btn");
const liElements = document.querySelectorAll(".rating-li");
const displayUserRating = document.getElementById("display-user-rating");

let userRating = 0;

// add click event to each rating
liElements.forEach((li) => {
  li.addEventListener("click", (e) => {
    li.style.backgroundColor = "hsl(25, 97%, 53%)";
    userRating = li.value;
    localStorage.setItem("rating", userRating);
  });
});

displayUserRating.innerHTML = `you selected ${localStorage.getItem(
  "rating"
)} out of 5`;
