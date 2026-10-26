(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`AryansArcade`,shortName:`AA`,tagline:`Personal Builder Ecosystem & Digital Storefront`,founder:`Aryan`,founderFullName:`Aryan Singh`,description:`Independent software builder crafting production-grade developer tools, AI applications, web systems, and digital storefronts with architectural restraint.`,domain:`aryansarcade.in`,email:`hello@aryansarcade.in`,navLinks:[{label:`Work`,path:`#/work`},{label:`Products`,path:`#/products`},{label:`Services`,path:`#/services`},{label:`Content`,path:`#/content`},{label:`Newsletter`,path:`#/newsletter`},{label:`About`,path:`#/about`}],footerLinks:[{label:`Work`,path:`#/work`},{label:`Products`,path:`#/products`},{label:`Services`,path:`#/services`},{label:`Content`,path:`#/content`},{label:`Newsletter`,path:`#/newsletter`},{label:`About`,path:`#/about`},{label:`Support`,path:`#/support`},{label:`Contact`,path:`#/contact`}],socials:{github:{label:`GitHub`,url:`https://github.com/greedilearner`,handle:`@greedilearner`},linkedin:{label:`LinkedIn`,url:`https://www.linkedin.com/in/aryan-singh-709020205/`,handle:`Aryan Singh`},instagram:{label:`Instagram`,url:`https://www.instagram.com/aryansarcade/`,handle:`@aryansarcade`},x:{label:`X`,url:`https://x.com/Aryansarcde`,handle:`@Aryansarcde`},youtube:null}},t=[`All`,`Apps`,`AI Tools`,`Automations`,`Websites`,`Digital Products`],n=[],r=[`All`,`Websites`,`Apps`,`Automation`],i=[{id:`spinpath`,slug:`spinpath`,title:`Spinpath`,kicker:`Spin a topic, learn it, say it out loud.`,category:`Websites`,year:`2026`,status:`Live`,description:`A learning website that spins a random concept from your chosen path (AI engineer, web, data, security and more), then turns it into speaking drills: debate motions, fresh articles from the past week, interview questions and "explain it to…" prompts.`,metrics:`Static site, no build step · articles refreshed daily by a GitHub Action`,tags:[`JavaScript`,`HTML / CSS`,`GitHub Actions`,`GitHub Pages`],linkText:`Visit live site →`,linkUrl:`https://greedilearner.github.io/spinpath/`,external:!0,highlight:!0},{id:`excuses`,slug:`excuses`,title:`Excuses`,kicker:`A to-do app that asks why, kindly.`,category:`Apps`,year:`2026`,status:`Android & iOS`,description:`Schedule tasks, then record a voice diary when they slip. AI reads the patterns behind missed tasks and reflects them back without shame. Built first in Expo / React Native, then ported to Kotlin Multiplatform with shared UI for Android and iOS.`,metrics:`Bring-your-own-key AI: Claude, Gemini, OpenAI, DeepSeek or NVIDIA NIM`,tags:[`React Native`,`Expo`,`Kotlin Multiplatform`,`Compose`,`Ktor`],linkText:`Ask for a demo →`,linkUrl:`#/contact`,highlight:!1},{id:`carousel-studio`,slug:`carousel-studio`,title:`Carousel Studio`,kicker:`Thoughts in, Instagram carousels out.`,category:`Apps`,year:`2026`,status:`Android`,description:`An Android app that turns spoken reflections, notes or YouTube transcripts into Instagram-ready carousel images and X threads. Runs on a local Ollama model, remembers your voice and past posts, and saves straight to the gallery.`,metrics:`Local LLM via Ollama · voice memory (RAG) · 1080×1350 PNG export`,tags:[`Kotlin`,`Jetpack Compose`,`Room`,`Ollama`,`RAG`],linkText:`View on GitHub →`,linkUrl:`https://github.com/greedilearner/post_automation`,external:!0},{id:`nightly-podcast`,slug:`nightly-podcast`,title:`Nightly AI Podcast`,kicker:`Ask a question at night, hear the answer by morning.`,category:`Automation`,year:`2026`,status:`Running nightly`,description:`An automation that asks for tonight's learning topic, drives Google NotebookLM in a real browser to generate a two-host audio overview, downloads the MP3 and files it in a personal podcast library with its own web player.`,metrics:`Scheduled job · browser automation with Playwright · no API keys needed`,tags:[`Python`,`Playwright`,`Flask`,`Scheduler`,`SQLite`],linkText:`Ask for a demo →`,linkUrl:`#/contact`}],a=[{id:`automation`,title:`Automation`,category:`Save hours`,tagline:`The boring, repeated work, done by software instead of people.`,description:`Scheduled jobs, browser automation and AI workflows that pull data, fill forms, post content, generate reports and send them where they need to go. Like the nightly podcast generator, but for your business.`,deliverables:[`Browser automation (Playwright) for sites with no API`,`AI workflows that read, summarise and draft for you`,`Scheduled jobs with alerts when something breaks`],timeline:`1–3 weeks`},{id:`website-development`,title:`Website Development`,category:`Get found`,tagline:`Fast, good-looking websites that are easy to keep up to date.`,description:`Portfolios, business sites, landing pages and web apps. Designed with care, built to load fast on phones, and set up so you can edit content yourself.`,deliverables:[`Custom design with motion that feels intentional`,`Mobile-first, fast loading, SEO basics done right`,`Hosting and domain set up, plus an admin to edit content`],timeline:`2–4 weeks`},{id:`app-development`,title:`App Development`,category:`Android & iOS`,tagline:`Mobile apps people keep on their home screen.`,description:`Native Android in Kotlin, or one codebase for Android and iOS with React Native or Kotlin Multiplatform. From first prototype to a build you can put in the Play Store.`,deliverables:[`Kotlin / Jetpack Compose, React Native or Kotlin Multiplatform`,`Offline storage, notifications, voice and camera features`,`Play Store and App Store build and release help`],timeline:`3–8 weeks`},{id:`ai-integration`,title:`AI Features`,category:`Add intelligence`,tagline:`Put Claude, GPT, Gemini or a local model inside your product.`,description:`Chat, search over your own documents, voice notes to text, summaries and smart suggestions, built into the app or site you already have.`,deliverables:[`Works with hosted models or private local models (Ollama)`,`Search and answers over your own documents (RAG)`,`Clear costs, with keys and data kept under your control`],timeline:`1–4 weeks`}],o=[{step:`01`,title:`Call`,desc:`A short call to understand what you need, who it is for and what done looks like.`},{step:`02`,title:`Plan`,desc:`A clear written plan with screens, features, price and timeline before any work starts.`},{step:`03`,title:`Build`,desc:`Weekly updates with a live link or test build, so you see progress and can steer it.`},{step:`04`,title:`Launch`,desc:`We launch it together. You own all the code, and get 30 days of fixes after launch.`}],s=[`All`,`Articles`,`Videos`,`Build Logs`],c=[],l={title:`ARYANSARCADE LETTER`,tagline:`AI, systems architecture, building in public, and technical experiments.`,cadence:`One useful dispatch every week. No spam. No marketing filler.`,subscriberCount:``,archive:[]},u={PRODUCTS:`rns_arcade_products_v2`,WORK:`rns_arcade_work_v2`,SERVICES:`rns_arcade_services_v2`,CONTENT:`rns_arcade_content_v4`,NEWSLETTER:`rns_arcade_newsletter_v3`};function d(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),t)}catch(n){return console.error(`Failed to load ${e} from storage:`,n),t}}function f(){return p().length>0}function p(){return d(u.PRODUCTS,n)}function m(){return d(u.WORK,i)}function h(){return d(u.SERVICES,a)}function g(){return v().length>0}function _(){let e=y();return!!(e&&e.archive&&e.archive.length)}function v(){return d(u.CONTENT,c)}function y(){return d(u.NEWSLETTER,l)}var b={"#/products":f,"#/content":g,"#/newsletter":_},x=e=>e.filter(e=>!b[e.path]||b[e.path]());function ee(){let t=window.location.hash||`#/`;return`
    <nav class="navbar" id="navbar">
      <div class="navbar-inner">
        <a href="#/" class="nav-logo" aria-label="AryansArcade Home">
          Aryans<span class="wordmark-em">Arcade</span><span class="logo-dot"></span>
        </a>
        
        <div class="nav-links" id="nav-links">
          ${x(e.navLinks).map(e=>{let n=t===e.path||e.path!==`#/`&&t.startsWith(e.path);return`
              <a href="${e.path}" class="nav-link ${n?`active`:``}">
                ${e.label}
              </a>
            `}).join(``)}
          <a href="#/contact" class="nav-cta">Contact</a>
        </div>
        
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <div class="nav-mobile" id="nav-mobile">
        <a href="#/" class="nav-link ${t===`#/`?`active`:``}">Home</a>
        ${x(e.navLinks).map(e=>`
          <a href="${e.path}" class="nav-link ${t.startsWith(e.path)?`active`:``}">
            ${e.label}
          </a>
        `).join(``)}
        <a href="#/support" class="nav-link ${t.startsWith(`#/support`)?`active`:``}">Support</a>
        <a href="#/contact" class="nav-link ${t.startsWith(`#/contact`)?`active`:``}">Contact</a>
      </div>
    </nav>
  `}function S(){let e=document.getElementById(`nav-hamburger`),t=document.getElementById(`nav-mobile`);e&&t&&(e.onclick=()=>{e.classList.toggle(`active`),t.classList.toggle(`open`),document.body.style.overflow=t.classList.contains(`open`)?`hidden`:``},t.querySelectorAll(`.nav-link`).forEach(n=>{n.onclick=()=>{e.classList.remove(`active`),t.classList.remove(`open`),document.body.style.overflow=``}}))}var C=1800;function w(t,n=``){let r=new URLSearchParams;r.set(`subject`,String(t).slice(0,140)),n&&r.set(`body`,String(n).slice(0,C));let i=r.toString().replace(/\+/g,`%20`);window.location.href=`mailto:${e.email}?${i}`}function T(){return Object.entries(e.socials).filter(([,e])=>e&&e.url).map(([e,t])=>({key:e,...t}))}var E={"#/products":f,"#/content":g,"#/newsletter":_},D=e=>e.filter(e=>!E[e.path]||E[e.path]());function te(){return`
    <footer class="footer-band" id="footer">
      <div class="container">
        <div class="footer-grid-layout">
          <div class="footer-brand-col">
            <span class="footer-wordmark">Aryans<span class="wordmark-em">Arcade</span><span class="footer-dot"></span></span>
            <p class="footer-tagline">${e.tagline}</p>
            <span class="footer-copyright">© 2026 AryansArcade. Built with architectural restraint.</span>
          </div>
          
          <div class="footer-nav-col">
            <span class="footer-col-title">ECOSYSTEM</span>
            <div class="footer-links-grid">
              ${D(e.footerLinks).map(e=>`
                <a href="${e.path}" class="footer-link">${e.label}</a>
              `).join(``)}
            </div>
          </div>
          
          <div class="footer-connect-col">
            <span class="footer-col-title">DIRECT CHANNELS</span>
            <div class="footer-social-links">
              ${T().map(e=>`<a href="${e.url}" target="_blank" rel="noopener noreferrer" class="footer-link">${e.label||e.key}</a>`).join(``)}
            </div>
            <a href="mailto:${e.email}" class="footer-email-link">${e.email}</a>
          </div>
        </div>
      </div>
    </footer>
  `}function O(e){return`
    <article class="product-item-card" id="card-${e.slug}">
      <div class="card-identity-header">
        <div class="card-icon-frame" style="--product-accent: ${e.accentColor};">
          ${ne(e.logoIcon)}
        </div>
        <div class="card-meta-pill">
          <span class="card-category">${e.category}</span>
          ${e.status?`<span class="card-status-dot" title="${e.status}"></span>`:``}
        </div>
      </div>

      <div class="card-text-body">
        <h3 class="card-product-name">
          <a href="#/products/${e.slug}">${e.name}</a>
        </h3>
        <p class="card-product-desc">${e.shortDescription}</p>
      </div>

      <div class="card-action-footer">
        <div class="card-pricing-badge">
          <span class="card-price">${e.price}</span>
          <span class="card-price-label">${e.priceLabel}</span>
        </div>
        <a href="#/products/${e.slug}" class="card-view-btn">
          View Product →
        </a>
      </div>
    </article>
  `}function ne(e){switch(e){case`activity`:return`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      `;case`check-square`:return`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 11 12 14 22 4"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      `;case`terminal`:return`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      `;case`shopping-bag`:return`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      `;case`layers`:return`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      `;case`cpu`:return`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>
      `;default:return`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      `}}var re=`
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;function k(e,t=0){return e.split(` `).map((e,n)=>`<span class="word-mask"><span class="word" style="--i:${t+n}">${e}</span></span>`).join(` `)}function A(e,t){let n=e.external?` target="_blank" rel="noopener"`:``;return`
    <a class="project-row" href="${e.linkUrl}"${n} data-spotlight>
      <span class="project-index">${String(t+1).padStart(2,`0`)}</span>
      <div class="project-main">
        <div class="project-meta">
          <span>${e.category}</span><span class="dot">•</span><span>${e.status}</span><span class="dot">•</span><span>${e.year}</span>
        </div>
        <h3 class="project-title">${e.title}</h3>
        <p class="project-kicker">${e.kicker||``}</p>
        <p class="project-desc">${e.description}</p>
        <div class="work-row-tags">
          ${e.tags.map(e=>`<span class="work-tag">${e}</span>`).join(``)}
        </div>
      </div>
      <span class="project-cta">${e.linkText}</span>
    </a>`}function j(){let t=p(),n=m(),r=h(),i=v().slice(0,2),a=t.filter(e=>e.featured).slice(0,3),o=n.find(e=>e.highlight)||n[0],s=0,c=()=>`[ ${String(++s).padStart(2,`0`)} ]`,l=[`Automation`,`Website Development`,`App Development`,`AI Features`,`Android & iOS`,`Browser Automation`,`Motion & UI`].map(e=>`<span class="marquee-item">${e}</span><span class="marquee-star">✦</span>`).join(``);return`
    <div class="page-view home-page">
      <!-- ═══════════ HERO ═══════════ -->
      <section class="home-hero-section hero-split">
        <div class="container hero-grid">
          <div class="home-hero-inner hero-intro">
            <div class="hero-brand-eyebrow hero-fade" style="--d:0">
              <span class="status-pulse-dot"></span>
              <span>Available for new projects</span>
            </div>

            <h1 class="home-hero-headline hero-words">
              ${k(`I build apps, websites`,0)}<br />
              ${k(`&amp;`,4)} <span class="word-mask"><em class="word" style="--i:5">automations</em></span><br />
              ${k(`that save you time.`,6)}
            </h1>

            <p class="home-hero-sub hero-fade" style="--d:1">
              I'm ${e.founder}. I design and build Android and iOS apps, fast websites, and AI automations that take repetitive work off your plate.
            </p>

            <div class="home-hero-ctas hero-fade" style="--d:2">
              <a href="#/work" class="btn btn-primary magnetic">See my work ${re}</a>
              <a href="#/services" class="btn btn-secondary magnetic">Services</a>
            </div>
          </div>

          <div class="hero-photo-wrap" data-parallax="0.06">
            <div class="hero-photo-frame" data-tilt>
              <img src="portrait.jpg" alt="${e.founder} sitting on a rock under a bright cloudy sky" width="1086" height="1448" fetchpriority="high" />
            </div>
            <div class="hero-badge" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs><path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
                <text><textPath href="#badge-circle">APPS • WEBSITES • AUTOMATION • </textPath></text>
              </svg>
              <span class="hero-badge-core">✦</span>
            </div>
            <div class="hero-photo-caption">
              <span>${e.founder}</span>
              <span>Builder · AryansArcade</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════ MARQUEE ═══════════ -->
      <div class="marquee" aria-hidden="true">
        <div class="marquee-track">${l}${l}</div>
      </div>

      <!-- ═══════════ LIVE NOW ═══════════ -->
      <section class="currently-building-strip">
        <div class="container">
          <div class="strip-box animate-on-scroll">
            <div class="strip-left">
              <span class="strip-tag">LIVE NOW</span>
              <h3 class="strip-title">${o.title}: ${o.kicker||``}</h3>
              <p class="strip-desc">${o.metrics}</p>
            </div>
            <div class="strip-right">
              <a href="${o.linkUrl}" ${o.external?`target="_blank" rel="noopener"`:``} class="btn btn-light">${o.linkText}</a>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════ PROJECTS ═══════════ -->
      <section class="section home-work-section">
        <div class="container">
          <div class="section-head animate-on-scroll">
            <span class="section-label draw-line">${c()} PROJECTS</span>
            <div class="section-head-split">
              <div>
                <h2 class="section-title">Things we've built and shipped.</h2>
                <p class="section-subtitle">A website, two apps and an automation. All real, all in use.</p>
              </div>
              <a href="#/work" class="head-view-all-link">All projects (${n.length}) →</a>
            </div>
          </div>

          <div class="project-list animate-stagger">
            ${n.map((e,t)=>A(e,t)).join(``)}
          </div>
        </div>
      </section>

      <!-- ═══════════ SERVICES ═══════════ -->
      <section class="section home-services-section">
        <div class="container">
          <div class="section-head animate-on-scroll">
            <span class="section-label draw-line">${c()} SERVICES</span>
            <div class="section-head-split">
              <div>
                <h2 class="section-title">What I can build for you.</h2>
                <p class="section-subtitle">Pick one, or combine them: an app with AI inside, a website with automations behind it.</p>
              </div>
              <a href="#/services" class="head-view-all-link">Service details →</a>
            </div>
          </div>

          <div class="home-services-list animate-stagger">
            ${r.map((e,t)=>`
              <a href="#/services" class="home-service-item" data-spotlight>
                <span class="home-service-num">0${t+1}</span>
                <h3 class="home-service-title">${e.title}</h3>
                <p class="home-service-tag">${e.tagline}</p>
                <span class="home-service-time">${e.timeline}</span>
              </a>
            `).join(``)}
          </div>
        </div>
      </section>

      ${a.length?`
      <!-- ═══════════ PRODUCTS ═══════════ -->
      <section class="section home-products-section">
        <div class="container">
          <div class="section-head animate-on-scroll">
            <span class="section-label draw-line">${c()} PRODUCTS</span>
            <div class="section-head-split">
              <div>
                <h2 class="section-title">Engineered to ship. Priced to own.</h2>
                <p class="section-subtitle">Commercial digital products, applications, and developer utilities with direct source code licenses.</p>
              </div>
              <a href="#/products" class="head-view-all-link">View all products (${t.length}) →</a>
            </div>
          </div>

          <div class="home-products-grid animate-stagger">
            ${a.map(e=>O(e)).join(``)}
          </div>
        </div>
      </section>
      `:``}

      ${i.length?`
      <!-- ═══════════ LATEST CONTENT ═══════════ -->
      <section class="section home-content-section">
        <div class="container">
          <div class="section-head animate-on-scroll">
            <span class="section-label draw-line">${c()} LATEST CONTENT</span>
            <div class="section-head-split">
              <div>
                <h2 class="section-title">Building in public.</h2>
                <p class="section-subtitle">Technical teardowns, architecture blueprints, and engineering essays.</p>
              </div>
              <a href="#/content" class="head-view-all-link">Read all dispatches →</a>
            </div>
          </div>

          <div class="home-content-dual animate-stagger">
            ${i.map(e=>`
              <article class="content-teaser-card">
                <div class="content-teaser-header">
                  <span class="c-type-tag">${e.type}</span>
                  <span class="c-time">${e.date} • ${e.readTime}</span>
                </div>
                <h3 class="content-teaser-title">${e.title}</h3>
                <p class="content-teaser-excerpt">${e.excerpt}</p>
                <a href="${e.url}" class="card-view-btn">Read Entry →</a>
              </article>
            `).join(``)}
          </div>
        </div>
      </section>
      `:``}

      ${_()?`
      <!-- ═══════════ NEWSLETTER TEASER ═══════════ -->
      <section class="home-newsletter-band animate-on-scroll">
        <div class="container">
          <div class="newsletter-compact-box">
            <div class="newsletter-text-col">
              <span class="section-label">${c()} ARYANSARCADE LETTER</span>
              <h2 class="newsletter-box-title">One useful engineering dispatch every week.</h2>
              <p class="newsletter-box-desc">AI systems, apps, automation and what I'm building. No spam, ever.</p>
            </div>
            <form class="newsletter-quick-form" id="home-newsletter-form">
              <input type="email" placeholder="Enter your email address" required aria-label="Email address" />
              <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
      `:``}

      <!-- ═══════════ ABOUT SHORT INTRO ═══════════ -->
      <section class="section home-about-teaser animate-on-scroll">
        <div class="container">
          <div class="about-teaser-split">
            <div class="about-teaser-label">
              <span class="avatar-crop about-teaser-avatar" aria-hidden="true"></span>
            </div>
            <div class="about-teaser-content">
              <p class="about-quote">
                "I like building things people actually use: an app that helps you understand why tasks slip, a site that makes you say ideas out loud, an automation that hands you a podcast every morning. If you have something like that in mind, let's talk."
              </p>
              <div class="about-teaser-footer">
                <span class="builder-name">${e.founder} — Founder, AryansArcade</span>
                <a href="#/contact" class="about-more-link">Start a project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `}function M(e=`All`){let n=p(),r=e===`All`?n:n.filter(t=>t.category.toLowerCase()===e.toLowerCase());return`
    <div class="page-view products-page">
      <section class="page-header-band">
        <div class="container">
          <div class="page-header-content animate-on-scroll">
            <span class="section-label">[ PRODUCTS CATALOGUE ]</span>
            <h1 class="page-header-title">Engineered to ship. Priced to own.</h1>
            <p class="page-header-desc">
              Direct digital licenses. Every product is built with modular architecture, strict type-safety, and production-ready UX. Buy once with full source code ownership.
            </p>

            <!-- Category Filter Controls -->
            <div class="catalog-filter-bar" id="product-category-filters">
              ${t.map(t=>`
                <button 
                  class="filter-pill ${t.toLowerCase()===e.toLowerCase()?`active`:``}" 
                  data-category="${t}">
                  ${t}
                </button>
              `).join(``)}
            </div>
          </div>
        </div>
      </section>

      <section class="section catalog-grid-section">
        <div class="container">
          <div class="catalog-products-grid animate-stagger" id="products-catalog-container">
            ${r.length>0?r.map(e=>O(e)).join(``):`<div class="empty-state"><p>No products currently found in this category.</p></div>`}
          </div>
        </div>
      </section>
    </div>
  `}function N(){let e=document.querySelectorAll(`#product-category-filters .filter-pill`),t=document.getElementById(`products-catalog-container`);e.length&&t&&e.forEach(n=>{n.onclick=()=>{e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let r=n.getAttribute(`data-category`),i=p(),a=r===`All`?i:i.filter(e=>e.category.toLowerCase()===r.toLowerCase());t.innerHTML=a.length>0?a.map(e=>O(e)).join(``):`<div class="empty-state"><p>No products currently found in this category.</p></div>`}})}function P(e){let t=p(),n=t.find(t=>t.slug===e)||t[0];return`
    <div class="page-view product-detail-page" style="--product-accent: ${n.accentColor};">
      <!-- ═══════════ PRODUCT HERO ═══════════ -->
      <section class="pdp-hero-band">
        <div class="container">
          <div class="pdp-breadcrumbs">
            <a href="#/products">← Back to Products</a>
            <span>/</span>
            <span>${n.category}</span>
            <span>/</span>
            <span class="active-crumb">${n.name}</span>
          </div>

          <div class="pdp-hero-split">
            <div class="pdp-hero-info">
              <div class="pdp-brand-tag">
                <span class="pdp-badge-status">${n.status}</span>
                <span class="pdp-attribution">Built by AryansArcade</span>
              </div>

              <h1 class="pdp-title">${n.name}</h1>
              <p class="pdp-tagline">${n.tagline}</p>
              <p class="pdp-description">${n.heroSubtitle||n.shortDescription}</p>

              <div class="pdp-hero-pricing">
                <div class="pdp-price-wrap">
                  <span class="pdp-price-val">${n.price}</span>
                  <span class="pdp-price-label">${n.priceLabel}</span>
                </div>
                <div class="pdp-hero-actions">
                  <a href="${n.buyUrl}" class="btn btn-primary pdp-cta-btn">
                    Buy License Now
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                      <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                  <a href="${n.demoUrl}" class="btn btn-secondary">
                    Try Demo
                  </a>
                </div>
              </div>
            </div>

            <div class="pdp-hero-visual-col">
              <div class="pdp-visual-window">
                <div class="visual-window-chrome">
                  <div class="chrome-signals"><span></span><span></span><span></span></div>
                  <div class="chrome-title">${n.slug}.aryansarcade.in</div>
                  <span class="chrome-tag">${n.category}</span>
                </div>
                <div class="visual-window-body">
                  <div class="window-inner-banner">
                    <span class="inner-eyebrow">PRODUCTION RELEASE</span>
                    <h3>${n.name}</h3>
                  </div>
                  <div class="window-specs-preview">
                    ${n.features.slice(0,3).map(e=>`
                      <div class="preview-spec-row">
                        <span class="spec-check">✓</span>
                        <span class="spec-name">${e.title}</span>
                      </div>
                    `).join(``)}
                  </div>
                  <div class="window-metric-preview">
                    <span>STATUS: ALL CHECKS PASSING</span>
                    <span class="live-dot"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════ WHAT IS IT? ═══════════ -->
      <section class="section pdp-narrative-section">
        <div class="container">
          <div class="narrative-grid">
            <div class="narrative-block">
              <span class="section-label">[ 01 ] WHAT IS IT?</span>
              <h2 class="narrative-title">An engineered solution, not another subscription.</h2>
              <p class="narrative-text">${n.whatIsIt}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════ THE PROBLEM & THE SOLUTION ═══════════ -->
      <section class="section pdp-problem-solution-section">
        <div class="container">
          <div class="problem-solution-dual">
            <div class="ps-card problem-card">
              <span class="ps-label problem-label">THE PROBLEM</span>
              <p class="ps-text">${n.problem}</p>
            </div>
            <div class="ps-card solution-card">
              <span class="ps-label solution-label">THE SOLUTION</span>
              <p class="ps-text">${n.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════ FEATURES ═══════════ -->
      <section class="section pdp-features-section">
        <div class="container">
          <div class="section-head">
            <span class="section-label">[ 02 ] ARCHITECTURAL FEATURES</span>
            <h2 class="section-title">Built with uncompromising technical restraint.</h2>
          </div>

          <div class="features-grid-layout">
            ${n.features.map((e,t)=>`
              <div class="feature-detail-card">
                <span class="feature-idx">0${t+1}.</span>
                <h3 class="feature-title">${e.title}</h3>
                <p class="feature-desc">${e.desc}</p>
              </div>
            `).join(``)}
          </div>
        </div>
      </section>

      <!-- ═══════════ HOW IT WORKS ═══════════ -->
      <section class="section pdp-how-it-works-section">
        <div class="container">
          <div class="section-head">
            <span class="section-label">[ 03 ] WORKFLOW</span>
            <h2 class="section-title">How it works.</h2>
          </div>

          <div class="steps-grid-layout">
            ${n.howItWorks.map(e=>`
              <div class="step-card">
                <span class="step-number">${e.step}</span>
                <h3 class="step-title">${e.title}</h3>
                <p class="step-desc">${e.desc}</p>
              </div>
            `).join(``)}
          </div>
        </div>
      </section>

      <!-- ═══════════ AUDIENCE & INCLUSIONS ═══════════ -->
      <section class="section pdp-specs-section">
        <div class="container">
          <div class="specs-dual-columns">
            <div class="spec-col">
              <span class="section-label">WHO IS IT FOR?</span>
              <p class="audience-desc">${n.whoIsItFor}</p>
            </div>
            <div class="spec-col">
              <span class="section-label">WHAT'S INCLUDED?</span>
              <ul class="inclusions-list">
                ${n.whatsIncluded.map(e=>`
                  <li>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M13.33 4L6 11.33 2.67 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>${e}</span>
                  </li>
                `).join(``)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════ PRICING & GUARANTEE ═══════════ -->
      <section class="section pdp-pricing-section">
        <div class="container">
          <div class="pricing-card-center">
            <div class="pricing-header">
              <span class="pricing-tier-tag">COMMERCIAL SOURCE LICENSE</span>
              <h2 class="pricing-product-name">${n.name}</h2>
              <div class="pricing-amount-row">
                <span class="pricing-amount">${n.price}</span>
                <span class="pricing-amount-sub">/ One-time purchase (${n.priceUsd})</span>
              </div>
              <p class="pricing-note">Pay once. Own forever. Includes lifetime source updates and commercial rights.</p>
            </div>

            <div class="pricing-actions">
              <a href="${n.buyUrl}" class="btn btn-primary btn-large">
                Acquire Source License
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12l8-8M4 4h8v8" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <span class="pricing-guarantee">30-day money-back guarantee • Instant digital dispatch</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════ FAQ ═══════════ -->
      <section class="section pdp-faq-section">
        <div class="container">
          <div class="section-head">
            <span class="section-label">[ 04 ] FREQUENTLY ASKED QUESTIONS</span>
            <h2 class="section-title">Clarifications & Technical Specs</h2>
          </div>

          <div class="faq-accordion-list">
            ${n.faq.map(e=>`
              <div class="faq-item">
                <h4 class="faq-question">${e.q}</h4>
                <p class="faq-answer">${e.a}</p>
              </div>
            `).join(``)}
          </div>
        </div>
      </section>

      <!-- ═══════════ ATTRIBUTION & FINAL CTA ═══════════ -->
      <section class="section pdp-final-cta-section">
        <div class="container">
          <div class="final-cta-box">
            <div class="attribution-badge">
              <span class="attr-dot"></span>
              <span>AN ARYANSARCADE PRODUCTION</span>
            </div>
            <h2 class="final-cta-title">Ready to own ${n.name}?</h2>
            <p class="final-cta-desc">Direct download access immediately upon checkout. Full source ownership with zero recurring SaaS fees.</p>
            <div class="final-cta-btns">
              <a href="${n.buyUrl}" class="btn btn-primary">
                Buy License (${n.price})
              </a>
              <a href="#/products" class="btn btn-secondary">
                Back to Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `}function F(e=`All`){let t=m(),n=e===`All`?t:t.filter(t=>t.category.toLowerCase()===e.toLowerCase());return`
    <div class="page-view work-page">
      <section class="page-header-band">
        <div class="container">
          <div class="page-header-content animate-on-scroll">
            <span class="section-label">[ WORK & RESEARCH ]</span>
            <h1 class="page-header-title">Projects we've built.</h1>
            <p class="page-header-desc">
              Websites, mobile apps and automations: what each one does, what it is built with, and where you can see it.
            </p>

            <div class="catalog-filter-bar" id="work-category-filters">
              ${r.map(t=>`
                <button 
                  class="filter-pill ${t.toLowerCase()===e.toLowerCase()?`active`:``}" 
                  data-category="${t}">
                  ${t}
                </button>
              `).join(``)}
            </div>
          </div>
        </div>
      </section>

      <section class="section work-list-section">
        <div class="container">
          <div class="project-list animate-stagger" id="work-container">
            ${n.map((e,t)=>A(e,t)).join(``)}
          </div>
        </div>
      </section>
    </div>
  `}function I(){let e=document.querySelectorAll(`#work-category-filters .filter-pill`),t=document.getElementById(`work-container`);e.length&&t&&e.forEach(n=>{n.onclick=()=>{e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let r=n.getAttribute(`data-category`),i=m(),a=r===`All`?i:i.filter(e=>e.category.toLowerCase()===r.toLowerCase());t.innerHTML=a.length>0?a.map((e,t)=>A(e,t)).join(``):`<div class="empty-state"><p>No work items found in this category.</p></div>`}})}function L(){return`
    <div class="page-view services-page">
      <section class="page-header-band">
        <div class="container">
          <div class="page-header-content animate-on-scroll">
            <span class="section-label">[ PROFESSIONAL SERVICES ]</span>
            <h1 class="page-header-title">Automation, websites and apps, built for you.</h1>
            <p class="page-header-desc">
              You work directly with me, the person writing the code. No agency layers, no hand-offs, and you own everything at the end.
            </p>
            <div class="services-distinction-badge">
              <span class="badge-dot-ember"></span>
              <span>PRODUCTS: BUY WHAT IS BUILT • SERVICES: HIRE US TO BUILD YOUR SYSTEM</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════ SERVICES CATALOG ═══════════ -->
      <section class="section services-grid-section">
        <div class="container">
          <div class="services-dual-grid animate-stagger">
            ${h().map((e,t)=>`
              <div class="service-card" id="service-${e.id}">
                <div class="service-header">
                  <span class="service-idx">0${t+1}.</span>
                  <span class="service-cat-pill">${e.category}</span>
                </div>
                
                <h3 class="service-title">${e.title}</h3>
                <p class="service-tagline">${e.tagline}</p>
                <p class="service-desc">${e.description}</p>

                <div class="service-deliverables">
                  <span class="deliv-heading">KEY DELIVERABLES</span>
                  <ul class="deliv-list">
                    ${e.deliverables.map(e=>`<li>— ${e}</li>`).join(``)}
                  </ul>
                </div>

                <div class="service-footer">
                  <span class="service-timeline">Typical Timeline: <strong>${e.timeline}</strong></span>
                  <a href="#/contact" class="btn btn-secondary">Request Brief →</a>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
      </section>

      <!-- ═══════════ 4-STEP PROCESS ═══════════ -->
      <section class="section engineering-process-section">
        <div class="container">
          <div class="section-head animate-on-scroll">
            <span class="section-label">[ PROCESS ]</span>
            <h2 class="section-title">Deterministic engineering cadence.</h2>
            <p class="section-subtitle">How every client engagement is structured from initial technical brief to production handover.</p>
          </div>

          <div class="process-steps-row animate-stagger">
            ${o.map(e=>`
              <div class="process-col">
                <span class="process-step-num">${e.step}</span>
                <h4 class="process-col-title">${e.title}</h4>
                <p class="process-col-desc">${e.desc}</p>
              </div>
            `).join(``)}
          </div>
        </div>
      </section>

      <!-- ═══════════ SERVICES INQUIRY CTA ═══════════ -->
      <section class="section services-cta-section">
        <div class="container">
          <div class="services-inquiry-box animate-on-scroll">
            <h2 class="inquiry-title">Have a technical project in mind?</h2>
            <p class="inquiry-desc">We review technical briefs within 24 hours. Engagements booked on fixed-price milestone contracts.</p>
            <a href="#/contact" class="btn btn-primary btn-large">
              Submit Project Brief
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M14 2L7 9M14 2l-4.5 12L7 9 2 7.5 14 2z" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  `}function R(e=`All`){let t=v(),n=e===`All`?t:t.filter(t=>t.type.toLowerCase()===e.toLowerCase());return`
    <div class="page-view content-page">
      <section class="page-header-band">
        <div class="container">
          <div class="page-header-content animate-on-scroll">
            <span class="section-label">[ CONTENT & DISPATCHES ]</span>
            <h1 class="page-header-title">Engineering teardowns & build logs.</h1>
            <p class="page-header-desc">
              The central hub for all AryansArcade publications. Deep-dive architecture breakdowns, video walkthroughs, and empirical benchmarks shared in the open.
            </p>

            <div class="catalog-filter-bar" id="content-category-filters">
              ${s.map(t=>`
                <button 
                  class="filter-pill ${t.toLowerCase()===e.toLowerCase()?`active`:``}" 
                  data-category="${t}">
                  ${t}
                </button>
              `).join(``)}
            </div>
          </div>
        </div>
      </section>

      <section class="section content-feed-section">
        <div class="container">
          <div class="content-feed-grid animate-stagger" id="content-feed-container">
            ${n.map(e=>z(e)).join(``)}
          </div>
        </div>
      </section>
    </div>
  `}function z(e){let t=e.type===`Videos`;return`
    <article class="content-hub-card ${t?`video-card`:``}">
      <div class="hub-card-header">
        <span class="hub-tag">${e.tag}</span>
        <span class="hub-type-badge">${e.type}</span>
      </div>

      <div class="hub-card-body">
        <span class="hub-meta">${e.date} • ${e.readTime}</span>
        <h3 class="hub-title">${e.title}</h3>
        <p class="hub-excerpt">${e.excerpt}</p>
      </div>

      <div class="hub-card-footer">
        <a href="${e.url}" target="${e.url.startsWith(`http`)?`_blank`:`_self`}" rel="noopener" class="hub-action-link">
          ${t?`Watch Video Breakdown →`:`Read Article →`}
        </a>
      </div>
    </article>
  `}function B(){let e=document.querySelectorAll(`#content-category-filters .filter-pill`),t=document.getElementById(`content-feed-container`);e.length&&t&&e.forEach(n=>{n.onclick=()=>{e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let r=n.getAttribute(`data-category`),i=v(),a=r===`All`?i:i.filter(e=>e.type.toLowerCase()===r.toLowerCase());t.innerHTML=a.map(e=>z(e)).join(``)}})}function V(){let e=y();return`
    <div class="page-view newsletter-page">
      <section class="page-header-band newsletter-hero-band">
        <div class="container">
          <div class="newsletter-hero-layout animate-on-scroll">
            <div class="nl-hero-text">
              <span class="section-label">[ WEEKLY DISPATCH ]</span>
              <h1 class="page-header-title">${e.title}</h1>
              <p class="nl-tagline">${e.tagline}</p>
              <p class="nl-cadence">${e.cadence}</p>

              <form class="nl-signup-form" id="newsletter-main-form">
                <div class="nl-input-group">
                  <input type="email" placeholder="Enter your work email address" required aria-label="Email address" id="nl-email-input" />
                  <button type="submit" class="btn btn-primary" id="btn-nl-submit">Subscribe Free</button>
                </div>
                <span class="nl-privacy-note">Join ${e.subscriberCount}. Zero spam. One-click unsubscribe anytime.</span>
              </form>
            </div>

            <div class="nl-hero-badge-col">
              <div class="nl-trust-card">
                <span class="trust-stat">2,400+</span>
                <span class="trust-label">Active Engineers & Technical Founders</span>
                <div class="trust-topics">
                  <span class="topic-chip">AI Multi-Agent Systems</span>
                  <span class="topic-chip">Local-First CRDTs</span>
                  <span class="topic-chip">Swiss UI Architecture</span>
                  <span class="topic-chip">Indie SaaS Telemetry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════ ARCHIVE ═══════════ -->
      <section class="section newsletter-archive-section">
        <div class="container">
          <div class="section-head animate-on-scroll">
            <span class="section-label">[ PAST EDITIONS ]</span>
            <h2 class="section-title">Previous Letters & Research</h2>
            <p class="section-subtitle">Sample recent dispatches sent to subscribers.</p>
          </div>

          <div class="archive-list animate-stagger">
            ${e.archive.map(e=>`
              <article class="archive-row">
                <div class="archive-meta">
                  <span class="archive-issue">${e.issue}</span>
                  <span class="archive-date">${e.date}</span>
                </div>
                <div class="archive-content">
                  <h3 class="archive-title">${e.title}</h3>
                  <p class="archive-preview">${e.preview}</p>
                </div>
                <div class="archive-read">
                  <span class="archive-time">${e.readTime}</span>
                </div>
              </article>
            `).join(``)}
          </div>
        </div>
      </section>
    </div>
  `}function H(){let e=document.getElementById(`newsletter-main-form`);e&&(e.onsubmit=e=>{e.preventDefault();let t=document.getElementById(`nl-email-input`);w(`Subscribe me to the AryansArcade Letter`,`Please add ${t?t.value:``} to the newsletter.`)})}var U=[{group:`CORE RUNTIMES`,items:[`TypeScript`,`JavaScript (ESNext)`,`Node.js`,`Python`,`Go`,`Rust / WASM`]},{group:`INTERFACES & UX`,items:[`React 19`,`Next.js 15`,`Vite`,`HTML5 / Semantic CSS`,`Design Systems`]},{group:`DATA & STORAGE`,items:[`PostgreSQL`,`SQLite / LibSQL`,`Cloudflare D1`,`Redis`,`Vector Embeddings`]},{group:`DEVOPS & CLOUD`,items:[`Docker`,`Cloudflare Workers`,`AWS`,`GitHub Actions`,`Vercel`]}];function W(){return`
    <div class="page-view about-page">
      <section class="page-header-band">
        <div class="container">
          <div class="page-header-content animate-on-scroll">
            <span class="section-label">[ PROFILE & ETHOS ]</span>
            <h1 class="page-header-title">The craft behind AryansArcade.</h1>
            <p class="page-header-desc">
              Independent technical founder, software engineer, and digital product craftsman. Building software products people love to use.
            </p>
          </div>
        </div>
      </section>

      <section class="section about-main-section">
        <div class="container">
          <div class="about-editorial-grid">
            <div class="about-sidebar-col animate-slide-left">
              <div class="about-identity-box">
                <div class="identity-avatar-frame">
                  <span class="avatar-crop" role="img" aria-label="${e.founder}"></span>
                  <span class="identity-role-pill">FOUNDER // DEV</span>
                </div>
                <h3 class="identity-name">${e.founder}</h3>
                <span class="identity-title">Software Developer & Product Builder</span>
                
                <div class="identity-specs-list">
                  <div class="id-spec-item">
                    <span class="spec-k">FOCUS:</span>
                    <span class="spec-v">Apps, Websites & Automation</span>
                  </div>
                  <div class="id-spec-item">
                    <span class="spec-k">LOCATION:</span>
                    <span class="spec-v">Global / Remote</span>
                  </div>
                  <div class="id-spec-item">
                    <span class="spec-k">STATUS:</span>
                    <span class="spec-v">Building AryansArcade</span>
                  </div>
                </div>
              </div>

              <div class="about-ethos-box">
                <span class="ethos-heading">THE THREE TENETS</span>
                <ul class="ethos-list">
                  <li>
                    <span class="ethos-num">01.</span>
                    <p><strong>Zero Slop:</strong> No bloated frameworks, zero unnecessary abstractions, zero decorative fluff.</p>
                  </li>
                  <li>
                    <span class="ethos-num">02.</span>
                    <p><strong>Typographic Gravity:</strong> Visual hierarchy earned through scale, whitespace, and optical balance.</p>
                  </li>
                  <li>
                    <span class="ethos-num">03.</span>
                    <p><strong>Direct Ownership:</strong> Buyers receive full source code ownership with zero recurring SaaS lock-in.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="about-story-col animate-slide-right">
              <p class="story-lead">
                I started AryansArcade with a simple conviction: software should be fast, beautifully crafted, and priced for ownership rather than eternal monthly rent.
              </p>
              
              <p class="story-p">
                I spend my days engineering production-grade developer tools, local-first applications, and autonomous AI pipelines. My work bridges the gap between low-level technical rigor and gallery-grade visual restraint — drawing inspiration from the industrial philosophy of Dieter Rams and modern high-craft digital products like Linear and Peak Design.
              </p>

              <p class="story-p">
                Beyond shipping commercial software, I document our architectural decisions and business telemetry in public on YouTube and Instagram. Sharing real-world code reviews, database schema migrations, and revenue metrics helps elevate the standard of craft across the global developer community.
              </p>

              <div class="about-toolkit-block">
                <span class="toolkit-heading">PRIMARY ENGINEERING TOOLKIT</span>
                <div class="toolkit-matrix-grid">
                  ${U.map(e=>`
                    <div class="toolkit-group-card">
                      <span class="toolkit-group-name">${e.group}</span>
                      <div class="toolkit-chips">
                        ${e.items.map(e=>`<span class="toolkit-chip">${e}</span>`).join(``)}
                      </div>
                    </div>
                  `).join(``)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `}var ie=[{amount:`₹100`,amountUsd:`$2`,name:`Server Sparks`,desc:`Covers edge compute costs and keeps open-source experiments online.`,perk:`Public builder appreciation + Discord supporter role`},{amount:`₹500`,amountUsd:`$7`,name:`API & Compute Fuel`,desc:`Directly subsidizes GPU and LLM inference credits for research benchmarks.`,perk:`Early access to pre-release betas & experimental repositories`,recommended:!0},{amount:`₹1,000`,amountUsd:`$15`,name:`Sponsor a Build`,desc:`Funds deep-dive technical articles, research papers, and open-source tooling.`,perk:`Thank-you credit on the site + priority on feature requests`}],G=[{q:`How is this different from buying a product?`,a:`When you hire me for a project, you pay for work built for you and own all of its code. Supporting AryansArcade is a voluntary tip that funds free tools like Spinpath and the content I share.`},{q:`What payment methods will be accepted?`,a:`UPI, credit/debit cards, net banking, and international cards via Stripe/Razorpay.`},{q:`Can I cancel anytime if I choose recurring patronage?`,a:`Yes, full control with one-click cancellation from your billing portal.`}];function K(){return`
    <div class="page-view support-page">
      <section class="page-header-band">
        <div class="container">
          <div class="page-header-content animate-on-scroll">
            <span class="section-label">[ PATRONAGE & SUPPORT ]</span>
            <h1 class="page-header-title">Support AryansArcade.</h1>
            <p class="page-header-desc">
              If my open-source tools, technical research, or engineering content have brought value to your work, voluntary patronage directly fuels future independent builds.
            </p>
            <div class="support-distinction-banner">
              <span class="distinction-dot"></span>
              <span>DISTINCTION: BUYING A PRODUCT GIVES YOU A COMMERCIAL LICENSE • PATRONAGE IS VOLUNTARY FINANCIAL SUPPORT</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════ SUPPORT TIERS ═══════════ -->
      <section class="section support-tiers-section">
        <div class="container">
          <div class="support-cards-grid animate-stagger" id="support-tiers-container">
            ${ie.map(e=>`
              <div class="support-tier-card ${e.recommended?`tier-recommended`:``}">
                ${e.recommended?`<span class="tier-pill-badge">MOST POPULAR</span>`:``}
                <div class="tier-head">
                  <span class="tier-amount">${e.amount}</span>
                  <span class="tier-usd">(${e.amountUsd})</span>
                  <h3 class="tier-name">${e.name}</h3>
                </div>
                
                <p class="tier-desc">${e.desc}</p>

                <div class="tier-perk-box">
                  <span class="perk-label">SUPPORTER APPRECIATION</span>
                  <p class="perk-text">${e.perk}</p>
                </div>

                <button class="btn ${e.recommended?`btn-primary`:`btn-secondary`} btn-support-select" data-amount="${e.amount}">
                  Support ${e.amount}
                </button>
              </div>
            `).join(``)}

            <!-- Custom Tier -->
            <div class="support-tier-card tier-custom">
              <div class="tier-head">
                <span class="tier-amount">Custom</span>
                <span class="tier-usd">(Any Amount)</span>
                <h3 class="tier-name">Custom Patronage</h3>
              </div>
              <p class="tier-desc">Contribute any custom amount toward open research and software releases.</p>
              
              <div class="custom-amount-input-wrap">
                <span class="curr-symbol">₹</span>
                <input type="number" id="custom-amount-input" placeholder="2500" min="50" step="50" aria-label="Custom support amount in Rupees" />
              </div>

              <button class="btn btn-secondary" id="btn-custom-support">
                Support Custom Amount
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════ FAQ ═══════════ -->
      <section class="section support-faq-section">
        <div class="container">
          <div class="section-head animate-on-scroll">
            <span class="section-label">[ FAQ ]</span>
            <h2 class="section-title">Support & Sponsorship FAQ</h2>
          </div>

          <div class="faq-accordion-list animate-on-scroll">
            ${G.map(e=>`
              <div class="faq-item">
                <h4 class="faq-question">${e.q}</h4>
                <p class="faq-answer">${e.a}</p>
              </div>
            `).join(``)}
          </div>
        </div>
      </section>
    </div>
  `}function q(){document.querySelectorAll(`.btn-support-select`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-amount`);alert(`Thank you for supporting AryansArcade with ${t}! Payment integration will be connected in Phase 5.`)}});let e=document.getElementById(`btn-custom-support`),t=document.getElementById(`custom-amount-input`);e&&t&&(e.onclick=()=>{let e=t.value||`2500`;alert(`Thank you for supporting AryansArcade with ₹${e}! Payment integration will be connected in Phase 5.`)})}function J(){return`
    <div class="page-view contact-page">
      <section class="page-header-band">
        <div class="container">
          <div class="page-header-content animate-on-scroll">
            <span class="section-label">[ DIRECT CONTACT ]</span>
            <h1 class="page-header-title">Initiate a conversation.</h1>
            <p class="page-header-desc">
              Have a product inquiry, custom service brief, or architectural collaboration? Submit a brief below or reach out directly via encrypted channels.
            </p>
          </div>
        </div>
      </section>

      <section class="section contact-form-section">
        <div class="container">
          <div class="contact-dual-layout">
            <!-- Left: Direct SLA Directory -->
            <div class="contact-sidebar animate-slide-left">
              <div class="contact-direct-card">
                <h4 class="direct-heading">DIRECT CHANNELS</h4>
                <p class="direct-desc">Email is the fastest way to reach me. I usually reply within a day.</p>
                
                <div class="direct-links-list">
                  <a href="mailto:${e.email}" class="direct-item" id="contact-email">
                    <span class="item-label">Direct Email</span>
                    <span class="item-value">${e.email}</span>
                  </a>
                  ${T().map(e=>`
                  <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="direct-item">
                    <span class="item-label">${e.label||e.key}</span>
                    <span class="item-value">${e.handle}</span>
                  </a>`).join(``)}
                </div>

                <div class="contact-meta-badge">
                  <span class="badge-dot-green"></span>
                  <span>USUALLY REPLIES WITHIN A DAY</span>
                </div>
              </div>
            </div>
            
            <!-- Right: Structured Brief Form -->
            <form class="contact-form-card animate-slide-right" id="contact-page-form">
              <div class="form-row">
                <div class="form-field">
                  <label for="contact-name">YOUR NAME / ORGANIZATION</label>
                  <input type="text" id="contact-name" name="name" placeholder="Alex Vance" required />
                </div>
                <div class="form-field">
                  <label for="contact-email">WORK EMAIL ADDRESS</label>
                  <input type="email" id="contact-email-input" name="email" placeholder="alex@company.com" required />
                </div>
              </div>

              <div class="form-field">
                <label for="contact-intent">INQUIRY TYPE</label>
                <select id="contact-intent" name="intent" class="form-select">
                  <option value="service">Custom Software / AI Automation Service</option>
                  <option value="product">Product Support / Commercial Licensing</option>
                  <option value="partnership">Business Partnership / Sponsorship</option>
                  <option value="other">General Technical Inquiry</option>
                </select>
              </div>
              
              <div class="form-field">
                <label for="contact-message">TECHNICAL BRIEF / OBJECTIVES</label>
                <textarea id="contact-message" name="message" rows="5" placeholder="Describe the scope, objectives, technical requirements, and target timeline..." required></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary btn-submit" id="btn-contact-submit">
                Send Inquiry
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M14 2L7 9M14 2l-4.5 12L7 9 2 7.5 14 2z" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  `}function Y(){let e=document.getElementById(`contact-page-form`);e&&(e.onsubmit=t=>{t.preventDefault();let n=new FormData(e),r=e.querySelector(`#contact-intent`),i=r?r.options[r.selectedIndex].text:``;w(`Project enquiry from ${n.get(`name`)}`,`Name: ${n.get(`name`)}
Email: ${n.get(`email`)}
Topic: ${i}

${n.get(`message`)}`);let a=document.getElementById(`btn-contact-submit`);a&&(a.textContent=`Opening your email app…`)})}var ae=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,oe=()=>window.matchMedia(`(hover: hover) and (pointer: fine)`).matches,se=!1,ce=!1,X=[];function Z(){document.body.classList.remove(`motion-ready`),document.body.offsetWidth,requestAnimationFrame(()=>document.body.classList.add(`motion-ready`)),le(),!ae()&&(ue(),oe()&&(de(),fe(),pe()))}function le(){let e=document.querySelector(`.scroll-progress`);e||(e=document.createElement(`div`),e.className=`scroll-progress`,e.setAttribute(`aria-hidden`,`true`),document.body.appendChild(e));let t=()=>{let t=document.documentElement.scrollHeight-window.innerHeight;e.style.transform=`scaleX(${t>0?window.scrollY/t:0})`};t(),se||=(window.addEventListener(`scroll`,()=>requestAnimationFrame(t),{passive:!0}),!0)}function ue(){X=[...document.querySelectorAll(`[data-parallax]`)];let e=()=>{X.forEach(e=>{let t=parseFloat(e.dataset.parallax)||.05;e.style.setProperty(`--parallax`,`${window.scrollY*t}px`)})};ce||=(window.addEventListener(`scroll`,()=>requestAnimationFrame(e),{passive:!0}),!0),e()}function de(){document.querySelectorAll(`[data-spotlight]`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect();e.style.setProperty(`--mx`,`${t.clientX-n.left}px`),e.style.setProperty(`--my`,`${t.clientY-n.top}px`)})})}function fe(){document.querySelectorAll(`[data-tilt]`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width-.5,i=(t.clientY-n.top)/n.height-.5;e.style.setProperty(`--rx`,`${(-i*6).toFixed(2)}deg`),e.style.setProperty(`--ry`,`${(r*8).toFixed(2)}deg`)}),e.addEventListener(`pointerleave`,()=>{e.style.setProperty(`--rx`,`0deg`),e.style.setProperty(`--ry`,`0deg`)})})}function pe(){document.querySelectorAll(`.magnetic`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=t.clientX-n.left-n.width/2,i=t.clientY-n.top-n.height/2;e.style.transform=`translate(${r*.18}px, ${i*.3}px)`}),e.addEventListener(`pointerleave`,()=>{e.style.transform=``})})}var Q={"/":`Aryan builds Android and iOS apps, fast websites and AI automations at AryansArcade. See real projects and hire for your next build.`,"/work":`Projects by Aryan: Spinpath (learning website), Excuses and Carousel Studio (mobile apps) and a nightly AI podcast automation.`,"/services":`Hire Aryan for automation, website development, Android and iOS app development, and AI features. Fixed plans, weekly updates, you own the code.`,"/about":`About Aryan, the developer behind AryansArcade, building apps, websites and AI automations.`,"/contact":`Contact Aryan at AryansArcade to start an app, website or automation project.`};function me(e){let t=Q[e]||Q[`/`],n=document.querySelector(`meta[name="description"]`);n&&n.setAttribute(`content`,t)}function he(){window.addEventListener(`hashchange`,$),window.addEventListener(`load`,$),$()}function $(){let e=window.location.hash||`#/`,t=document.getElementById(`app`);if(!t)return;let n=e.replace(/^#/,``)||`/`,r=``,i=`AryansArcade — Builder Ecosystem & Digital Storefront`,a=null;if(n.startsWith(`/products`)&&!f())window.location.replace(`#/work`);else if(n===`/content`&&!g()||n===`/newsletter`&&!_())window.location.replace(`#/`);else{if(n===`/`||n===``)r=j(),i=`AryansArcade — Apps, Websites & AI Automation by Aryan`,a=()=>{let e=document.getElementById(`home-newsletter-form`);e&&(e.onsubmit=t=>{t.preventDefault();let n=e.querySelector(`input[type="email"]`).value;w(`Subscribe me to the AryansArcade Letter`,`Please add ${n} to the newsletter.`)})};else if(n===`/products`)r=M(),i=`Products & Architecture — AryansArcade`,a=N;else if(n.startsWith(`/products/`)){let e=n.replace(`/products/`,``).split(`?`)[0],t=p().find(t=>t.slug===e);r=P(e),i=t?`${t.name} — AryansArcade`:`Product Detail — AryansArcade`}else n===`/work`?(r=F(),i=`Projects — AryansArcade`,a=I):n===`/services`?(r=L(),i=`Services: Automation, Websites & Apps — AryansArcade`):n===`/content`?(r=R(),i=`Content, Articles & Video Teardowns — AryansArcade`,a=B):n===`/newsletter`?(r=V(),i=`AryansArcade Letter — Weekly Builder Dispatch`,a=H):n===`/about`?(r=W(),i=`About & Engineering Ethos — AryansArcade`):n===`/support`?(r=K(),i=`Support & Patronage — AryansArcade`,a=q):n===`/contact`?(r=J(),i=`Contact & Technical Brief — AryansArcade`,a=Y):(r=`
      <div class="page-view not-found-page">
        <section class="section">
          <div class="container" style="text-align: center; padding: 120px 0;">
            <span class="section-label">[ 404 NOT FOUND ]</span>
            <h1 class="section-title">Route not located.</h1>
            <p class="section-subtitle" style="margin: 0 auto 32px auto;">The requested destination does not exist within the AryansArcade ecosystem.</p>
            <a href="#/" class="btn btn-primary">Return to Ecosystem Home</a>
          </div>
        </section>
      </div>
    `,i=`404 Not Found — AryansArcade`);document.title=i,me(n),t.innerHTML=`
    ${ee()}
    <main id="main-content">
      ${r}
    </main>
    ${te()}
  `,S(),a&&a(),window.scrollTo({top:0,behavior:`instant`}),ge(),Z()}}function ge(){let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`is-visible`)})},{threshold:.08,rootMargin:`0px 0px -30px 0px`});document.querySelectorAll(`.animate-on-scroll, .animate-stagger, .animate-slide-left, .animate-slide-right`).forEach(t=>e.observe(t))}if(window.top!==window.self)try{window.top.location.replace(window.self.location.href)}catch{document.documentElement.innerHTML=``}document.addEventListener(`DOMContentLoaded`,()=>{he()});