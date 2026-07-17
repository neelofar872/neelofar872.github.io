// =============================
// AnimeMiniVerse Premium Script
// =============================

// Navbar Background Change

window.addEventListener("scroll",function(){

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.style.background="rgba(0,0,0,.65)";

}else{

nav.style.background="rgba(0,0,0,.35)";

}

});


// Smooth Scroll

document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener('click',function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute('href'));

target.scrollIntoView({

behavior:'smooth'

});

});

});


// Floating Cards Animation

const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.animation=`float 3s ease-in-out ${index*0.2}s infinite`;

});


// Hero Image Glow

const banner=document.querySelector(".hero-right img");

setInterval(()=>{

banner.style.filter="drop-shadow(0 0 25px gold)";

setTimeout(()=>{

banner.style.filter="drop-shadow(0 0 8px white)";

},1000);

},2000);


// Welcome Console

console.log("✨ Welcome to AnimeMiniVerse ✨");
