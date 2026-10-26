import{C as e,S as t,b as n,c as r,d as i,f as a,l as o,s,u as c,x as l}from"./store-DqCvXnoq.js";var u={name:`AryansArcade`,shortName:`AA`,tagline:`Personal Builder Ecosystem & Digital Storefront`,founder:`Aryan`,description:`Independent software builder crafting production-grade developer tools, AI applications, web systems, and digital storefronts with architectural restraint.`,domain:`aryansarcade.in`,email:`hello@aryansarcade.in`,navLinks:[{label:`Work`,path:`#/work`},{label:`Products`,path:`#/products`},{label:`Services`,path:`#/services`},{label:`Content`,path:`#/content`},{label:`Newsletter`,path:`#/newsletter`},{label:`About`,path:`#/about`}],footerLinks:[{label:`Work`,path:`#/work`},{label:`Products`,path:`#/products`},{label:`Services`,path:`#/services`},{label:`Content`,path:`#/content`},{label:`Newsletter`,path:`#/newsletter`},{label:`About`,path:`#/about`},{label:`Support`,path:`#/support`},{label:`Contact`,path:`#/contact`}],socials:{github:{url:`https://github.com/greedilearner`,handle:`@greedilearner`},youtube:{url:`https://youtube.com/@yourchannel`,handle:`@yourchannel`},instagram:{url:`https://instagram.com/yourhandle`,handle:`@yourhandle`},x:{url:`https://x.com/yourhandle`,handle:`@yourhandle`}}},d=e=>e.filter(e=>e.path!==`#/products`||a());function f(){let e=window.location.hash||`#/`;return`
    <nav class="navbar" id="navbar">
      <div class="navbar-inner">
        <a href="#/" class="nav-logo" aria-label="AryansArcade Home">
          Aryans<span class="wordmark-em">Arcade</span><span class="logo-dot"></span>
        </a>
        
        <div class="nav-links" id="nav-links">
          ${d(u.navLinks).map(t=>{let n=e===t.path||t.path!==`#/`&&e.startsWith(t.path);return`
              <a href="${t.path}" class="nav-link ${n?`active`:``}">
                ${t.label}
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
        <a href="#/" class="nav-link ${e===`#/`?`active`:``}">Home</a>
        ${d(u.navLinks).map(t=>`
          <a href="${t.path}" class="nav-link ${e.startsWith(t.path)?`active`:``}">
            ${t.label}
          </a>
        `).join(``)}
        <a href="#/support" class="nav-link ${e.startsWith(`#/support`)?`active`:``}">Support</a>
        <a href="#/contact" class="nav-link ${e.startsWith(`#/contact`)?`active`:``}">Contact</a>
      </div>
    </nav>
  `}function p(){let e=document.getElementById(`nav-hamburger`),t=document.getElementById(`nav-mobile`);e&&t&&(e.onclick=()=>{e.classList.toggle(`active`),t.classList.toggle(`open`),document.body.style.overflow=t.classList.contains(`open`)?`hidden`:``},t.querySelectorAll(`.nav-link`).forEach(n=>{n.onclick=()=>{e.classList.remove(`active`),t.classList.remove(`open`),document.body.style.overflow=``}}))}var m=e=>e.filter(e=>e.path!==`#/products`||a());function h(){return`
    <footer class="footer-band" id="footer">
      <div class="container">
        <div class="footer-grid-layout">
          <div class="footer-brand-col">
            <span class="footer-wordmark">Aryans<span class="wordmark-em">Arcade</span><span class="footer-dot"></span></span>
            <p class="footer-tagline">${u.tagline}</p>
            <span class="footer-copyright">© 2026 AryansArcade. Built with architectural restraint.</span>
          </div>
          
          <div class="footer-nav-col">
            <span class="footer-col-title">ECOSYSTEM</span>
            <div class="footer-links-grid">
              ${m(u.footerLinks).map(e=>`
                <a href="${e.path}" class="footer-link">${e.label}</a>
              `).join(``)}
            </div>
          </div>
          
          <div class="footer-connect-col">
            <span class="footer-col-title">DIRECT CHANNELS</span>
            <div class="footer-social-links">
              <a href="${u.socials.github.url}" target="_blank" rel="noopener" class="footer-link">GitHub</a>
              <a href="${u.socials.youtube.url}" target="_blank" rel="noopener" class="footer-link">YouTube</a>
              <a href="${u.socials.instagram.url}" target="_blank" rel="noopener" class="footer-link">Instagram</a>
              <a href="${u.socials.x.url}" target="_blank" rel="noopener" class="footer-link">X (Twitter)</a>
            </div>
            <a href="mailto:${u.email}" class="footer-email-link">${u.email}</a>
          </div>
        </div>
      </div>
    </footer>
  `}function g(e){return`
    <article class="product-item-card" id="card-${e.slug}">
      <div class="card-identity-header">
        <div class="card-icon-frame" style="--product-accent: ${e.accentColor};">
          ${_(e.logoIcon)}
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
  `}function _(e){switch(e){case`activity`:return`
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
      `}}var v=`
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;function y(e,t=0){return e.split(` `).map((e,n)=>`<span class="word-mask"><span class="word" style="--i:${t+n}">${e}</span></span>`).join(` `)}function b(e,t){let n=e.external?` target="_blank" rel="noopener"`:``;return`
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
    </a>`}function x(){let e=o(),t=i(),n=c(),r=s().slice(0,2),a=e.filter(e=>e.featured).slice(0,3),l=t.find(e=>e.highlight)||t[0],d=0,f=()=>`[ ${String(++d).padStart(2,`0`)} ]`,p=[`Automation`,`Website Development`,`App Development`,`AI Features`,`Android & iOS`,`Browser Automation`,`Motion & UI`].map(e=>`<span class="marquee-item">${e}</span><span class="marquee-star">✦</span>`).join(``);return`
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
              ${y(`I build apps, websites`,0)}<br />
              ${y(`&amp;`,4)} <span class="word-mask"><em class="word" style="--i:5">automations</em></span><br />
              ${y(`that save you time.`,6)}
            </h1>

            <p class="home-hero-sub hero-fade" style="--d:1">
              I'm ${u.founder}. I design and build Android and iOS apps, fast websites, and AI automations that take repetitive work off your plate.
            </p>

            <div class="home-hero-ctas hero-fade" style="--d:2">
              <a href="#/work" class="btn btn-primary magnetic">See my work ${v}</a>
              <a href="#/services" class="btn btn-secondary magnetic">Services</a>
            </div>
          </div>

          <div class="hero-photo-wrap" data-parallax="0.06">
            <div class="hero-photo-frame" data-tilt>
              <img src="profile.jpg" alt="Portrait of ${u.founder}" width="1260" height="1060" fetchpriority="high" />
            </div>
            <div class="hero-badge" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs><path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
                <text><textPath href="#badge-circle">APPS • WEBSITES • AUTOMATION • </textPath></text>
              </svg>
              <span class="hero-badge-core">✦</span>
            </div>
            <div class="hero-photo-caption">
              <span>${u.founder}</span>
              <span>Builder · AryansArcade</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════ MARQUEE ═══════════ -->
      <div class="marquee" aria-hidden="true">
        <div class="marquee-track">${p}${p}</div>
      </div>

      <!-- ═══════════ LIVE NOW ═══════════ -->
      <section class="currently-building-strip">
        <div class="container">
          <div class="strip-box animate-on-scroll">
            <div class="strip-left">
              <span class="strip-tag">LIVE NOW</span>
              <h3 class="strip-title">${l.title}: ${l.kicker||``}</h3>
              <p class="strip-desc">${l.metrics}</p>
            </div>
            <div class="strip-right">
              <a href="${l.linkUrl}" ${l.external?`target="_blank" rel="noopener"`:``} class="btn btn-light">${l.linkText}</a>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════ PROJECTS ═══════════ -->
      <section class="section home-work-section">
        <div class="container">
          <div class="section-head animate-on-scroll">
            <span class="section-label draw-line">${f()} PROJECTS</span>
            <div class="section-head-split">
              <div>
                <h2 class="section-title">Things we've built and shipped.</h2>
                <p class="section-subtitle">A website, two apps and an automation. All real, all in use.</p>
              </div>
              <a href="#/work" class="head-view-all-link">All projects (${t.length}) →</a>
            </div>
          </div>

          <div class="project-list animate-stagger">
            ${t.map((e,t)=>b(e,t)).join(``)}
          </div>
        </div>
      </section>

      <!-- ═══════════ SERVICES ═══════════ -->
      <section class="section home-services-section">
        <div class="container">
          <div class="section-head animate-on-scroll">
            <span class="section-label draw-line">${f()} SERVICES</span>
            <div class="section-head-split">
              <div>
                <h2 class="section-title">What I can build for you.</h2>
                <p class="section-subtitle">Pick one, or combine them: an app with AI inside, a website with automations behind it.</p>
              </div>
              <a href="#/services" class="head-view-all-link">Service details →</a>
            </div>
          </div>

          <div class="home-services-list animate-stagger">
            ${n.map((e,t)=>`
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
            <span class="section-label draw-line">${f()} PRODUCTS</span>
            <div class="section-head-split">
              <div>
                <h2 class="section-title">Engineered to ship. Priced to own.</h2>
                <p class="section-subtitle">Commercial digital products, applications, and developer utilities with direct source code licenses.</p>
              </div>
              <a href="#/products" class="head-view-all-link">View all products (${e.length}) →</a>
            </div>
          </div>

          <div class="home-products-grid animate-stagger">
            ${a.map(e=>g(e)).join(``)}
          </div>
        </div>
      </section>
      `:``}

      <!-- ═══════════ LATEST CONTENT ═══════════ -->
      <section class="section home-content-section">
        <div class="container">
          <div class="section-head animate-on-scroll">
            <span class="section-label draw-line">${f()} LATEST CONTENT</span>
            <div class="section-head-split">
              <div>
                <h2 class="section-title">Building in public.</h2>
                <p class="section-subtitle">Technical teardowns, architecture blueprints, and engineering essays.</p>
              </div>
              <a href="#/content" class="head-view-all-link">Read all dispatches →</a>
            </div>
          </div>

          <div class="home-content-dual animate-stagger">
            ${r.map(e=>`
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

      <!-- ═══════════ NEWSLETTER TEASER ═══════════ -->
      <section class="home-newsletter-band animate-on-scroll">
        <div class="container">
          <div class="newsletter-compact-box">
            <div class="newsletter-text-col">
              <span class="section-label">${f()} ARYANSARCADE LETTER</span>
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
                <span class="builder-name">${u.founder} — Founder, AryansArcade</span>
                <a href="#/contact" class="about-more-link">Start a project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `}function S(t=`All`){let n=o(),r=t===`All`?n:n.filter(e=>e.category.toLowerCase()===t.toLowerCase());return`
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
              ${e.map(e=>`
                <button 
                  class="filter-pill ${e.toLowerCase()===t.toLowerCase()?`active`:``}" 
                  data-category="${e}">
                  ${e}
                </button>
              `).join(``)}
            </div>
          </div>
        </div>
      </section>

      <section class="section catalog-grid-section">
        <div class="container">
          <div class="catalog-products-grid animate-stagger" id="products-catalog-container">
            ${r.length>0?r.map(e=>g(e)).join(``):`<div class="empty-state"><p>No products currently found in this category.</p></div>`}
          </div>
        </div>
      </section>
    </div>
  `}function C(){let e=document.querySelectorAll(`#product-category-filters .filter-pill`),t=document.getElementById(`products-catalog-container`);e.length&&t&&e.forEach(n=>{n.onclick=()=>{e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let r=n.getAttribute(`data-category`),i=o(),a=r===`All`?i:i.filter(e=>e.category.toLowerCase()===r.toLowerCase());t.innerHTML=a.length>0?a.map(e=>g(e)).join(``):`<div class="empty-state"><p>No products currently found in this category.</p></div>`}})}function w(e){let t=o(),n=t.find(t=>t.slug===e)||t[0];return`
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
  `}function T(e=`All`){let n=i(),r=e===`All`?n:n.filter(t=>t.category.toLowerCase()===e.toLowerCase());return`
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

      <section class="section work-list-section">
        <div class="container">
          <div class="project-list animate-stagger" id="work-container">
            ${r.map((e,t)=>b(e,t)).join(``)}
          </div>
        </div>
      </section>
    </div>
  `}function E(){let e=document.querySelectorAll(`#work-category-filters .filter-pill`),t=document.getElementById(`work-container`);e.length&&t&&e.forEach(n=>{n.onclick=()=>{e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let r=n.getAttribute(`data-category`),a=i(),o=r===`All`?a:a.filter(e=>e.category.toLowerCase()===r.toLowerCase());t.innerHTML=o.length>0?o.map((e,t)=>b(e,t)).join(``):`<div class="empty-state"><p>No work items found in this category.</p></div>`}})}function D(){return`
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
            ${c().map((e,t)=>`
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
            ${l.map(e=>`
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
  `}function O(e=`All`){let t=s(),r=e===`All`?t:t.filter(t=>t.type.toLowerCase()===e.toLowerCase());return`
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
              ${n.map(t=>`
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
            ${r.map(e=>k(e)).join(``)}
          </div>
        </div>
      </section>
    </div>
  `}function k(e){let t=e.type===`Videos`;return`
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
  `}function A(){let e=document.querySelectorAll(`#content-category-filters .filter-pill`),t=document.getElementById(`content-feed-container`);e.length&&t&&e.forEach(n=>{n.onclick=()=>{e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let r=n.getAttribute(`data-category`),i=s(),a=r===`All`?i:i.filter(e=>e.type.toLowerCase()===r.toLowerCase());t.innerHTML=a.map(e=>k(e)).join(``)}})}function j(){let e=r();return`
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
  `}function M(){let e=document.getElementById(`newsletter-main-form`);e&&(e.onsubmit=e=>{e.preventDefault();let t=document.getElementById(`btn-nl-submit`),n=document.getElementById(`nl-email-input`),r=t.innerHTML;t.innerHTML=`Subscribing...`,t.disabled=!0,setTimeout(()=>{t.innerHTML=`Subscribed ✓`,n.value=``,setTimeout(()=>{t.innerHTML=r,t.disabled=!1},3e3)},900)})}var N=[{group:`CORE RUNTIMES`,items:[`TypeScript`,`JavaScript (ESNext)`,`Node.js`,`Python`,`Go`,`Rust / WASM`]},{group:`INTERFACES & UX`,items:[`React 19`,`Next.js 15`,`Vite`,`HTML5 / Semantic CSS`,`Design Systems`]},{group:`DATA & STORAGE`,items:[`PostgreSQL`,`SQLite / LibSQL`,`Cloudflare D1`,`Redis`,`Vector Embeddings`]},{group:`DEVOPS & CLOUD`,items:[`Docker`,`Cloudflare Workers`,`AWS`,`GitHub Actions`,`Vercel`]}];function P(){return`
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
                  <span class="avatar-crop" role="img" aria-label="${u.founder}"></span>
                  <span class="identity-role-pill">FOUNDER // DEV</span>
                </div>
                <h3 class="identity-name">${u.founder}</h3>
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
                  ${N.map(e=>`
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
  `}var F=[{amount:`₹100`,amountUsd:`$2`,name:`Server Sparks`,desc:`Covers edge compute costs and keeps open-source experiments online.`,perk:`Public builder appreciation + Discord supporter role`},{amount:`₹500`,amountUsd:`$7`,name:`API & Compute Fuel`,desc:`Directly subsidizes GPU and LLM inference credits for research benchmarks.`,perk:`Early access to pre-release betas & experimental repositories`,recommended:!0},{amount:`₹1,000`,amountUsd:`$15`,name:`Sponsor a Build`,desc:`Funds deep-dive technical articles, research papers, and open-source tooling.`,perk:`Name featured in newsletter archive + priority issue review`}],I=[{q:`How is this different from buying a product?`,a:`When you hire me for a project, you pay for work built for you and own all of its code. Supporting AryansArcade is a voluntary tip that funds free tools like Spinpath and the content I share.`},{q:`What payment methods will be accepted?`,a:`UPI, credit/debit cards, net banking, and international cards via Stripe/Razorpay.`},{q:`Can I cancel anytime if I choose recurring patronage?`,a:`Yes, full control with one-click cancellation from your billing portal.`}];function ee(){return`
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
            ${F.map(e=>`
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
            ${I.map(e=>`
              <div class="faq-item">
                <h4 class="faq-question">${e.q}</h4>
                <p class="faq-answer">${e.a}</p>
              </div>
            `).join(``)}
          </div>
        </div>
      </section>
    </div>
  `}function L(){document.querySelectorAll(`.btn-support-select`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-amount`);alert(`Thank you for supporting AryansArcade with ${t}! Payment integration will be connected in Phase 5.`)}});let e=document.getElementById(`btn-custom-support`),t=document.getElementById(`custom-amount-input`);e&&t&&(e.onclick=()=>{let e=t.value||`2500`;alert(`Thank you for supporting AryansArcade with ₹${e}! Payment integration will be connected in Phase 5.`)})}function R(){return`
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
                <p class="direct-desc">Guaranteed response within 24 hours on business days. Direct communication preferred over formal bureaucracy.</p>
                
                <div class="direct-links-list">
                  <a href="mailto:${u.email}" class="direct-item" id="contact-email">
                    <span class="item-label">Direct Email</span>
                    <span class="item-value">${u.email}</span>
                  </a>
                  <a href="${u.socials.github.url}" target="_blank" rel="noopener" class="direct-item" id="contact-gh">
                    <span class="item-label">GitHub</span>
                    <span class="item-value">${u.socials.github.handle}</span>
                  </a>
                  <a href="${u.socials.youtube.url}" target="_blank" rel="noopener" class="direct-item" id="contact-yt">
                    <span class="item-label">YouTube</span>
                    <span class="item-value">${u.socials.youtube.handle}</span>
                  </a>
                  <a href="${u.socials.x.url}" target="_blank" rel="noopener" class="direct-item" id="contact-x">
                    <span class="item-label">X / Twitter</span>
                    <span class="item-value">${u.socials.x.handle}</span>
                  </a>
                </div>

                <div class="contact-meta-badge">
                  <span class="badge-dot-green"></span>
                  <span>AVERAGE RESPONSE SLA: &lt; 4 HOURS</span>
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
  `}function z(){let e=document.getElementById(`contact-page-form`);e&&(e.onsubmit=t=>{t.preventDefault();let n=document.getElementById(`btn-contact-submit`),r=n.innerHTML;n.innerHTML=`Transmitting Brief...`,n.disabled=!0,setTimeout(()=>{n.innerHTML=`Inquiry Received ✓`,e.reset(),setTimeout(()=>{n.innerHTML=r,n.disabled=!1},3e3)},1100)})}var B=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,V=()=>window.matchMedia(`(hover: hover) and (pointer: fine)`).matches,H=!1,U=!1,W=[];function G(){document.body.classList.remove(`motion-ready`),document.body.offsetWidth,requestAnimationFrame(()=>document.body.classList.add(`motion-ready`)),K(),!B()&&(q(),V()&&(J(),Y(),X()))}function K(){let e=document.querySelector(`.scroll-progress`);e||(e=document.createElement(`div`),e.className=`scroll-progress`,e.setAttribute(`aria-hidden`,`true`),document.body.appendChild(e));let t=()=>{let t=document.documentElement.scrollHeight-window.innerHeight;e.style.transform=`scaleX(${t>0?window.scrollY/t:0})`};t(),H||=(window.addEventListener(`scroll`,()=>requestAnimationFrame(t),{passive:!0}),!0)}function q(){W=[...document.querySelectorAll(`[data-parallax]`)];let e=()=>{W.forEach(e=>{let t=parseFloat(e.dataset.parallax)||.05;e.style.setProperty(`--parallax`,`${window.scrollY*t}px`)})};U||=(window.addEventListener(`scroll`,()=>requestAnimationFrame(e),{passive:!0}),!0),e()}function J(){document.querySelectorAll(`[data-spotlight]`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect();e.style.setProperty(`--mx`,`${t.clientX-n.left}px`),e.style.setProperty(`--my`,`${t.clientY-n.top}px`)})})}function Y(){document.querySelectorAll(`[data-tilt]`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width-.5,i=(t.clientY-n.top)/n.height-.5;e.style.setProperty(`--rx`,`${(-i*6).toFixed(2)}deg`),e.style.setProperty(`--ry`,`${(r*8).toFixed(2)}deg`)}),e.addEventListener(`pointerleave`,()=>{e.style.setProperty(`--rx`,`0deg`),e.style.setProperty(`--ry`,`0deg`)})})}function X(){document.querySelectorAll(`.magnetic`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=t.clientX-n.left-n.width/2,i=t.clientY-n.top-n.height/2;e.style.transform=`translate(${r*.18}px, ${i*.3}px)`}),e.addEventListener(`pointerleave`,()=>{e.style.transform=``})})}function Z(){window.addEventListener(`hashchange`,Q),window.addEventListener(`load`,Q),Q()}function Q(){let e=window.location.hash||`#/`,t=document.getElementById(`app`);if(!t)return;let n=e.replace(/^#/,``)||`/`,r=``,i=`AryansArcade — Builder Ecosystem & Digital Storefront`,s=null;if(n.startsWith(`/products`)&&!a()){window.location.replace(`#/work`);return}if(n===`/`||n===``)r=x(),i=`AryansArcade — Software Builder Ecosystem & Digital Storefront`,s=()=>{let e=document.getElementById(`home-newsletter-form`);e&&(e.onsubmit=t=>{t.preventDefault(),alert(`Subscribed to AryansArcade Letter! Confirmation email dispatched.`),e.reset()})};else if(n===`/products`)r=S(),i=`Products & Architecture — AryansArcade`,s=C;else if(n.startsWith(`/products/`)){let e=n.replace(`/products/`,``).split(`?`)[0],t=o().find(t=>t.slug===e);r=w(e),i=t?`${t.name} — AryansArcade`:`Product Detail — AryansArcade`}else n===`/work`?(r=T(),i=`Projects — AryansArcade`,s=E):n===`/services`?(r=D(),i=`Services: Automation, Websites & Apps — AryansArcade`):n===`/content`?(r=O(),i=`Content, Articles & Video Teardowns — AryansArcade`,s=A):n===`/newsletter`?(r=j(),i=`AryansArcade Letter — Weekly Builder Dispatch`,s=M):n===`/about`?(r=P(),i=`About & Engineering Ethos — AryansArcade`):n===`/support`?(r=ee(),i=`Support & Patronage — AryansArcade`,s=L):n===`/contact`?(r=R(),i=`Contact & Technical Brief — AryansArcade`,s=z):(r=`
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
    `,i=`404 Not Found — AryansArcade`);document.title=i,t.innerHTML=`
    ${f()}
    <main id="main-content">
      ${r}
    </main>
    ${h()}
  `,p(),s&&s(),window.scrollTo({top:0,behavior:`instant`}),$(),G()}function $(){let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`is-visible`)})},{threshold:.08,rootMargin:`0px 0px -30px 0px`});document.querySelectorAll(`.animate-on-scroll, .animate-stagger, .animate-slide-left, .animate-slide-right`).forEach(t=>e.observe(t))}document.addEventListener(`DOMContentLoaded`,()=>{Z()});