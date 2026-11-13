const projectsData = [
  {
    id: "website-design-1",
    title: "Website Design 1",
    description: "A responsive landing page with a modern interface and design.",
    category: "frontend",
    subcategory: "static-pages",
    image: "assets/web-design1.webp",
    live: "https://webpage-design-1.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Website-Design-1/",
    tags: ["HTML", "CSS"],
    featured: false,
    date: null
  },
  {
    id: "blogo-static-page",
    title: "BLOGO Static Page",
    description: "A responsive Blogo landing page with a modern interface.",
    category: "frontend",
    subcategory: "static-pages",
    image: "assets/blogostatic.webp",
    live: "https://blogo-static-page.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Blogo-Static-Page/",
    tags: ["HTML", "CSS"],
    featured: false,
    date: null
  },
  {
    id: "blogo-static-page-2",
    title: "BLOGO Static Page 2",
    description: "A responsive Blogo landing page with a modern interface.",
    category: "frontend",
    subcategory: "static-pages",
    image: "assets/blogo-static2.webp",
    live: "https://blogo-static-page2.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Blogo-Static-Page2/",
    tags: ["HTML", "CSS"],
    featured: false,
    date: null
  },
  {
    id: "foodie-static-page",
    title: "FOODIE Static Page",
    description: "A responsive FOODIE landing page with a modern interface.",
    category: "frontend",
    subcategory: "static-pages",
    image: "assets/foodie-static.webp",
    live: "https://foodie-static-page.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Foodie-Static-Page/",
    tags: ["HTML", "CSS"],
    featured: false,
    date: null
  },
  {
    id: "dashboard-static-page",
    title: "DASHBOARD Static Page",
    description: "A responsive dashboard UI landing page with a modern interface.",
    category: "frontend",
    subcategory: "static-pages",
    image: "assets/dashboard.webp",
    live: "https://dashboard-static-page.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Dashboard-UI/",
    tags: ["HTML", "CSS"],
    featured: false,
    date: null
  },
  {
    id: "shopora-static-page",
    title: "SHOPORA Static Page",
    description: "A responsive SHOPORA landing page with a modern interface.",
    category: "frontend",
    subcategory: "static-pages",
    image: "assets/shopora-static.webp",
    live: "https://shopora-static-page.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Shopora-Static-Page/",
    tags: ["HTML", "CSS"],
    featured: false,
    date: null
  },
  {
    id: "modern-todo",
    title: "Modern ToDo",
    description: "A multi-function task management application.",
    category: "frontend",
    subcategory: "javascript",
    image: "assets/modern-todo.webp",
    live: "https://realistic-todo-app.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Modern-ToDo-App/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    date: null
  },
  {
    id: "calculator-app",
    title: "Calculator App",
    description: "A functional calculator built with JavaScript.",
    category: "frontend",
    subcategory: "javascript",
    image: "assets/basic-calculator.webp",
    live: "https://calculator-app-by-arslan.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Calculator-App/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    date: null
  },
  {
    id: "todo-app",
    title: "To-Do App",
    description: "A simple task management application.",
    category: "frontend",
    subcategory: "javascript",
    image: "assets/todo.webp",
    live: "https://todo-app-by-arslan.netlify.app/",
    github: "https://github.com/arslansahil850-alt/To-Do-App/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    date: null
  },
  {
    id: "password-generator",
    title: "Password Generator",
    description: "An interactive password generator application.",
    category: "frontend",
    subcategory: "javascript",
    image: "assets/passowrd-generator.webp",
    live: "https://password-generator-pages.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Password-Generator/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    date: null
  },
  {
    id: "quiz-app",
    title: "Quiz App",
    description: "An interactive quiz application with scoring.",
    category: "frontend",
    subcategory: "javascript",
    image: "assets/quizes.webp",
    live: "https://quiz-app-by-arslan.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Quiz-App/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    date: null
  },
  {
    id: "stopwatch-app",
    title: "Stopwatch App",
    description: "A responsive stopwatch with start, stop and reset controls.",
    category: "frontend",
    subcategory: "javascript",
    image: "assets/stop-watch.webp",
    live: "https://stopwatch-app-by-arslan.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Stop-Watch/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    date: null
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "A weather application using an external API.",
    category: "frontend",
    subcategory: "javascript",
    image: "assets/weather.-app.webp",
    live: "https://weather-app-by-arslan.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Weather-App/",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    featured: false,
    date: null
  },
  {
    id: "my-portfolio",
    title: "My Portfolio",
    description: "My personal portfolio website combining multiple technologies.",
    category: "frontend",
    subcategory: "web-projects",
    image: "assets/web-portfolio.webp",
    live: "https://arslan-weblab.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Arslan-Weblab/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    date: null
  },
  {
    id: "shopping-website",
    title: "Shopping Website",
    description: "A complete shopping web project combining multiple technologies.",
    category: "frontend",
    subcategory: "web-projects",
    image: "assets/shopping.webp",
    live: "https://shopping-demo-website.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Shopping-Website/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    date: null
  },
  {
    id: "real-estate-website",
    title: "Real Estate Website",
    description: "A complete web project combining multiple technologies.",
    category: "frontend",
    subcategory: "web-projects",
    image: "assets/real-estate.webp",
    live: "https://real-estate-wbproject.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Real-Estate-Website/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    date: null
  },
  {
    id: "learn-com",
    title: "Learn.com",
    description: "A complete learning demo web project combining multiple technologies.",
    category: "frontend",
    subcategory: "web-projects",
    image: "assets/learning.webp",
    live: "https://learning-demo-website.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Learning-Website/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    date: null
  },
  {
    id: "nexora",
    title: "Nexora",
    description: "A business growth demo website combining multiple technologies.",
    category: "frontend",
    subcategory: "web-projects",
    image: "assets/nexora.webp",
    live: "https://nexora-webproject.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Business-Service-Web/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    date: null
  },
  {
    id: "business-service-website",
    title: "Business Service Website",
    description: "A complete business service demo web project combining multiple technologies.",
    category: "frontend",
    subcategory: "web-projects",
    image: "assets/business-service.webp",
    live: "https://business-service-web.vercel.app/",
    github: "https://github.com/arslansahil850-alt/Business-Service-Web",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    date: null
  },
  {
    id: "gym-fitness-website",
    title: "Gym Fitness Website",
    description: "A complete gym fitness demo web project combining multiple technologies.",
    category: "frontend",
    subcategory: "web-projects",
    image: "assets/gym-web.webp",
    live: "https://gym-fitness-website-cyan.vercel.app/",
    github: "https://github.com/arslansahil850-alt/Gym-Website",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    date: null
  },
  {
    id: "classic-food-web",
    title: "Classic Food Web",
    description: "An enhanced restaurant demo web project combining multiple technologies.",
    category: "frontend",
    subcategory: "web-projects",
    image: "assets/classis-foodie.webp",
    live: "https://classic-foodie-web.vercel.app/",
    github: "https://github.com/arslansahil850-alt/FOODIE",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    date: null
  },
  {
    id: "stayora",
    title: "Stayora",
    description: "A complete hotel booking demo web project combining multiple technologies.",
    category: "frontend",
    subcategory: "web-projects",
    image: "assets/real-estate.webp",
    live: "https://hotel-booking-website-alpha-gray.vercel.app/",
    github: "https://github.com/arslansahil850-alt/Stayora-Website",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    date: null
  },
  {
    id: "digital-agency",
    title: "Digital Agency",
    description: "A complete digital agency demo web project combining multiple technologies.",
    category: "frontend",
    subcategory: "web-projects",
    image: "assets/digital-agency.webp",
    live: "https://digital-agency-web-green.vercel.app/",
    github: "https://github.com/arslansahil850-alt/Digital-Agency/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    date: null
  },
  {
    id: "dental-website",
    title: "Dental Website",
    description: "A complete dental demo web project combining multiple technologies.",
    category: "frontend",
    subcategory: "web-projects",
    image: "assets/dental-web.webp",
    live: "https://dental-web-fawn.vercel.app/",
    github: "https://github.com/arslansahil850-alt/Dental-Web/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    date: null
  },
  {
    id: "saas-project",
    title: "SAAS Project",
    description: "A complete SaaS project combining multiple technologies.",
    category: "frontend",
    subcategory: "web-projects",
    image: "assets/business-service.webp",
    live: "https://saas-demo-webproject.netlify.app/",
    github: "https://github.com/arslansahil850-alt/SAAS-web-Project/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    date: null
  },
  {
    id: "foodie-com",
    title: "FOODIE.com",
    description: "A complete web project combining multiple technologies.",
    category: "frontend",
    subcategory: "web-projects",
    image: "assets/foodie.webp",
    live: "https://foodie-website-by-arslan.netlify.app/",
    github: "https://github.com/arslansahil850-alt/FOODIE/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    date: null
  },
  {
    id: "web-loaders",
    title: "Web Loaders",
    description: "A collection of CSS loaders and web animations.",
    category: "frontend",
    subcategory: "web-projects",
    image: "assets/loaders.webp",
    live: "https://webloaders.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Web-Loaders/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    date: null
  },
  {
    id: "navbar-collections",
    title: "Navbar Collections",
    description: "10 modern navbar designs: a collection of responsive, creative, and modern navigation concepts.",
    category: "frontend",
    subcategory: "learn-code",
    image: "assets/navbars.webp",
    live: "https://navbar-collections.netlify.app/",
    github: "https://github.com/arslansahil850-alt/Navbars/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    date: null
  },
  {
    id: "backend-phase-1",
    title: "Backend Development - Phase 1",
    description: "A structured backend development learning project covering JavaScript fundamentals, asynchronous programming, Node.js basics, HTTP fundamentals, and Express.js introduction.",
    category: "backend",
    subcategory: "learn-code",
    image: "assets/backend-phase-1.webp",
    live: "https://backend-phase-1-tawny.vercel.app/",
    github: "https://github.com/arslansahil850-alt/Backend-Phase-1",
    tags: ["JavaScript", "Node.js", "HTTP", "Express.js"],
    featured: true,
    date: null
  },
  {
    id: "backend-phase-2",
    title: "Backend Development - Phase 2",
    description: "A comprehensive backend development learning project covering backend fundamentals, Node.js, Express.js, routing, APIs, and practical backend concepts.",
    category: "backend",
    subcategory: "learn-code",
    image: "assets/backend-phase-2.webp",
    live: "https://backend-phase-2.vercel.app/",
    github: "https://github.com/arslansahil850-alt/Backend-Phase-2",
    tags: ["Node.js", "Express.js", "APIs", "Backend"],
    featured: true,
    date: null
  },
  {
    id: "backend-phase-3",
    title: "Backend Development - Phase 3",
    description: "An advanced backend development learning project focused on expanding backend knowledge through practical concepts, structured lessons, and development exercises.",
    category: "backend",
    subcategory: "learn-code",
    image: "assets/backend-phase-3.webp",
    live: "https://backend-bhase-2.vercel.app/",
    github: "https://github.com/arslansahil850-alt/Backend-Phase-3",
    tags: ["Node.js", "Express.js", "Backend Development", "Projects"],
    featured: true,
    date: null
  },
  {
    id: "backend-phase-4",
    title: "Backend Development - Phase 4",
    description: "An advanced backend development learning project covering essential backend concepts through structured lessons, practical examples, coding exercises, and revision.",
    category: "backend",
    subcategory: "learn-code",
    image: "assets/backend-phase-4.webp",
    live: "https://backend-phase-4-five.vercel.app/",
    github: "https://github.com/arslansahil850-alt/Backend-Phase-4",
    tags: ["Node.js", "Express.js", "Backend Development", "Advanced Concepts"],
    featured: true,
    date: null
  }
];

const portfolioData = [
  {
    id: "portfolio-arslan-weblab",
    name: "Arslan Weblab",
    description: "The primary digital laboratory and professional showcase representing modern full stack web development experiments.",
    image: "assets/web-portfolio.webp",
    url: "https://arslan-weblab.netlify.app/"
  },
  {
    id: "portfolio-personal-brand",
    name: "Personal Brand Hub",
    description: "Centralized project discovery portal and engineering archive indexing technical applications and code repositories.",
    image: "",
    url: "#"
  }
];

const categoryConfig = {
  frontend: {
    name: "Frontend Projects",
    subcategories: [
      { id: "static-pages", name: "Static Pages" },
      { id: "javascript-projects", name: "JavaScript Projects" },
      { id: "web-projects", name: "Web Projects" },
      { id: "learning-projects", name: "Learning Projects" },
      { id: "react-websites", name: "React Websites" }
    ]
  },
  backend: {
    name: "Backend Projects",
    subcategories: [
      { id: "learn-code", name: "Learn Code" },
      { id: "node-express", name: "Node.js & Express.js" },
      { id: "database-development", name: "Database Development" },
      { id: "auth-security", name: "Authentication & Security" },
      { id: "api-development", name: "API Development" },
      { id: "payments", name: "Payments" }
    ]
  },
  fullstack: {
    name: "Full Stack Projects",
    subcategories: [
      { id: "full-stack-websites", name: "Full Stack Websites" },
      { id: "full-stack-applications", name: "Full Stack Applications" }
    ]
  }
};

let currentCategory = "all";
let currentSubcategory = "all";
let currentSearchQuery = "";
let currentSort = "featured";
let currentPage = 1;
const projectsPerPage = 9;
let searchHistory = [];

document.addEventListener("DOMContentLoaded", () => {
  initThemeSystem();
  initNavigation();
  initStatsOverview();
  initSidebarExplorer();
  initProjectExplorer();
  initPortfolioSection();
  initContactForm();
  initGlobalSearch();
  initBackToTop();
  initFooterYear();
  loadSearchHistory();
  initThreeVisual();
});

function initThemeSystem() {
  const themeSelector = document.getElementById("themeSelector");
  if (!themeSelector) return;

  const savedTheme = localStorage.getItem("arslan_hub_theme") || "system";
  themeSelector.value = savedTheme;
  applyTheme(savedTheme);

  themeSelector.addEventListener("change", (e) => {
    const selected = e.target.value;
    localStorage.setItem("arslan_hub_theme", selected);
    applyTheme(selected);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (localStorage.getItem("arslan_hub_theme") === "system") {
      applyTheme("system");
    }
  });
}

function applyTheme(theme) {
  if (theme === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.setAttribute("data-theme", prefersDark ? "dark" : "light");
  } else {
    document.body.setAttribute("data-theme", theme);
  }
}

function initNavigation() {
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const navMenu = document.getElementById("navMenu");
  const header = document.getElementById("header");

  if (mobileToggle && navMenu) {
    const closeMobileMenu = () => {
      navMenu.classList.remove("active");
      mobileToggle.classList.remove("active");
      mobileToggle.setAttribute("aria-expanded", "false");
    };

    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isActive = navMenu.classList.toggle("active");
      mobileToggle.classList.toggle("active", isActive);
      mobileToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
    });

    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMobileMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    });
  }

  window.addEventListener("scroll", () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
}

function initStatsOverview() {
  const totalEl = document.getElementById("statTotalProjects");
  const feEl = document.getElementById("statFrontendProjects");
  const beEl = document.getElementById("statBackendProjects");
  const fsEl = document.getElementById("statFullstackProjects");

  if (!totalEl) return;

  const total = projectsData.length;
  const frontend = projectsData.filter((p) => p.category === "frontend").length;
  const backend = projectsData.filter((p) => p.category === "backend").length;
  const fullstack = projectsData.filter((p) => p.category === "full-stack").length;

  totalEl.textContent = total;
  feEl.textContent = frontend;
  beEl.textContent = backend;
  fsEl.textContent = fullstack;
}

function initSidebarExplorer() {
  const container = document.getElementById("sidebarCategories");
  const sidebar = document.getElementById("projectSidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const toggleBtn = document.getElementById("sidebarToggleBtn");
  const closeBtn = document.getElementById("sidebarCloseBtn");

  if (!container || !sidebar || !overlay) return;

  renderSidebarCategories(container);

  const openSidebar = () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    if (toggleBtn) {
      toggleBtn.classList.add("hidden");
      toggleBtn.setAttribute("aria-expanded", "true");
    }
    updateBodyScrollLock();
  };

  const closeSidebar = () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    if (toggleBtn) {
      toggleBtn.classList.remove("hidden");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
    updateBodyScrollLock();
  };

  if (toggleBtn) {
    toggleBtn.addEventListener("click", openSidebar);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeSidebar);
  }

  overlay.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("active")) {
      closeSidebar();
    }
  });
}

function renderSidebarCategories(container) {
  container.innerHTML = "";

  const allCount = projectsData.length;
  const allBtn = document.createElement("button");
  allBtn.type = "button";
  allBtn.className = `sidebar-cat-btn ${currentCategory === "all" ? "active" : ""}`;
  allBtn.innerHTML = `<span>All Projects</span><span class="cat-count-badge">${allCount}</span>`;
  allBtn.addEventListener("click", () => {
    currentCategory = "all";
    currentSubcategory = "all";
    currentPage = 1;
    updateExplorerState();
    closeMobileSidebar();
  });
  container.appendChild(allBtn);

  Object.keys(categoryConfig).forEach((catKey) => {
    const catObj = categoryConfig[catKey];
    const catGroup = document.createElement("div");
    catGroup.className = "sidebar-cat-group";

    const catCount = projectsData.filter((p) => p.category === catKey).length;
    const catBtn = document.createElement("button");
    catBtn.type = "button";
    catBtn.className = `sidebar-cat-btn ${currentCategory === catKey && currentSubcategory === "all" ? "active" : ""}`;
    catBtn.innerHTML = `<span>${catObj.name}</span><span class="cat-count-badge">${catCount}</span>`;
    catBtn.addEventListener("click", () => {
      currentCategory = catKey;
      currentSubcategory = "all";
      currentPage = 1;
      updateExplorerState();
      closeMobileSidebar();
    });
    catGroup.appendChild(catBtn);

    const subList = document.createElement("ul");
    subList.className = "sidebar-subcat-list";

    catObj.subcategories.forEach((sub) => {
      const subCount = projectsData.filter((p) => p.category === catKey && p.subcategory === sub.id).length;
      const subLi = document.createElement("li");
      const subBtn = document.createElement("button");
      subBtn.type = "button";
      subBtn.className = `sidebar-subcat-btn ${currentSubcategory === sub.id ? "active" : ""}`;
      subBtn.innerHTML = `<span>${sub.name}</span><span class="cat-count-badge">${subCount}</span>`;
      subBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentCategory = catKey;
        currentSubcategory = sub.id;
        currentPage = 1;
        updateExplorerState();
        closeMobileSidebar();
      });
      subLi.appendChild(subBtn);
      subList.appendChild(subLi);
    });

    catGroup.appendChild(subList);
    container.appendChild(catGroup);
  });
}

function closeMobileSidebar() {
  const sidebar = document.getElementById("projectSidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const toggleBtn = document.getElementById("sidebarToggleBtn");

  if (sidebar && overlay) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    if (toggleBtn) {
      toggleBtn.classList.remove("hidden");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
    updateBodyScrollLock();
  }
}

function initProjectExplorer() {
  const quickSearch = document.getElementById("quickSearchInput");
  const sortSelect = document.getElementById("sortSelect");
  const clearFiltersBtn = document.getElementById("clearFiltersBtn");

  if (quickSearch) {
    quickSearch.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      currentPage = 1;
      renderProjectsGrid();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      currentPage = 1;
      renderProjectsGrid();
    });
  }

  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", () => {
      currentCategory = "all";
      currentSubcategory = "all";
      currentSearchQuery = "";
      if (quickSearch) quickSearch.value = "";
      if (sortSelect) sortSelect.value = "featured";
      currentPage = 1;
      updateExplorerState();
    });
  }

  renderProjectsGrid();
}

function updateExplorerState() {
  const container = document.getElementById("sidebarCategories");
  if (container) renderSidebarCategories(container);
  renderProjectsGrid();
  updateActiveFiltersBar();
}

function updateActiveFiltersBar() {
  const bar = document.getElementById("activeFiltersBar");
  const text = document.getElementById("activeFilterText");
  if (!bar || !text) return;

  if (currentCategory !== "all" || currentSearchQuery !== "") {
    bar.style.display = "flex";
    let desc = "Filtered by: ";
    if (currentCategory === "all") desc += "All Projects";
    else if (currentSubcategory === "all") desc += categoryConfig[currentCategory]?.name || currentCategory;
    else {
      const subObj = categoryConfig[currentCategory]?.subcategories.find((s) => s.id === currentSubcategory);
      desc += `${categoryConfig[currentCategory]?.name} &rarr; ${subObj?.name || currentSubcategory}`;
    }
    if (currentSearchQuery !== "") desc += ` | Search: "${currentSearchQuery}"`;
    text.innerHTML = desc;
  } else {
    bar.style.display = "none";
  }
}

function getFilteredAndSortedProjects() {
  let result = [...projectsData];

  if (currentCategory !== "all") {
    result = result.filter((p) => p.category === currentCategory);
    if (currentSubcategory !== "all") {
      result = result.filter((p) => p.subcategory === currentSubcategory);
    }
  }

  if (currentSearchQuery !== "") {
    result = result.filter((p) => {
      const matchTitle = p.title.toLowerCase().includes(currentSearchQuery);
      const matchDesc = p.description.toLowerCase().includes(currentSearchQuery);
      const matchCat = p.category.toLowerCase().includes(currentSearchQuery);
      const matchSub = p.subcategory.toLowerCase().includes(currentSearchQuery);
      const matchTags = p.tags.some((t) => t.toLowerCase().includes(currentSearchQuery));
      return matchTitle || matchDesc || matchCat || matchSub || matchTags;
    });
  }

  result.sort((a, b) => {
    if (currentSort === "featured") {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    } else if (currentSort === "newest") {
      return new Date(b.date || 0) - new Date(a.date || 0);
    } else if (currentSort === "oldest") {
      return new Date(a.date || 0) - new Date(b.date || 0);
    } else if (currentSort === "az") {
      return a.title.localeCompare(b.title);
    } else if (currentSort === "za") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  return result;
}

function renderProjectsGrid() {
  const gridContainer = document.getElementById("projectsGridContainer");
  const paginationContainer = document.getElementById("paginationContainer");
  if (!gridContainer) return;

  const filtered = getFilteredAndSortedProjects();
  const totalPages = Math.ceil(filtered.length / projectsPerPage);

  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }

  const startIdx = (currentPage - 1) * projectsPerPage;
  const paginated = filtered.slice(startIdx, startIdx + projectsPerPage);

  gridContainer.innerHTML = "";

  if (paginated.length === 0) {
    gridContainer.innerHTML = `
      <div class="empty-state-container">
        <h3 class="empty-state-title">No Projects Found</h3>
        <p class="empty-state-desc">We couldn't find any projects matching your current filter criteria or search query. Try clearing your filters.</p>
        <button type="button" class="btn btn-primary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    if (paginationContainer) paginationContainer.style.display = "none";
    return;
  }

  paginated.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    let githubBtnHtml = "";
    if (project.github && project.github.trim() !== "") {
      githubBtnHtml = `<a href="${project.github}" class="project-btn project-btn-github" target="_blank" rel="noopener noreferrer">GitHub</a>`;
    }

    const tagsHtml = project.tags.map((tag) => `<span class="project-tag-pill">${tag}</span>`).join("");

    card.innerHTML = `
      <div class="project-image-wrapper">
        <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy" onerror="this.src='images/projects/project.webp'">
      </div>
      <div class="project-card-body">
        <span class="project-cat-badge">${project.category}</span>
        <h4 class="project-title">${project.title}</h4>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">${tagsHtml}</div>
      </div>
      <div class="project-card-footer">
        <a href="${project.live}" class="project-btn project-btn-live" target="_blank" rel="noopener noreferrer">Live Demo</a>
        ${githubBtnHtml}
      </div>
    `;
    gridContainer.appendChild(card);
  });

  renderPagination(totalPages, paginationContainer);
  updateActiveFiltersBar();
}

function resetAllFilters() {
  currentCategory = "all";
  currentSubcategory = "all";
  currentSearchQuery = "";
  const quickSearch = document.getElementById("quickSearchInput");
  const sortSelect = document.getElementById("sortSelect");
  if (quickSearch) quickSearch.value = "";
  if (sortSelect) sortSelect.value = "featured";
  currentPage = 1;
  updateExplorerState();
}

function renderPagination(totalPages, container) {
  if (!container) return;

  if (totalPages <= 1) {
    container.style.display = "none";
    return;
  }

  container.style.display = "flex";
  container.innerHTML = "";

  const prevBtn = document.createElement("button");
  prevBtn.type = "button";
  prevBtn.className = "pagination-btn";
  prevBtn.textContent = "Previous";
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderProjectsGrid();
      const projSec = document.getElementById("projects");
      if (projSec) {
        window.scrollTo({ top: projSec.offsetTop - 100, behavior: "smooth" });
      }
    }
  });
  container.appendChild(prevBtn);

  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.type = "button";
    pageBtn.className = `pagination-btn ${currentPage === i ? "active" : ""}`;
    pageBtn.textContent = i;
    pageBtn.addEventListener("click", () => {
      currentPage = i;
      renderProjectsGrid();
      const projSec = document.getElementById("projects");
      if (projSec) {
        window.scrollTo({ top: projSec.offsetTop - 100, behavior: "smooth" });
      }
    });
    container.appendChild(pageBtn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "pagination-btn";
  nextBtn.textContent = "Next";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderProjectsGrid();
      const projSec = document.getElementById("projects");
      if (projSec) {
        window.scrollTo({ top: projSec.offsetTop - 100, behavior: "smooth" });
      }
    }
  });
  container.appendChild(nextBtn);
}

function initPortfolioSection() {
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;

  grid.innerHTML = "";
  portfolioData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "portfolio-card";
    card.innerHTML = `
      <div class="portfolio-img-wrapper">
        <img src="${item.image}" alt="${item.name}" class="portfolio-img" loading="lazy" onerror="this.src='images/projects/project.webp'">
      </div>
      <div class="portfolio-body">
        <h3 class="portfolio-title">${item.name}</h3>
        <p class="portfolio-desc">${item.description}</p>
        <div class="project-card-footer" style="margin-top: 1rem;">
          <a href="${item.url}" class="project-btn project-btn-live" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName")?.value.trim() || "";
    const email = document.getElementById("contactEmail")?.value.trim() || "";
    const purpose = document.getElementById("contactPurpose")?.value || "";
    const message = document.getElementById("contactMessage")?.value.trim() || "";

    if (!name || !email || !purpose || !message) {
      showFeedback(feedback, "Please fill out all required fields.", "error");
      return;
    }

    showFeedback(feedback, "Thank you! Your message has been prepared successfully. (Backend endpoint ready for Node.js & Express / Nodemailer integration).", "success");
    form.reset();
  });
}

function showFeedback(el, msg, type) {
  if (!el) return;
  el.textContent = msg;
  el.className = `form-feedback ${type}`;
  el.style.display = "block";
  setTimeout(() => {
    el.style.display = "none";
  }, 6000);
}
function initGlobalSearch() {
  const triggerBtn = document.getElementById("searchTriggerBtn");
  const overlay = document.getElementById("searchOverlay");
  const backdrop = document.getElementById("searchOverlayBackdrop");
  const closeBtn = document.getElementById("searchCloseBtn");
  const input = document.getElementById("globalSearchInput");
  const clearBtn = document.getElementById("searchClearBtn");
  const resultsGrid = document.getElementById("searchResultsGrid");
  const resultsHeader = document.getElementById("searchResultsHeader");
  const resultsCount = document.getElementById("searchResultsCount");
  const historySection = document.getElementById("searchHistorySection");
  const historyTags = document.getElementById("searchHistoryTags");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");
  const suggestedPills = document.getElementById("suggestedPills");
  const sidebarToggleBtn = document.getElementById("sidebarToggleBtn"); // Added reference

  if (!triggerBtn || !overlay) return;

  const openSearch = () => {
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");

    // Hide the category sidebar toggle button when search opens
    if (sidebarToggleBtn) {
      sidebarToggleBtn.classList.add("hidden");
    }

    updateBodyScrollLock();

    if (input) {
      input.value = "";
      input.focus();
    }

    renderSearchHistory();
    if (resultsHeader) resultsHeader.style.display = "none";

    if (resultsGrid) {
      resultsGrid.innerHTML = `
        <div class="search-initial-state">
          <p>Start typing above to search instantly across all projects, tags, and categories.</p>
        </div>
      `;
    }
  };

  const closeSearch = () => {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");

    // Restore the category sidebar toggle button when search closes (unless sidebar is currently active)
    const sidebar = document.getElementById("projectSidebar");
    if (sidebarToggleBtn && (!sidebar || !sidebar.classList.contains("active"))) {
      sidebarToggleBtn.classList.remove("hidden");
    }

    updateBodyScrollLock();
  };

  triggerBtn.addEventListener("click", openSearch);
  if (backdrop) backdrop.addEventListener("click", closeSearch);
  if (closeBtn) closeBtn.addEventListener("click", closeSearch);

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeSearch();
    }
  });

  if (input) {
    input.addEventListener("input", (e) => {
      const query = e.target.value.trim();
      if (clearBtn) clearBtn.style.display = query ? "block" : "none";
      executeGlobalSearch(query);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (input) input.value = "";
      clearBtn.style.display = "none";
      if (resultsHeader) resultsHeader.style.display = "none";
      if (resultsGrid) {
        resultsGrid.innerHTML = `
          <div class="search-initial-state">
            <p>Start typing above to search instantly across all projects, tags, and categories.</p>
          </div>
        `;
      }
      if (input) input.focus();
    });
  }

  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", () => {
      searchHistory = [];
      localStorage.removeItem("arslan_hub_search_history");
      renderSearchHistory();
    });
  }

  if (suggestedPills) {
    suggestedPills.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-cat");
        const tag = btn.getAttribute("data-tag");
        if (cat) {
          currentCategory = cat;
          currentSubcategory = "all";
          updateExplorerState();
          closeSearch();
          window.location.hash = "#projects";
        } else if (tag && input) {
          input.value = tag;
          if (clearBtn) clearBtn.style.display = "block";
          executeGlobalSearch(tag);
        }
      });
    });
  }
}

function loadSearchHistory() {
  const saved = localStorage.getItem("arslan_hub_search_history");
  if (saved) {
    try {
      searchHistory = JSON.parse(saved);
    } catch (e) {
      searchHistory = [];
    }
  }
}

function saveSearchHistory(query) {
  if (!query || query.length < 2) return;
  searchHistory = searchHistory.filter((item) => item.toLowerCase() !== query.toLowerCase());
  searchHistory.unshift(query);
  if (searchHistory.length > 6) searchHistory.pop();
  localStorage.setItem("arslan_hub_search_history", JSON.stringify(searchHistory));
}

function renderSearchHistory() {
  const historySection = document.getElementById("searchHistorySection");
  const historyTags = document.getElementById("searchHistoryTags");
  if (!historySection || !historyTags) return;

  if (searchHistory.length === 0) {
    historySection.style.display = "none";
    return;
  }

  historySection.style.display = "block";
  historyTags.innerHTML = "";

  searchHistory.forEach((term) => {
    const tag = document.createElement("button");
    tag.type = "button";
    tag.className = "history-tag";
    tag.innerHTML = `<span>${term}</span>`;
    tag.addEventListener("click", () => {
      const input = document.getElementById("globalSearchInput");
      const clearBtn = document.getElementById("searchClearBtn");
      if (input) {
        input.value = term;
        if (clearBtn) clearBtn.style.display = "block";
        executeGlobalSearch(term);
      }
    });
    historyTags.appendChild(tag);
  });
}

function executeGlobalSearch(query) {
  const resultsGrid = document.getElementById("searchResultsGrid");
  const resultsHeader = document.getElementById("searchResultsHeader");
  const resultsCount = document.getElementById("searchResultsCount");

  if (!resultsGrid || !resultsHeader) return;

  if (!query) {
    resultsHeader.style.display = "none";
    resultsGrid.innerHTML = `
      <div class="search-initial-state">
        <p>Start typing above to search instantly across all projects, tags, and categories.</p>
      </div>
    `;
    return;
  }

  saveSearchHistory(query);
  renderSearchHistory();

  const q = query.toLowerCase();
  let matches = projectsData.filter((p) => {
    return (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  resultsHeader.style.display = "block";

  if (matches.length === 0) {
    if (resultsCount) resultsCount.textContent = `No exact matches found for "${query}". Showing related projects:`;
    matches = projectsData.slice(0, 3);
  } else {
    if (resultsCount) resultsCount.textContent = `${matches.length} result(s) found for "${query}"`;
  }

  resultsGrid.innerHTML = "";
  matches.forEach((proj) => {
    const item = document.createElement("a");
    item.href = proj.live;
    item.target = "_blank";
    item.rel = "noopener noreferrer";
    item.className = "search-result-item";
    item.innerHTML = `
      <div class="search-result-info">
        <h5>${proj.title}</h5>
        <p>${proj.description}</p>
      </div>
      <span class="project-cat-badge">${proj.category}</span>
    `;
    resultsGrid.appendChild(item);
  });
}

function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initFooterYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  document.querySelectorAll(".footer-cat-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const cat = link.getAttribute("data-cat");
      if (cat) {
        currentCategory = cat;
        currentSubcategory = "all";
        currentPage = 1;
        updateExplorerState();
      }
    });
  });
}

function initThreeVisual() {
  const container = document.getElementById("heroVisual");
  if (!container || typeof THREE === "undefined") return;

  const width = container.clientWidth || 350;
  const height = container.clientHeight || 420;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 0, 8.5);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
  scene.add(ambientLight);

  const greenLight = new THREE.PointLight(0x00e599, 3, 50);
  greenLight.position.set(3, 4, 4);
  scene.add(greenLight);

  const blueLight = new THREE.PointLight(0x58a6ff, 3, 50);
  blueLight.position.set(-3, -4, 4);
  scene.add(blueLight);

  const universeGroup = new THREE.Group();
  scene.add(universeGroup);

  const centralGeo = new THREE.IcosahedronGeometry(1.4, 0);
  const centralMat = new THREE.MeshStandardMaterial({
    color: 0x131c2e,
    metalness: 0.9,
    roughness: 0.25,
    wireframe: true
  });
  const centralMesh = new THREE.Mesh(centralGeo, centralMat);
  universeGroup.add(centralMesh);

  const innerGeo = new THREE.OctahedronGeometry(0.7, 0);
  const innerMat = new THREE.MeshStandardMaterial({
    color: 0x00e599,
    emissive: 0x00e599,
    emissiveIntensity: 0.5
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  universeGroup.add(innerMesh);

  const ringGeo = new THREE.TorusGeometry(2.3, 0.03, 16, 80);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x58a6ff });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 3;
  universeGroup.add(ring);

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.4;
  });

  function animate() {
    requestAnimationFrame(animate);

    universeGroup.rotation.y += 0.008;
    universeGroup.rotation.x = Math.sin(Date.now() * 0.001) * 0.12;

    universeGroup.rotation.y += (mouseX - universeGroup.rotation.y) * 0.05;
    universeGroup.rotation.x += (mouseY - universeGroup.rotation.x) * 0.05;

    ring.rotation.z += 0.012;
    innerMesh.rotation.y -= 0.015;

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener("resize", () => {
    const newW = container.clientWidth;
    const newH = container.clientHeight;
    if (newW === 0 || newH === 0) return;
    camera.aspect = newW / newH;
    camera.updateProjectionMatrix();
    renderer.setSize(newW, newH);
  });
}

function updateBodyScrollLock() {
  const searchOverlay = document.getElementById("searchOverlay");
  const sidebar = document.getElementById("projectSidebar");

  const isSearchOpen = searchOverlay?.classList.contains("active");
  const isSidebarOpen = sidebar?.classList.contains("active");

  document.body.classList.toggle(
    "modal-open",
    Boolean(isSearchOpen || isSidebarOpen)
  );
}