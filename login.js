let less = document.querySelector(".more");
let hide = document.querySelector(".hide");
let less1 = document.querySelector("#xyz");
let hide1 = document.querySelector("#jkl");
let sp1 = document.querySelector("#sp1");
let sp2 = document.querySelector("#sp2");
let request = document.querySelector(".r-button");
let menu = document.querySelector("#msign");
let slide = document.querySelector(".slide");
let cross = document.querySelector(".cross");
let cross1 = document.querySelector(".cross1");
let sign=document.querySelector(".signup");

menu.addEventListener("click", () => {
    slide.style.right = "0vw";
});
cross.addEventListener("click", () => {
    slide.style.right = "-35vw";
});

sign.addEventListener("click",()=>{
    document.querySelector(".form").style.display="block";
});
cross1.addEventListener("click",()=>{
    document.querySelector(".form").style.display="none";
});
