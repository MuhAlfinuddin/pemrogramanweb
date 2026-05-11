window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;

  const bubbleInterval = setInterval(() => {
    const b = document.createElement('div');
    const size = 4 + Math.random() * 10;
    b.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(96,165,250,.12);
      border: 1px solid rgba(96,165,250,.2);
      width: ${size}px;
      height: ${size}px;
      left: ${15 + Math.random() * 70}%;
      bottom: ${-size}px;
      animation: bubbleFloat ${4 + Math.random() * 5}s linear forwards;
      pointer-events: none;
    `;
    loader.appendChild(b);
    setTimeout(() => b.remove(), 9000);
  }, 700);


  setTimeout(() => {
    clearInterval(bubbleInterval);
    loader.classList.add("hide");
  }, 1000);
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(5,8,22,.75)";
    navbar.style.border = "1px solid rgba(255,255,255,.12)";
    navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,.45)";
  } else {
    navbar.style.background = "rgba(255,255,255,0.05)";
    navbar.style.border = "1px solid rgba(255,255,255,.08)";
    navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,.35)";
  }
});

const heroCard = document.querySelector(".hero-card");

if (heroCard) {
  heroCard.addEventListener("mousemove", (e) => {
    const rect = heroCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / 18) * -1;
    const rotateY = (x - centerX) / 18;

    heroCard.style.animation = "none"; // pause float saat hover
    heroCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  heroCard.addEventListener("mouseleave", () => {
    // FIX: reset dengan nilai valid, lalu kembalikan animasi float
    heroCard.style.transform = "rotateX(0deg) rotateY(0deg)";
    setTimeout(() => {
      heroCard.style.animation = "";
    }, 300);
  });
}

const cards = document.querySelectorAll(".koi-card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / 20) * -1;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });

  // FIX: pakai `card` bukan `heroCard`
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px)";
  });
});