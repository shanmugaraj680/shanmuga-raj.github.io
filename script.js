/* =========================================================
   EDIT THIS: Project data — add/remove projects here freely.
   category values used for filtering: "sql" | "python" | "powerbi" | "automation"
   ========================================================= */
const PROJECTS = [
  {
    title: "Excel Dashboard — Coffee Orders Sales Data",
    tools: ["Excel", "Dashboard", "Data Analysis"],
    category: ["powerbi"],
    desc: "Interactive Excel dashboard analyzing coffee orders, sales performance, product trends and key business metrics.",
    github: "https://github.com/shanmugaraj680/ExcelDashBoard_CoffeeOrdersSalesData"
  },
  {
    title: "Layoff Records Data Cleaning",
    tools: ["PostgreSQL", "SQL"],
    category: ["sql"],
    desc: "Cleaned and standardized a messy global layoffs dataset using SQL, including deduplication, null handling and data standardization.",
    github: "https://github.com/shanmugaraj680/Data-Cleaning-of-Layoff-Records"
  },
  {
    title: "Awesome Chocolate Sales Data Dashboard",
    tools: ["Power BI", "DAX"],
    category: ["powerbi"],
    desc: "Built an interactive Power BI sales dashboard to analyze chocolate sales performance, products, regions and key business KPIs.",
    github: "https://github.com/shanmugaraj680/Power-BI"
  },
  {
    title: "Election Data Processing Automation",
    tools: ["Python", "OCR", "Excel"],
    category: ["python", "automation"],
    desc: "Automated the extraction, cleaning and matching of electoral roll data using OCR and Python, reducing manual processing time significantly.",
    github: "https://github.com/shanmugaraj680"
  }
];

/* =========================================================
   THEME TOGGLE (dark / light) — persisted via localStorage
   ========================================================= */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
function setTheme(theme) { root.setAttribute('data-theme', theme); try { localStorage.setItem('sr-theme', theme); } catch (e) {} }
(function initTheme() { let saved = null; try { saved = localStorage.getItem('sr-theme'); } catch (e) {} const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches; setTheme(saved || (prefersLight ? 'light' : 'dark')); })();
themeToggle.addEventListener('click', () => { const current = root.getAttribute('data-theme'); setTheme(current === 'dark' ? 'light' : 'dark'); });

/* =========================================================
   STICKY NAV — background on scroll
   ========================================================= */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 40); }, { passive: true });

/* =========================================================
   MOBILE HAMBURGER MENU
   ========================================================= */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => { hamburger.classList.toggle('open'); navLinks.classList.toggle('open'); });
navLinks.querySelectorAll('a').forEach(link => { link.addEventListener('click', () => { hamburger.classList.remove('open'); navLinks.classList.remove('open'); }); });

/* =========================================================
   ACTIVE NAV HIGHLIGHTING ON SCROLL
   ========================================================= */
const sections = document.querySelectorAll('main .section, .hero');
const navItems = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const id = entry.target.getAttribute('id'); navItems.forEach(item => item.classList.toggle('active', item.dataset.section === id)); } }); }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
sections.forEach(sec => sectionObserver.observe(sec));

/* =========================================================
   TYPING ANIMATION — hero subtitle
   ========================================================= */
const typedTextEl = document.getElementById('typedText');
const typingPhrases = ["Data Analyst", "SQL | Python | Excel | Power BI", "Insight Builder", "Dashboard Designer"];
let phraseIndex = 0, charIndex = 0, isDeleting = false;
function typeLoop() {
  const current = typingPhrases[phraseIndex];
  let speed = isDeleting ? 35 : 65;
  if (!isDeleting && charIndex <= current.length) { typedTextEl.textContent = current.slice(0, charIndex); charIndex++; }
  else if (isDeleting && charIndex >= 0) { typedTextEl.textContent = current.slice(0, charIndex); charIndex--; }
  if (!isDeleting && charIndex > current.length) { isDeleting = true; speed = 1400; }
  else if (isDeleting && charIndex < 0) { isDeleting = false; phraseIndex = (phraseIndex + 1) % typingPhrases.length; charIndex = 0; speed = 300; }
  setTimeout(typeLoop, speed);
}
typeLoop();

/* =========================================================
   SCROLL REVEAL ANIMATIONS
   ========================================================= */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }); }, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

/* =========================================================
   ANIMATED STAT COUNT-UP (About section)
   ========================================================= */
const statEls = document.querySelectorAll('.stat-num');
const statObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { animateCount(entry.target); statObserver.unobserve(entry.target); } }); }, { threshold: 0.6 });
statEls.forEach(el => statObserver.observe(el));
function animateCount(el) { const target = parseInt(el.dataset.count, 10); let current = 0; const duration = 900; const stepTime = 30; const steps = duration / stepTime; const increment = target / steps; const timer = setInterval(() => { current += increment; if (current >= target) { el.textContent = target; clearInterval(timer); } else { el.textContent = Math.floor(current); } }, stepTime); }

/* =========================================================
   SKILL CARD — cursor glow effect
   ========================================================= */
document.querySelectorAll('.skill-card').forEach(card => { card.addEventListener('mousemove', (e) => { const rect = card.getBoundingClientRect(); card.style.setProperty('--mx', `${e.clientX - rect.left}px`); card.style.setProperty('--my', `${e.clientY - rect.top}px`); }); });

/* =========================================================
   PROJECTS — render + filter
   ========================================================= */
const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
function githubIcon() { return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.68.42.36.78 1.08.78 2.18v3.23c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"/></svg>`; }
function renderProjects(list) { projectsGrid.innerHTML = list.map(p => `<div class="project-card reveal visible" data-category="${p.category.join(' ')}"><h3>${p.title}</h3><div class="project-tools">${p.tools.map(t => `<span class="tool-pill">${t}</span>`).join('')}</div><p class="project-desc">${p.desc}</p><a href="${p.github}" target="_blank" rel="noopener" class="project-link">${githubIcon()} View on GitHub</a></div>`).join(''); }
renderProjects(PROJECTS);
filterButtons.forEach(btn => { btn.addEventListener('click', () => { filterButtons.forEach(b => b.classList.remove('active')); btn.classList.add('active'); const filter = btn.dataset.filter; const cards = projectsGrid.querySelectorAll('.project-card'); cards.forEach(card => { const cats = card.dataset.category.split(' '); card.classList.toggle('hidden', !(filter === 'all' || cats.includes(filter))); }); }); });

document.getElementById('year').textContent = new Date().getFullYear();
