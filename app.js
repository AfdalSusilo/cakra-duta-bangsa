// ============================================
// APP - Dynamic Content Loader
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    loadCompanyInfo();
    loadStats();
    loadServices();
    loadTeam();
    loadTestimonials();
    loadContact();
    loadSocial();
    loadForm();
    setupNavigation();
    setupAnimations();
    setupMobileMenu();
});

// ICONS
const ICONS = {
    scale: `<svg class="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>`,
    building: `<svg class="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`,
    home: `<svg class="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
    users: `<svg class="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`,
    file: `<svg class="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`,
    phone: `<svg class="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>`
};

// LOAD COMPANY INFO
function loadCompanyInfo() {
    // Logo
    document.querySelectorAll('.company-logo').forEach(el => {
        el.src = CONFIG.company.logo;
        el.alt = CONFIG.company.name;
    });

    // Name
    document.querySelectorAll('.company-name').forEach(el => {
        el.textContent = CONFIG.company.name;
    });

    // Tagline
    document.querySelectorAll('.company-tagline').forEach(el => {
        el.textContent = CONFIG.company.tagline;
    });

    // Description
    document.querySelectorAll('.company-description').forEach(el => {
        el.textContent = CONFIG.company.description;
    });

    // NIB
    document.querySelectorAll('.company-nib').forEach(el => {
        el.textContent = `NIB: ${CONFIG.company.nib}`;
    });

    // Page title
    document.title = `${CONFIG.company.name} - Profil Perusahaan`;

    // WhatsApp buttons
    document.querySelectorAll('.whatsapp-link').forEach(el => {
        el.href = `https://wa.me/${CONFIG.contact.whatsapp}`;
    });
}

// LOAD STATS
function loadStats() {
    const container = document.getElementById('stats-grid');
    if (!container) return;

    container.innerHTML = CONFIG.stats.map(stat => `
        <div class="glass rounded-xl p-4 text-center">
            <p class="text-3xl font-bold text-gold">${stat.value}</p>
            <p class="text-gray-400 text-sm">${stat.label}</p>
        </div>
    `).join('');
}

// LOAD SERVICES
function loadServices() {
    const container = document.getElementById('services-grid');
    if (!container) return;

    container.innerHTML = CONFIG.services.map(service => `
        <div class="glass rounded-2xl p-8 hover:border-gold transition-all duration-300 fade-in group cursor-pointer" onclick="openServiceModal('${service.title}', '${service.description}')">
            <div class="w-16 h-16 gold-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                ${ICONS[service.icon] || ICONS.scale}
            </div>
            <h3 class="font-serif text-xl font-bold mb-3">${service.title}</h3>
            <p class="text-gray-400 leading-relaxed">${service.description}</p>
            <p class="text-gold text-sm mt-4 group-hover:translate-x-2 transition">Selengkapnya →</p>
        </div>
    `).join('');
}

// LOAD TEAM
function loadTeam() {
    const container = document.getElementById('team-grid');
    if (!container) return;

    container.innerHTML = CONFIG.team.map(member => `
        <div class="glass rounded-2xl p-6 text-center fade-in group hover:border-gold transition cursor-pointer" onclick="openTeamModal('${member.name}', '${member.position}', '${member.description}')">
            <div class="w-24 h-24 gold-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-navy font-serif text-3xl font-bold group-hover:scale-110 transition">
                ${member.initial}
            </div>
            <h3 class="font-serif text-lg font-bold">${member.name}</h3>
            <p class="text-gold text-sm mb-2">${member.position}</p>
            <p class="text-gray-400 text-sm">${member.description}</p>
        </div>
    `).join('');
}

// LOAD TESTIMONIALS
function loadTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;

    if (CONFIG.testimonials.length === 0) {
        document.getElementById('testimonials-section')?.remove();
        return;
    }

    container.innerHTML = CONFIG.testimonials.map(t => `
        <div class="glass rounded-2xl p-8 fade-in">
            <div class="flex gap-1 mb-4">
                ${'★'.repeat(t.rating).split('').map(() => '<span class="text-gold text-xl">★</span>').join('')}
            </div>
            <p class="text-gray-300 italic mb-6">"${t.text}"</p>
            <div>
                <p class="font-bold">${t.name}</p>
                <p class="text-gold text-sm">${t.company}</p>
            </div>
        </div>
    `).join('');
}

// LOAD CONTACT
function loadContact() {
    // Address
    document.querySelectorAll('.contact-address').forEach(el => {
        el.textContent = CONFIG.contact.address;
    });
    document.querySelectorAll('.contact-city').forEach(el => {
        el.textContent = CONFIG.contact.city;
    });

    // Phone
    document.querySelectorAll('.contact-phone').forEach(el => {
        el.textContent = CONFIG.contact.phone;
        el.href = `tel:${CONFIG.contact.phone}`;
    });

    // Email
    document.querySelectorAll('.contact-email').forEach(el => {
        el.textContent = CONFIG.contact.email;
        el.href = `mailto:${CONFIG.contact.email}`;
    });

    // Maps
    if (CONFIG.contact.maps) {
        document.querySelectorAll('.contact-maps').forEach(el => {
            el.href = CONFIG.contact.maps;
            el.style.display = 'inline-flex';
        });
    }

    // WhatsApp
    document.querySelectorAll('.wa-link').forEach(el => {
        el.href = `https://wa.me/${CONFIG.contact.whatsapp}`;
    });
}

// LOAD SOCIAL MEDIA
function loadSocial() {
    const container = document.getElementById('social-links');
    if (!container) return;

    const socials = [];
    if (CONFIG.social.instagram) socials.push({ name: 'Instagram', url: CONFIG.social.instagram, icon: '📸' });
    if (CONFIG.social.facebook) socials.push({ name: 'Facebook', url: CONFIG.social.facebook, icon: '📘' });
    if (CONFIG.social.linkedin) socials.push({ name: 'LinkedIn', url: CONFIG.social.linkedin, icon: '💼' });
    if (CONFIG.social.youtube) socials.push({ name: 'YouTube', url: CONFIG.social.youtube, icon: '▶️' });
    if (CONFIG.social.tiktok) socials.push({ name: 'TikTok', url: CONFIG.social.tiktok, icon: '🎵' });

    if (socials.length === 0) {
        container.remove();
        return;
    }

    container.innerHTML = socials.map(s => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" 
           class="glass rounded-xl p-4 text-center hover:border-gold transition group">
            <span class="text-2xl group-hover:scale-110 transition inline-block">${s.icon}</span>
            <p class="text-sm mt-2">${s.name}</p>
        </a>
    `).join('');
}

// LOAD FORM OPTIONS
function loadForm() {
    const select = document.getElementById('service-select');
    if (!select) return;

    select.innerHTML = CONFIG.form.services.map(s => 
        `<option value="${s}">${s}</option>`
    ).join('');

    // Setup form submission
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

// HANDLE FORM SUBMIT
function handleFormSubmit(e) {
    e.preventDefault();
    const f = e.target;
    
    const nama = f.nama?.value || '';
    const hp = f.hp?.value || '';
    const layanan = f.layanan?.value || '-';
    const pesan = f.pesan?.value || '-';

    if (!nama || !hp) {
        showNotification('Mohon isi nama dan nomor WhatsApp', 'error');
        return;
    }

    const msg = `*KONSULTASI*\n\n` +
                `Nama: ${nama}\n` +
                `No HP: ${hp}\n` +
                `Layanan: ${layanan}\n` +
                `Pesan: ${pesan}`;

    const url = `https://wa.me/${CONFIG.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    showNotification('Mengarahkan ke WhatsApp...', 'success');
    f.reset();
}

// NOTIFICATION
function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const div = document.createElement('div');
    div.className = `notification fixed top-20 right-4 z-[100] px-6 py-3 rounded-xl shadow-lg transition-all duration-300 ${
        type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
    } text-white`;
    div.textContent = message;
    document.body.appendChild(div);

    setTimeout(() => {
        div.style.opacity = '0';
        setTimeout(() => div.remove(), 300);
    }, 3000);
}

// SERVICE MODAL
function openServiceModal(title, description) {
    openModal(title, `<p class="text-gray-300 leading-relaxed">${description}</p>
        <a href="https://wa.me/${CONFIG.contact.whatsapp}?text=${encodeURIComponent('Halo, saya ingin bertanya tentang layanan: ' + title)}" 
           target="_blank"
           class="inline-block mt-6 gold-gradient text-navy px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Konsultasi via WhatsApp
        </a>`
    );
}

// TEAM MODAL
function openTeamModal(name, position, description) {
    openModal(name, `
        <p class="text-gold mb-4">${position}</p>
        <p class="text-gray-300 leading-relaxed">${description}</p>
    `);
}

// GENERIC MODAL
function openModal(title, content) {
    // Remove existing
    document.querySelector('.modal-overlay')?.remove();

    const modal = document.createElement('div');
    modal.className = 'modal-overlay fixed inset-0 z-[200] flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="modal-backdrop absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeModal()"></div>
        <div class="modal-content glass rounded-2xl p-8 max-w-lg w-full relative z-10 border border-white/10">
            <button onclick="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white transition">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <h3 class="font-serif text-2xl font-bold mb-4">${title}</h3>
            ${content}
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.querySelector('.modal-overlay')?.remove();
    document.body.style.overflow = '';
}

// Close modal on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// NAVIGATION
function setupNavigation() {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile menu
                closeMobileMenu();
            }
        });
    });

    // Active nav on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('nav a').forEach(a => {
            a.classList.remove('text-gold');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('text-gold');
            }
        });
    });
}

// SCROLL ANIMATIONS
function setupAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// MOBILE MENU
function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    }
}
