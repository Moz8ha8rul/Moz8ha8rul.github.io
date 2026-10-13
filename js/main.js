/**
 * Portfolio Interactive Logic (Better Stack Inspired)
 * Mozharul (Moz8ha8rul)
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.PORTFOLIO_CONFIG || {};

  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Populate Social Links and Personal Details
  initSocialLinks(config);

  // 3. Populate Hero Telemetry Uptime Bars
  initUptimeBars();

  // 4. Initialize Mockup Window Tab Switching
  initMockupTabs();

  // 5. Populate Projects Grid
  initProjects(config);

  // 6. Setup Copy to Clipboard Actions
  initCopyActions(config);

  // 7. Navbar Scroll Effects
  initNavbarScroll();

  // 8. Mobile Menu Drawer
  initMobileMenu();

  // 9. Update Footer Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

/**
 * Configure all social media links dynamically from config.js
 */
function initSocialLinks(config) {
  const socials = config.socials || {};

  // Helper to set attributes
  const setLink = (id, url) => {
    const el = document.getElementById(id);
    if (el && url) {
      el.href = url;
    }
  };

  // WhatsApp
  if (socials.whatsapp && socials.whatsapp.url) {
    setLink('navWhatsAppBtn', socials.whatsapp.url);
    setLink('mobileWhatsAppBtn', socials.whatsapp.url);
    setLink('pillWhatsapp', socials.whatsapp.url);
    setLink('cardWhatsapp', socials.whatsapp.url);
    setLink('ctaWhatsAppBtn', socials.whatsapp.url);
    setLink('footerWhatsapp', socials.whatsapp.url);
  }

  // GitHub
  if (socials.github && socials.github.url) {
    setLink('pillGithub', socials.github.url);
    setLink('cardGithub', socials.github.url);
    setLink('footerGithub', socials.github.url);
  }

  // LinkedIn
  if (socials.linkedin && socials.linkedin.url) {
    setLink('pillLinkedin', socials.linkedin.url);
    setLink('cardLinkedin', socials.linkedin.url);
    setLink('footerLinkedin', socials.linkedin.url);
  }

  // Instagram
  if (socials.instagram && socials.instagram.url) {
    setLink('pillInstagram', socials.instagram.url);
    setLink('cardInstagram', socials.instagram.url);
    setLink('footerInstagram', socials.instagram.url);
  }

  // Facebook
  if (socials.facebook && socials.facebook.url) {
    setLink('pillFacebook', socials.facebook.url);
    setLink('cardFacebook', socials.facebook.url);
    setLink('footerFacebook', socials.facebook.url);
  }

  // Personal Text
  if (config.personal) {
    const statusEl = document.getElementById('heroStatusText');
    if (statusEl && config.personal.status) {
      statusEl.textContent = config.personal.status;
    }
    const subtitleEl = document.getElementById('heroSubtitle');
    if (subtitleEl && config.personal.tagline) {
      subtitleEl.textContent = config.personal.tagline;
    }
  }
}

/**
 * Generate Better Stack style 90-day operational bars
 */
function initUptimeBars() {
  const barsContainer = document.getElementById('uptimeBars');
  if (!barsContainer) return;

  barsContainer.innerHTML = '';
  const totalNodes = 36;

  for (let i = 0; i < totalNodes; i++) {
    const node = document.createElement('div');
    node.className = 'uptime-node';
    
    // Give 2 or 3 nodes a violet highlight representing high activity deploy points
    if (i === 12 || i === 24 || i === 35) {
      node.classList.add('node-special');
      node.title = 'Deployment completed with 100% test coverage';
    } else {
      node.title = 'Operational (100% uptime, 0 errors)';
    }

    barsContainer.appendChild(node);
  }
}

/**
 * Handle tabs on the Hero Mockup Window
 */
function initMockupTabs() {
  const tabs = document.querySelectorAll('.mockup-tab');
  const mockupBody = document.getElementById('mockupBody');
  if (!tabs.length || !mockupBody) return;

  const tabContents = {
    telemetry: `
      <div class="telemetry-card">
        <div class="telemetry-header">
          <span class="telemetry-title">System Reliability & Uptime</span>
          <span style="font-size: 0.75rem; color: var(--text-dim); font-family: var(--font-mono);">Real-time</span>
        </div>
        <div class="uptime-bar-wrapper">
          <div class="uptime-meta">
            <span style="color: var(--text-muted);">90-Day Operational Ratio</span>
            <span class="uptime-percentage">99.98% OK</span>
          </div>
          <div class="uptime-bars" id="uptimeBarsDynamic"></div>
        </div>
        <div class="metrics-mini-grid">
          <div class="metric-mini-box">
            <div class="metric-mini-val">99.9%</div>
            <div class="metric-mini-label">Uptime</div>
          </div>
          <div class="metric-mini-box">
            <div class="metric-mini-val">24ms</div>
            <div class="metric-mini-label">Latency</div>
          </div>
          <div class="metric-mini-box">
            <div class="metric-mini-val">15+</div>
            <div class="metric-mini-label">Projects</div>
          </div>
        </div>
      </div>
      <div class="code-console">
        <div class="code-comment">// Developer Profile Object</div>
        <div><span class="code-keyword">const</span> <span class="code-var">developer</span> = {</div>
        <div style="padding-left: 14px;"><span class="code-prop">name</span>: <span class="code-str">"Mozharul"</span>,</div>
        <div style="padding-left: 14px;"><span class="code-prop">handle</span>: <span class="code-str">"@Moz8ha8rul"</span>,</div>
        <div style="padding-left: 14px;"><span class="code-prop">role</span>: <span class="code-str">"Full-Stack Dev"</span>,</div>
        <div style="padding-left: 14px;"><span class="code-prop">specialty</span>: [<span class="code-str">"React"</span>, <span class="code-str">"Node.js"</span>],</div>
        <div style="padding-left: 14px;"><span class="code-prop">isAvailable</span>: <span class="code-keyword">true</span>,</div>
        <div style="padding-left: 14px;"><span class="code-prop">socialChannels</span>: 5,</div>
        <div>};</div>
        <div class="code-comment" style="margin-top: 8px;">// Ready to ship production code</div>
      </div>
    `,
    code: `
      <div class="code-console" style="grid-column: span 2;">
        <div class="code-comment">// core/services/portfolio.ts</div>
        <div><span class="code-keyword">import</span> { <span class="code-var">SocialChannels</span>, <span class="code-var">DeploymentTarget</span> } <span class="code-keyword">from</span> <span class="code-str">'@mozharul/core'</span>;</div>
        <br>
        <div><span class="code-keyword">export async function</span> <span class="code-var">deployPortfolio</span>(): <span class="code-keyword">Promise</span>&lt;<span class="code-var">Status</span>&gt; {</div>
        <div style="padding-left: 16px;"><span class="code-keyword">const</span> <span class="code-var">channels</span> = [<span class="code-str">'WhatsApp'</span>, <span class="code-str">'LinkedIn'</span>, <span class="code-str">'GitHub'</span>, <span class="code-str">'Instagram'</span>, <span class="code-str">'Facebook'</span>];</div>
        <div style="padding-left: 16px;"><span class="code-keyword">const</span> <span class="code-var">target</span> = <span class="code-var">DeploymentTarget</span>.<span class="code-prop">GITHUB_PAGES</span>;</div>
        <br>
        <div style="padding-left: 16px;"><span class="code-comment">// Verifying endpoints and responsive UI</span></div>
        <div style="padding-left: 16px;"><span class="code-keyword">await</span> <span class="code-var">verifyIntegrity</span>({ <span class="code-prop">status</span>: <span class="code-str">'200 OK'</span>, <span class="code-prop">ssl</span>: <span class="code-keyword">true</span> });</div>
        <div style="padding-left: 16px;"><span class="code-keyword">return</span> { <span class="code-prop">liveUrl</span>: <span class="code-str">'https://moz8ha8rul.github.io/'</span>, <span class="code-prop">health</span>: <span class="code-str">'EXCELLENT'</span> };</div>
        <div>}</div>
      </div>
    `,
    status: `
      <div class="code-console" style="grid-column: span 2;">
        <div class="code-comment">// Verified Endpoint Health Matrix</div>
        <pre style="margin: 0; font-family: inherit;">{
  <span class="code-prop">"host"</span>: <span class="code-str">"moz8ha8rul.github.io"</span>,
  <span class="code-prop">"status"</span>: <span class="code-str">"HEALTHY"</span>,
  <span class="code-prop">"ssl_certificate"</span>: <span class="code-str">"Valid (Let's Encrypt / GitHub CDN)"</span>,
  <span class="code-prop">"social_routes"</span>: {
    <span class="code-prop">"whatsapp"</span>: <span class="code-str">"https://wa.me/..."</span>,
    <span class="code-prop">"linkedin"</span>: <span class="code-str">"https://linkedin.com/in/moz8ha8rul"</span>,
    <span class="code-prop">"github"</span>: <span class="code-str">"https://github.com/Moz8ha8rul"</span>,
    <span class="code-prop">"instagram"</span>: <span class="code-str">"https://instagram.com/moz8ha8rul"</span>,
    <span class="code-prop">"facebook"</span>: <span class="code-str">"https://facebook.com/moz8ha8rul"</span>
  },
  <span class="code-prop">"edge_cache"</span>: <span class="code-str">"HIT (Fastly CDN)"</span>,
  <span class="code-prop">"response_ms"</span>: 24
}</pre>
      </div>
    `
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetKey = tab.getAttribute('data-tab');
      if (tabContents[targetKey]) {
        mockupBody.innerHTML = tabContents[targetKey];
        if (targetKey === 'telemetry') {
          // Re-populate uptime bars
          const dynamicBars = document.getElementById('uptimeBarsDynamic');
          if (dynamicBars) {
            for (let i = 0; i < 36; i++) {
              const node = document.createElement('div');
              node.className = 'uptime-node';
              if (i === 12 || i === 24 || i === 35) node.classList.add('node-special');
              dynamicBars.appendChild(node);
            }
          }
        }
      }
    });
  });
}

/**
 * Render Project Cards
 */
function initProjects(config) {
  const container = document.getElementById('projectCardsGrid');
  if (!container) return;

  const projects = config.projects || [];
  if (!projects.length) return;

  container.innerHTML = projects.map(proj => `
    <div class="project-card">
      <div>
        <div class="project-badge-bar">
          <span style="font-size: 0.75rem; color: var(--text-dim); font-weight: 700; text-transform: uppercase;">Build Showcase</span>
          <span class="project-metric">${proj.metrics || 'Production Ready'}</span>
        </div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        
        <div class="project-tags">
          ${(proj.tags || []).map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div class="project-links">
        <a href="${proj.demo || '#'}" target="_blank" class="btn btn-primary btn-sm">
          <i data-lucide="external-link" style="width: 14px; height: 14px;"></i> Live Demo
        </a>
        <a href="${proj.github || '#'}" target="_blank" class="btn btn-secondary btn-sm">
          <svg class="brand-logo-svg svg-github" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          <span>Code Repo</span>
        </a>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * Quick Copy Email Button & Toast Notification
 */
function initCopyActions(config) {
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyText = document.getElementById('copyEmailText');
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMsg');

  if (!copyBtn) return;

  const email = (config.personal && config.personal.email) ? config.personal.email : 'mozharul.dev@gmail.com';

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(email).then(() => {
      if (copyText) copyText.textContent = 'Copied!';
      if (toast) {
        if (toastMsg) toastMsg.textContent = `Copied ${email} to clipboard!`;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
          if (copyText) copyText.textContent = 'Copy Email Address';
        }, 3000);
      }
    }).catch(() => {
      // Fallback
      window.location.href = `mailto:${email}`;
    });
  });
}

/**
 * Sticky Navbar Scroll Class
 */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/**
 * Mobile Drawer Menu
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}
