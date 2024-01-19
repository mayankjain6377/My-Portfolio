const changeparent = document.querySelector(".changeparent");
const change = document.querySelector(".change");
const change1 = document.querySelector(".change1");
const imgcontainer = document.querySelector(".imgcontainer");
const imageUrls = ["landing2.jpg", "landing3.jpg","landing4.jpg","landing5.jpg","landing6.jpg","landing7.jpg","landing8.jpg","landing.jpg"]; // Add more image URLs as needed
let currentImageIndex = 0; // Variable to keep track of the current image index
change.addEventListener("click", () => {
    imgcontainer.classList.remove("imgcontainer");
    change1.classList.remove("change1");
    imgcontainer.style.backgroundImage = `url("${imageUrls[currentImageIndex]}")`;
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    imgcontainer.classList.add("changeparent");
});







