// Get las modification
document.getElementById("lastModified").innerHTML = document.lastModified;
//Get current year
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;
// Add items to the select option
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function createOption(products){
const container = document.querySelector("#pname")
//container.innerHTML="";

products.forEach(element => {
    
    let product = document.createElement("option")
    product.setAttribute("value", element.name)
    product.textContent=element.name;

    container.append(product);
});
}

createOption(products);

//Visits 
const reviewForm = document.querySelector("#reviewform");

reviewForm.addEventListener("submit", () => {
    
    let numReviews = Number(localStorage.getItem("reviews-ls")) || 0;

  
    numReviews++;
    
    localStorage.setItem("reviews-ls", numReviews);
});