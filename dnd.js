// console.log("hi ,i am diwan reshad khan");
let top1 = document.querySelector(".top");
let less = document.querySelector(".more");
let hide = document.querySelector(".hide");
let less1 = document.querySelector("#xyz");
let hide1 = document.querySelector("#jkl");
let sp1 = document.querySelector("#sp1");
let sp2 = document.querySelector("#sp2");
let request = document.querySelector(".rbutton");
let menu = document.querySelector("#msign");
let slide = document.querySelector(".slide");
let cross = document.querySelector(".cross");
let pp=document.querySelector(".pp");
let cross2=document.querySelector(".cross2");




request.addEventListener("click", () => {
    location.href="http://127.0.0.1:5500/app.html"
    // const filepath = "C:\Users\drk82\hospital\about.html";
    // window.open(filepath);
});

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
var x = window.matchMedia("(max-width: 780px)")
const myFunction = (x) => {
    if (x.matches) { // If media query matches
        let turn1=true;
        less1.addEventListener("click", () => {
            if (turn1) {

                hide1.style.display = "inline-block";
                sp2.innerText = "less";
                turn1= false;
                console.log("success");
                document.querySelector(".service-highlights").style.height = "1500px";
                document.querySelector(".highlight2").style.height = "60%";
                document.querySelector(".highlight").style.height = "40%";
                document.querySelector(".s2img").style.height="30%";
            } else {

                hide1.style.display = "none";
                sp2.innerText = "learn more";
                turn1 = true;
                console.log("success");
                document.querySelector(".service-highlights").style.height = "1400px";
                document.querySelector(".highlight2").style.height = "50%";
                document.querySelector(".highlight").style.height = "50%";
                document.querySelector(".s2img").style.height="40%";
            }

        });
        

            let turn = true;
            less.addEventListener("click", () => {
                if (turn) {
                    hide.style.display = "inline-block";
                    sp1.innerText = "Less"
                    turn = false;
                    document.querySelector(".service-highlights").style.height = "1600px";
                    document.querySelector(".highlight").style.height = "60%";
                    document.querySelector(".highlight2").style.height = "40%";
                    document.querySelector(".service1").style.height = "70%";
                    
                    document.querySelector(".simg").style.height="27%";
                    console.log("success");
                } else {
                    hide.style.display = "none";
                    sp1.innerText = "learn more"
                    turn = true;
                    document.querySelector(".service-highlights").style.height = "1400px";
                    document.querySelector(".highlight").style.height = "50%";
                    document.querySelector(".highlight2").style.height = "50%";
                    document.querySelector(".service1").style.height = "50%";
                    document.querySelector(".simg").style.height="40%";
                    console.log("success");
                }
    
    
            });
        
    }
    else{

        let turn = true;
        less.addEventListener("click", () => {
            if (turn) {
                hide.style.display = "inline-block";
                sp1.innerText = "Less"
                turn = false;
                console.log("success");
            } else {
                hide.style.display = "none";
                sp1.innerText = "learn more"
                turn = true;
                console.log("success");
            }
        
        
        });
        
        
        less1.addEventListener("click", () => {
            if (hide1.style.display === "none") {
        
                hide1.style.display = "inline-block";
                sp2.innerText = "less";
                // turn1= false;
                console.log("success");
            } else {
        
                hide1.style.display = "none";
                sp2.innerText = "learn more";
                // turn1 = true;
                console.log("success");
            }
        
        });
    }
}


myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", () => {
    myFunction(x);
});
pp.addEventListener("click",()=>{
    document.querySelector(".privacy").style.display="block";
});
cross2.addEventListener("click",()=>{
    document.querySelector(".privacy").style.display="none";
})