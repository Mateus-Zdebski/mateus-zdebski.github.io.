class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: #1F2937;
                    color: white;
                }
                .footer {
                    padding: 3rem 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .footer-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 2rem;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: white;
                    text-decoration: none;
                    margin-bottom: 1rem;
                }
                .tagline {
                    color: #9CA3AF;
                    max-width: 600px;
                    margin-bottom: 2rem;
                    line-height: 1.6;
                }
                .social-links {
                    display: flex;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                .social-link {
                    color: white;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                .social-link:hover {
                    color: #3B82F6;
                }
                .copyright {
                    color: #9CA3AF;
                    font-size: 0.875rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding-top: 2rem;
                    width: 100%;
                }
                .heart {
                    color: #EF4444;
                    animation: heartbeat 1.5s infinite;
                    display: inline-block;
                }
                @keyframes heartbeat {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                @media (max-width: 768px) {
                    .footer {
                        padding: 2rem 1rem;
                    }
                }
            </style>
            <footer class="footer">
                <div class="footer-content">
                    <a href="#hero" class="logo">mateus_web_developer ⚡</a>
                    <p class="tagline">
                        Bridging the gap between digital and physical worlds with precision engineering and clean code.
                        Specializing in web development and IoT solutions that deliver real results.
                    </p>
                    <div class="social-links">
                        <a href="https://github.com/Mateus-Zdebski" target="_blank" class="social-link">
                            <i data-feather="github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/mateus-zdebski-623335288/" target="_blank" class="social-link">
                            <i data-feather="linkedin"></i>
                        </a>
                        <a href="https://wa.me/5547997598910" target="_blank" class="social-link">
                            <i data-feather="message-circle"></i>
                        </a>
                        <a href="mailto:mateus.zdebski02@gmail.com" class="social-link">
                            <i data-feather="mail"></i>
                        </a>
                    </div>
                    <div class="copyright">
                        &copy; <span id="current-year">2024</span> CircuitCraft Web & IoT Solutions. 
                        Made with <span class="heart">❤</span> by Mateus.
                    </div>
                </div>
            </footer>
        `;

        // Update copyright year
        const yearSpan = this.shadowRoot.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }

        // Update feather icons
        setTimeout(() => {
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        }, 100);
    }
}

customElements.define('custom-footer', CustomFooter);