// Get las modification
document.getElementById("lastModified").innerHTML = document.lastModified;
//Get current year
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;
// Add items to the select option
const reviewsDisplay = document.querySelector(".reviews");

const numReviews = Number(localStorage.getItem("reviews-ls")) || 0;

reviewsDisplay.textContent = numReviews;