import React from 'react';
import './Contact.css'
import themepic from '../../assets/theme_pattern.svg';
import mailicon from '../../assets/mail_icon.svg';
import locationicon from '../../assets/location_icon.svg';
import callicon from '../../assets/call_icon.svg';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={themepic} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets Talk</h1>
                <p>I'm available to take on any projects and put my 100% in it. So feel free to contact me.You can contact me anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mailicon} alt="" /><p>abhishek.kanjanghat@tarento.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={locationicon} alt="" /><p>Bangalore</p>
                    </div>
                    <div className="contact-detail">
                        <img src={callicon} alt="" /><p>8921492939</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="Your Name"></label>
                <input type="text" placeholder='Enter Your Name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="Email" placeholder='Enter Your Email' name='email'/>
                <label htmlFor="Write Your Message Here"></label>
                <textarea name="Message" rows="8"></textarea>
            </form>
        </div>
     
    </div>
  );
};

export default Contact;
