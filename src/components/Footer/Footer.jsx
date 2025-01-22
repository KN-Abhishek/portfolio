import React from 'react';
import './Footer.css'
import footer_image from '../../assets/kn.png';
import logo from '../../assets/user_icon.svg';



const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_image} alt=""style={{ width: '150px', height: 'auto' }} />
                
                <p>Btech in Electronics And Communication Engineering from NSS College Of Engineering</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={logo} alt="" />
                    <input type="Email" placeholder='Enter Your Email' name='email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 KN Abhishek. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Service</p>
                <p>Privacy</p>
                <p>Connect with Me</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;
