/**
 * Personal Portfolio Configuration
 * Easily update your personal details, social media URLs, and projects here!
 */

const PORTFOLIO_CONFIG = {
  // Personal Info
  personal: {
    name: "Mozharul",
    nickname: "Dip",
    handle: "Moz8ha8rul",
    title: "Full-Stack Developer & Software Craftsman",
    tagline: "Building high-performance web systems, intuitive interfaces, and resilient digital products.",
    location: "Bangladesh",
    status: "Available for new projects & opportunities",
    avatar: "https://avatars.githubusercontent.com/u/339086512?v=4", // Your GitHub Avatar
    email: "mozharul.dev@gmail.com",
    phone: "+8801XXXXXXXXX", // Replace with your WhatsApp / phone number
  },

  // Social Media Accounts (Requested: Instagram, Facebook, WhatsApp, LinkedIn, GitHub)
  socials: {
    github: {
      name: "GitHub",
      url: "https://github.com/Moz8ha8rul",
      handle: "@Moz8ha8rul",
      description: "Open source contributions, repositories & clean codebases",
      icon: "github",
      color: "#ffffff",
      badge: "Active",
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/moz8ha8rul", // Replace with your exact LinkedIn profile URL
      handle: "Mozharul",
      description: "Professional background, career updates & networking",
      icon: "linkedin",
      color: "#0a66c2",
      badge: "Connect",
    },
    whatsapp: {
      name: "WhatsApp",
      phone: "+8801700000000", // Replace with your WhatsApp international number (without + or spaces)
      url: "https://wa.me/8801700000000?text=Hi%20Mozharul%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%21",
      handle: "Direct Chat",
      description: "Instant messaging for freelance inquiries & quick discussions",
      icon: "whatsapp",
      color: "#25d366",
      badge: "Fast Response",
    },
    instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/moz8ha8rul", // Replace with your Instagram profile URL
      handle: "@moz8ha8rul",
      description: "Life highlights, visual design, tech snippets & stories",
      icon: "instagram",
      color: "#e1306c",
      badge: "Follow",
    },
    facebook: {
      name: "Facebook",
      url: "https://www.facebook.com/share/1E3z9KMASf/",
      handle: "Mozharul",
      description: "Personal updates, tech community & social interactions",
      icon: "facebook",
      color: "#1877f2",
      badge: "Add Friend",
    },
  },

  // Key Metrics shown in Hero / Stats
  stats: [
    { label: "Code Reliability", value: "99.9%", detail: "Clean architecture" },
    { label: "Response Latency", value: "< 50ms", detail: "Optimized performance" },
    { label: "Projects Shipped", value: "15+", detail: "Full-stack apps" },
    { label: "Client Satisfaction", value: "100%", detail: "Agile delivery" },
  ],

  // Tech Stack Showcase
  techStack: [
    { name: "JavaScript", category: "Language" },
    { name: "TypeScript", category: "Language" },
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "Tailwind CSS", category: "UI/Styling" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Git & GitHub", category: "DevOps" },
    { name: "Docker", category: "DevOps" },
  ],

  // Featured Projects
  projects: [
    {
      id: "project-1",
      title: "CloudPulse - System Observability Dashboard",
      description: "A real-time uptime monitor and telemetry log aggregator inspired by modern developer platforms, with sub-second alert triggers.",
      tags: ["React", "Node.js", "Tailwind CSS", "WebSockets"],
      metrics: "99.99% Uptime Monitored",
      github: "https://github.com/Moz8ha8rul",
      demo: "https://moz8ha8rul.github.io",
      featured: true,
    },
    {
      id: "project-2",
      title: "Nexus API Gateway & Auth Engine",
      description: "High-throughput API gateway supporting rate limiting, JWT key rotation, and microservice route dispatching.",
      tags: ["TypeScript", "Express", "Redis", "Docker"],
      metrics: "50k req/min Tested",
      github: "https://github.com/Moz8ha8rul",
      demo: "https://moz8ha8rul.github.io",
      featured: true,
    },
    {
      id: "project-3",
      title: "HyperFlow - Modern E-Commerce Platform",
      description: "Full-stack storefront with dynamic product filtering, seamless checkout integration, and administrative inventory controls.",
      tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "Stripe API"],
      metrics: "Sub-100ms Page Loads",
      github: "https://github.com/Moz8ha8rul",
      demo: "https://moz8ha8rul.github.io",
      featured: true,
    },
  ],
};

// Expose globally
window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
