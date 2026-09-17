// ==========================================
// 1. KOMPONEN HEADER (<main-header></main-header>)
// ==========================================
class MainHeader extends HTMLElement {
    connectedCallback() {
        let currentPath = window.location.pathname.split("/").pop();
        if (!currentPath || currentPath === "") currentPath = "index.html";

        this.innerHTML = `
        <header class="site-header">
            <div class="header-container">
                <a href="index.html" class="logo-group">
                    <img src="productpic/SALIM.png" alt="Salim Logo" class="logo-img">
                    <div class="logo-divider"></div>
                    <img src="productpic/mksb.png" alt="Melawati Kebab Logo" class="logo-img">
                </a>

                <button class="menu-toggle" aria-label="Buka Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul class="nav-menu">
                    <li><a href="index.html" class="nav-link ${currentPath === 'index.html' ? 'active' : ''}">Home</a></li>
                    <li><a href="produk.html" class="nav-link ${currentPath === 'produk.html' ? 'active' : ''}">Products</a></li>
                    <li><a href="distributor.html" class="nav-link ${currentPath === 'distributor.html' ? 'active' : ''}">Distributor</a></li>
                    <li><a href="contact.html" class="nav-link ${currentPath === 'contact.html' ? 'active' : ''}">Contact Us</a></li>
                </ul>
            </div>
        </header>
        `;

        const toggleBtn = this.querySelector('.menu-toggle');
        const navMenu = this.querySelector('.nav-menu');

        if (toggleBtn && navMenu) {
            toggleBtn.addEventListener('click', () => {
                toggleBtn.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }
    }
}

// ==========================================
// 2. KOMPONEN FOOTER (<main-footer></main-footer>)
// ==========================================
class MainFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="site-footer">
            <div class="footer-container">
                <div class="footer-top">
                    <div class="footer-brand">
                        <div class="footer-logos">
                            <img src="productpic/SALIM.png" alt="Salim Logo" class="footer-logo-img">
                            <img src="productpic/mksb.png" alt="Melawati Kebab Logo" class="footer-logo-img">
                        </div>
                        <div class="company-name">Melawati Kebab Sdn Bhd</div>
                    </div>

                    <div class="footer-info">
                        <div class="footer-address">
                            <i class="fa-solid fa-location-dot"></i>
                            <span>No 54-1F, Jalan 2/154D, Taman Desa Cheras, 56000 Kuala Lumpur, Malaysia</span>
                        </div>
                        <div class="footer-contacts">
                            <a href="tel:+60391018951" class="contact-item"><i class="fa-solid fa-phone"></i> 03-9101 8951</a>
                            <a href="mailto:melawatikebab1996@gmail.com" class="contact-item"><i class="fa-solid fa-envelope"></i> melawatikebab1996@gmail.com</a>
                        </div>
                    </div>

                    <div class="footer-social-wrapper">
                        <div class="social-title">Ikuti Kami</div>
                        <div class="footer-socials">
                            <a href="https://www.facebook.com/MelawatiKebabSince1996/" target="_blank" class="social-btn facebook"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.tiktok.com/@melawatikebabsince1996" target="_blank" class="social-btn tiktok"><i class="fa-brands fa-tiktok"></i></a>
                            <a href="https://wa.me/60124247708" target="_blank" class="social-btn whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>

                <div class="footer-divider"></div>

                <div class="footer-bottom">
                    <p>&copy; 2026 Melawati Kebab Sdn Bhd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
        `;
    }
}

// Mendaftarkan tag custom HTML
if (!customElements.get('main-header')) {
    customElements.define('main-header', MainHeader);
}
if (!customElements.get('main-footer')) {
    customElements.define('main-footer', MainFooter);
}