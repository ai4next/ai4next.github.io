/**
 * components.js — Loads HTML components (header, footer) into the page.
 * Must be loaded before main.js.
 */
async function loadComponents() {
  const [headerHtml, footerHtml] = await Promise.all([
    fetch('/header.html').then(r => r.text()),
    fetch('/footer.html').then(r => r.text())
  ]);
  document.getElementById('header').outerHTML = headerHtml;
  document.getElementById('footer').outerHTML = footerHtml;
}