// ===============================
// AnimeMiniVerse Premium Effects
// ===============================

// Navbar Background on Scroll

window.addEventListener("scroll", () => {

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.style.background="rgba(15,23,42,.85)";

}else{

nav.style.background="rgba(0,0,0,.35)";

}

});

// Smooth Scroll

document.querySelectorAll('nav a').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Hero Image Floating

const heroImage=document.querySelector(".hero-image img");

setInterval(()=>{

heroImage.classList.toggle("floating");

},2500);

console.log("✨ AnimeMiniVerse Loaded Successfully ✨");
