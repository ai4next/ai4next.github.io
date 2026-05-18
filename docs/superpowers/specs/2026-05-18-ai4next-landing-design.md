# ai4next.org GitHub Pages — Landing Page Design

**Date:** 2026-05-18
**Status:** Approved

## Overview

Single-page HTML landing page for ai4next organization GitHub Pages site. Hosted at `https://ai4next.github.io`.

## Design Language: Future Tech

- **Palette:** Deep black (`#0a0a0f`) base, cyan (`#00f0ff`) primary, electric purple (`#7c3aed` → `#a855f7`) accent, slate (`#94a3b8`) for body text
- **Typography:** Orbitron (headings/logos) + Inter (body) — geometric sci-fi meets modern readability
- **Atmosphere:** Dark, immersive, glowing, minimal — like a tech startup's vision deck

## Sections

1. **Hero** — Full-screen Canvas grid-particle background, glowing org name, mission tagline, scroll-down chevron
2. **Mission** — The org's purpose statement, centered with decorative dividers
3. **Directions** — Three glassmorphism cards: Next-Gen Industry, Next-Gen Talent, Next-Gen Ecosystem. Hover glow + lift
4. **Vision** — Horizontal timeline with milestones showing ai4next's forward-looking roadmap
5. **Footer** — Contact / GitHub link / copyright

## Interactions

- Canvas-based animated grid + particle system (Hero background)
- Scroll-triggered fade-in-up via IntersectionObserver
- Card hover: neon border glow + transform lift
- Smooth scrolling between sections

## Technical Constraints

- Single `index.html` with inline CSS/JS — zero build step
- Google Fonts via CDN (Orbitron, Inter)
- Push to `main` → auto-deployed by GitHub Pages