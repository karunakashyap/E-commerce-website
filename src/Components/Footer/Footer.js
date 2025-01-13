import React from 'react';
import './Footer.css';
import footerLogo from '../Assets/logo_big.png';
import instagramIcon from '../Assets/instagram_icon.png';
import pintesterIcon from '../Assets/pintester_icon.png';
import whatsappIcon from '../Assets/whatsapp_icon.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footerLogo} alt='footer-logo-image' />
                <h3>SHOPPER</h3>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={instagramIcon} alt=''></img>
                </div>
                <div className="footer-icons-container">
                    <img src={pintesterIcon} alt=''></img>
                </div>
                <div className="footer-icons-container">
                    <img src={whatsappIcon} alt=''></img>
                </div>
            </div>
            <div className="footer-copyright">
                <hr></hr>
                <p>Copyright @ 2025 -All right reserved</p>
            </div>

        </div>
    )
}

export default Footer
