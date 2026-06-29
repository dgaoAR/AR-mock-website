/* ============================================================
   Alloy River,shared site script
   Injects the header + footer on every page, handles nav state,
   scroll effects, reveal-on-scroll, and keyboard shortcuts.
   ============================================================ */

/* The wordmark, inline so it inherits currentColor (matches logo.svg). */
const LOGO = `<svg viewBox="0 0 980 150" role="img" aria-label="Alloy River" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="square" stroke-linejoin="miter" transform="translate(10,12)">
    <polygon points="0,120 86,120 43,18" fill="currentColor" stroke="none"/>
    <path d="M110,18 V120 H168"/><path d="M192,18 V120 H250"/>
    <circle cx="324" cy="70" r="50"/>
    <path d="M398,18 L438,66 M478,18 L438,66 M438,66 V120"/>
    <path d="M548,18 V120 M548,18 H595 A24,24 0 0 1 595,66 H548 M576,66 L620,120"/>
    <path d="M650,18 V120"/><path d="M680,18 L720,120 L760,18"/>
    <path d="M842,18 H784 M842,18 V120 M842,120 H784 M842,69 H800"/>
    <path d="M866,18 V120 M866,18 H913 A24,24 0 0 1 913,66 H866 M894,66 L938,120"/>
  </g></svg>`;

const NAV = [
  {label:"About",    href:"about.html"},
  {label:"Strategy", href:"strategy.html"},
  {label:"Team",     href:"team.html"},
  {label:"Careers",  href:"careers.html"},
];

const here = location.pathname.split("/").pop() || "index.html";

/* ---------- Header ---------- */
function buildHeader(){
  const links = NAV.map(n=>`<a href="${n.href}" class="${n.href===here?'active':''}">${n.label}</a>`).join("");
  const el = document.createElement("header");
  el.className = "nav";
  el.innerHTML = `
    <a class="brand" href="index.html" aria-label="Alloy River home">${LOGO}</a>
    <nav class="nav-links">${links}</nav>
    <a class="btn nav-cta" href="mailto:hi@alloyriver.com">Contact</a>
    <button class="nav-toggle" aria-label="Open menu">&#9776;</button>`;
  document.body.prepend(el);

  // mobile menu
  const menu = document.createElement("div");
  menu.className = "mobile-menu";
  menu.innerHTML = `<button class="close" aria-label="Close menu">&times;</button>
    ${NAV.map(n=>`<a href="${n.href}">${n.label}</a>`).join("")}
    <a href="mailto:hi@alloyriver.com">Contact</a>`;
  document.body.appendChild(menu);
  el.querySelector(".nav-toggle").addEventListener("click",()=>menu.classList.add("open"));
  menu.querySelector(".close").addEventListener("click",()=>menu.classList.remove("open"));

  // Ease the header in gradually over the first ~180px of scroll
  // (Morning Mist bg + blur + border + padding), instead of a hard toggle.
  const RANGE = 180;
  function onScroll(){
    const p = Math.min(scrollY / RANGE, 1);          // 0 → 1
    el.style.backgroundColor = `rgba(255,252,234,${(0.92 * p).toFixed(3)})`;
    const blur = (12 * p).toFixed(2);
    el.style.backdropFilter = el.style.webkitBackdropFilter = p ? `blur(${blur}px)` : "none";
    el.style.borderBottomColor = `rgba(63,63,63,${(0.16 * p).toFixed(3)})`;
    el.style.paddingTop = el.style.paddingBottom = (18 - 6 * p).toFixed(2) + "px";
  }
  addEventListener("scroll", onScroll, {passive:true});
  onScroll();
}

/* ---------- Footer ---------- */
function buildFooter(){
  const f = document.createElement("footer");
  f.className = "site";
  f.innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        ${LOGO}
        <p>A lasting home for finance firms: better software and shared operations, with the people who built them still in charge.</p>
      </div>
      <div class="footer-col">
        <h5>Explore</h5>
        ${NAV.map(n=>`<a href="${n.href}">${n.label}</a>`).join("")}
      </div>
      <div class="footer-col">
        <h5>Connect</h5>
        <a href="mailto:hi@alloyriver.com">hi@alloyriver.com</a>
        <a href="https://x.com/AlloyRiver">X · @AlloyRiver</a>
        <a href="https://www.linkedin.com/company/alloyriver">LinkedIn</a>
      </div>
      <div class="footer-col">
        <h5>Locations</h5>
        <p>San Francisco</p><p>Toronto</p><p>Montréal</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© Alloy River ${new Date().getFullYear()}</span>
      <span>San Francisco · Toronto · Montréal</span>
    </div>`;
  document.body.appendChild(f);
  f.querySelector(".footer-brand svg").style.height = "22px";
}

/* ---------- Reveal on scroll ---------- */
function initReveal(){
  const io = new IntersectionObserver(es=>{
    es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach((el,i)=>{el.style.transitionDelay=(i%4*60)+"ms";io.observe(el)});
}

/* ---------- Keyboard shortcuts (mirror the original site) ---------- */
function initKeys(){
  addEventListener("keydown",e=>{
    if(/input|textarea/i.test(e.target.tagName)) return;
    const k = e.key.toLowerCase();
    if(k==="c"){navigator.clipboard?.writeText("hi@alloyriver.com"); toast("Email copied");}
    if(k==="f"){location.href="mailto:hi@alloyriver.com";}
  });
}
function toast(msg){
  const t=document.createElement("div");t.textContent=msg;
  t.style.cssText="position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:var(--ink);color:var(--bg);padding:10px 20px;border-radius:999px;font-size:13px;font-weight:600;z-index:99;font-family:var(--mono)";
  document.body.appendChild(t);setTimeout(()=>t.remove(),1600);
}

document.addEventListener("DOMContentLoaded",()=>{
  buildHeader();
  buildFooter();
  initReveal();
  initKeys();
});
