const appsData = [
  {
    id: 'orthoradio',
    title: 'OrthoRadio',
    platforms: ['pwa'],
    icon: 'https://dmcode9.github.io/OrthoRadio/orthoradio-favicon.svg',
    featured: true,
    description: 'Περιλαμβάνει ραδιοφωνικούς και διαδικτυακούς ορθόδοξους σταθμούς από Ελλάδα και Κύπρο.',
    links: {
      pwa: 'https://dmcode9.github.io/OrthoRadio/'
    },
    actionText: 'Άνοιγμα PWA'
  },
  {
    id: 'komposxoini',
    title: 'Ψηφιακό Κομποσχοίνι',
    platforms: ['pwa'],
    icon: 'https://dmcode9.github.io/Komposxoini/favicon.svg',
    featured: true,
    description: 'Μια ψηφιακή υλοποίηση του παραδοσιακού κομποσχοινιού για την υποστήριξη της νοεράς προσευχής.',
    links: {
      pwa: 'https://dmcode9.github.io/Komposxoini/'
    },
    actionText: 'Άνοιγμα PWA'
  },
  {
    id: 'mikroapodeipno',
    title: 'Μικρό Απόδειπνο',
    platforms: ['pwa'],
    icon: 'https://dmcode9.github.io/MikroApodeipno/favicon.svg',
    featured: false,
    description: 'Μια PWA εφαρμογή για την ανάγνωση της ακολουθίας του Μικρού Αποδείπνου με τους Χαιρετισμούς της Παναγίας.',
    links: {
      pwa: 'https://dmcode9.github.io/MikroApodeipno/'
    },
    actionText: 'Άνοιγμα PWA'
  },
  {
    id: 'multiplicationsgame',
    title: 'Παιχνίδι Προπαίδειας',
    platforms: ['pwa'],
    icon: 'https://dmcode9.github.io/MultiplicationsGame/icon-192x192.png',
    featured: false,
    description: 'Ένα διασκεδαστικό εκπαιδευτικό PWA παιχνίδι για την εξάσκηση και την εκμάθηση της προπαίδειας',
    links: {
      pwa: 'https://dmcode9.github.io/MultiplicationsGame/'
    },
    actionText: 'Παίξε Τώρα'
  },
  {
    id: 'hairetismoi',
    title: 'Χαιρετισμοί της Θεοτόκου',
    platforms: ['ios', 'android'],
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c9/35/dc/c935dc0f-4b42-8d43-936b-3fe6aa129f46/AppIcon-0-1x_U007ephone-0-0-0-1-0-85-220-0.png/256x256bb.png',
    featured: true,
    description: 'Οι τέσσερις στάσεις των Χαιρετισμών της Παναγίας και ο Ακάθιστος Ύμνος σε γραπτή και ηχητική μορφή.',
    links: {
      ios: 'https://apps.apple.com/gr/app/%CF%87%CE%B1%CE%B9%CF%81%CE%B5%CF%84%CE%B9%CF%83%CE%BC%CE%BF%CE%AF-%CF%84%CE%B7%CF%82-%CE%B8%CE%B5%CE%BF%CF%84%CF%8C%CE%BA%CE%BF%CF%85/id6736644976',
      android: 'https://play.google.com/store/apps/details?id=com.werilapps.xairetismoi&hl=el'
    }
  },
  {
    id: 'agenda',
    title: 'Ατζέντα - Εορτολόγιο',
    platforms: ['ios', 'android'],
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a6/90/0b/a6900b92-63d8-7382-a9a8-fa6db96e2039/AppIcon-0-1x_U007ephone-0-1-85-220-0.png/256x256bb.png',
    featured: true,
    description: 'Περιλαμβάνει ημεροδείκτη, εορτολόγιο, εορτές/γενέθλια επαφών, νηστειοδρόμιο, σημειωματάριο, widgets και πολλά άλλα.',
    links: {
      ios: 'https://apps.apple.com/us/app/%CE%B1%CF%84%CE%B6%CE%AD%CE%BD%CF%84%CE%B1-%CE%B5%CE%BF%CF%81%CF%84%CE%BF%CE%BB%CF%8C%CE%B3%CE%B9%CE%BF/id6535685895',
      android: 'https://play.google.com/store/apps/details?id=com.werilapps.agenda&hl=el'
    }
  },
  {
    id: 'namedaybook',
    title: 'NameDayBook',
    platforms: ['ios', 'android'],
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/cd/f4/efcdf49b-43aa-4d88-9063-699571c2ce02/AppIcon-0-1x_U007ephone-0-1-85-220-0.png/256x256bb.png',
    featured: false,
    description: 'An English-language Orthodox calendar application. Features daily commemorations of saints, name days in English, clear fasting rules, Easter date calculator and more.',
    links: {
      ios: 'https://apps.apple.com/gr/app/namedaybook-orthodox-calendar/id6749623447',
      android: 'https://play.google.com/store/apps/details?id=com.werilapps.ndb&hl=el'
    }
  },
  {
    id: 'eortologio',
    title: 'Γιορτές - Ελληνικό Εορτολόγιο',
    platforms: ['android'],
    icon: 'https://play-lh.googleusercontent.com/cdp4TRFFY9yJUe0SCsi8HwFlCEKdbtPlYTi7DVWQD0fkqG5bOddB1hrlmop64hI5FLgVar9Bw6QEB3VGoEG_3w=s256',
    featured: false,
    description: 'Παρέχει άμεση ενημέρωση για τις γιορτές της ημέρας, υπενθυμίσεις γενεθλίων/εορτών επαφών, αργίες και παγκόσμιες ημέρες',
    links: {
      android: 'https://play.google.com/store/apps/details?id=com.werilapps.eortologio&hl=el'
    }
  }
];

// Document Elements
const carouselTrack = document.getElementById('carousel-track');
const carouselNav = document.getElementById('carousel-nav');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const appsGrid = document.getElementById('apps-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('theme-toggle');

// State Variables
let currentSlideIndex = 0;
let featuredApps = [];
let carouselInterval = null;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupAppsGallery();
  setupCarousel();
  setupFilters();
  setupAutoplay();
});

// --- Theme Management ---
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.className = savedTheme;
  } else {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.className = systemPrefersDark ? 'dark' : 'light';
  }

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark') || 
                   (!document.documentElement.classList.contains('light') && 
                    window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
      document.documentElement.className = 'light';
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.className = 'dark';
      localStorage.setItem('theme', 'dark');
    }
  });
}

// --- Platform & Buttons Helpers ---
function getIconHtml(icon) {
  if (icon.startsWith('http') || icon.startsWith('./') || icon.startsWith('/') || icon.includes('.')) {
    return `<img src="${icon}" alt="Logo" class="app-logo-img" loading="lazy">`;
  }
  return icon;
}

function getBadgesHtml(platforms) {
  return platforms.map(platform => {
    let badgeClass = 'badge-pwa';
    let badgeIcon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.09 13.36 4 12.69 4 12s.09-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm1.02 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.17.64.26 1.31.26 2s-.09 1.36-.26 2h-3.38z"/>
    </svg>`;
    let badgeText = 'PWA';
    
    if (platform === 'android') {
      badgeClass = 'badge-android';
      badgeIcon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0004.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5515 0 .9997.4482.9997.9993 0 .5511-.4482.9997-.9997.9997zm11.4045-6.02l1.9973-3.4592a.416.416 0 0 0-.1521-.5676.416.416 0 0 0-.5676.1521l-2.0223 3.503C15.5902 8.244 13.8533 7.85 12 7.85s-3.5902.394-5.1367 1.1004L4.841 5.4475a.416.416 0 0 0-.5676-.1521.416.416 0 0 0-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3436-4.1021-2.6892-7.5743-6.1185-9.4396z"/>
      </svg>`;
      badgeText = 'Android';
    } else if (platform === 'ios') {
      badgeClass = 'badge-ios';
      badgeIcon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z"/>
      </svg>`;
      badgeText = 'iOS';
    }
    return `<span class="slide-badge ${badgeClass}">${badgeIcon} ${badgeText}</span>`;
  }).join('');
}

function getButtonsHtml(app) {
  let html = '<div class="card-actions-wrapper">';
  
  if (app.links.ios) {
    html += `
      <a href="${app.links.ios}" target="_blank" rel="noopener noreferrer" class="slide-action-btn btn-ios">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71,19.5 C17.88,20.74 17.0,21.95 15.66,21.97 C14.32,22.0 13.89,21.18 12.37,21.18 C10.84,21.18 10.37,21.95 9.1,22.0 C7.79,22.05 6.8,20.68 5.96,19.47 C4.25,17 2.94,12.45 4.7,9.39 C5.57,7.87 7.13,6.91 8.82,6.88 C10.1,6.86 11.32,7.75 12.11,7.75 C12.89,7.75 14.37,6.68 15.92,6.84 C16.57,6.87 18.39,7.1 19.56,8.82 C19.47,8.88 17.39,10.1 17.41,12.63 C17.44,15.65 20.06,16.66 20.1,16.67 C20.08,16.74 19.67,18.11 18.71,19.5 M15.97,4.17 C16.63,3.37 17.07,2.28 16.95,1 C16,1.04 14.9,1.6 14.24,2.38 C13.68,3.04 13.19,4.14 13.34,5.39 C14.39,5.47 15.4,4.88 15.97,4.17 Z"/>
        </svg>
        App Store
      </a>
    `;
  }
  if (app.links.android) {
    html += `
      <a href="${app.links.android}" target="_blank" rel="noopener noreferrer" class="slide-action-btn btn-android">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 5.27v13.46c0 .89 1 1.43 1.75.95l12.83-6.73a1.12 1.12 0 0 0 0-1.8L4.75 4.32A1.13 1.13 0 0 0 3 5.27z"/>
        </svg>
        Google Play
      </a>
    `;
  }
  if (app.links.pwa) {
    html += `
      <a href="${app.links.pwa}" target="_blank" rel="noopener noreferrer" class="slide-action-btn btn-pwa">
        <svg class="btn-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        ${app.actionText || 'Άνοιγμα PWA'}
      </a>
    `;
  }
  
  html += '</div>';
  return html;
}

// --- Dynamic Rendering: Gallery ---
function setupAppsGallery() {
  appsGrid.innerHTML = '';
  
  const sortedApps = [...appsData].sort((a, b) => a.title.localeCompare(b.title, 'el'));
  
  sortedApps.forEach(app => {
    const card = document.createElement('article');
    card.className = `app-card`;
    card.dataset.type = app.platforms.join(' ');
    card.id = `card-${app.id}`;

    card.innerHTML = `
      <div class="card-header">
        <div class="card-icon">${getIconHtml(app.icon)}</div>
        <div class="card-title-area">
          <h3>${app.title}</h3>
          <div class="slide-badges-container">${getBadgesHtml(app.platforms)}</div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-desc">${app.description}</p>
      </div>
      <div class="card-footer">
        ${getButtonsHtml(app)}
      </div>
    `;
    
    appsGrid.appendChild(card);
  });
}

// --- Dynamic Rendering & Logic: Carousel ---
function setupCarousel() {
  featuredApps = appsData.filter(app => app.featured);
  
  if (featuredApps.length === 0) {
    document.querySelector('.carousel-section').style.display = 'none';
    return;
  }

  carouselTrack.innerHTML = '';
  carouselNav.innerHTML = '';

  featuredApps.forEach((app, index) => {
    // Create Slide
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.dataset.index = index;

    slide.innerHTML = `
      <div>
        <div class="slide-header">
          <div class="slide-icon">${getIconHtml(app.icon)}</div>
          <div class="slide-title-area">
            <h3>${app.title}</h3>
            <div class="slide-badges-container">${getBadgesHtml(app.platforms)}</div>
          </div>
        </div>
        <p class="slide-body">${app.description}</p>
      </div>
      <div class="slide-footer">
        ${getButtonsHtml(app)}
      </div>
    `;
    
    carouselTrack.appendChild(slide);

    // Create Dot Indicator
    const indicator = document.createElement('button');
    indicator.className = 'carousel-indicator';
    if (index === 0) indicator.classList.add('active');
    indicator.ariaLabel = `Μετάβαση στη διαφάνεια ${index + 1}`;
    indicator.addEventListener('click', () => {
      currentSlideIndex = index;
      updateCarousel();
      resetAutoplay();
    });
    carouselNav.appendChild(indicator);
  });

  // Navigation Arrows Event Listeners
  prevBtn.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + featuredApps.length) % featuredApps.length;
    updateCarousel();
    resetAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % featuredApps.length;
    updateCarousel();
    resetAutoplay();
  });

  updateCarousel();
}

function updateCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.carousel-indicator');
  const total = featuredApps.length;

  slides.forEach((slide, idx) => {
    slide.classList.remove('active', 'prev', 'next', 'hidden-left', 'hidden-right');
    
    if (idx === currentSlideIndex) {
      slide.classList.add('active');
    } else if (idx === (currentSlideIndex - 1 + total) % total) {
      slide.classList.add('prev');
    } else if (idx === (currentSlideIndex + 1) % total) {
      slide.classList.add('next');
    } else {
      const diff = idx - currentSlideIndex;
      if (diff < 0 || (currentSlideIndex === 0 && idx === total - 1)) {
        slide.classList.add('hidden-left');
      } else {
        slide.classList.add('hidden-right');
      }
    }
  });

  indicators.forEach((indicator, idx) => {
    indicator.classList.toggle('active', idx === currentSlideIndex);
  });
}

// --- Autoplay Carousel ---
function setupAutoplay() {
  carouselInterval = setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % featuredApps.length;
    updateCarousel();
  }, 5000);

  const container = document.querySelector('.carousel-container');
  container.addEventListener('mouseenter', () => clearInterval(carouselInterval));
  container.addEventListener('mouseleave', () => {
    clearInterval(carouselInterval);
    setupAutoplay();
  });
}

function resetAutoplay() {
  clearInterval(carouselInterval);
  setupAutoplay();
}

// --- Filtering System ---
function setupFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      
      const filterValue = btn.dataset.filter;
      const cards = document.querySelectorAll('.app-card');
      
      cards.forEach(card => {
        if (filterValue === 'all' || card.dataset.type.split(' ').includes(filterValue)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}
