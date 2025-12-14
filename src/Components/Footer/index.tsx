import React from "react";
import './styles.css';
import footerLogo from '../../Assets/logoAzulBlancoHE.png';
import instagramLogo from '../../Assets/camera.png';
import facebookLogo from '../../Assets/facebook.png';
import linkedinLogo from '../../Assets/linkedin.png';
import emailIcon from '../../Assets/email.png';
import phoneIcon from '../../Assets/phone.png';

const Footer = () => {
    return (
        <footer className="footer">
        <section className="footer_logos">
            <div>
                <img className="footer_logos-hound" src={footerLogo} alt="Logo Hound Express" />
            </div>
            <div className="footer_logos-social-media">
                <a href="https://www.linkedin.com/company/hound-express/"><img src={linkedinLogo} alt="Logo linkedin" /></a>
                <a href="https://www.facebook.com/houndexpress?mibextid=kFxxJD"><img src={facebookLogo} alt="Logo facebook" /></a>
                <a href="https://www.instagram.com/hound.express"><img src={instagramLogo} alt="Logo instagram" /></a>
            </div>
        </section>
        <section className="footer_copyright">
            <p className="footer_copyright-text">© 2025 Hound Express. Todos los derechos reservados.</p>
        </section>
        <section className="footer_contact">
            <h3 className="footer_contact-title">Contáctanos:</h3>
            <section className="footer_contact-MX">
                <h4 className="footer_contact-MX-title">MX</h4>
                <a className="footer_contact-MX-mail" href="mailto:sclientes1@hound-express.com"><img src={emailIcon} alt="icono email" />sclientes1@hound-express.com</a>
                <a className="footer_contact-MX-number" href="tel:+525540001920"><img src={phoneIcon} alt="icono telefono" />+52(55) 4000 1920</a>
            </section>

        </section>
    </footer>
    )
}
export default Footer;