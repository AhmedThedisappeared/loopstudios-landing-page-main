let toggler =document.querySelector(".navbar-toggler");
let navbarCollapse =document.querySelector(".navbar-collapse");
let head=document.querySelector(".head");
let intro =document.querySelector(".intro");

toggler.addEventListener("click",function(e){
    if(toggler.getAttribute("src")==="images/icon-hamburger.svg"){
        toggler.setAttribute("src","images/icon-close.svg");
    } else {
        toggler.setAttribute("src","images/icon-hamburger.svg");
    }
    navbarCollapse.classList.toggle("show");
    head.classList.toggle("bg-black");
    intro.classList.toggle("hidde");
});
