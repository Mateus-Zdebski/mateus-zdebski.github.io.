class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                }
                .navbar {
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #3B82F6;
                    text-decoration: none;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                .nav-link {
                    color: #1F2937;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                    position: relative;
                }
                .nav-link:hover {
                    color: #3B82F6;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #3B82F6;
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #1F2937;
                }
                .mobile-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    padding: 1rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                }
                .mobile-menu.open {
                    display: block;
                }
                .mobile-nav-link {
                    display: block;
                    padding: 0.75rem 0;
                    color: #1F2937;
                    text-decoration: none;
                    font-weight: 500;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                }
                .mobile-nav-link:last-child {
                    border-bottom: none;
                }
                @media (max-width: 768px) {
                    .navbar {
                        padding: 1rem;
                    }
                    .nav-links {
                        display: none;
                    }
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <nav class="navbar">
                <a href="#hero" class="logo">mateus_web_developer ⚡</a>
                <div class="nav-links">
                    <a href="#hero" class="nav-link">Home</a>
                    <a href="#about" class="nav-link">About</a>
                    <a href="#education" class="nav-link">Education</a>
                    <a href="#skills" class="nav-link">Skills</a>
                    <a href="#projects" class="nav-link">Projects</a>
                    <a href="#contact" class="nav-link">Contact</a>
                </div>
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
                <div class="mobile-menu">
                    <a href="#hero" class="mobile-nav-link">Home</a>
                    <a href="#about" class="mobile-nav-link">About</a>
                    <a href="#education" class="mobile-nav-link">Education</a>
                    <a href="#skills" class="mobile-nav-link">Skills</a>
                    <a href="#projects" class="mobile-nav-link">Projects</a>
                    <a href="#contact" class="mobile-nav-link">Contact</a>
                </div>
            </nav>
        `;

        // Mobile menu functionality
        const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
        const mobileLinks = this.shadowRoot.querySelectorAll('.mobile-nav-link');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('open')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });

        // Close mobile menu when clicking on links
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                menuBtn.querySelector('i').setAttribute('data-feather', 'menu');
                feather.replace();
            });
        });

        // Update feather icons
        setTimeout(() => {
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        }, 100);
    }
}

customElements.define('custom-navbar', CustomNavbar);