const changeparent = document.querySelector(".changeparent");
const change = document.querySelector(".change");
const change1 = document.querySelector(".change1");
const imgcontainer = document.querySelector(".imgcontainer");
const imageUrls = ["landing2.webp", "landing3.webp","landing4.webp","landing5.webp","landing6.webp","landing7.webp","landing8.webp","landing.webp"]; // Add more image URLs as needed
let currentImageIndex = 0; // Variable to keep track of the current image index
change.addEventListener("click", () => {
    imgcontainer.classList.remove("imgcontainer");
    change1.classList.remove("change1");
    imgcontainer.style.backgroundImage = `url("${imageUrls[currentImageIndex]}")`;
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    imgcontainer.classList.add("changeparent");
});


const menu=document.querySelector(".menu");
const topnav=document.querySelector(".topnav");
const home =document.querySelector(".top1");
let bar="true";
menu.addEventListener("click",()=>{
    if(bar==="true"){
        bar="false";

        home.classList.remove("top1");
    }
else
    {
  bar="true";
        home.classList.add("top1");
    }
});



    // if (mode === "light") {
    //     mode = "dark";


    //     box.classList.add("dark");
    //     box.classList.remove("light");


    // }
    // else {
    //     mode = "light";

    //     box.classList.add("light");
    //     box.classList.remove("dark");

    // }







