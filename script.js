// Welcome message
window.addEventListener("load", () => {
  console.log("Welcome to AnimeMiniVerseCartoons!");
});

// Fade-in animation on scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.8s ease";
  observer.observe(card);
});

// Floating stars
for (let i = 0; i < 40; i++) {
  const star = document.createElement("div");
  star.className = "star";

  star.style.position = "fixed";
  star.style.width = "3px";
  star.style.height = "3px";
  star.style.background = "white";
  star.style.borderRadius = "50%";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.opacity = Math.random();

  document.body.appendChild(star);

  let duration = 6 + Math.random() * 8;

  star.animate(
    [
      { transform: "translateY(0px)" },
      { transform: "translateY(-120px)" }
    ],
    {
      duration: duration * 1000,/* ===========================
   AnimeMiniVerse Premium JS
=========================== */

// Smooth fade-in animation
const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section,.card").forEach((el)=>{

observer.observe(el);

});

// ===========================
// Floating Sparkles
// ===========================

function createSparkle(){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=Math.random()*window.innerWidth+"px";

sparkle.style.top=window.innerHeight+"px";

sparkle.style.animationDuration=(3+Math.random()*4)+"s";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},7000);

}

setInterval(createSparkle,400);

// ===========================
// Typing Effect
// ===========================

const title=document.querySelector(".hero h1");

if(title){

const text=title.innerText;

title.innerText="";

let i=0;

function type(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(type,70);

}

}

type();

}

// ===========================
// Navbar Shadow on Scroll
// ===========================

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

nav.style.boxShadow="none";

}

});

// ===========================
// Card Hover Glow
// ===========================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;

const y=e.offsetY;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,.25),
rgba(255,255,255,.12))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.12)";

});

});
      iterations: Infinity
    }
  );
}
