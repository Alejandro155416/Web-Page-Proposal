// Detecta si la página actual está dentro de /pages/
const isInPages = window.location.pathname.includes('/pages/');
const pagesPrefix = isInPages ? '' : 'pages/';
const assetsPrefix = isInPages ? '../assets/' : 'assets/';
const rootPrefix = isInPages ? '../' : '';

const navItems = [
  { href: `${rootPrefix}index.html`, label: 'Inicio' },
  { href: `${pagesPrefix}dashboard.html`, label: 'Dashboard' },
  { href: `${pagesPrefix}desnutricion.html`, label: 'Malnutrición' },
  { href: `${pagesPrefix}envejecimiento.html`, label: 'Envejecimiento' },
  { href: `${pagesPrefix}enfermedades-cronicas.html`, label: 'Enfermedades Crónicas' },
  { href: `${pagesPrefix}agua-segura.html`, label: 'Agua Segura' },
  { href: `${pagesPrefix}discapacidades.html`, label: 'Discapacidades' },
  { href: `${pagesPrefix}about.html`, label: 'Acerca' }
];

const indicators = [
  {
    href: `${pagesPrefix}desnutricion.html`,
    title: 'Malnutrición',
    description: 'Monitoreo del estado nutricional en población infantil',
    value: '27.4%',
    subtitle: 'Prevalencia Tungurahua',
    change: '+1.8 pp vs. último año',
    icon: 'icon-desnutricion.svg'
  },
  {
    href: `${pagesPrefix}envejecimiento.html`,
    title: 'Envejecimiento',
    description: 'Análisis demográfico y salud en adultos mayores',
    value: '10.8%',
    subtitle: 'Población >65 años',
    change: '+0.5 pp año a año',
    icon: 'icon-envejecimiento.svg'
  },
  {
    href: `${pagesPrefix}enfermedades-cronicas.html`,
    title: 'Enfermedades Crónicas',
    description: 'Prevalencia de diabetes, hipertensión y otras patologías',
    value: '40.2%',
    subtitle: 'Con al menos 1 EC',
    change: '+2.3 pp en el último quinquenio',
    icon: 'icon-enfermedades.svg'
  },
  {
    href: `${pagesPrefix}agua-segura.html`,
    title: 'Agua Segura',
    description: 'Acceso a agua potable y saneamiento básico',
    value: '72.3%',
    subtitle: 'Con acceso seguro',
    change: '+5.1 pp desde 2020',
    icon: 'icon-agua.svg'
  },
  {
    href: `${pagesPrefix}discapacidades.html`,
    title: 'Discapacidades',
    description: 'Registro y seguimiento de personas con discapacidad',
    value: '6.1%',
    subtitle: 'Con discapacidad',
    change: '+0.9 pp por año',
    icon: 'icon-discapacidades.svg'
  },
  {
    href: `${pagesPrefix}salud-mental.html`,
    title: 'Salud Mental',
    description: 'Prevalencia de trastornos mentales y acceso a servicios',
    value: '16.4%',
    subtitle: 'Con trastornos mentales',
    change: '+2.8 pp en los últimos años',
    icon: 'icon-enfermedades.svg'
  }
];

const statsData = [
  { value: '5', label: 'Indicadores Monitoreados', note: 'Con seguimiento diario', icon: 'icon-envejecimiento.svg' },
  { value: '24/7', label: 'Monitoreo Continuo', note: 'Actualizaciones automáticas', icon: 'icon-agua.svg' },
  { value: '15+', label: 'Años de Datos', note: 'Series históricas verificadas', icon: 'icon-desnutricion.svg' },
  { value: '100+', label: 'Investigaciones', note: 'Estudios y reportes publicados', icon: 'icon-enfermedades.svg' }
];

const statsVariants = {
  actual: {
    title: 'Datos actuales',
    items: statsData
  },
  proyectado: {
    title: 'Proyección 2026',
    items: [
      { value: '6', label: 'Indicadores Monitoreados', note: 'Meta esperada para 2026', icon: 'icon-envejecimiento.svg' },
      { value: '24/7', label: 'Monitoreo Continuo', note: 'Sistema ampliado para seguimiento', icon: 'icon-agua.svg' },
      { value: '18+', label: 'Años de Datos', note: 'Ampliación de la línea histórica', icon: 'icon-desnutricion.svg' },
      { value: '120+', label: 'Investigaciones', note: 'Publicaciones previstas', icon: 'icon-enfermedades.svg' }
    ]
  },
  comparativo: {
    title: 'Comparativa',
    items: [
      { value: '72.3%', label: 'Agua Segura', note: 'Tungurahua 2024', icon: 'icon-agua.svg' },
      { value: '27.4%', label: 'Desnutrición', note: 'Tungurahua 2024', icon: 'icon-desnutricion.svg' },
      { value: '10.8%', label: 'Envejecimiento', note: 'Tungurahua 2024', icon: 'icon-envejecimiento.svg' },
      { value: '40.2%', label: 'Enf. Crónicas', note: 'Tungurahua 2024', icon: 'icon-enfermedades.svg' }
    ]
  }
};

let activeStatsView = 'actual';

const interactiveIndicators = {
  'agua-segura': {
    title: 'Agua Segura',
    summary: 'El 72.3% de la población en Tungurahua tiene acceso seguro al agua potable y saneamiento básico. La cobertura continua reduce enfermedades transmitidas por el agua.',
    current: '72.3%',
    trend: '+5.1 pp',
    recommendation: 'Invertir en proyectos de saneamiento y planes de detección rápida para zonas rurales de Tungurahua.',
    url: `${pagesPrefix}agua-segura.html`
  },
  desnutricion: {
    title: 'Malnutrición',
    summary: 'El 27.4% de los niños en Tungurahua presenta desnutrición crónica. Es clave reforzar programas de apoyo alimentario y monitoreo nutricional en zonas rurales.',
    current: '27.4%',
    trend: '+1.8 pp',
    recommendation: 'Implementar estrategias de alimentación escolar y seguimiento comunitario para reducir la brecha en Tungurahua.',
    url: `${pagesPrefix}desnutricion.html`
  },
  envejecimiento: {
    title: 'Envejecimiento',
    summary: 'El 10.8% de la población en Tungurahua es mayor de 65 años. Esto requiere servicios de salud integrales y programas de prevención específicos.',
    current: '10.8%',
    trend: '+0.5 pp',
    recommendation: 'Desarrollar atención primaria especializada y programas de apoyo social para adultos mayores en Tungurahua.',
    url: `${pagesPrefix}envejecimiento.html`
  },
  'salud-mental': {
    title: 'Salud Mental',
    summary: 'El 16.4% de la población en Tungurahua presenta trastornos mentales. Es esencial mejorar el acceso a servicios y reducir el estigma.',
    current: '16.4%',
    trend: '+2.8 pp',
    recommendation: 'Implementar campañas de concienciación y expandir la cobertura de terapias psicológicas en la provincia.',
    url: `${pagesPrefix}salud-mental.html`
  }
};

const footerColumns = [
  {
    title: 'Observatorio de Medicina',
    content: 'Monitoreando indicadores clave de salud pública en Tungurahua para mejorar el bienestar de la población.'
  },
  {
    title: 'Contacto',
    content: 'Universidad Indoamérica<br/>Email: observatorio@uti.edu.ec<br/>Tel: (03) 123-4567'
  },
  {
    title: 'Indicadores',
    items: ['Malnutrición', 'Envejecimiento', 'Enfermedades Crónicas', 'Agua Segura', 'Discapacidades', 'Salud Mental']
  }
];

function getCurrentPage() {
  const raw = window.location.pathname.split('/').pop().split('#')[0].split('?')[0];
  return raw === '' ? 'index.html' : raw;
}

function buildHeader() {
  return `
    <header class="site-header" id="dynamic-site-header">
      <div class="container header-inner">

        <a href="${rootPrefix}index.html" class="brand" data-action="navigate" data-url="${rootPrefix}index.html">
          <div class="brand-logo">
            <img src="${assetsPrefix}img/fondo.jpg" alt="Logo" />
          </div>
          <div class="brand-text">
            <span class="brand-name">Observatorio de Medicina</span>
          </div>
        </a>

        <nav class="main-nav" id="main-nav">

          <div class="nav-item">
            <a class="nav-link" href="${rootPrefix}index.html" data-action="navigate" data-url="${rootPrefix}index.html">Inicio</a>
          </div>

          <div class="nav-item has-dropdown">
            <button class="nav-link dropdown-toggle" aria-expanded="false">
              Indicadores <span class="nav-arrow">▾</span>
            </button>
            <div class="dropdown-panel">
              <div class="dropdown-col">
                <p class="dropdown-heading">Salud Pública</p>
                <a href="${pagesPrefix}desnutricion.html" data-action="navigate" data-url="${pagesPrefix}desnutricion.html">Malnutrición</a>
                <a href="${pagesPrefix}envejecimiento.html" data-action="navigate" data-url="${pagesPrefix}envejecimiento.html">Envejecimiento</a>
                <a href="${pagesPrefix}enfermedades-cronicas.html" data-action="navigate" data-url="${pagesPrefix}enfermedades-cronicas.html">Enfermedades Crónicas</a>
              </div>
              <div class="dropdown-col">
                <p class="dropdown-heading">Otros Indicadores</p>
                <a href="${pagesPrefix}agua-segura.html" data-action="navigate" data-url="${pagesPrefix}agua-segura.html">Agua Segura</a>
                <a href="${pagesPrefix}discapacidades.html" data-action="navigate" data-url="${pagesPrefix}discapacidades.html">Discapacidades</a>
                <a href="${pagesPrefix}salud-mental.html" data-action="navigate" data-url="${pagesPrefix}salud-mental.html">Salud Mental</a>
              </div>
            </div>
          </div>

          <div class="nav-item">
            <a class="nav-link" href="${pagesPrefix}reportes.html" data-action="navigate" data-url="${pagesPrefix}reportes.html">Reportes</a>
          </div>

          <div class="nav-item has-dropdown">
            <button class="nav-link dropdown-toggle" aria-expanded="false">
              Acerca <span class="nav-arrow">▾</span>
            </button>
            <div class="dropdown-panel narrow">
              <div class="dropdown-col">
                <p class="dropdown-heading">El Observatorio</p>
                <a href="${pagesPrefix}about.html" data-action="navigate" data-url="${pagesPrefix}about.html">Información</a>
              </div>
              <div class="dropdown-col">
                <p class="dropdown-heading">Contacto</p>
                <a href="${pagesPrefix}contacto.html" data-action="navigate" data-url="${pagesPrefix}contacto.html">Contacto</a>
              </div>
            </div>
          </div>

        </nav>

        <button class="nav-hamburger" id="nav-hamburger" aria-label="Menú">&#9776;</button>
      </div>
    </header>
  `;
}
function buildFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        ${footerColumns
          .map(column => {
            if (column.items) {
              return `
                <div>
                  <h3>${column.title}</h3>
                  <ul>
                    ${column.items.map(item => `<li>${item}</li>`).join('')}
                  </ul>
                </div>
              `;
            }
            return `
              <div>
                <h3>${column.title}</h3>
                <p>${column.content}</p>
              </div>
            `;
          })
          .join('')}
      </div>
      <div class="footer-social">
        <a href="https://www.facebook.com/UniversidadIndoamericaEcuador" target="_blank" rel="noopener" aria-label="Facebook" class="footer-social-link">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        <a href="https://www.instagram.com/uindoamerica/" target="_blank" rel="noopener" aria-label="Instagram" class="footer-social-link">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        </a>
        <a href="https://www.tiktok.com/@uindoamerica" target="_blank" rel="noopener" aria-label="TikTok" class="footer-social-link">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
        </a>
        <a href="https://twitter.com/uindoamerica" target="_blank" rel="noopener" aria-label="X (Twitter)" class="footer-social-link">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://www.youtube.com/@U_indoamerica" target="_blank" rel="noopener" aria-label="YouTube" class="footer-social-link">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
        </a>
      </div>
      <p class="footer-note">© 2026 Observatorio de Medicina · Universidad Indoamérica · Estudiantes de Tecnologías de la Información — Sexto Semestre</p>
    </footer>
  `;
}

function renderIndicators() {
  const container = document.getElementById('indicators-grid');
  if (!container) return;
  container.innerHTML = indicators
    .map(
      item => `
        <a class="card" href="${item.href}" data-action="navigate" data-url="${item.href}">
          <div class="card-top">
            <img class="card-icon" src="${assetsPrefix}img/${item.icon}" alt="Icono ${item.title}" />
            <span class="card-badge">${item.change}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="card-meta">
            <span>${item.value}</span>
            <small>${item.subtitle}</small>
          </div>
        </a>
      `
    )
    .join('');
}

function renderStats() {
  const container = document.getElementById('stats-grid');
  if (!container) return;
  const current = statsVariants[activeStatsView] || statsVariants.actual;
  container.innerHTML = current.items
    .map(
      stat => `
        <div class="stat-card">
          <div class="stat-icon">
            <img src="${assetsPrefix}img/${stat.icon}" alt="Icono ${stat.label}" />
          </div>
          <strong>${stat.value}</strong>
          <p>${stat.label}</p>
          <small>${stat.note}</small>
        </div>
      `
    )
    .join('');
}

function renderStatsOptions() {
  const container = document.getElementById('stats-options');
  if (!container) return;
  container.innerHTML = Object.keys(statsVariants)
    .map(
      key => `
        <button class="stats-option ${activeStatsView === key ? 'active' : ''}" data-action="switchStats" data-stats="${key}">
          ${statsVariants[key].title}
        </button>
      `
    )
    .join('');
}

function updateStatsView(key) {
  if (!statsVariants[key]) return;
  activeStatsView = key;
  renderStatsOptions();
  renderStats();
}

function handleActionClick(event) {
  const actionable = event.target.closest('[data-action]');
  if (!actionable) return;
  const action = actionable.dataset.action;
  const url = actionable.dataset.url || actionable.getAttribute('href');
  const message = actionable.dataset.message;
  const indicator = actionable.dataset.indicator;
  const stats = actionable.dataset.stats;
  if (action === 'navigate' && url) {
    event.preventDefault();
    window.location.href = url;
    return;
  }
  if (action === 'showAlert' && message) {
    event.preventDefault();
    window.alert(message);
    return;
  }
  if (action === 'switchIndicator' && indicator) {
    event.preventDefault();
    updateIndicatorPanel(indicator);
    return;
  }
  if (action === 'switchStats' && stats) {
    event.preventDefault();
    updateStatsView(stats);
    return;
  }
  if (action === 'scroll' && message) {
    event.preventDefault();
    const target = document.querySelector(message);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    return;
  }
}

function renderInteractivePanel() {
  const container = document.querySelector('.interactive-panel');
  if (!container) return;
  updateIndicatorPanel('agua-segura');
}

function updateIndicatorPanel(indicatorKey) {
  const data = interactiveIndicators[indicatorKey];
  if (!data) return;
  const summary = document.getElementById('indicator-summary');
  const tabButtons = document.querySelectorAll('.indicator-tab');
  if (!summary) return;
  tabButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.indicator === indicatorKey);
  });
  summary.innerHTML = `
    <div class="indicator-card">
      <h3>${data.title}</h3>
      <p>${data.summary}</p>
    </div>
    <div class="indicator-card indicator-progress">
      <div class="progress-label"><span>Valor actual</span><strong>${data.current}</strong></div>
      <div class="progress-track"><div class="progress-fill" style="width: ${Math.min(parseFloat(data.current), 100)}%"></div></div>
      <div class="progress-label"><span>Tendencia</span><strong>${data.trend}</strong></div>
    </div>
    <div class="indicator-card">
      <h3>Recomendación</h3>
      <p>${data.recommendation}</p>
      <div class="indicator-actions">
        <a class="button secondary" href="${data.url}" data-action="navigate" data-url="${data.url}">Ver detalle</a>
        <a class="button primary" href="${data.url}" data-action="navigate" data-url="${data.url}">Ir al indicador</a>
      </div>
    </div>
  `;
}

function animateGraphs() {
  const bars = document.querySelectorAll('.graph-fill');
  bars.forEach(bar => {
    const value = Number(bar.dataset.value || 0);
    if (value > 0) {
      setTimeout(() => {
        bar.style.width = `${Math.min(value, 100)}%`;
      }, 80);
    }
  });
}

function handleHeaderScroll() {
  const header = document.getElementById('dynamic-site-header');
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 20);
}

function initCarousel() {
  const track = document.getElementById('carousel-track');
  const dotsContainer = document.getElementById('carousel-dots');
  if (!track) return;

  const slides = track.querySelectorAll('.carousel-slide');
  const total = slides.length;
  let current = 0;
  let timer;

  // Crear dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Ir a slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 3000);
  }

  document.getElementById('carousel-prev')?.addEventListener('click', () => goTo(current - 1));
  document.getElementById('carousel-next')?.addEventListener('click', () => goTo(current + 1));

  // Swipe en móvil
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  });

  resetTimer();
}

function initDropdowns() {
  document.querySelectorAll('.dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const item = this.closest('.nav-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.nav-item.has-dropdown').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-item.has-dropdown').forEach(i => i.classList.remove('open'));
  });

  const hamburger = document.getElementById('nav-hamburger');
  const nav = document.getElementById('main-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', e => {
      e.stopPropagation();
      nav.classList.toggle('nav-open');
    });
  }
}

function initNovedadesSlider() {
  const track = document.getElementById('novedades-track');
  const dotsContainer = document.getElementById('novedades-dots');
  if (!track || !dotsContainer) return;

  const cards = track.querySelectorAll('.novedad-card');
  const total = cards.length;
  // Cuántas tarjetas se ven a la vez según ancho
  function visibles() {
    if (window.innerWidth <= 560) return 1;
    if (window.innerWidth <= 900) return 2;
    return 4;
  }

  let current = 0;
  const pages = () => Math.ceil(total / visibles());

  // Crear dots
  function buildDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < pages(); i++) {
      const dot = document.createElement('button');
      dot.className = 'nov-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Página ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  function goTo(page) {
    current = Math.max(0, Math.min(page, pages() - 1));
    const cardW = cards[0].offsetWidth + 16; // gap = 1rem = 16px
    track.style.transform = `translateX(-${current * visibles() * cardW}px)`;
    dotsContainer.querySelectorAll('.nov-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  buildDots();
  window.addEventListener('resize', () => { buildDots(); goTo(0); });

  // Auto-avance
  setInterval(() => goTo((current + 1) % pages()), 4000);
}

function initReporteTabs() {
  const tabs = document.querySelectorAll('.rep-tab');
  const cards = document.querySelectorAll('.reporte-card');
  if (!tabs.length) return;

  function showTab(tab) {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const active = tab.dataset.tab;
    cards.forEach(card => {
      card.classList.toggle('hidden', card.dataset.tab !== active);
    });
  }

  // Mostrar solo la primera tab al inicio
  showTab(tabs[0]);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => showTab(tab));
  });
}

function init() {
  const headerAnchor = document.getElementById('site-header');
  const footerAnchor = document.getElementById('site-footer');
  if (headerAnchor) headerAnchor.innerHTML = buildHeader();
  if (footerAnchor) footerAnchor.innerHTML = buildFooter();
  initCarousel();
  initDropdowns();
  initNovedadesSlider();
  renderIndicators();
  renderStatsOptions();
  renderStats();
  renderInteractivePanel();
  animateGraphs();
  document.addEventListener('click', handleActionClick);
  handleHeaderScroll();
  window.addEventListener('scroll', handleHeaderScroll);
}

document.addEventListener('DOMContentLoaded', init);

