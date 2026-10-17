# ⚡ Mozharul (Moz8ha8rul) — Developer Portfolio

A developer portfolio website crafted with a modern dark aesthetic inspired by the **Better Stack** design reference.

Deployed and hosted directly on **GitHub Pages**: [https://moz8ha8rul.github.io/](https://moz8ha8rul.github.io/)

---

## 🌟 Features

- **Better Stack Inspired Aesthetic**:
  - Deep dark background with ambient indigo/violet glows.
  - Interactive hero dashboard with live 90-day uptime bars (99.98% operational ratio), latency counter, and code console tabs.
  - High-contrast bento grid showcase ("Ecosystem & Channels").
  - Seamless infinite marquee ticker showcasing tech stack and tools.
- **Dedicated Social Media Hub**:
  - **WhatsApp**: Direct chat button with pre-filled greeting message.
  - **LinkedIn**: Direct profile connection and endorsements.
  - **GitHub**: Repositories, stars, and open-source contributions.
  - **Instagram**: Visual stories, creative design, and tech highlights.
  - **Facebook**: Social network and community discussions.
- **Interactive Capabilities**:
  - One-click copy email button with toast feedback.
  - Interactive code terminal and service status tabs.
  - Responsive mobile drawer navigation.
  - 100/100 Core Web Vitals performance optimization with zero runtime bloat.
- **Centralized Configuration**: All links, contact numbers, and project items can be edited in a single file: `js/config.js`.

---

## 🛠️ Folder Structure

```
├── index.html              # Main HTML5 entry point
├── css/
│   └── styles.css          # Custom styling, Better Stack design system, responsive rules
├── js/
│   ├── config.js           # Edit your social links, WhatsApp number, and bio here
│   └── main.js             # Interactive telemetry, tabs, copy buttons, drawer menu
├── .nojekyll               # Prevents GitHub Jekyll processing
├── deploy-helper.bat       # 1-Click Git initialization and deployment script
└── README.md               # Documentation and deployment guide
```

---

## ⚙️ How to Customize Your Social Links

Open `js/config.js` in any text editor and update your links:

```javascript
socials: {
  github: {
    url: "https://github.com/Moz8ha8rul",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/moz8ha8rul", // Your LinkedIn URL
  },
  whatsapp: {
    phone: "8801XXXXXXXXX",                        // Your WhatsApp number (country code + number)
    url: "https://wa.me/8801XXXXXXXXX?text=Hi...", // Direct chat URL
  },
  instagram: {
    url: "https://www.instagram.com/mazharulz/?hl=en",   // Your Instagram URL
  },
  facebook: {
    url: "https://www.facebook.com/moz8ha8rul",    // Your Facebook URL
  },
}
```

---

## 🚀 How to Deploy to GitHub Pages

### Option 1: Using the 1-Click Deploy Helper (`deploy-helper.bat`)
Double-click `deploy-helper.bat` in this folder. It will:
1. Verify if Git is installed (or offer to install it).
2. Initialize the Git repository.
3. Link your remote `https://github.com/Moz8ha8rul/Moz8ha8rul.github.io.git`.
4. Commit all files and push to branch `main`.

### Option 2: Using Standard Git Commands
Run the following in PowerShell or Command Prompt inside this folder:

```bash
git init
git add .
git commit -m "feat: initial commit - Better Stack inspired portfolio website"
git branch -M main
git remote add origin https://github.com/Moz8ha8rul/Moz8ha8rul.github.io.git
git push -u origin main
```

### Option 3: Direct Web Upload (No Git Installation Needed)
1. Go to your repository: [https://github.com/Moz8ha8rul/Moz8ha8rul.github.io](https://github.com/Moz8ha8rul/Moz8ha8rul.github.io)
2. Click **Add file** -> **Upload files**.
3. Drag and drop all files and folders (`index.html`, `css`, `js`, `.nojekyll`, `README.md`) into the upload area.
4. Click **Commit changes**.
5. Within 1-2 minutes, GitHub Pages will automatically publish your website live at:
   👉 **https://moz8ha8rul.github.io/**
