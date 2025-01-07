let top1 = document.querySelector(".top");
let menu = document.querySelector("#msign");
let slide = document.querySelector(".slide");
let cross = document.querySelector(".cross");

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        top1.style.display = "block";


    } else {
        top1.style.display = "none";
    }
};
top1.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    top1.style.transition = "all 0.5s";
});

menu.addEventListener("click", () => {
    slide.style.right = "0vw";
});
cross.addEventListener("click", () => {
    slide.style.right = "-35vw";
});