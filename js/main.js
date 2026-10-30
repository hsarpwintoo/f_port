'use strict';

/* ==========================================================
   1. PROJECT DATA
   The single source of truth. Cards and filter buttons are
   generated from this array, so to add a project you only
   add one object here; no HTML editing needed.
   ========================================================== */
const projects = [
  {
    title: 'StudyZen',
    description: 'A study-planning app that helps university students manage tasks, focus sessions, and reminders.',
    category: 'JavaScript Apps',
    technologies: ['JavaScript', 'React Native', 'Expo', 'Firebase', 'React Navigation', 'AsyncStorage'],
    image: 'assets/studyzen-preview.png',
    landingUrl: 'https://studyzen-landing.web.app/',
    sourceUrl: 'https://github.com/hsarpwintoo/studyzen'
  },
  {
    title: 'EnerTrack — IoT Energy Monitoring System',
    description: 'A UI/UX design project for an IoT-enabled energy monitoring system, focused on making energy consumption clear and easy to understand.',
    category: 'UI/UX Design',
    technologies: ['Figma'],
    image: 'assets/enertrack-preview.png',
    role: 'UI/UX Designer',
    tool: 'Figma',
    url: 'https://www.figma.com/design/pVp4ERr4SOxRiXgWVTwjZH/IoT-Enabled-Energy-Monitoring-System?node-id=228-77&t=ChVw2sV97vBqXqOp-1'
  },
  {
    title: 'MYPO — Online Fashion Shopping Website',
    description: 'An interactive, responsive fashion shopping website featuring product browsing, product details, a shopping cart, browser-based account management, user profiles, and customer reviews.',
    category: 'Frontend Development',
    technologies: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
    image: 'assets/mypo-preview.png',
    role: 'Frontend Development',
    projectType: 'Frontend E-Commerce Prototype',
    demoUrl: 'https://hsarpwintoo.github.io/mypo/',
    sourceUrl: 'https://github.com/hsarpwintoo/mypo',
    demoLabel: 'Live Demo',
    sourceLabel: 'View Source'
  },
  {
    title: 'Campus Equipment Booking API',
    description: 'A REST API for managing shared equipment bookings, built with Hono, TypeScript, Cloudflare Workers, and Cloudflare D1. It prevents overlapping reservations for the same equipment.',
    category: 'Backend Development',
    technologies: ['TypeScript', 'Hono', 'Cloudflare Workers', 'Cloudflare D1', 'REST API'],
    demoUrl: 'https://labtest.taskflow-api-test.workers.dev/api',
    sourceUrl: 'https://github.com/hsarpwintoo/equipment_booking-api',
    demoLabel: 'API Endpoint',
    sourceLabel: 'View Source'
  }
];

/* ==========================================================
   Small helpers
   ========================================================== */
const $ = (selector) => document.querySelector(selector);

/* ==========================================================
   2. MOBILE NAVIGATION
   CSS hides the menu on small screens unless it has .is-open.
   JS keeps aria-expanded and the button label in sync.
   ========================================================== */
const menuToggle = $('#menu-toggle');
const siteNav = $('#site-nav');
const menuIcon = $('#menu-icon');
const desktopQuery = window.matchMedia('(min-width: 48rem)');

function setMenu(open) {
  siteNav.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menuIcon.textContent = open ? '✕' : '☰';
}

menuToggle.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});

// Choosing a link closes the menu (the browser handles the scrolling).
siteNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});

// Escape closes the menu and returns focus to the button.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuToggle.focus();
  }
});

// If the window grows to desktop width, reset the menu state.
desktopQuery.addEventListener('change', (event) => {
  if (event.matches) setMenu(false);
});

/* ==========================================================
   3. PROJECT CARDS AND FILTERS
   ========================================================== */
const filtersEl = $('#filters');
const gridEl = $('#project-grid');
const countEl = $('#results-count');
let activeCategory = 'All';

function createCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card';

  if (project.image) {
    const preview = document.createElement('img');
    preview.className = 'project-preview';
    preview.src = project.image;
    preview.alt = `${project.title} interface preview`;
    preview.loading = 'lazy';
    card.appendChild(preview);
  }

  const category = document.createElement('p');
  category.className = 'project-category';
  category.textContent = project.category;

  const title = document.createElement('h3');
  title.textContent = project.title;

  const description = document.createElement('p');
  description.textContent = project.description;

  if (project.role || project.projectType || project.tool) {
    const details = document.createElement('p');
    details.className = 'project-details';
    details.textContent = [
      project.role && `Role: ${project.role}`,
      project.projectType && `Type: ${project.projectType}`,
      project.tool && `Tool: ${project.tool}`
    ]
      .filter(Boolean)
      .join(' · ');
    card.appendChild(details);
  }

  const techList = document.createElement('ul');
  techList.className = 'tech-list';
  techList.setAttribute('aria-label', 'Technologies used');
  project.technologies.forEach((tech) => {
    const li = document.createElement('li');
    li.textContent = tech;
    techList.appendChild(li);
  });

  const actions = document.createElement('div');
  actions.className = 'project-actions';

  const demoUrl = project.demoUrl || project.landingUrl;
  if (demoUrl) {
    const landingLink = document.createElement('a');
    landingLink.className = 'btn btn-primary';
    landingLink.href = demoUrl;
    landingLink.target = '_blank';
    landingLink.rel = 'noopener noreferrer';
    landingLink.textContent = project.demoLabel || 'Visit Landing Page';
    landingLink.setAttribute('aria-label', `${project.demoLabel || 'Visit the landing page'} for ${project.title} (opens in a new tab)`);
    actions.appendChild(landingLink);
  }

  const sourceLink = document.createElement('a');
  sourceLink.className = 'btn btn-secondary';
  sourceLink.href = project.sourceUrl || project.url;
  sourceLink.target = '_blank';
  sourceLink.rel = 'noopener noreferrer';
  sourceLink.textContent = project.sourceLabel || (demoUrl ? 'View Source Code' : project.category === 'UI/UX Design' ? 'View Figma Design' : 'View source');
  sourceLink.setAttribute(
    'aria-label',
    `${project.sourceLabel || (project.category === 'UI/UX Design' ? 'View Figma design' : 'View source')} for ${project.title} (opens in a new tab)`
  );

  actions.appendChild(sourceLink);
  card.append(category, title, description, techList, actions);
  return card;
}

function renderProjects() {
  // filter() returns a NEW array, so the original `projects` is never changed.
  const visible = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  // replaceChildren() empties the grid first, so cards never duplicate.
  gridEl.replaceChildren(...visible.map(createCard));

  countEl.textContent = `Showing ${visible.length} of ${projects.length} projects`;

  filtersEl.querySelectorAll('.filter-btn').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.category === activeCategory));
  });
}

function renderFilters() {
  // "All" plus each unique category found in the data.
  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  const buttons = categories.map((category) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'filter-btn';
    button.dataset.category = category;
    button.textContent = category;
    button.setAttribute('aria-pressed', 'false');
    return button;
  });
  filtersEl.replaceChildren(...buttons);
}

filtersEl.addEventListener('click', (event) => {
  const button = event.target.closest('.filter-btn');
  if (!button) return;
  activeCategory = button.dataset.category;
  renderProjects();
});

renderFilters();
renderProjects();

/* ==========================================================
   4. LIGHT / DARK THEME
   Saved in localStorage. Every storage call is wrapped in
   try/catch so the button still works if storage is blocked.
   ========================================================== */
const THEME_KEY = 'portfolio-theme';
const themeToggle = $('#theme-toggle');
const themeIcon = $('#theme-icon');

function loadTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === 'dark' || saved === 'light' ? saved : 'light';
  } catch (error) {
    return 'light'; // storage unavailable: default to light
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    // Ignore: the theme still changes for this page visit.
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const isDark = theme === 'dark';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeIcon.textContent = isDark ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  saveTheme(next);
});

applyTheme(loadTheme());

/* ==========================================================
   5. CONTACT FORM VALIDATION
   ========================================================== */
const form = $('#contact-form');
const nameInput = $('#name');
const emailInput = $('#email');
const messageInput = $('#message');
const messageCount = $('#message-count');
const formStatus = $('#form-status');

const MESSAGE_MIN = 20;
const MESSAGE_MAX = 500;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Each validator returns an error message, or '' when the value is valid.
const validators = {
  name(value) {
    return value.trim().length >= 2 ? '' : 'Please enter your name (at least 2 characters).';
  },
  email(value) {
    return EMAIL_PATTERN.test(value.trim()) ? '' : 'Please enter a valid email address, like name@example.com.';
  },
  message(value) {
    const length = value.trim().length;
    if (length < MESSAGE_MIN) return `Your message needs at least ${MESSAGE_MIN} characters (it has ${length}).`;
    if (length > MESSAGE_MAX) return `Your message must be ${MESSAGE_MAX} characters or fewer (it has ${length}).`;
    return '';
  }
};

const fields = [nameInput, emailInput, messageInput];

function showError(input, message) {
  const errorEl = $(`#${input.id}-error`);
  errorEl.textContent = message;
  errorEl.hidden = message === '';
  input.setAttribute('aria-invalid', String(message !== ''));
}

function validateField(input) {
  const message = validators[input.id](input.value);
  showError(input, message);
  return message === '';
}

function updateCount() {
  const length = messageInput.value.trim().length;
  messageCount.textContent = `${length} / ${MESSAGE_MAX} characters (minimum ${MESSAGE_MIN})`;
  messageCount.classList.toggle('is-over', length > MESSAGE_MAX);
}

// While typing: update the counter, clear the old status, and
// clear (or refresh) an error that is already showing.
fields.forEach((input) => {
  input.addEventListener('input', () => {
    formStatus.textContent = '';
    if (input === messageInput) updateCount();
    if (input.getAttribute('aria-invalid') === 'true') validateField(input);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); // stop page reload / navigation
  formStatus.textContent = '';

  // Validate every field (don't stop at the first failure).
  const results = fields.map((input) => ({ input, valid: validateField(input) }));
  const firstInvalid = results.find((result) => !result.valid);

  if (firstInvalid) {
    firstInvalid.input.focus();
    return;
  }

  // role="status" announces this text to screen readers.
  formStatus.textContent = 'Thank you for sending the messages.';
});

updateCount();

/* ==========================================================
   6. FOOTER YEAR
   ========================================================== */
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
