const programs = [
  { name: "Muay Thai", tag: "The Art of Eight Limbs", img: "assets/program-muaythai.jpg", desc: "Elbows, knees, fists, and shins. Sharpen the most complete striking art on the planet." },
  { name: "Kickboxing", tag: "Cardio meets Combat", img: "assets/program-kickboxing.jpg", desc: "High-output striking that builds conditioning, power, and confidence — fast." },
  { name: "Jiu Jitsu", tag: "The Gentle Art", img: "assets/program-jiujitsu.jpg", desc: "Leverage beats strength. Learn to control any fight from any position." },
  { name: "Boxing", tag: "The Sweet Science", img: "assets/program-boxing.jpg", desc: "Footwork, head movement, hands. The fundamentals that make every fighter better." },
];

const grid = document.getElementById("program-grid");
grid.innerHTML = programs.map(p => `
  <article class="program-card">
    <img src="${p.img}" alt="${p.name} training" loading="lazy" />
    <div class="program-body">
      <p class="program-tag">${p.tag}</p>
      <h3>${p.name}</h3>
      <p class="program-desc">${p.desc}</p>
    </div>
  </article>
`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

// Smooth-scroll offset for fixed header is handled by CSS scroll-behavior.
