import React from 'react'
import "./Footer.css"

const Footer = () => {

    const sendEmail = () => {
        const emailTo = "hello.adcratic@gmail.com";
        const emailCC = "";
        const emailSub = "";
        const emailBody = "";
        window.location.href = "mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody;
    }

    return (
        <>
          <section className="footer">
              <div className="footer-container">
                <div className="footer-mail-container">
                    <h2>Help & Support</h2>
                    <p>hello.adcratic@gmail.com</p>
                </div>
                <div className='footer-social-container'>
                    <h2>Quick Link</h2>
                    <div className="footer-social-icons">
                        <i class="fab fa-instagram instagram"></i>
                        <i class="fab fa-linkedin-in linkedIn"></i>
                        <i class="fab fa-twitter twitter"></i>
                    </div>
                </div>
              </div>
              <div className='copyright-section'>
                  <p onClick={sendEmail}>©2022 PeopleWho.Code. All rights reserved.</p>
              </div>
          </section>  
        </>
    )
}

export default Footer
