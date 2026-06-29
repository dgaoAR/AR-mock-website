/* ============================================================
   Alloy River, shared site script
   Injects the header + footer on every page, handles nav state,
   scroll effects, reveal-on-scroll, and keyboard shortcuts.
   ============================================================ */

/* The Alloy River wordmark, inline so it can be sized via CSS (fill is the brand green). */
const LOGO = `<svg viewBox="0 0 227 37" role="img" aria-label="Alloy River" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M204.344 28.2759V8H211.869C213.284 8 214.504 8.24948 215.53 8.74844C216.564 9.2474 217.358 9.95955 217.911 10.8849C218.473 11.8012 218.755 12.8898 218.755 14.1508C218.755 15.4118 218.455 16.505 217.856 17.4303C217.267 18.3557 216.441 19.0678 215.38 19.5668C214.318 20.0658 213.085 20.3152 211.678 20.3152H205.705V18.138H211.815C212.749 18.138 213.552 17.9792 214.223 17.6617C214.904 17.3351 215.425 16.8724 215.788 16.2737C216.151 15.6749 216.332 14.9673 216.332 14.1508C216.332 13.3253 216.146 12.6176 215.774 12.028C215.412 11.4383 214.89 10.9847 214.21 10.6672C213.538 10.3406 212.731 10.1773 211.787 10.1773H206.793V28.2759H204.344ZM216.142 28.2759L211.243 19.1586H214.019L219 28.2759H216.142Z" fill="#156A46"/>
<path d="M197.277 10.1777H193.889V18.9814H186.541V26.0986H197.277V28.2764H184.092V8H197.277V10.1777Z" fill="#156A46"/>
<path d="M167.539 28.2759L159.207 8H161.793C162.028 8.66226 168.548 24.2993 168.911 25.4152C169.283 26.522 168.755 25.391 169.308 27.0784H168.628C169.163 25.391 168.454 26.7542 168.826 25.6474C169.198 24.5316 175.781 8.66226 176.008 8H178.566L170.315 28.2759H167.539Z" fill="#156A46"/>
<path d="M152.85 8V28.2759H150.4V8H152.85Z" fill="#156A46"/>
<path d="M135.406 8C136.821 8.00005 138.041 8.24918 139.066 8.74805C140.101 9.24701 140.895 9.95942 141.448 10.8848C142.011 11.8009 142.291 12.8896 142.291 14.1504C142.291 15.4114 141.992 16.5053 141.394 17.4307C140.804 18.3558 139.978 19.0675 138.917 19.5664C138.617 19.7073 138.303 19.8257 137.976 19.9268L142.536 28.2764H139.679L135.399 20.3105C135.338 20.3115 135.277 20.3154 135.215 20.3154H130.33V28.2764H127.881V8H135.406ZM134.17 18.1377H135.352C136.286 18.1377 137.089 17.9795 137.76 17.6621C138.44 17.3355 138.962 16.8722 139.325 16.2734C139.688 15.6747 139.869 14.9667 139.869 14.1504C139.869 13.3252 139.683 12.6178 139.312 12.0283C138.949 11.4386 138.426 10.9845 137.746 10.667C137.075 10.3405 136.268 10.1777 135.324 10.1777H134.17V18.1377Z" fill="#156A46"/>
<path d="M103.848 17.5752L110.681 8.08105H113.229L105.094 19.5771V28.2783H102.655V19.5791L94.5215 8.08105H97.0693L103.848 17.5752Z" fill="#156A46"/>
<path d="M79.6475 8.01074C85.4307 8.01074 90.1191 12.6992 90.1191 18.4824C90.1191 24.2657 85.4307 28.9541 79.6475 28.9541C73.8643 28.954 69.1758 24.2656 69.1758 18.4824C69.1759 12.6993 73.8643 8.01083 79.6475 8.01074ZM79.6475 10.3848C75.1755 10.3849 71.5499 14.0105 71.5498 18.4824C71.5498 22.9544 75.1755 26.58 79.6475 26.5801C84.1195 26.5801 87.7451 22.9545 87.7451 18.4824C87.745 14.0104 84.1195 10.3848 79.6475 10.3848Z" fill="#156A46"/>
<path d="M52.1973 28.2759V8H54.6467V26.0986H64.4172V28.2759H52.1973Z" fill="#156A46"/>
<path d="M32.7988 28.2759V8H35.2483V26.0986H45.0188V28.2759H32.7988Z" fill="#156A46"/>
<path d="M25.6631 28.2754H8L15.4844 8H18.2607L25.6631 28.2754ZM16.8711 10.3018C16.49 11.4905 16.1656 12.4888 15.8926 13.2939C15.5479 14.3278 15.2307 15.2484 14.9404 16.0557L13.3789 20.4102H20.3086L18.791 16.0557C18.5099 15.2484 18.1926 14.3278 17.8389 13.2939C17.5728 12.4887 17.2507 11.4908 16.8711 10.3018Z" fill="#156A46"/>
</svg>`;

/* Compact AR symbol (monogram) for the footer. */
const SYMBOL = `<svg viewBox="0 0 53 53" role="img" aria-label="Alloy River" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.6631 36.2764H8L15.4844 16.001H18.2607L25.6631 36.2764ZM16.8711 18.3027C16.49 19.4915 16.1656 20.4898 15.8926 21.2949C15.5479 22.3288 15.2307 23.2494 14.9404 24.0566L13.3789 28.4111H20.3086L18.791 24.0566C18.5099 23.2494 18.1926 22.3288 17.8389 21.2949C17.5728 20.4897 17.2507 19.4917 16.8711 18.3027Z" fill="#156A46"/>
<path d="M37.1895 16C38.6044 16.0001 39.8246 16.2492 40.8496 16.748C41.8838 17.247 42.6781 17.9594 43.2314 18.8848C43.7938 19.8009 44.0742 20.8896 44.0742 22.1504C44.0742 23.4114 43.7755 24.5053 43.1768 25.4307C42.5872 26.3558 41.7614 27.0675 40.7002 27.5664C40.4005 27.7073 40.0859 27.8257 39.7588 27.9268L44.3193 36.2764H41.4619L37.1826 28.3105C37.1216 28.3115 37.0598 28.3154 36.998 28.3154H32.1133V36.2764H29.6641V16H37.1895ZM35.9531 26.1377H37.1348C38.0689 26.1377 38.8718 25.9795 39.543 25.6621C40.2234 25.3355 40.7455 24.8722 41.1084 24.2734C41.4712 23.6747 41.6523 22.9667 41.6523 22.1504C41.6523 21.3252 41.4665 20.6178 41.0947 20.0283C40.7318 19.4386 40.2097 18.9845 39.5293 18.667C38.858 18.3405 38.0507 18.1777 37.1074 18.1777H35.9531V26.1377Z" fill="#156A46"/>
</svg>`;

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
    <div class="nav-inner">
      <a class="brand" href="index.html" aria-label="Alloy River home">${LOGO}</a>
      <nav class="nav-links">${links}</nav>
      <a class="btn nav-cta" href="mailto:hi@alloyriver.com">Contact</a>
      <button class="nav-toggle" aria-label="Open menu">&#9776;</button>
    </div>`;
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
        ${SYMBOL}
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
  f.querySelector(".footer-brand svg").style.height = "32px";
}

/* ---------- Reveal on scroll ---------- */
function initReveal(){
  const io = new IntersectionObserver(es=>{
    es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach((el,i)=>{el.style.transitionDelay=(i%4*60)+"ms";io.observe(el)});
}

document.addEventListener("DOMContentLoaded",()=>{
  buildHeader();
  buildFooter();
  initReveal();
});
