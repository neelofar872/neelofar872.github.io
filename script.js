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
      duration: duration * 1000,
      iterations: Infinity
    }
  );
}
