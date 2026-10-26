import{_ as e,a as t,c as n,d as r,g as i,h as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h,v as g,y as _}from"./store-DqCvXnoq.js";var v=`rns_arcade_master_pin_v1`,y=`rns_arcade_auth_session_v1`,b=`rns-admin-2026`;function x(){return localStorage.getItem(v)||b}function S(e){localStorage.setItem(v,e)}function C(){return sessionStorage.getItem(y)===`authenticated`}function w(e){e?sessionStorage.setItem(y,`authenticated`):sessionStorage.removeItem(y)}var T=`products`;document.addEventListener(`DOMContentLoaded`,()=>{E()});function E(){let e=document.getElementById(`admin-app`);e&&(C()?O(e):D(e))}function D(e){e.innerHTML=`
    <div class="lock-screen-wrapper">
      <div class="lock-card">
        <div class="lock-icon-badge">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>

        <h1 class="lock-title">Control Terminal</h1>
        <p class="lock-subtitle">
          Private administration environment for AryansArcade. Enter your master passkey to unlock the terminal.
        </p>

        <form class="lock-form" id="lock-screen-form">
          <div class="lock-error-msg" id="lock-error">Invalid passkey. Access denied.</div>
          
          <div class="lock-input-wrap">
            <input 
              type="password" 
              class="lock-input" 
              id="master-passkey-input" 
              placeholder="ENTER MASTER PASSKEY" 
              autocomplete="current-password"
              autofocus 
              required 
            />
          </div>

          <button type="submit" class="btn btn-primary btn-full">
            Authenticate & Unlock Terminal →
          </button>
        </form>

        <span class="lock-hint">Default Master Key: <code>${b}</code></span>
      </div>
    </div>
  `;let t=document.getElementById(`lock-screen-form`),n=document.getElementById(`master-passkey-input`),r=document.getElementById(`lock-error`);t.onsubmit=e=>{e.preventDefault(),n.value.trim()===x()?(w(!0),E()):(r.classList.add(`show`),n.value=``,n.focus(),setTimeout(()=>r.classList.remove(`show`),3e3))}}function O(e){e.innerHTML=`
    <!-- Top Admin Bar -->
    <header class="admin-navbar">
      <div class="admin-nav-brand">
        <span>ARYANSARCADE</span>
        <span class="admin-pill" style="margin: 0;">TERMINAL V2</span>
      </div>
      <div class="admin-nav-controls">
        <a href="/" target="_blank" class="btn btn-secondary btn-sm">Preview Live Site ↗</a>
        <button class="btn btn-secondary btn-sm" id="btn-lock-terminal">🔒 Lock Terminal</button>
      </div>
    </header>

    <!-- Header Band with Tabs -->
    <section class="admin-header-band">
      <div class="container">
        <div class="admin-header-split">
          <div>
            <div class="admin-pill">
              <span class="admin-dot"></span>
              <span>LIVE DATA ENGINE</span>
            </div>
            <h1 class="admin-title">Ecosystem Data Control</h1>
            <p class="admin-subtitle">
              Add new products, publish research, manage client services, post content teardowns, and update newsletter issues. Changes persist live to the public website.
            </p>
          </div>
          <div class="admin-quick-links">
            <button class="btn btn-secondary btn-sm" id="btn-export-json">Export Backup JSON</button>
            <button class="btn btn-danger btn-sm" id="btn-factory-reset">Reset Defaults</button>
          </div>
        </div>

        <div class="admin-tabs-bar" id="admin-tabs-bar">
          <button class="admin-tab-btn ${T===`products`?`active`:``}" data-tab="products">
            Products (${s().length})
          </button>
          <button class="admin-tab-btn ${T===`work`?`active`:``}" data-tab="work">
            Work & Research (${r().length})
          </button>
          <button class="admin-tab-btn ${T===`services`?`active`:``}" data-tab="services">
            Services (${h().length})
          </button>
          <button class="admin-tab-btn ${T===`content`?`active`:``}" data-tab="content">
            Content & Logs (${p().length})
          </button>
          <button class="admin-tab-btn ${T===`newsletter`?`active`:``}" data-tab="newsletter">
            Newsletter (${(n().archive||[]).length})
          </button>
          <button class="admin-tab-btn ${T===`security`?`active`:``}" data-tab="security">
            Security & Backup
          </button>
        </div>
      </div>
    </section>

    <!-- Main Tab View -->
    <main class="section admin-content-section">
      <div class="container" id="admin-tab-content">
        ${k(T)}
      </div>
    </main>

    <div class="admin-toast" id="admin-toast"></div>
  `,document.getElementById(`btn-lock-terminal`).onclick=()=>{w(!1),E()},I(e),L(e),R(e),z(e)}function k(e){switch(e){case`products`:return A();case`work`:return j();case`services`:return M();case`content`:return N();case`newsletter`:return P();case`security`:return F();default:return A()}}function A(){let e=s();return`
    <div class="manager-layout">
      <div class="manager-form-panel">
        <div class="panel-header">
          <h3>Add New Product</h3>
          <span class="panel-tag">DYNAMIC FORM</span>
        </div>

        <form id="form-add-product" class="admin-form">
          <div class="form-field">
            <label>PRODUCT NAME</label>
            <input type="text" id="p-name" placeholder="e.g. Nexus Agentic SDK" required />
          </div>

          <div class="form-row">
            <div class="form-field">
              <label>CATEGORY</label>
              <select id="p-category" class="form-select">
                <option value="Apps">Apps</option>
                <option value="AI Tools" selected>AI Tools</option>
                <option value="Automations">Automations</option>
                <option value="Websites">Websites</option>
                <option value="Digital Products">Digital Products</option>
              </select>
            </div>
            <div class="form-field">
              <label>PRICE (INR / LABEL)</label>
              <input type="text" id="p-price" placeholder="₹2,999 or Free" required />
            </div>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label>STATUS</label>
              <input type="text" id="p-status" placeholder="v1.0 Production" value="v1.0 Production" />
            </div>
            <div class="form-field">
              <label>ACCENT COLOR</label>
              <input type="text" id="p-accent" placeholder="#0c0c0c or #cc2e39" value="#0c0c0c" />
            </div>
          </div>

          <div class="form-field">
            <label>ONE-LINE TAGLINE</label>
            <input type="text" id="p-tagline" placeholder="Autonomous code reasoning agent with sub-second execution." required />
          </div>

          <div class="form-field">
            <label>SHORT DESCRIPTION (FOR CARDS)</label>
            <textarea id="p-desc" rows="3" placeholder="Brief summary shown in product catalog tiles..." required></textarea>
          </div>

          <div class="form-field">
            <label>WHAT IS IT? (FOR DETAIL PAGE)</label>
            <textarea id="p-what" rows="3" placeholder="In-depth explanation of the product architecture..." required></textarea>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label>THE PROBLEM</label>
              <textarea id="p-problem" rows="2" placeholder="What specific technical bottleneck does this solve?" required></textarea>
            </div>
            <div class="form-field">
              <label>THE SOLUTION</label>
              <textarea id="p-solution" rows="2" placeholder="How does the system resolve it cleanly?" required></textarea>
            </div>
          </div>

          <div class="form-field">
            <label>TAGS (COMMA SEPARATED)</label>
            <input type="text" id="p-tags" placeholder="AI Tools, TypeScript, Node.js, SQLite" />
          </div>

          <button type="submit" class="btn btn-primary btn-full">
            + Publish Product to Catalog
          </button>
        </form>
      </div>

      <div class="manager-list-panel">
        <div class="panel-header">
          <h3>Existing Catalog Items (${e.length})</h3>
          <span class="panel-counter">PERSISTED LIVE</span>
        </div>

        <div class="admin-items-list">
          ${e.map(e=>`
            <div class="admin-item-card" id="admin-product-${e.id}">
              <div class="admin-item-info">
                <div class="item-badge-line">
                  <span class="cat-pill">${e.category}</span>
                  <span class="status-pill">${e.status||`Active`}</span>
                  <span class="price-pill">${e.price}</span>
                </div>
                <h4 class="item-name">${e.name}</h4>
                <p class="item-sub">${e.tagline}</p>
                <span class="item-route">Route: <code>/#/products/${e.slug}</code></span>
              </div>
              <div class="admin-item-actions">
                <a href="/#/products/${e.slug}" class="btn btn-secondary btn-sm" target="_blank">View Live ↗</a>
                <button class="btn btn-danger btn-sm btn-delete-product" data-id="${e.id}" data-name="${e.name}">Delete</button>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `}function j(){let e=r();return`
    <div class="manager-layout">
      <div class="manager-form-panel">
        <div class="panel-header">
          <h3>Add Work / Research Project</h3>
          <span class="panel-tag">PORTFOLIO</span>
        </div>

        <form id="form-add-work" class="admin-form">
          <div class="form-field">
            <label>PROJECT / RESEARCH TITLE</label>
            <input type="text" id="w-title" placeholder="e.g. Distributed Consensus in Edge SQLite" required />
          </div>

          <div class="form-row">
            <div class="form-field">
              <label>CATEGORY</label>
              <select id="w-category" class="form-select">
                <option value="AI Projects">AI Projects</option>
                <option value="Research">Research</option>
                <option value="Experiments" selected>Experiments</option>
                <option value="Open Source">Open Source</option>
              </select>
            </div>
            <div class="form-field">
              <label>YEAR</label>
              <input type="text" id="w-year" value="2026" required />
            </div>
          </div>

          <div class="form-field">
            <label>STATUS</label>
            <input type="text" id="w-status" placeholder="Published Research, Active Build, Open Spec" value="Active Build" />
          </div>

          <div class="form-field">
            <label>PROJECT DESCRIPTION</label>
            <textarea id="w-desc" rows="3" placeholder="Technical overview of what was built or discovered..." required></textarea>
          </div>

          <div class="form-field">
            <label>KEY METRICS / OUTCOMES</label>
            <input type="text" id="w-metrics" placeholder="e.g. 99.99% reliability, <4ms latency, 10k stars" required />
          </div>

          <div class="form-field">
            <label>TAGS (COMMA SEPARATED)</label>
            <input type="text" id="w-tags" placeholder="TypeScript, SQLite, Rust, WASM" />
          </div>

          <div class="form-field">
            <label>DESTINATION URL</label>
            <input type="text" id="w-url" placeholder="/#/work or external link" value="/#/work" />
          </div>

          <button type="submit" class="btn btn-primary btn-full">
            + Add Work Item
          </button>
        </form>
      </div>

      <div class="manager-list-panel">
        <div class="panel-header">
          <h3>Existing Work & Research (${e.length})</h3>
        </div>

        <div class="admin-items-list">
          ${e.map(e=>`
            <div class="admin-item-card">
              <div class="admin-item-info">
                <div class="item-badge-line">
                  <span class="cat-pill">${e.category}</span>
                  <span class="status-pill">${e.year} • ${e.status}</span>
                </div>
                <h4 class="item-name">${e.title}</h4>
                <p class="item-sub">${e.description}</p>
                <span class="item-route">Metrics: <code>${e.metrics}</code></span>
              </div>
              <div class="admin-item-actions">
                <button class="btn btn-danger btn-sm btn-delete-work" data-id="${e.id}" data-name="${e.title}">Delete</button>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `}function M(){let e=h();return`
    <div class="manager-layout">
      <div class="manager-form-panel">
        <div class="panel-header">
          <h3>Add Service Offering</h3>
          <span class="panel-tag">SERVICES</span>
        </div>

        <form id="form-add-service" class="admin-form">
          <div class="form-field">
            <label>SERVICE TITLE</label>
            <input type="text" id="s-title" placeholder="e.g. Autonomous Agent Deployment" required />
          </div>

          <div class="form-row">
            <div class="form-field">
              <label>CATEGORY</label>
              <input type="text" id="s-category" placeholder="Engineering, Architecture, Operations" value="Engineering" required />
            </div>
            <div class="form-field">
              <label>TYPICAL TIMELINE</label>
              <input type="text" id="s-timeline" placeholder="e.g. 2–4 weeks" value="2–4 weeks" required />
            </div>
          </div>

          <div class="form-field">
            <label>ONE-LINE POSITIONING</label>
            <input type="text" id="s-tagline" placeholder="Production AI systems that eliminate operational bottlenecks." required />
          </div>

          <div class="form-field">
            <label>DESCRIPTION</label>
            <textarea id="s-desc" rows="3" placeholder="Explain what the service entails for the client..." required></textarea>
          </div>

          <div class="form-field">
            <label>DELIVERABLES (ONE PER LINE)</label>
            <textarea id="s-deliverables" rows="3" placeholder="End-to-end vector search\nAutomated fallback pipelines\nProduction monitoring"></textarea>
          </div>

          <button type="submit" class="btn btn-primary btn-full">
            + Publish Service Offering
          </button>
        </form>
      </div>

      <div class="manager-list-panel">
        <div class="panel-header">
          <h3>Current Services Offered (${e.length})</h3>
        </div>

        <div class="admin-items-list">
          ${e.map(e=>`
            <div class="admin-item-card">
              <div class="admin-item-info">
                <div class="item-badge-line">
                  <span class="cat-pill">${e.category}</span>
                  <span class="status-pill">${e.timeline}</span>
                </div>
                <h4 class="item-name">${e.title}</h4>
                <p class="item-sub">${e.tagline}</p>
              </div>
              <div class="admin-item-actions">
                <button class="btn btn-danger btn-sm btn-delete-service" data-id="${e.id}" data-name="${e.title}">Delete</button>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `}function N(){let e=p();return`
    <div class="manager-layout">
      <div class="manager-form-panel">
        <div class="panel-header">
          <h3>Publish Content / Dispatches</h3>
          <span class="panel-tag">CONTENT HUB</span>
        </div>

        <form id="form-add-content" class="admin-form">
          <div class="form-field">
            <label>DISPATCH TITLE</label>
            <input type="text" id="c-title" placeholder="e.g. Zero-Dependency State Synchronization" required />
          </div>

          <div class="form-row">
            <div class="form-field">
              <label>TYPE</label>
              <select id="c-type" class="form-select">
                <option value="Articles" selected>Articles</option>
                <option value="Videos">Videos</option>
                <option value="Build Logs">Build Logs</option>
              </select>
            </div>
            <div class="form-field">
              <label>READING TIME / LENGTH</label>
              <input type="text" id="c-readtime" placeholder="e.g. 6 min read or 14:28 video" value="5 min read" required />
            </div>
          </div>

          <div class="form-field">
            <label>TAG / BADGE</label>
            <input type="text" id="c-tag" placeholder="ARCHITECTURE, AI TELEMETRY, FULL-STACK" value="ARCHITECTURE" required />
          </div>

          <div class="form-field">
            <label>EXCERPT / SUMMARY</label>
            <textarea id="c-excerpt" rows="3" placeholder="Brief summary of the article or video breakdown..." required></textarea>
          </div>

          <div class="form-field">
            <label>LINK / URL</label>
            <input type="text" id="c-url" placeholder="https://youtube.com/... or /#/content" value="/#/content" required />
          </div>

          <button type="submit" class="btn btn-primary btn-full">
            + Publish Dispatch
          </button>
        </form>
      </div>

      <div class="manager-list-panel">
        <div class="panel-header">
          <h3>Published Content Items (${e.length})</h3>
        </div>

        <div class="admin-items-list">
          ${e.map(e=>`
            <div class="admin-item-card">
              <div class="admin-item-info">
                <div class="item-badge-line">
                  <span class="cat-pill">${e.type}</span>
                  <span class="status-pill">${e.date} • ${e.readTime}</span>
                </div>
                <h4 class="item-name">${e.title}</h4>
                <p class="item-sub">${e.excerpt}</p>
              </div>
              <div class="admin-item-actions">
                <button class="btn btn-danger btn-sm btn-delete-content" data-id="${e.id}" data-name="${e.title}">Delete</button>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `}function P(){let e=n().archive||[];return`
    <div class="manager-layout">
      <div class="manager-form-panel">
        <div class="panel-header">
          <h3>Publish Newsletter Edition</h3>
          <span class="panel-tag">ARYANSARCADE LETTER</span>
        </div>

        <form id="form-add-newsletter" class="admin-form">
          <div class="form-row">
            <div class="form-field">
              <label>ISSUE NUMBER</label>
              <input type="text" id="nl-issue" placeholder="e.g. Issue #43" value="Issue #${e.length+1}" required />
            </div>
            <div class="form-field">
              <label>DATE</label>
              <input type="text" id="nl-date" placeholder="e.g. Oct 01, 2026" value="Oct 2026" required />
            </div>
          </div>

          <div class="form-field">
            <label>EDITION TITLE</label>
            <input type="text" id="nl-title" placeholder="e.g. Fractional Indexing in Local-First Architecture" required />
          </div>

          <div class="form-field">
            <label>READING TIME</label>
            <input type="text" id="nl-readtime" placeholder="5 min read" value="5 min read" required />
          </div>

          <div class="form-field">
            <label>PREVIEW / SYNOPSIS</label>
            <textarea id="nl-preview" rows="3" placeholder="Key takeaways and summary shared with subscribers..." required></textarea>
          </div>

          <button type="submit" class="btn btn-primary btn-full">
            + Publish Issue to Archive
          </button>
        </form>
      </div>

      <div class="manager-list-panel">
        <div class="panel-header">
          <h3>Published Archive Issues (${e.length})</h3>
        </div>

        <div class="admin-items-list">
          ${e.map(e=>`
            <div class="admin-item-card">
              <div class="admin-item-info">
                <div class="item-badge-line">
                  <span class="cat-pill">${e.issue}</span>
                  <span class="status-pill">${e.date} • ${e.readTime}</span>
                </div>
                <h4 class="item-name">${e.title}</h4>
                <p class="item-sub">${e.preview}</p>
              </div>
              <div class="admin-item-actions">
                <button class="btn btn-danger btn-sm btn-delete-newsletter" data-id="${e.issue}" data-name="${e.title}">Delete</button>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `}function F(){return`
    <div class="manager-layout single-column">
      <div class="backup-box">
        <div class="panel-header">
          <h3>Terminal Security & Master Key</h3>
          <span class="panel-tag">AUTHENTICATION</span>
        </div>
        <p class="backup-desc">
          Update the master passkey required to access this console. Only users with this key can view, create, edit, or delete ecosystem records.
        </p>

        <form id="form-update-passkey" class="admin-form" style="max-width: 440px; margin-bottom: 40px;">
          <div class="form-field">
            <label>NEW MASTER PASSKEY</label>
            <input type="password" id="new-master-pin" placeholder="Enter new secret passkey" required />
          </div>
          <button type="submit" class="btn btn-primary">Update Master Passkey</button>
        </form>

        <div class="panel-header">
          <h3>Ecosystem Data Backup & Restore</h3>
          <span class="panel-tag">JSON ENGINE</span>
        </div>
        <p class="backup-desc">
          All changes are persisted in browser <code>localStorage</code>. Export your entire catalog, portfolio, services, and newsletters as a JSON file anytime, or paste JSON to import across devices.
        </p>

        <div class="backup-actions-grid">
          <div class="backup-card">
            <h4>Export Data Backup</h4>
            <p>Download a complete JSON snapshot containing all your products, work, services, content, and newsletter issues.</p>
            <button class="btn btn-primary" id="btn-download-backup">Download Backup JSON</button>
          </div>

          <div class="backup-card">
            <h4>Restore from JSON</h4>
            <p>Paste an exported JSON string below to overwrite and restore your database.</p>
            <textarea id="import-json-area" rows="4" placeholder="Paste your backup JSON here..."></textarea>
            <button class="btn btn-secondary" id="btn-apply-import">Import & Overwrite Data</button>
          </div>

          <div class="backup-card danger-card">
            <h4>Factory Reset</h4>
            <p>Reset all products, projects, services, and newsletter archives back to the factory defaults.</p>
            <button class="btn btn-danger" id="btn-danger-reset">Reset All Data to Defaults</button>
          </div>
        </div>
      </div>
    </div>
  `}function I(e){let t=e.querySelectorAll(`#admin-tabs-bar .admin-tab-btn`),n=e.querySelector(`#admin-tab-content`);t.forEach(r=>{r.onclick=()=>{t.forEach(e=>e.classList.remove(`active`)),r.classList.add(`active`),T=r.getAttribute(`data-tab`),n&&(n.innerHTML=k(T),L(e),R(e),z(e))}})}function L(t){let n=t.querySelector(`#form-add-product`);n&&(n.onsubmit=n=>{n.preventDefault();let r=t.querySelector(`#p-name`).value.trim(),i=r.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/(^-|-$)/g,``),a=t.querySelector(`#p-category`).value,o=t.querySelector(`#p-price`).value.trim(),s=t.querySelector(`#p-status`).value.trim()||`v1.0 Production`,c=t.querySelector(`#p-accent`).value.trim()||`#0c0c0c`,l=t.querySelector(`#p-tagline`).value.trim(),u=t.querySelector(`#p-desc`).value.trim(),d=t.querySelector(`#p-what`).value.trim(),f=t.querySelector(`#p-problem`).value.trim(),p=t.querySelector(`#p-solution`).value.trim(),m={id:i,slug:i,name:r,category:a,tagline:l,shortDescription:u,price:o,priceUsd:`$39`,priceLabel:`Direct Source License`,status:s,accentColor:c,featured:!0,tags:(t.querySelector(`#p-tags`).value||`Software, Tools`).split(`,`).map(e=>e.trim()).filter(Boolean),logoIcon:a===`Apps`?`check-square`:a===`Automations`?`terminal`:`activity`,demoUrl:`/#/products/${i}`,buyUrl:`/#/support`,heroSubtitle:l,whatIsIt:d,problem:f,solution:p,features:[{title:`Modular Architecture`,desc:`Engineered for sub-second execution with zero unnecessary dependencies.`},{title:`Complete Source Ownership`,desc:`One-time license including 100% of the type-safe source code.`}],howItWorks:[{step:`01`,title:`Download License`,desc:`Instant access to repository files and documentation.`},{step:`02`,title:`Configure Keys`,desc:`Drop in your environment credentials and connect your store.`},{step:`03`,title:`Ship Production`,desc:`Deploy to your own infrastructure with zero vendor lock-in.`}],whoIsItFor:`Technical founders and developers who want production software with full code ownership.`,whatsIncluded:[`Full source code repository`,`Configuration presets`,`Lifetime updates`],faq:[{q:`Do I own the code?`,a:`Yes. You receive 100% source ownership with no recurring subscription fees.`}]};e(m),B(`✓ Published "${r}" live to public catalog!`),O(t)});let r=t.querySelector(`#form-add-work`);r&&(r.onsubmit=e=>{e.preventDefault();let n=t.querySelector(`#w-title`).value.trim(),r=n.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/(^-|-$)/g,``),i={id:r,slug:r,title:n,category:t.querySelector(`#w-category`).value,year:t.querySelector(`#w-year`).value.trim(),status:t.querySelector(`#w-status`).value.trim(),description:t.querySelector(`#w-desc`).value.trim(),metrics:t.querySelector(`#w-metrics`).value.trim(),tags:(t.querySelector(`#w-tags`).value||`Engineering, Build`).split(`,`).map(e=>e.trim()).filter(Boolean),linkText:`Inspect Build →`,linkUrl:t.querySelector(`#w-url`).value.trim()||`/#/work`,highlight:!0};_(i),B(`✓ Added work project "${n}"!`),O(t)});let o=t.querySelector(`#form-add-service`);o&&(o.onsubmit=e=>{e.preventDefault();let n=t.querySelector(`#s-title`).value.trim(),r=n.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/(^-|-$)/g,``),i=t.querySelector(`#s-category`).value.trim(),a=t.querySelector(`#s-timeline`).value.trim(),o=t.querySelector(`#s-tagline`).value.trim(),s=t.querySelector(`#s-desc`).value.trim(),c=t.querySelector(`#s-deliverables`).value.split(`
`).map(e=>e.trim()).filter(Boolean),l={id:r,title:n,category:i,tagline:o,description:s,deliverables:c.length?c:[`Technical Architecture`,`Production Code`,`Documentation`],timeline:a};g(l),B(`✓ Published service offering "${n}"!`),O(t)});let s=t.querySelector(`#form-add-content`);s&&(s.onsubmit=e=>{e.preventDefault();let n=t.querySelector(`#c-title`).value.trim(),r=`c-`+Date.now(),i=t.querySelector(`#c-type`).value,o=t.querySelector(`#c-readtime`).value.trim(),s=t.querySelector(`#c-tag`).value.trim().toUpperCase(),c=t.querySelector(`#c-excerpt`).value.trim(),l=t.querySelector(`#c-url`).value.trim(),u={id:r,type:i,title:n,date:new Date().toLocaleDateString(`en-US`,{month:`short`,year:`numeric`}),readTime:o,excerpt:c,tag:s,url:l};a(u),B(`✓ Published content "${n}" to discovery hub!`),O(t)});let c=t.querySelector(`#form-add-newsletter`);c&&(c.onsubmit=e=>{e.preventDefault();let n=t.querySelector(`#nl-issue`).value.trim(),r=t.querySelector(`#nl-date`).value.trim(),a={issue:n,title:t.querySelector(`#nl-title`).value.trim(),date:r,readTime:t.querySelector(`#nl-readtime`).value.trim(),preview:t.querySelector(`#nl-preview`).value.trim()};i(a),B(`✓ Published ${n} to newsletter archive!`),O(t)});let l=t.querySelector(`#form-update-passkey`);l&&(l.onsubmit=e=>{e.preventDefault();let n=t.querySelector(`#new-master-pin`).value.trim();if(n.length<4){alert(`Passkey must be at least 4 characters.`);return}S(n),B(`✓ Master Passkey updated successfully!`),t.querySelector(`#new-master-pin`).value=``})}function R(e){e.querySelectorAll(`.btn-delete-product`).forEach(t=>{t.onclick=()=>{let n=t.getAttribute(`data-id`),r=t.getAttribute(`data-name`);confirm(`Are you sure you want to delete product "${r}"?`)&&(f(n),B(`Deleted product "${r}"`),O(e))}}),e.querySelectorAll(`.btn-delete-work`).forEach(n=>{n.onclick=()=>{let r=n.getAttribute(`data-id`),i=n.getAttribute(`data-name`);confirm(`Delete project "${i}" from portfolio?`)&&(t(r),B(`Deleted project "${i}"`),O(e))}}),e.querySelectorAll(`.btn-delete-service`).forEach(t=>{t.onclick=()=>{let n=t.getAttribute(`data-id`),r=t.getAttribute(`data-name`);confirm(`Delete service "${r}"?`)&&(o(n),B(`Deleted service "${r}"`),O(e))}}),e.querySelectorAll(`.btn-delete-content`).forEach(t=>{t.onclick=()=>{let n=t.getAttribute(`data-id`),r=t.getAttribute(`data-name`);confirm(`Delete dispatch "${r}"?`)&&(m(n),B(`Deleted dispatch "${r}"`),O(e))}}),e.querySelectorAll(`.btn-delete-newsletter`).forEach(t=>{t.onclick=()=>{let n=t.getAttribute(`data-id`);confirm(`Delete newsletter issue "${n}"?`)&&(l(n),B(`Deleted newsletter issue ${n}`),O(e))}})}function z(e){let t=e.querySelector(`#btn-download-backup`)||e.querySelector(`#btn-export-json`);t&&(t.onclick=()=>{let e=u(),t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`rns-arcade-backup-${new Date().toISOString().slice(0,10)}.json`,r.click(),URL.revokeObjectURL(n),B(`✓ Backup JSON downloaded successfully`)});let n=e.querySelector(`#btn-apply-import`),r=e.querySelector(`#import-json-area`);n&&r&&(n.onclick=()=>{let t=r.value.trim();if(!t){alert(`Please paste valid JSON text first.`);return}d(t)?(B(`✓ Data restored successfully from JSON!`),O(e)):alert(`Failed to parse JSON. Please verify the format.`)});let i=e.querySelector(`#btn-factory-reset`)||e.querySelector(`#btn-danger-reset`);i&&(i.onclick=()=>{confirm(`WARNING: Reset all products, portfolio, and newsletters back to factory defaults?`)&&(c(),B(`✓ Reset all data to factory defaults`),O(e))})}function B(e){let t=document.getElementById(`admin-toast`);t&&(t.innerText=e,t.classList.add(`show`),setTimeout(()=>{t.classList.remove(`show`)},3200))}