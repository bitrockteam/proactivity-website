import React from 'react';
import './styles.scss'
import Fade from 'react-reveal/Fade';

function Footer() {

    return(
        <div className="footer-container">
            <div className="footer-content">
                <div>
                    <img src="./logo-white.png" />
                    <p><b>ProActivity </b>combines professional competences and expertise in the development of enterprise-level software solutions.</p>
                </div>
                <div>
                    <h4>Corporate</h4>
                    <a target="__blank" href="https://www.linkedin.com/company/proactivitysrl/jobs/">Careers</a>
                    <a target="__blank" href="https://fortitudegroup.it/">Fortitude Group</a>
                    <a target="__blank" href="#">Privacy Policy</a>
                    <h4>Follow us</h4>
                    <a target="__blank" href="https://www.linkedin.com/company/proactivitysrl/">LinkedIn</a>
                </div>

            </div>
            <div className = "footer-copyright">
                <p>ProActivity©Copyright {new Date().getFullYear()}.  All rights reserved.  VAT 11501860966</p>
            </div>
        </div>
    )

}

export default Footer