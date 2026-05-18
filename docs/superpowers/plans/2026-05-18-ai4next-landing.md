# ai4next Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a single-file futuristic landing page for ai4next.github.io

**Architecture:** Single `index.html` with inline CSS/JS. Canvas-based animated hero background. Google Fonts for typography. IntersectionObserver for scroll animations.

**Tech Stack:** HTML5, CSS3, Vanilla JS (Canvas API), Google Fonts (Orbitron + Inter)

---

### Task 1: Write index.html

**Files:**
- Create: `index.html`

- [ ] **Step 1: Write the complete landing page**

Deliverable: [`index.html` at project root]

Structure and content requirements:

**Head:**
- `<title>ai4next — Anchor Intelligence for the Next Era</title>`
- Google Fonts: Orbitron (weights 400,700,900) + Inter (weights 300,400,600)
- `<meta>` description>` with mission keywords
- `<meta og:title>` and `<meta og:description>` for social sharing
- Favicon: inline SVG data URI (a minimalist diamond/neural-node icon in cyan)

**Hero Section:**
- Full viewport height (`min-height: 100vh`)
- `<canvas>` background: animated 3D-ish grid with flowing particles
  - Rotating perspective grid (lines converging to vanishing point)
  - Floating particles with slow drift and subtle glow
  - Each particle is a small circle with cyan or purple color, random opacity
  - Mouse/touch movement slightly shifts the vanishing point (parallax)
- Centered content overlay:
  - `ai4next` in large Orbitron 900 weight, with text gradient cyan→purple, subtle text-shadow glow
  - Below: `Anchor Intelligence for the Next Era` in lighter weight, smaller
  - Below: mission sub-tagline `以智能技术锚定未来趋势` in Chinese, Inter font
- Bottom center: animated chevron `↓` bouncing, clicking scrolls to next section

**Mission Section:**
- Dark background slightly lighter than hero (`#0d1117`)
- Section title: "Our Mission" in Orbitron
- Full mission statement centered, max-width constrained:
  "以智能技术锚定未来趋势，赋能下一代产业、人才与生态，让 AI 真正落地普惠，驱动人类文明稳步迈向全新发展阶段。"
- Decorative horizontal gradient line (cyan→purple) above and below the text

**Directions Section (3 Cards):**
- Background: slightly different dark tint (`#0a0a0f`)
- Section title: "Our Directions"
- Three glassmorphism cards in a responsive row (→ stack on mobile):
  1. **下一代产业** (Next-Gen Industry) — AI transforming industries, with icon
  2. **下一代人才** (Next-Gen Talent) — Nurturing AI-era talent, with icon
  3. **下一代生态** (Next-Gen Ecosystem) — Building the AI ecosystem, with icon
- Each card: border 1px `rgba(0, 240, 255, 0.15)`, backdrop-filter blur, hover: cyan border glow + `transform: translateY(-8px)` + shadow increase
- Card icons: simple CSS-drawn or unicode symbols (⚡🧠🌐) sized 2rem, cyan color

**Vision Timeline Section:**
- Section title: "Our Vision"
- Horizontal timeline with 4 milestone nodes:
  1. **2024** — Foundation
  2. **2025-2026** — Incubation
  3. **2027-2028** — Scale
  4. **2030+** — Universal Intelligence
- Timeline: a horizontal gradient line (cyan→purple) with circles at each milestone
- Each node: year above, short label below, hover highlight
- On mobile: stack vertically

**Footer:**
- `color: #64748b` text, small
- GitHub link → `https://github.com/ai4next`
- Copyright `© 2026 ai4next. All rights reserved.`
- "Empowering the next era with intelligent technology"

**Global Styles:**
- `*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box }`
- `html { scroll-behavior: smooth }`
- `body { background: #0a0a0f; color: #e2e8f0; font-family: 'Inter', sans-serif; overflow-x: hidden }`
- All sections: `min-height: 100vh`, `display: flex`, `flex-direction: column`, `justify-content: center`, `align-items: center`, `padding: 4rem 2rem`, `position: relative`
- Section titles: Orbitron 700, `font-size: clamp(1.8rem, 4vw, 3rem)` with `background: linear-gradient(135deg, #00f0ff, #a855f7)`, `-webkit-background-clip: text`, `-webkit-text-fill-color: transparent`, `margin-bottom: 3rem`
- Animations: `@keyframes fadeInUp` — opacity 0→1, translateY 30→0
- Scroll-trigger: `.fade-in { opacity: 0; transform: translateY(30px); transition: all 0.8s ease }` + `.fade-in.visible { opacity: 1; transform: translateY(0) }`
- Responsive: `<meta name="viewport">`, media queries at 768px for card stacking and typography

**Canvas animation:**
- Grid: draw perspective lines from a "center point" that shifts with mouse
- Particles: 80-120 particles, random positions in 3D space, projected to 2D
- Each frame: clear, draw grid, update and draw particles
- requestAnimationFrame loop
- Resize handler

- [ ] **Step 2: Verify the file**

Run: `ls -la index.html && wc -l index.html`
Expected: File exists, >200 lines

- [ ] **Step 3: Commit and push**

```bash
git add index.html docs/superpowers/specs/2026-05-18-ai4next-landing-design.md docs/superpowers/plans/2026-05-18-ai4next-landing.md
git commit -m "feat: ai4next landing page with futuristic design"
git push origin main
```

Expected: All files committed and pushed to origin/main