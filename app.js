let top1 = document.querySelector(".top");
let menu = document.querySelector("#msign");
let slide = document.querySelector(".slide");
let cross = document.querySelector(".cross");
let scroll=document.querySelector("#scroll");

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        top1.style.display = "block";


    } else {
        top1.style.display = "none";
    }
};

scroll.addEventListener("click",()=>{
    window.scrollTo (0,550);
    // window.scrollTo (0,300)
});
top1.addEventListener("click", () => {
    // document.documentElement.scrollTop.style.transition = "all 3s";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
menu.addEventListener("click", () => {
    slide.style.right = "0vw";
});
cross.addEventListener("click", () => {
    slide.style.right = "-35vw";
});
let pp=document.querySelector(".pp");
let cross2=document.querySelector(".cross2");
pp.addEventListener("click",()=>{
    document.querySelector(".privacy").style.display="block";
});
cross2.addEventListener("click",()=>{
    document.querySelector(".privacy").style.display="none";
})