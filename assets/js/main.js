/**
 * main.js — Canvas hero background + scroll animations + i18n init
 * Depends on: components.js (loadComponents must resolve first)
 */
(async function init() {
  await loadComponents();

  // ===== i18n: apply saved language =====
  const savedLang = getSavedLang();
  applyLanguage(savedLang);

  // ===== Scroll-linked nav style =====
  const headerEl = document.getElementById('siteHeader');
  if (headerEl) {
    window.addEventListener('scroll', () => {
      headerEl.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // ===== Canvas Hero Background =====
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  let mouseX = 0, mouseY = 0;
  const particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', e => {
    mouseX = (e.clientX / W - .5) * 2;
    mouseY = (e.clientY / H - .5) * 2;
  });
  window.addEventListener('touchmove', e => {
    if (e.touches[0]) {
      mouseX = (e.touches[0].clientX / W - .5) * 2;
      mouseY = (e.touches[0].clientY / H - .5) * 2;
    }
  }, { passive: true });

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = (Math.random() - .5) * 2;
      this.y = (Math.random() - .5) * 2;
      this.z = Math.random() * 2;
      this.size = Math.random() * 2 + .5;
      this.speed = Math.random() * .003 + .001;
      this.opacity = Math.random() * .6 + .3;
      this.hue = Math.random() > .5 ? 180 : 270;
    }
    update() { this.z -= this.speed; if (this.z <= 0) this.reset(); }
    project() {
      const fov = 3, scale = fov / (fov + this.z);
      const px = (this.x + mouseX * .15) * scale * W * .4 + W / 2;
      const py = (this.y + mouseY * .15) * scale * H * .4 + H / 2;
      const size = this.size * scale * 2;
      return { x: px, y: size > .3 ? py : -999, size, opacity: this.opacity * scale };
    }
  }

  for (let i = 0; i < 100; i++) particles.push(new Particle());

  function drawGrid() {
    ctx.strokeStyle = 'rgba(8, 145, 178, 0.06)';
    ctx.lineWidth = 1;
    const cx = W / 2 + mouseX * 40, cy = H / 2 + mouseY * 40, spacing = 60, count = 20;
    for (let i = -count; i <= count; i++) {
      ctx.beginPath(); ctx.moveTo(cx + i * spacing, 0); ctx.lineTo(cx + (i * spacing * .3), H); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, cy + i * spacing); ctx.lineTo(W, cy + (i * spacing * .3)); ctx.stroke();
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    drawGrid();
    particles.forEach(p => {
      p.update();
      const proj = p.project();
      if (proj.y < 0) return;
      const color = p.hue === 180 ? `rgba(8, 145, 178, ${proj.opacity})` : `rgba(168, 85, 247, ${proj.opacity})`;
      ctx.beginPath();
      ctx.arc(proj.x, proj.y, Math.max(proj.size, .5), 0, Math.PI * 2);
      ctx.fillStyle = color; ctx.fill();
      if (proj.size > 1.5) {
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.hue === 180 ? 'rgba(8, 145, 178, .2)' : 'rgba(168, 85, 247, .2)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    });
    requestAnimationFrame(draw);
  }
  draw();

  // ===== Scroll Animation =====
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: .15, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
})();