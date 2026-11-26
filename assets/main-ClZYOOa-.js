(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`AryansArcade`,shortName:`AA`,tagline:`Personal Builder Ecosystem & Digital Storefront`,founder:`Aryan`,founderFullName:`Aryan Singh`,description:`Independent software builder crafting production-grade developer tools, AI applications, web systems, and digital storefronts with architectural restraint.`,domain:`aryansarcade.in`,email:`hello@aryansarcade.in`,navLinks:[{label:`Work`,path:`/work`},{label:`Products`,path:`/products`},{label:`Services`,path:`/services`},{label:`Posts`,path:`/content`},{label:`Newsletter`,path:`/newsletter`},{label:`About`,path:`/about`}],footerLinks:[{label:`Work`,path:`/work`},{label:`Products`,path:`/products`},{label:`Services`,path:`/services`},{label:`Posts`,path:`/content`},{label:`Newsletter`,path:`/newsletter`},{label:`News`,path:`/news`},{label:`About`,path:`/about`},{label:`Support`,path:`/support`},{label:`Contact`,path:`/contact`}],socials:{github:{label:`GitHub`,url:`https://github.com/greedilearner`,handle:`@greedilearner`},linkedin:{label:`LinkedIn`,url:`https://www.linkedin.com/in/aryan-singh-709020205/`,handle:`Aryan Singh`},instagram:{label:`Instagram`,url:`https://www.instagram.com/aryansarcade/`,handle:`@aryansarcade`},x:{label:`X`,url:`https://x.com/Aryansarcde`,handle:`@Aryansarcde`},youtube:null}},t=[`All`,`Apps`,`AI Tools`,`Automations`,`Websites`,`Digital Products`],n=[{id:`agentstein`,slug:`agentstein`,name:`Agentstein`,category:`AI Tools`,status:`On sale`,featured:!0,shortDescription:`A floating widget for Claude Code: see each session's progress at a glance and get pulled back the moment it asks you something. Free for one widget, Pro unlocks unlimited.`,price:`$12`,priceLabel:`one-time`,accentColor:`#1F5C46`,logoIcon:`terminal`,externalUrl:`https://greedilearn.gumroad.com/l/dsrco`},{id:`carousel-studio`,slug:`carousel-studio`,name:`Carousel Studio`,category:`Apps`,status:`Launching soon`,featured:!0,shortDescription:`Speak an idea, get an Instagram carousel and an X thread in your own voice. The AI runs on your own PC: private, no subscription.`,price:`Soon`,priceLabel:`one-time`,accentColor:`#1F5C46`,logoIcon:`layers`,externalUrl:`https://carousel.aryansarcade.in/`}],r=[`All`,`Websites`,`Apps`,`Automation`],i=[{id:`agentstein`,slug:`agentstein`,title:`Agentstein`,kicker:`Never miss a question your AI agent is waiting on.`,category:`Apps`,year:`2026`,status:`Windows · on sale`,description:`A small always-on-top widget for people who run Claude Code sessions. Each session gets a calm bubble with a progress ring that opens into a card with the current step, the task checklist and the latest reply, and it lights up the moment Claude asks you something. 100% local, no account.`,metrics:`Free for one widget · Pro $12 one-time for unlimited widgets`,tags:[`Electron`,`Node.js`,`Claude Code`,`Gumroad licences`],linkText:`Get Agentstein →`,linkUrl:`https://greedilearn.gumroad.com/l/dsrco`,external:!0},{id:`reelstein`,slug:`reelstein`,title:`Reelstein`,kicker:`Counts your Reels and Shorts, and steps in on autopilot scrolling.`,category:`Apps`,year:`2026`,status:`Android · Play beta`,description:`An Android app that counts every Instagram Reel and YouTube Short you watch. A small pill around the front camera shows today's minutes and reels, and a coach called the Prof steps in with a pause card when you start skimming, speeding up or scrolling late at night. Everything stays on the phone: no account, no ads, no internet permission.`,metrics:`Accessibility service · home-screen widget · Quick Settings tile · 7-day chart`,tags:[`Kotlin`,`Android`,`Accessibility Service`,`App widget`],linkText:`Join the beta →`,linkUrl:`/contact`},{id:`spinpath`,slug:`spinpath`,title:`Spinpath`,kicker:`Spin a topic, learn it, say it out loud.`,category:`Websites`,year:`2026`,status:`Live`,description:`A learning website that spins a random concept from your chosen path (AI engineer, web, data, security and more), then turns it into speaking drills: debate motions, fresh articles from the past week, interview questions and "explain it to…" prompts.`,metrics:`Static site, no build step · articles refreshed daily by a GitHub Action`,tags:[`JavaScript`,`HTML / CSS`,`GitHub Actions`,`GitHub Pages`],linkText:`Visit live site →`,linkUrl:`https://greedilearner.github.io/spinpath/`,external:!0,highlight:!0},{id:`excuses`,slug:`excuses`,title:`Excuses`,kicker:`A to-do app that asks why, kindly.`,category:`Apps`,year:`2026`,status:`Android & iOS`,description:`Schedule tasks, then record a voice diary when they slip. AI reads the patterns behind missed tasks and reflects them back without shame. Built first in Expo / React Native, then ported to Kotlin Multiplatform with shared UI for Android and iOS.`,metrics:`Bring-your-own-key AI: Claude, Gemini, OpenAI, DeepSeek or NVIDIA NIM`,tags:[`React Native`,`Expo`,`Kotlin Multiplatform`,`Compose`,`Ktor`],linkText:`Ask for a demo →`,linkUrl:`/contact`,highlight:!1},{id:`carousel-studio`,slug:`carousel-studio`,title:`Carousel Studio`,kicker:`Thoughts in, Instagram carousels out.`,category:`Apps`,year:`2026`,status:`Android`,description:`An Android app that turns spoken reflections, notes or YouTube transcripts into Instagram-ready carousel images and X threads. Runs on a local Ollama model, remembers your voice and past posts, and saves straight to the gallery.`,metrics:`Local LLM via Ollama · voice memory (RAG) · 1080×1350 PNG export`,tags:[`Kotlin`,`Jetpack Compose`,`Room`,`Ollama`,`RAG`],linkText:`View on GitHub →`,linkUrl:`https://github.com/greedilearner/post_automation`,external:!0},{id:`nightly-podcast`,slug:`nightly-podcast`,title:`Nightly AI Podcast`,kicker:`Ask a question at night, hear the answer by morning.`,category:`Automation`,year:`2026`,status:`Running nightly`,description:`An automation that asks for tonight's learning topic, drives Google NotebookLM in a real browser to generate a two-host audio overview, downloads the MP3 and files it in a personal podcast library with its own web player.`,metrics:`Scheduled job · browser automation with Playwright · no API keys needed`,tags:[`Python`,`Playwright`,`Flask`,`Scheduler`,`SQLite`],linkText:`Ask for a demo →`,linkUrl:`/contact`}],a=[{id:`automation`,title:`Automation`,category:`Save hours`,tagline:`The boring, repeated work, done by software instead of people.`,description:`Scheduled jobs, browser automation and AI workflows that pull data, fill forms, post content, generate reports and send them where they need to go. Like the nightly podcast generator, but for your business.`,deliverables:[`Browser automation (Playwright) for sites with no API`,`AI workflows that read, summarise and draft for you`,`Scheduled jobs with alerts when something breaks`],timeline:`1–3 weeks`},{id:`website-development`,title:`Website Development`,category:`Get found`,tagline:`Fast, good-looking websites that are easy to keep up to date.`,description:`Portfolios, business sites, landing pages and web apps. Designed with care, built to load fast on phones, and set up so you can edit content yourself.`,deliverables:[`Custom design with motion that feels intentional`,`Mobile-first, fast loading, SEO basics done right`,`Hosting and domain set up, plus an admin to edit content`],timeline:`2–4 weeks`},{id:`app-development`,title:`App Development`,category:`Android & iOS`,tagline:`Mobile apps people keep on their home screen.`,description:`Native Android in Kotlin, or one codebase for Android and iOS with React Native or Kotlin Multiplatform. From first prototype to a build you can put in the Play Store.`,deliverables:[`Kotlin / Jetpack Compose, React Native or Kotlin Multiplatform`,`Offline storage, notifications, voice and camera features`,`Play Store and App Store build and release help`],timeline:`3–8 weeks`},{id:`ai-integration`,title:`AI Features`,category:`Add intelligence`,tagline:`Put Claude, GPT, Gemini or a local model inside your product.`,description:`Chat, search over your own documents, voice notes to text, summaries and smart suggestions, built into the app or site you already have.`,deliverables:[`Works with hosted models or private local models (Ollama)`,`Search and answers over your own documents (RAG)`,`Clear costs, with keys and data kept under your control`],timeline:`1–4 weeks`}],o=[{step:`01`,title:`Call`,desc:`A short call to understand what you need, who it is for and what done looks like.`},{step:`02`,title:`Plan`,desc:`A clear written plan with screens, features, price and timeline before any work starts.`},{step:`03`,title:`Build`,desc:`Weekly updates with a live link or test build, so you see progress and can steer it.`},{step:`04`,title:`Launch`,desc:`We launch it together. You own all the code, and get 30 days of fixes after launch.`}],s=[`All`,`LinkedIn`,`X`,`Instagram`],c=[{id:`li-ai-lesson-from-my-father`,type:`LinkedIn`,tag:`AI & CLIENTS`,title:`The most important AI lesson I learned didn't come from AI.`,date:`Jun 13, 2026`,isoDate:`2026-06-12T20:12:57Z`,readTime:`Article`,excerpt:`Brainstorming with my father, my toughest client, I noticed AI is great with broad ideas but struggles with precise, unique requirements. His point: that gap may define the industry's future. The value isn't generating the most code. It's being the bridge between AI and the client, and delivering exactly what they need.`,url:`https://www.linkedin.com/pulse/most-important-ai-lesson-i-learned-didnt-come-from-aryan-singh-nsgoc/`},{id:`x-code-review-hot-take`,type:`X`,tag:`AI & ENGINEERING`,title:`AI won't eliminate code review. It will change what it's for.`,date:`Oct 21, 2026`,isoDate:`2026-10-21T18:07:13Z`,readTime:`Post`,excerpt:`When an AI agent can generate hundreds of lines in minutes, reading every line becomes a poor use of senior engineering time. Define the expected behavior first, automate the checks you can prove, and save human review for architecture, trade-offs and failure modes. The goal isn't less accountability. It's better accountability.`,url:`https://x.com/Aryansarcde/status/2112968966251655192`},{id:`ig-review-the-right-thing`,type:`Instagram`,tag:`AI CODING`,title:`AI writes code faster than we can review it. Maybe we're reviewing the wrong thing.`,date:`Oct 21, 2026`,isoDate:`2026-10-21T18:05:26Z`,readTime:`Carousel`,excerpt:`Define what the code should do before it is written: clear acceptance criteria, recurring review comments turned into automated rules, behavior verified with evidence, and human reviewers kept on the decisions that matter.`,url:`https://www.instagram.com/aryansarcade/p/DexAs67E9dz/`},{id:`li-learning-jenkins`,type:`LinkedIn`,tag:`CI/CD`,title:`While everyone is learning prompt engineering, I took the road less traveled.`,date:`Jun 28, 2026`,isoDate:`2026-06-27T22:39:50Z`,readTime:`Article`,excerpt:`This week I learned Jenkins. Isn't it old? That's exactly why it's worth understanding. Frameworks come and go, but software still has to be tested, built and deployed safely. Learning Jenkins wasn't learning an old tool. It was learning one of the foundations of modern software engineering.`,url:`https://www.linkedin.com/pulse/while-everyone-learning-prompt-engineering-i-took-road-aryan-singh-s4bfc/`},{id:`ig-fintech-funding-q3`,type:`Instagram`,tag:`STARTUPS`,title:`Fintech funding is getting more selective.`,date:`Oct 23, 2026`,isoDate:`2026-10-22T19:03:08Z`,readTime:`Carousel`,excerpt:`Global fintech startups raised $10.6B in Q3 2026, down 21.4% year on year, across the fewest rounds since 2018. Investors now want traction, growth and a path to profitability, and AI that delivers measurable results, not just an AI label. (Source: Crunchbase News.)`,url:`https://www.instagram.com/aryansarcade/p/DezsGUek-CK/`},{id:`x-energy-race`,type:`X`,tag:`AI & ENERGY`,title:`The real bill for AI comes due in watts, not dollars.`,date:`Oct 12, 2026`,isoDate:`2026-10-12T05:50:13Z`,readTime:`Post`,excerpt:`AI looks cheap because VCs are footing the bill. After the model race comes the energy race. Whoever controls power controls compute.`,url:`https://x.com/Aryansarcde/status/2109522003996836047`},{id:`ig-collison-lessons`,type:`Instagram`,tag:`GROWTH`,title:`7 lessons from Patrick Collison for young, ambitious builders.`,date:`Oct 20, 2026`,isoDate:`2026-10-20T02:24:19Z`,readTime:`Carousel`,excerpt:`Go deep, not wide. Learn relentlessly. Work hard on things you enjoy. Build relationships with people who challenge you. Create things even when the outcome is uncertain. Learn from people who've done it. Don't wait for the perfect time to start.`,url:`https://www.instagram.com/aryansarcade/p/DeswNFGE_PC/`},{id:`x-first-domain`,type:`X`,tag:`BUILDING IN PUBLIC`,title:`Just bought my first domain.`,date:`Sep 26, 2026`,isoDate:`2026-09-26T18:05:05Z`,readTime:`Post`,excerpt:`Yeah, I know, I'm late. But "better late than never" beats "never". What I'm building with it: the one thing I'm actually good at, turning other people's problems into products. Simple. Not easy.`,url:`https://x.com/Aryansarcde/status/2103908734783328688`}],l={title:`ARYANSARCADE LETTER`,tagline:`AI, systems architecture, building in public, and technical experiments.`,cadence:`One useful dispatch every week. No spam. No marketing filler.`,subscriberCount:``,archive:[]},u={PRODUCTS:`rns_arcade_products_v4`,WORK:`rns_arcade_work_v3`,SERVICES:`rns_arcade_services_v2`,CONTENT:`rns_arcade_content_v7`,NEWSLETTER:`rns_arcade_newsletter_v3`};function d(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(`Failed to load ${e} from storage:`,n),t}}function f(){return p().length>0}function p(){return d(u.PRODUCTS,n)}function m(){return d(u.WORK,i)}function h(){return d(u.SERVICES,a)}function g(){return v().length>0}function _(){let e=y();return!!(e&&e.archive&&e.archive.length)}function v(){return d(u.CONTENT,c)}function y(){return d(u.NEWSLETTER,l)}var b={"/products":f,"/content":g,"/newsletter":_},x=e=>e.filter(e=>!b[e.path]||b[e.path]());function ee(){let t=window.location.pathname.replace(/\/+$/,``)||`/`;return`
    <nav class="navbar" id="navbar">
      <div class="navbar-inner">
        <a href="/" class="nav-logo" aria-label="AryansArcade Home">
          Aryans<span class="wordmark-em">Arcade</span><span class="logo-dot"></span>
        </a>
        
        <div class="nav-links" id="nav-links">
          ${x(e.navLinks).map(e=>{let n=t===e.path||e.path!==`/`&&t.startsWith(e.path);return`
              <a href="${e.path}" class="nav-link ${n?`active`:``}">
                ${e.label}
              </a>
            `}).join(``)}
          <a href="/contact" class="nav-cta">Contact</a>
        </div>
        
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <div class="nav-mobile" id="nav-mobile">
        <a href="/" class="nav-link ${t===`/`?`active`:``}">Home</a>
        ${x(e.navLinks).map(e=>`
          <a href="${e.path}" class="nav-link ${t.startsWith(e.path)?`active`:``}">
            ${e.label}
          </a>
        `).join(``)}
        <a href="/support" class="nav-link ${t.startsWith(`/support`)?`active`:``}">Support</a>
        <a href="/contact" class="nav-link ${t.startsWith(`/contact`)?`active`:``}">Contact</a>
      </div>
    </nav>
  `}function te(){let e=document.getElementById(`nav-hamburger`),t=document.getElementById(`nav-mobile`);e&&t&&(e.onclick=()=>{e.classList.toggle(`active`),t.classList.toggle(`open`),document.body.style.overflow=t.classList.contains(`open`)?`hidden`:``},t.querySelectorAll(`.nav-link`).forEach(n=>{n.onclick=()=>{e.classList.remove(`active`),t.classList.remove(`open`),document.body.style.overflow=``}}))}var ne=1800;function S(t,n=``){let r=new URLSearchParams;r.set(`subject`,String(t).slice(0,140)),n&&r.set(`body`,String(n).slice(0,ne));let i=r.toString().replace(/\+/g,`%20`);window.location.href=`mailto:${e.email}?${i}`}function C(){return Object.entries(e.socials).filter(([,e])=>e&&e.url).map(([e,t])=>({key:e,...t}))}var w={"/products":f,"/content":g,"/newsletter":_},re=e=>e.filter(e=>!w[e.path]||w[e.path]());function ie(){return`
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
              ${re(e.footerLinks).map(e=>`
                <a href="${e.path}" class="footer-link">${e.label}</a>
              `).join(``)}
            </div>
          </div>
          
          <div class="footer-connect-col">
            <span class="footer-col-title">DIRECT CHANNELS</span>
            <div class="footer-social-links">
              ${C().map(e=>`<a href="${e.url}" target="_blank" rel="noopener noreferrer" class="footer-link">${e.label||e.key}</a>`).join(``)}
            </div>
            <a href="mailto:${e.email}" class="footer-email-link">${e.email}</a>
          </div>
        </div>
        <div class="footer-legal">
          <a href="/terms">Terms</a><a href="/privacy">Privacy</a><a href="/refunds">Refunds</a>
        </div>
      </div>
    </footer>
  `}var T=`
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;function E(e,t=0){return e.split(` `).map((e,n)=>`<span class="word-mask"><span class="word" style="--i:${t+n}">${e}</span></span>`).join(` `)}function D(e,t){let n=e.external?` target="_blank" rel="noopener"`:``;return`
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
    </a>`}var O=e=>e.external?` target="_blank" rel="noopener"`:``;function ae(e){return`
    <a class="hm-tile" href="${e.linkUrl}"${O(e)} data-spotlight>
      <span class="hm-tile-meta">${e.category} · ${e.status}</span>
      <h3 class="hm-tile-title">${e.title}</h3>
      <p class="hm-tile-kicker">${e.kicker||``}</p>
      <span class="hm-tile-tags">${e.tags.slice(0,3).map(e=>`<i>${e}</i>`).join(``)}</span>
      <span class="hm-tile-go" aria-hidden="true">${T}</span>
    </a>`}function oe(){let t=p(),n=m(),r=h(),i=v().slice(0,2),a=t.find(e=>e.featured),s=n.find(e=>e.highlight)||n[0],c=n.filter(e=>e!==s),l=String(n.length).padStart(2,`0`),u=[`Automation`,`Website Development`,`App Development`,`AI Features`,`Android & iOS`,`Browser Automation`,`Motion & UI`].map(e=>`<span class="marquee-item">${e}</span><span class="marquee-star">✦</span>`).join(``);return`
    <div class="page-view home-page hm">
      <!-- ═══════════ HERO: headline, one line, one button ═══════════ -->
      <section class="hm-hero">
        <div class="container hm-hero-grid">
          <div class="hm-hero-text">
            <span class="hm-status hero-fade" style="--d:0"><span class="status-pulse-dot"></span> Available for new projects</span>
            <h1 class="hm-headline hero-words">
              ${E(`I build apps, websites and automations that`)}
              <em>${E(`give you time back.`,7)}</em>
            </h1>
            <p class="hm-sub hero-fade" style="--d:1">I'm ${e.founder}. Android and iOS apps, fast websites and AI that does the busywork, built end to end and handed over with the code.</p>
            <div class="hm-ctas hero-fade" style="--d:2">
              <a href="/contact" class="btn btn-primary magnetic">Start a project ${T}</a>
              <a href="/work" class="hm-link">See the work →</a>
            </div>
            <ul class="hm-proof hero-fade" style="--d:3">
              <li><b>${l}</b> projects shipped</li>
              <li><b>Android</b> &amp; iOS</li>
              <li><b>You own</b> the code</li>
            </ul>
          </div>

          <div class="hm-hero-visual hero-fade" style="--d:1">
            <div class="hm-portrait" data-parallax="0.03">
              <img src="/portrait-cover.webp" alt="${e.founder} sitting on a rock under a bright cloudy sky" width="1086" height="1448" fetchpriority="high" />
            </div>
            <a class="hm-chip hm-chip-a" href="${s.linkUrl}"${O(s)}><span class="status-pulse-dot"></span>${s.title} is live</a>
            <span class="hm-chip hm-chip-b" aria-hidden="true">Ideas, <em>shipped.</em></span>
          </div>
        </div>
      </section>

      <!-- ═══════════ MARQUEE ═══════════ -->
      <div class="marquee" aria-hidden="true">
        <div class="marquee-track">${u}${u}</div>
      </div>

      <!-- ═══════════ WORK: a bento of real projects ═══════════ -->
      <section class="section hm-work">
        <div class="container">
          <div class="hm-head animate-on-scroll">
            <span class="hm-eyebrow">Selected work</span>
            <h2 class="hm-title">Real things, <em>in use.</em></h2>
            <a href="/work" class="hm-link">All projects (${n.length}) →</a>
          </div>
          <div class="hm-bento animate-stagger">
            <a class="hm-tile hm-tile-feature" href="${s.linkUrl}"${O(s)} data-spotlight>
              <span class="hm-tile-meta"><span class="status-pulse-dot"></span> ${s.category} · ${s.status}</span>
              <h3 class="hm-tile-title">${s.title}</h3>
              <p class="hm-tile-kicker">${s.kicker||``}</p>
              <p class="hm-tile-desc">${s.description}</p>
              <span class="hm-tile-tags">${s.tags.map(e=>`<i>${e}</i>`).join(``)}</span>
              <span class="hm-tile-cta">${s.linkText}</span>
            </a>
            ${c.map(ae).join(``)}
            ${a?`
            <a class="hm-tile hm-tile-product" href="${a.externalUrl||`/products`}"${a.externalUrl?` target="_blank" rel="noopener"`:``} data-spotlight>
              <span class="hm-tile-meta">Buy once, own it · ${a.status}</span>
              <h3 class="hm-tile-title">${a.name}</h3>
              <p class="hm-tile-kicker">${a.shortDescription}</p>
              <span class="hm-tile-go" aria-hidden="true">${T}</span>
            </a>`:``}
            <div class="hm-tile hm-tile-stat">
              <span class="hm-stat-n">${l}</span>
              <span class="hm-stat-l">projects shipped in 2026, each built and run end to end</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════ SERVICES: the one dark band ═══════════ -->
      <section class="section hm-services">
        <div class="container">
          <div class="hm-head animate-on-scroll">
            <span class="hm-eyebrow">What I build</span>
            <h2 class="hm-title">Pick one, or <em>combine them.</em></h2>
            <a href="/services" class="hm-link">Service details →</a>
          </div>
          <div class="hm-svc-list animate-stagger">
            ${r.map((e,t)=>`
              <a href="/services" class="hm-svc" data-spotlight>
                <span class="hm-svc-n">0${t+1}</span>
                <span class="hm-svc-main">
                  <span class="hm-svc-title">${e.title}</span>
                  <span class="hm-svc-tag">${e.tagline}</span>
                </span>
                <span class="hm-svc-time">${e.timeline}</span>
              </a>`).join(``)}
          </div>
        </div>
      </section>

      <!-- ═══════════ PROCESS ═══════════ -->
      <section class="section hm-process">
        <div class="container">
          <div class="hm-head animate-on-scroll">
            <span class="hm-eyebrow">How it works</span>
            <h2 class="hm-title">From a call to a launch, <em>in plain steps.</em></h2>
          </div>
          <ol class="hm-steps animate-stagger">
            ${o.map(e=>`
              <li class="hm-step">
                <span class="hm-step-n">${e.step}</span>
                <h3>${e.title}</h3>
                <p>${e.desc}</p>
              </li>`).join(``)}
          </ol>
        </div>
      </section>

      ${i.length?`
      <!-- ═══════════ LATEST POSTS ═══════════ -->
      <section class="section hm-posts">
        <div class="container">
          <div class="hm-head animate-on-scroll">
            <span class="hm-eyebrow">Thinking out loud</span>
            <h2 class="hm-title">Latest <em>posts.</em></h2>
            <a href="/content" class="hm-link">All posts →</a>
          </div>
          <div class="hm-post-grid animate-stagger">
            ${i.map(e=>`
              <a class="hm-post" href="${e.url}" target="_blank" rel="noopener noreferrer" data-spotlight>
                <span class="hm-tile-meta">${e.type} · ${e.date}</span>
                <h3>${e.title}</h3>
                <p>${e.excerpt}</p>
              </a>`).join(``)}
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
              <span class="section-label">ARYANSARCADE LETTER</span>
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

      <!-- ═══════════ CLOSING CALL TO ACTION ═══════════ -->
      <section class="section hm-cta animate-on-scroll">
        <div class="container hm-cta-box">
          <span class="avatar-crop hm-cta-avatar" aria-hidden="true"></span>
          <h2 class="hm-cta-title">Have an idea? <em>Let's build it.</em></h2>
          <p class="hm-cta-sub">Tell me what you need, who it's for and when. You get a written plan with price and timeline before any work starts.</p>
          <a href="/contact" class="btn btn-primary magnetic">Start a project ${T}</a>
        </div>
      </section>
    </div>
  `}function k(e){let t=e.externalUrl||`/products/${e.slug}`;return`
    <article class="product-item-card" id="card-${e.slug}">
      <div class="card-identity-header">
        <div class="card-icon-frame" style="--product-accent: ${e.accentColor};">
          ${se(e.logoIcon)}
        </div>
        <div class="card-meta-pill">
          <span class="card-category">${e.category}</span>
          ${e.status?`<span class="card-status-dot" title="${e.status}"></span>`:``}
        </div>
      </div>

      <div class="card-text-body">
        <h3 class="card-product-name">
          <a href="${t}">${e.name}</a>
        </h3>
        <p class="card-product-desc">${e.shortDescription}</p>
      </div>

      <div class="card-action-footer">
        <div class="card-pricing-badge">
          <span class="card-price">${e.price}</span>
          <span class="card-price-label">${e.priceLabel}</span>
        </div>
        <a href="${t}" class="card-view-btn">
          View Product →
        </a>
      </div>
    </article>
  `}function se(e){switch(e){case`activity`:return`
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
      `}}function ce(e=`All`){let n=p(),r=e===`All`?n:n.filter(t=>t.category.toLowerCase()===e.toLowerCase());return`
    <div class="page-view products-page">
      <section class="page-header-band">
        <div class="container">
          <div class="page-header-content animate-on-scroll">
            <span class="section-label">[ PRODUCTS CATALOGUE ]</span>
            <h1 class="page-header-title">Apps you buy once and own.</h1>
            <p class="page-header-desc">
              Each product has its own home on an aryansarcade.in subdomain, with a one-time price and no subscription. Checkout and tax are handled by Dodo Payments.
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
            ${r.length>0?r.map(e=>k(e)).join(``):`<div class="empty-state"><p>No products currently found in this category.</p></div>`}
          </div>
        </div>
      </section>
    </div>
  `}function le(){let e=document.querySelectorAll(`#product-category-filters .filter-pill`),t=document.getElementById(`products-catalog-container`);e.length&&t&&e.forEach(n=>{n.onclick=()=>{e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let r=n.getAttribute(`data-category`),i=p(),a=r===`All`?i:i.filter(e=>e.category.toLowerCase()===r.toLowerCase());t.innerHTML=a.length>0?a.map(e=>k(e)).join(``):`<div class="empty-state"><p>No products currently found in this category.</p></div>`}})}function ue(e){let t=p(),n=t.find(t=>t.slug===e)||t[0];return`
    <div class="page-view product-detail-page" style="--product-accent: ${n.accentColor};">
      <!-- ═══════════ PRODUCT HERO ═══════════ -->
      <section class="pdp-hero-band">
        <div class="container">
          <div class="pdp-breadcrumbs">
            <a href="/products">← Back to Products</a>
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
              <a href="/products" class="btn btn-secondary">
                Back to Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `}function de(e=`All`){let t=m(),n=e===`All`?t:t.filter(t=>t.category.toLowerCase()===e.toLowerCase());return`
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
            ${n.map((e,t)=>D(e,t)).join(``)}
          </div>
        </div>
      </section>
    </div>
  `}function fe(){let e=document.querySelectorAll(`#work-category-filters .filter-pill`),t=document.getElementById(`work-container`);e.length&&t&&e.forEach(n=>{n.onclick=()=>{e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let r=n.getAttribute(`data-category`),i=m(),a=r===`All`?i:i.filter(e=>e.category.toLowerCase()===r.toLowerCase());t.innerHTML=a.length>0?a.map((e,t)=>D(e,t)).join(``):`<div class="empty-state"><p>No work items found in this category.</p></div>`}})}function pe(){return`
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
                  <a href="/contact" class="btn btn-secondary">Request Brief →</a>
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
            <a href="/contact" class="btn btn-primary btn-large">
              Submit Project Brief
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M14 2L7 9M14 2l-4.5 12L7 9 2 7.5 14 2z" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  `}function me(e=`All`){let t=v(),n=e===`All`?t:t.filter(t=>t.type.toLowerCase()===e.toLowerCase());return`
    <div class="page-view content-page">
      <section class="page-header-band">
        <div class="container">
          <div class="page-header-content animate-on-scroll">
            <span class="section-label">[ POSTS ]</span>
            <h1 class="page-header-title">Thoughts on AI, building and startups.</h1>
            <p class="page-header-desc">
              Articles from LinkedIn and favourite posts from X and Instagram, where I share what I'm learning about AI, software and building products in public.
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
            ${n.map(e=>A(e)).join(``)}
          </div>
        </div>
      </section>
    </div>
  `}function A(e){let t=e.type===`Videos`,n={X:`Read on X →`,Instagram:`See carousel on Instagram →`,LinkedIn:`Read article on LinkedIn →`}[e.type]||(t?`Watch video →`:`Read article →`),r=e.url.startsWith(`http`);return`
    <article class="content-hub-card ${t?`video-card`:``}" data-spotlight>
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
        <a href="${e.url}"${r?` target="_blank" rel="noopener noreferrer"`:``} class="hub-action-link">${n}</a>
      </div>
    </article>
  `}function he(){let e=document.querySelectorAll(`#content-category-filters .filter-pill`),t=document.getElementById(`content-feed-container`);e.length&&t&&e.forEach(n=>{n.onclick=()=>{e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let r=n.getAttribute(`data-category`),i=v(),a=r===`All`?i:i.filter(e=>e.type.toLowerCase()===r.toLowerCase());t.innerHTML=a.map(e=>A(e)).join(``)}})}function ge(){let e=y();return`
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
  `}function _e(){let e=document.getElementById(`newsletter-main-form`);e&&(e.onsubmit=e=>{e.preventDefault();let t=document.getElementById(`nl-email-input`);S(`Subscribe me to the AryansArcade Letter`,`Please add ${t?t.value:``} to the newsletter.`)})}var ve=`/editions/latest.json`,ye=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,j=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),M=e=>/^https?:\/\//i.test(String(e||``))?j(e):``,N=/\s*\[(\d+(?:\s*,\s*\d+)*)\]/g,be=e=>String(e??``).replace(N,``),P=(e,t,n=``)=>`<a href="${e}"${n?` class="${n}"`:``} target="_blank" rel="noopener noreferrer">${t}</a>`;function F(e,t){let n=new Map((t||[]).map(e=>[Number(e.n),e]));return j(e).replace(N,(e,t)=>t.split(`,`).map(e=>{let t=e.trim(),r=n.get(Number(t)),i=r&&M(r.url);return`<sup class="np-cite">${i?`<a href="${i}" target="_blank" rel="noopener noreferrer" title="${j(r.site)}">${t}</a>`:t}</sup>`}).join(``))}var I=e=>Number(e).toLocaleString(`en-IN`,{maximumFractionDigits:2}),L=e=>`${e>=0?`▲`:`▼`} ${Math.abs(e).toFixed(2)}%`;function R(e,t){if(!Array.isArray(e)||e.length<2)return``;let n=Math.min(...e),r=Math.max(...e)-n||1,i=e.map((t,i)=>`${(i/(e.length-1)*80).toFixed(1)},${(24-(t-n)/r*24).toFixed(1)}`).join(` `);return`<svg class="np-spark ${t?`is-up`:`is-down`}" viewBox="0 -2 80 28" preserveAspectRatio="none" aria-hidden="true"><polyline points="${i}" /></svg>`}var xe=`<svg class="np-fleuron" viewBox="0 0 240 24" aria-hidden="true"><path d="M4 12h84c10 0 14-8 22-8s10 8 10 8-2 8-10 8-12-8-22-8M236 12h-84c-10 0-14-8-22-8s-10 8-10 8 2 8 10 8 12-8 22-8"/><path d="M120 5l7 7-7 7-7-7z"/></svg>`;function z(e){let t=`<span>Today’s edition</span>`;if(e){let n=new Date(`${e.date}T12:00:00+05:30`),r=n.toLocaleDateString(`en-IN`,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`,timeZone:`Asia/Kolkata`});t=`<span>No. ${Math.round((n-new Date(`${e.date.slice(0,4)}-01-01T12:00:00+05:30`))/864e5)+1}</span><span>${j(r)}</span><span>${Number(e.readMinutes)||5} min read</span>`}return`
    <header class="np-masthead">
      <div class="np-ears">
        <span>All the news.<br />None of the noise.</span>
        <span>New Delhi<br />Price: free</span>
      </div>
      <h1 class="np-title">The Arcade Daily</h1>
      ${e&&e.built?`<span class="np-ear-note">printed by Jarvis at ${j(new Date(e.built).toLocaleTimeString(`en-IN`,{hour:`numeric`,minute:`2-digit`,timeZone:`Asia/Kolkata`}))}</span>`:``}
      <div class="np-dateline np-rule-draw">${t}</div>
    </header>`}function B(e,t,n=!1){let r=M(e.image);if(!r)return``;let i=[[`-3%`,`-2%`],[`3%`,`-1%`],[`-2%`,`2%`],[`2%`,`2%`]][t%4];return`
    <figure class="np-photo${n?` is-big`:``}">
      <img src="${r}" alt="" loading="${n?`eager`:`lazy`}" referrerpolicy="no-referrer" style="--kb-x:${i[0]};--kb-y:${i[1]}" />
    </figure>`}function Se(e,t){return`
    <article class="np-card np-reveal">
      ${B(e,t)}
      <h3 class="np-hl"><button type="button" class="np-open" data-story="${j(e.id)}">${j(e.headline)}</button></h3>
      <p class="np-dek">${j(e.dek)}</p>
      <p class="np-more">${Number(e.outlets)>1?`${Number(e.outlets)} outlets · `:``}Read the story →</p>
    </article>`}function Ce(e){return`
    <article class="np-lead np-reveal">
      ${B(e,0,!0)}
      <h2 class="np-lead-hl"><button type="button" class="np-open" data-story="${j(e.id)}">${j(e.headline)}</button></h2>
      <p class="np-lead-dek">${j(e.dek)}</p>
      <ul class="np-lead-points">${(e.points||[]).slice(0,3).map(e=>`<li>${j(be(e))}</li>`).join(``)}</ul>
      <button type="button" class="np-open np-read" data-story="${j(e.id)}">Read the full story →</button>
    </article>`}function we(e){let t=e.movers||[],n=e.market||[],r=t.map(e=>`
    <div class="np-mover">
      <div class="np-quote">
        <strong>${j(e.name)}</strong>
        ${R(e.closes,e.change>=0)}
        <span class="np-price">₹${I(e.price)}</span>
        <span class="np-chg ${e.change>=0?`is-up`:`is-down`}">${L(e.change)}</span>
      </div>
      ${e.why?`<p class="np-mover-why">${j(e.why)}</p>`:``}
      ${(e.points||[]).length?`<ul class="np-mover-points">${e.points.map(t=>`<li>${F(t,e.sources)}</li>`).join(``)}</ul>`:``}
    </div>`).join(``),i=n.map(e=>`
    <tr>
      <th scope="row">${j(e.name)}</th>
      <td>${R(e.closes,e.change>=0)}</td>
      <td class="np-price">${e.index?``:`₹`}${I(e.price)}</td>
      <td class="np-chg ${e.change>=0?`is-up`:`is-down`}">${L(e.change)}</td>
    </tr>`).join(``);return`
    <aside class="np-box np-reveal" aria-labelledby="np-stocks-title">
      <h2 class="np-box-title" id="np-stocks-title">${t.length?`Your stocks moved`:`Your stocks held steady`}</h2>
      ${r}
      ${i?`<table class="np-market"><caption>At the close</caption><tbody>${i}</tbody></table>`:``}
    </aside>`}function Te(e){return!e.audio||!/^\d{4}-\d{2}-\d{2}$/.test(e.date)?``:`
    <div class="np-listen">
      <span class="np-listen-label">Listen to today’s brief</span>
      <audio controls preload="none" src="/editions/${e.date}.ogg">Your browser can’t play this audio.</audio>
    </div>`}function Ee(e){let t=(e.market||[]).filter(e=>e.index);return t.length?`<div class="np-ticker">${t.map(e=>`<span><b>${j(e.name)}</b> ${I(e.price)} <i class="${e.change>=0?`is-up`:`is-down`}">${L(e.change)}</i></span>`).join(``)}</div>`:``}function De(e,t,n){let r=(e.sections||[]).map(e=>({...e,stories:(e.stories||[]).filter(e=>e!==n)})).filter(e=>e.stories.length),i=1;return`
    ${z(e)}
    ${Ee(e)}
    ${Te(e)}
    <div class="np-front">
      ${n?Ce(n):``}
      ${we(e)}
    </div>
    ${r.map(e=>`
      <section class="np-section" aria-labelledby="np-sec-${j(e.id)}">
        <h2 class="np-section-head np-rule-draw" id="np-sec-${j(e.id)}"><span>${j(e.name)}</span></h2>
        <div class="np-cols">${e.stories.map(e=>Se(e,i++)).join(``)}</div>
      </section>`).join(``)}
    <footer class="np-end np-reveal">
      ${xe}
      <p class="np-end-title">You’re all caught up.</p>
      <p class="np-end-note">${t.length} stories today. The next edition goes to press at 6:30 am IST.</p>
    </footer>
    <dialog class="np-story" id="np-story" aria-labelledby="np-story-title"></dialog>`}function Oe(e){let t=(e||[]).map(e=>({...e,at:Date.parse(e.when)}));return t.every(e=>!Number.isNaN(e.at))?t.sort((e,t)=>e.at-t.at):t}function ke(e,t){let n=e.sources||[],r=n[0]?`<figcaption>Photo via ${j(n[0].site)}</figcaption>`:``,i=M(e.image),a=(e,t)=>t?`<section class="np-sv-block"><h3>${e}</h3>${t}</section>`:``,o=(e,t,n=`ul`)=>(e||[]).length?`<${n}>${e.map(t).join(``)}</${n}>`:``,s=e.learn&&M(e.learn.url),c=o(e.voices,e=>`<li><blockquote>“${j(e.said)}”</blockquote><cite>${j(e.who)}</cite></li>`),l=o(e.x,e=>{let t=M(e.url);return`<li class="np-x"><p>${j(e.text)}</p><cite>${j(e.name)} <span>@${j(e.handle)}</span>${t?` · ${P(t,`View on X`)}`:``}</cite></li>`});return`
    <div class="np-sv">
      <button type="button" class="np-sv-close" aria-label="Close story">×</button>
      <p class="np-sv-kicker">${j(t)}</p>
      <h2 class="np-sv-hl" id="np-story-title">${j(e.headline)}</h2>
      <p class="np-sv-dek">${j(e.dek)}</p>
      ${i?`<figure class="np-photo is-big"><img src="${i}" alt="" referrerpolicy="no-referrer" style="--kb-x:-2%;--kb-y:-2%" />${r}</figure>`:``}
      ${a(`What happened`,o(e.points,e=>`<li>${F(e,n)}</li>`))}
      ${a(`In plain words`,e.eli5?`<p>${j(e.eli5)}</p>`:``)}
      ${a(`Why it matters`,e.why?`<p>${j(e.why)}</p>`:``)}
      ${a(`How we got here`,o(Oe(e.timeline),e=>`<li><time>${j(e.when)}</time><span>${F(e.what,n)}</span></li>`,`ol`))}
      ${a(`What people are saying`,c+l?`<div class="np-voices">${c}${l}</div>`:``)}
      ${a(`What we don’t know yet`,o(e.unclear,e=>`<li>${j(e)}</li>`))}
      ${s?`<p class="np-learn-row">${P(s,`Learn: ${j(e.learn.label)} <span>· ${j(e.learn.site)}</span>`,`np-learn`)}</p>`:``}
      ${a(`Sources`,o(n,e=>{let t=M(e.url);return`<li><b>${j(e.site)}</b> — ${t?P(t,j(e.title)):j(e.title)}</li>`},`ol`))}
    </div>`}function Ae(e,t,n){e.querySelectorAll(`.np-photo img`).forEach(e=>{e.addEventListener(`error`,()=>e.closest(`.np-photo`)?.remove(),{once:!0})});let r=e.querySelector(`#np-story`),i=new Map((t.sections||[]).flatMap(e=>(e.stories||[]).map(t=>[t.id,e.name]))),a=(e,t)=>{let a=n.find(t=>String(t.id)===e);a&&(r.innerHTML=ke(a,i.get(a.id)||`Today`),r.querySelectorAll(`.np-photo img`).forEach(e=>{e.addEventListener(`error`,()=>e.closest(`.np-photo`)?.remove(),{once:!0})}),r.querySelector(`.np-sv-close`).addEventListener(`click`,()=>r.close()),r.addEventListener(`close`,()=>{document.body.classList.remove(`np-locked`),t?.focus()},{once:!0}),document.body.classList.add(`np-locked`),r.showModal(),r.scrollTop=0)};r.addEventListener(`click`,e=>{e.target===r&&r.close()}),e.addEventListener(`click`,e=>{let t=e.target.closest(`.np-open`);if(t)return a(t.dataset.story,t);let n=e.target.closest(`.np-card`);n&&!e.target.closest(`a`)&&n.querySelector(`.np-open`)?.click()});let o=e.querySelectorAll(`.np-reveal, .np-rule-draw`);if(ye()||!(`IntersectionObserver`in window)){o.forEach(e=>e.classList.add(`is-in`));return}let s=new IntersectionObserver(e=>e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-in`),s.unobserve(e.target))}),{rootMargin:`0px 0px -40px 0px`});o.forEach(e=>s.observe(e))}function je(){return`
    <div class="page-view news-page">
      <div class="np-desk">
        <div class="np-paper" id="np-paper" aria-busy="true">
          ${z(null)}
          <p class="np-status">The presses are running…</p>
        </div>
      </div>
    </div>`}async function Me(){let e=document.getElementById(`np-paper`);if(!e)return;let t;try{let e=await fetch(ve,{cache:`no-cache`});if(!e.ok)throw Error(`HTTP ${e.status}`);t=await e.json()}catch(t){console.warn(`News edition did not load:`,t),e.removeAttribute(`aria-busy`),e.querySelector(`.np-status`).textContent=`Today’s paper hasn’t landed yet. Check back after 6:30 am IST.`;return}if(!e.isConnected)return;let n=(t.sections||[]).flatMap(e=>e.stories||[]),r=n.find(e=>e.headline===t.lead)||n[0];e.innerHTML=De(t,n,r),e.removeAttribute(`aria-busy`),Ae(e,t,n)}var V=`aa-news-pop-closed`,H=null,U=!1,W=()=>{try{return sessionStorage.getItem(V)===`1`}catch{return!1}};function Ne(){let e=document.createElement(`div`);return e.className=`news-pop`,e.hidden=!0,e.innerHTML=`
    <a href="/news" class="news-pop-link" aria-label="Read today's Arcade Daily">
      <span class="news-pop-bubble"><b>Hot off the press!</b> Click here to read The Arcade Daily</span>
      <span class="news-pop-icon">
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M9 10h26v26a4 4 0 0 0 4 4H13a4 4 0 0 1-4-4z" fill="#F3EEE2" stroke="#1B1A17" stroke-width="2.2" stroke-linejoin="round"/>
          <path d="M35 18h5v18a4 4 0 0 1-4 4" fill="none" stroke="#1B1A17" stroke-width="2.2" stroke-linejoin="round"/>
          <path d="M14 16h16" stroke="#1B1A17" stroke-width="3" stroke-linecap="round"/>
          <rect x="14" y="21" width="7" height="7" fill="#9B2C1F"/>
          <path d="M24 22h6M24 26h6M14 32h16" stroke="#1B1A17" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        <span class="news-pop-alert" aria-hidden="true">!</span>
      </span>
    </a>
    <button type="button" class="news-pop-close" aria-label="Hide the news pop-up">×</button>`,e.querySelector(`.news-pop-close`).addEventListener(`click`,()=>{try{sessionStorage.setItem(V,`1`)}catch{}e.hidden=!0}),document.body.appendChild(e),e}function Pe(e){W()||(H?U&&(H.hidden=e===`/news`):(H=Ne(),fetch(`/editions/latest.json`,{method:`HEAD`,cache:`no-cache`}).then(e=>{e.ok&&setTimeout(()=>{U=!0,H.hidden=W()||window.location.pathname.replace(/\/+$/,``)===`/news`},3200)}).catch(()=>{})))}var Fe=[{group:`CORE RUNTIMES`,items:[`TypeScript`,`JavaScript (ESNext)`,`Node.js`,`Python`,`Go`,`Rust / WASM`]},{group:`INTERFACES & UX`,items:[`React 19`,`Next.js 15`,`Vite`,`HTML5 / Semantic CSS`,`Design Systems`]},{group:`DATA & STORAGE`,items:[`PostgreSQL`,`SQLite / LibSQL`,`Cloudflare D1`,`Redis`,`Vector Embeddings`]},{group:`DEVOPS & CLOUD`,items:[`Docker`,`Cloudflare Workers`,`AWS`,`GitHub Actions`,`Vercel`]}];function Ie(){return`
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
                  ${Fe.map(e=>`
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
  `}var Le=[{amount:`₹100`,amountUsd:`$2`,name:`Server Sparks`,desc:`Covers edge compute costs and keeps open-source experiments online.`,perk:`Public builder appreciation + Discord supporter role`},{amount:`₹500`,amountUsd:`$7`,name:`API & Compute Fuel`,desc:`Directly subsidizes GPU and LLM inference credits for research benchmarks.`,perk:`Early access to pre-release betas & experimental repositories`,recommended:!0},{amount:`₹1,000`,amountUsd:`$15`,name:`Sponsor a Build`,desc:`Funds deep-dive technical articles, research papers, and open-source tooling.`,perk:`Thank-you credit on the site + priority on feature requests`}],Re=[{q:`How is this different from buying a product?`,a:`When you hire me for a project, you pay for work built for you and own all of its code. Supporting AryansArcade is a voluntary tip that funds free tools like Spinpath and the content I share.`},{q:`What payment methods will be accepted?`,a:`UPI, credit/debit cards, net banking, and international cards via Stripe/Razorpay.`},{q:`Can I cancel anytime if I choose recurring patronage?`,a:`Yes, full control with one-click cancellation from your billing portal.`}];function ze(){return`
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
            ${Le.map(e=>`
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
            ${Re.map(e=>`
              <div class="faq-item">
                <h4 class="faq-question">${e.q}</h4>
                <p class="faq-answer">${e.a}</p>
              </div>
            `).join(``)}
          </div>
        </div>
      </section>
    </div>
  `}function Be(){document.querySelectorAll(`.btn-support-select`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-amount`);alert(`Thank you for supporting AryansArcade with ${t}! Payment integration will be connected in Phase 5.`)}});let e=document.getElementById(`btn-custom-support`),t=document.getElementById(`custom-amount-input`);e&&t&&(e.onclick=()=>{let e=t.value||`2500`;alert(`Thank you for supporting AryansArcade with ₹${e}! Payment integration will be connected in Phase 5.`)})}function Ve(){return`
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
                  ${C().map(e=>`
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
  `}function He(){let e=document.getElementById(`contact-page-form`);e&&(e.onsubmit=t=>{t.preventDefault();let n=new FormData(e),r=e.querySelector(`#contact-intent`),i=r?r.options[r.selectedIndex].text:``;S(`Project enquiry from ${n.get(`name`)}`,`Name: ${n.get(`name`)}
Email: ${n.get(`email`)}
Topic: ${i}

${n.get(`message`)}`);let a=document.getElementById(`btn-contact-submit`);a&&(a.textContent=`Opening your email app…`)})}var Ue=`9 November 2026`,G=14,K=()=>`<a href="mailto:${e.email}">${e.email}</a>`;function q({label:e,title:t,intro:n,body:r}){return`
    <div class="page-view legal-page">
      <section class="page-header-band">
        <div class="container">
          <div class="page-header-content animate-on-scroll">
            <span class="section-label">[ ${e} ]</span>
            <h1 class="page-header-title">${t}</h1>
            <p class="page-header-desc">${n}</p>
          </div>
        </div>
      </section>
      <section class="section legal-section">
        <div class="container">
          <article class="legal-body">
            <p class="legal-updated">Last updated ${Ue}</p>
            ${r}
            <nav class="legal-nav" aria-label="Policies">
              <a href="/terms">Terms</a><a href="/privacy">Privacy</a><a href="/refunds">Refunds</a>
            </nav>
          </article>
        </div>
      </section>
    </div>`}function We(){return q({label:`TERMS`,title:`Terms of sale and use.`,intro:`The rules for using this site and buying AryansArcade products, in plain language.`,body:`
      <h2>Who we are</h2>
      <p>AryansArcade is run by ${e.founderFullName}, an independent developer based in India. You can reach us at ${K()}.</p>

      <h2>Who sells to you</h2>
      <p>Our products are sold through <strong>Dodo Payments</strong>, which acts as the <strong>merchant of record</strong>. That means Dodo Payments is the seller on your receipt, handles payment, sales tax and invoicing, and its own buyer terms apply to the payment itself. We are responsible for the product, its delivery and support.</p>

      <h2>What you buy</h2>
      <p>Products are digital software. Buying one gives you a personal, non-exclusive, non-transferable licence to install and use it on your own devices. You may not resell, share or redistribute the paid download or your licence.</p>
      <p>Each product page lists what you need to run it (for example, the device and computer requirements for Carousel Studio). Please check these before you buy.</p>

      <h2>Delivery</h2>
      <p>After a successful payment, Dodo Payments emails your receipt and download links. You can get fresh download links from Dodo's customer portal at any time.</p>

      <h2>Prices and taxes</h2>
      <p>Prices are shown on each product page. Any sales tax, VAT or GST that applies to you is calculated and collected at checkout by Dodo Payments.</p>

      <h2>Refunds</h2>
      <p>See our <a href="/refunds">refund policy</a>.</p>

      <h2>Software provided as is</h2>
      <p>We work hard to make our products reliable, but they are provided "as is", without warranties of any kind. Some products depend on third-party software you run yourself (such as Ollama); we can't guarantee how that software behaves.</p>

      <h2>Limit of liability</h2>
      <p>To the extent the law allows, our total liability for any claim about a product is limited to the amount you paid for it.</p>

      <h2>Changes</h2>
      <p>We may update these terms. The date at the top shows the latest version. Purchases are covered by the terms in place when you bought.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India. Nothing here limits rights you have under the consumer laws of your own country.</p>
    `})}function Ge(){return q({label:`PRIVACY`,title:`Privacy, kept simple.`,intro:`What we collect, why, and what we never do with it.`,body:`
      <h2>This website</h2>
      <p>We don't use analytics, advertising trackers or cookies. The site saves some page content in your browser's local storage so it loads faster; that data stays on your device.</p>
      <p>The site is hosted on GitHub Pages and uses Google Fonts. Like any web host, they receive your IP address and browser details when you load a page. See GitHub's and Google's privacy policies for how they handle this.</p>

      <h2>When you contact us</h2>
      <p>If you email us or use the contact form (which opens your own email app), we receive your name, email address and message, and use them only to reply.</p>

      <h2>When you buy</h2>
      <p>Checkout is run by Dodo Payments, our merchant of record. Dodo collects your payment details; <strong>your card details never reach us</strong>. Dodo shares your name, email address, country and order details with us so we can deliver the product and give you support. Dodo's privacy policy covers how it processes your data.</p>

      <h2>Inside our apps</h2>
      <p>Carousel Studio stores your notes, recordings, drafts and settings on your phone, and talks only to the AI server you set up yourself (for example, Ollama on your own PC). It sends nothing to AryansArcade.</p>

      <h2>What we never do</h2>
      <p>We don't sell your data, share it for advertising, or add you to a mailing list without asking.</p>

      <h2>How long we keep it</h2>
      <p>Order records are kept as long as needed for support, refunds and tax law. Emails are kept as long as the conversation is useful, and deleted on request.</p>

      <h2>Your rights</h2>
      <p>You can ask to see, correct or delete the personal data we hold about you by emailing ${K()}. We'll reply within 30 days.</p>
    `})}function Ke(){return q({label:`REFUNDS`,title:`Refund policy.`,intro:`If a product doesn't work for you, you get your money back within ${G} days.`,body:`
      <h2>The ${G}-day promise</h2>
      <p>If you can't get a product working on your setup, or it doesn't do what its page says, email us within <strong>${G} days of purchase</strong> and we'll refund you in full.</p>

      <h2>Let us help first</h2>
      <p>Most problems are a setup step (for example, connecting Carousel Studio to Ollama). Tell us what's happening and we'll try to fix it with you. If we can't, you get the refund. Either way, it's your choice.</p>

      <h2>How to ask</h2>
      <p>Email ${K()} with the email address you used at checkout and your order or payment reference from the receipt.</p>

      <h2>How refunds are paid</h2>
      <p>Refunds are processed by Dodo Payments, our merchant of record, back to your original payment method. Your bank may take 5–10 business days to show it. When a refund is issued, your access to the product's downloads ends.</p>

      <h2>After ${G} days</h2>
      <p>Because products are digital and delivered instantly, we don't normally refund after ${G} days, but if something has gone wrong, write to us anyway and we'll be fair about it.</p>

      <h2>Your legal rights</h2>
      <p>This policy doesn't limit any refund rights you have under the consumer laws of your country.</p>
    `})}var qe=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,Je=()=>window.matchMedia(`(hover: hover) and (pointer: fine)`).matches,Ye=!1,Xe=!1,J=[];function Ze(){document.body.classList.remove(`motion-ready`),document.body.offsetWidth,requestAnimationFrame(()=>document.body.classList.add(`motion-ready`)),Qe(),!qe()&&(Y(),Je()&&($e(),et(),tt()))}function Qe(){let e=document.querySelector(`.scroll-progress`);e||(e=document.createElement(`div`),e.className=`scroll-progress`,e.setAttribute(`aria-hidden`,`true`),document.body.appendChild(e));let t=()=>{let t=document.documentElement.scrollHeight-window.innerHeight;e.style.transform=`scaleX(${t>0?window.scrollY/t:0})`};t(),Ye||=(window.addEventListener(`scroll`,()=>requestAnimationFrame(t),{passive:!0}),!0)}function Y(){J=[...document.querySelectorAll(`[data-parallax]`)];let e=()=>{J.forEach(e=>{let t=parseFloat(e.dataset.parallax)||.05;e.style.setProperty(`--parallax`,`${window.scrollY*t}px`)})};Xe||=(window.addEventListener(`scroll`,()=>requestAnimationFrame(e),{passive:!0}),!0),e()}function $e(){document.querySelectorAll(`[data-spotlight]`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect();e.style.setProperty(`--mx`,`${t.clientX-n.left}px`),e.style.setProperty(`--my`,`${t.clientY-n.top}px`)})})}function et(){document.querySelectorAll(`[data-tilt]`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width-.5,i=(t.clientY-n.top)/n.height-.5;e.style.setProperty(`--rx`,`${(-i*6).toFixed(2)}deg`),e.style.setProperty(`--ry`,`${(r*8).toFixed(2)}deg`)}),e.addEventListener(`pointerleave`,()=>{e.style.setProperty(`--rx`,`0deg`),e.style.setProperty(`--ry`,`0deg`)})})}function tt(){document.querySelectorAll(`.magnetic`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=t.clientX-n.left-n.width/2,i=t.clientY-n.top-n.height/2;e.style.transform=`translate(${r*.18}px, ${i*.3}px)`}),e.addEventListener(`pointerleave`,()=>{e.style.transform=``})})}var X={"/":{title:`AryansArcade — Apps, Websites & AI Automation by Aryan Singh`,description:`Aryan Singh builds Android and iOS apps, fast websites and AI automations at AryansArcade. See real projects like Agentstein, Reelstein, Spinpath and Excuses, and hire for your next build.`},"/work":{title:`Projects — Apps, Websites & Automations | AryansArcade`,description:`Projects by Aryan Singh: Agentstein (Claude Code desktop widget), Reelstein (Reels and Shorts counter for Android), Spinpath (learning website), Excuses and Carousel Studio (apps) and a nightly AI podcast automation.`},"/services":{title:`Hire an App, Website & Automation Developer | AryansArcade`,description:`Hire Aryan Singh for automation, website development, Android and iOS app development, and AI features. Clear plans, weekly updates, and you own the code.`},"/content":{title:`Posts on AI, Software & Startups | AryansArcade`,description:`Articles and posts by Aryan Singh from LinkedIn, X and Instagram on AI, code review, CI/CD, startups and building products in public.`},"/news":{title:`The Arcade Daily — Today’s News in Five Minutes | AryansArcade`,description:`A short daily newspaper: India, markets, world and tech, with why each story matters, how it got here and every source linked.`},"/about":{title:`About Aryan Singh | AryansArcade`,description:`About Aryan Singh, the developer behind AryansArcade, building Android and iOS apps, websites and AI automations.`},"/contact":{title:`Contact Aryan Singh | AryansArcade`,description:`Contact Aryan Singh at AryansArcade to start an app, website or automation project. Email, LinkedIn, Instagram and X.`},"/products":{title:`Products — Apps You Buy Once | AryansArcade`,description:`Apps by Aryan Singh you buy once and own: Agentstein, a floating progress widget for Claude Code sessions, and Carousel Studio, which turns a spoken idea into an Instagram carousel.`},"/terms":{title:`Terms of Sale and Use | AryansArcade`,description:`Terms for using AryansArcade and buying its digital products, sold through Dodo Payments as merchant of record.`},"/privacy":{title:`Privacy Policy | AryansArcade`,description:`What AryansArcade collects, why, and what it never does with your data. No trackers, no data selling.`},"/refunds":{title:`Refund Policy | AryansArcade`,description:`Full refund within 14 days if an AryansArcade product does not work for you.`},"/support":{title:`Support AryansArcade`,description:`Support the free tools and posts Aryan Singh shares at AryansArcade.`}},nt=`https://aryansarcade.in`;function rt(e){let t=X[e];if(!t)return;let n=(e,t,n)=>{let r=document.querySelector(e);r&&r.setAttribute(t,n)};n(`meta[name="description"]`,`content`,t.description),n(`meta[property="og:title"]`,`content`,t.title),n(`meta[property="og:description"]`,`content`,t.description);let r=nt+(e===`/`?`/`:e);n(`link[rel="canonical"]`,`href`,r),n(`meta[property="og:url"]`,`content`,r)}function Z(){return window.location.pathname.replace(/\/+$/,``)||`/`}function Q(e,{replace:t=!1}={}){(e!==Z()||t)&&(window.history[t?`replaceState`:`pushState`]({},``,e),$())}function it(){window.location.hash.startsWith(`#/`)&&window.history.replaceState({},``,window.location.hash.slice(1)),window.addEventListener(`popstate`,$),document.addEventListener(`click`,e=>{let t=e.target.closest(`a[href^="/"]`);if(!t||t.target===`_blank`||e.metaKey||e.ctrlKey||e.shiftKey||e.button!==0)return;let n=t.getAttribute(`href`);/\.[a-z0-9]+$/i.test(n)||(e.preventDefault(),Q(n))}),$()}function $(){let e=document.getElementById(`app`);if(!e)return;let t=Z(),n=``,r=`AryansArcade — Builder Ecosystem & Digital Storefront`,i=null;if(t.startsWith(`/products`)&&!f())Q(`/work`,{replace:!0});else if(t===`/content`&&!g()||t===`/newsletter`&&!_())Q(`/`,{replace:!0});else{if(t===`/`||t===``)n=oe(),r=`AryansArcade — Apps, Websites & AI Automation by Aryan`,i=()=>{let e=document.getElementById(`home-newsletter-form`);e&&(e.onsubmit=t=>{t.preventDefault();let n=e.querySelector(`input[type="email"]`).value;S(`Subscribe me to the AryansArcade Letter`,`Please add ${n} to the newsletter.`)})};else if(t===`/products`)n=ce(),r=`Products & Architecture — AryansArcade`,i=le;else if(t.startsWith(`/products/`)){let e=t.replace(`/products/`,``).split(`?`)[0],i=p().find(t=>t.slug===e);if(i&&i.externalUrl){window.location.replace(i.externalUrl);return}n=ue(e),r=i?`${i.name} — AryansArcade`:`Product Detail — AryansArcade`}else t===`/work`?(n=de(),r=`Projects — AryansArcade`,i=fe):t===`/services`?(n=pe(),r=`Services: Automation, Websites & Apps — AryansArcade`):t===`/content`?(n=me(),r=`Content, Articles & Video Teardowns — AryansArcade`,i=he):t===`/newsletter`?(n=ge(),r=`AryansArcade Letter — Weekly Builder Dispatch`,i=_e):t===`/news`?(n=je(),i=Me):t===`/about`?(n=Ie(),r=`About & Engineering Ethos — AryansArcade`):t===`/support`?(n=ze(),r=`Support & Patronage — AryansArcade`,i=Be):t===`/contact`?(n=Ve(),r=`Contact & Technical Brief — AryansArcade`,i=He):t===`/terms`?n=We():t===`/privacy`?n=Ge():t===`/refunds`?n=Ke():(n=`
      <div class="page-view not-found-page">
        <section class="section">
          <div class="container" style="text-align: center; padding: 120px 0;">
            <span class="section-label">[ 404 NOT FOUND ]</span>
            <h1 class="section-title">Route not located.</h1>
            <p class="section-subtitle" style="margin: 0 auto 32px auto;">The requested destination does not exist within the AryansArcade ecosystem.</p>
            <a href="/" class="btn btn-primary">Return to Ecosystem Home</a>
          </div>
        </section>
      </div>
    `,r=`404 Not Found — AryansArcade`);document.title=X[t]&&X[t].title||r,rt(t),e.innerHTML=`
    ${ee()}
    <main id="main-content">
      ${n}
    </main>
    ${ie()}
  `,te(),i&&i(),Pe(t),window.scrollTo({top:0,behavior:`instant`}),at(),Ze()}}function at(){let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`is-visible`)})},{threshold:.08,rootMargin:`0px 0px -30px 0px`});document.querySelectorAll(`.animate-on-scroll, .animate-stagger, .animate-slide-left, .animate-slide-right`).forEach(t=>e.observe(t))}if(window.top!==window.self)try{window.top.location.replace(window.self.location.href)}catch{document.documentElement.innerHTML=``}function ot(){let e=document.getElementById(`ink-loader`);if(!e)return;if(getComputedStyle(e).display===`none`){e.remove();return}let t=new Promise(e=>setTimeout(e,2e3)),n=document.fonts?document.fonts.ready:Promise.resolve();Promise.all([t,n]).then(()=>{e.classList.add(`is-done`),setTimeout(()=>{document.body.classList.remove(`motion-ready`),document.body.offsetWidth,document.body.classList.add(`motion-ready`)},250),setTimeout(()=>e.remove(),900)})}document.addEventListener(`DOMContentLoaded`,()=>{it(),ot()});