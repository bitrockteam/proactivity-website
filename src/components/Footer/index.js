import React from 'react';
import './styles.scss'

function Footer() {

    return(
        <div className="footer-container">
            <div className="footer-content">
                <div>
                    <img src="/Logo_Proactivity_Bianco.png" alt="ProActivity" style={{
                        width: '255px',
                        paddingBottom: '24px'
                    }} />
                    <p><b>ProActivity </b>combines professional competences and expertise in the development of enterprise-level software solutions.</p>
                </div>
                <div>
                    <h4>Corporate</h4>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/proactivitysrl/jobs">Careers</a>
                    <a target="_blank" rel="noreferrer" href="https://fortitudegroup.it/">Fortitude Group</a>
                    <a target="_blank" rel="noreferrer" href="https://www.iubenda.com/privacy-policy/66744923">Privacy Policy</a>
                    <h4>Follow us</h4>
                    <div style={{ display: 'flex' }}>
                        <a target="_blank" title="Linkedin" rel="noreferrer" href="https://www.linkedin.com/company/proactivitysrl/">
                            <svg height="20px" viewBox="-8 0 511 512" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="m111.898438 160.664062h-96.398438c-8.285156 0-15 6.71875-15 15v321.335938c0 8.285156 6.714844 15 15 15h96.398438c8.285156 0 15-6.714844 15-15v-321.335938c0-8.28125-6.714844-15-15-15zm-15 321.335938h-66.398438v-291.335938h66.398438zm0 0" fill="white" stroke="white" /><path d="m63.703125 0c-34.851563 0-63.203125 28.351562-63.203125 63.195312 0 34.851563 28.351562 63.199219 63.203125 63.199219 34.847656 0 63.195313-28.351562 63.195313-63.199219 0-34.84375-28.347657-63.195312-63.195313-63.195312zm0 96.394531c-18.308594 0-33.203125-14.890625-33.203125-33.199219 0-18.304687 14.894531-33.195312 33.203125-33.195312 18.304687 0 33.195313 14.890625 33.195313 33.195312 0 18.308594-14.890626 33.199219-33.195313 33.199219zm0 0" fill="white" stroke="white" /><path d="m352.910156 158.542969c-22.800781 0-45.273437 5.496093-65.398437 15.777343-.683594-7.652343-7.109375-13.65625-14.941407-13.65625h-96.40625c-8.28125 0-15 6.71875-15 15v321.335938c0 8.285156 6.71875 15 15 15h96.40625c8.285157 0 15-6.714844 15-15v-176.734375c0-22.734375 18.5-41.230469 41.234376-41.230469 22.734374 0 41.226562 18.496094 41.226562 41.230469v176.734375c0 8.285156 6.71875 15 15 15h96.402344c8.285156 0 15-6.714844 15-15v-194.933594c0-79.140625-64.382813-143.523437-143.523438-143.523437zm113.523438 323.457031h-66.398438v-161.734375c0-39.277344-31.953125-71.230469-71.226562-71.230469-39.28125 0-71.238282 31.953125-71.238282 71.230469v161.734375h-66.402343v-291.335938h66.402343v11.082032c0 5.769531 3.308594 11.027344 8.511719 13.523437 5.199219 2.496094 11.371094 1.785157 15.875-1.820312 20.3125-16.292969 44.851563-24.90625 70.953125-24.90625 62.597656 0 113.523438 50.925781 113.523438 113.523437zm0 0" fill="white" stroke="white"/></svg>
                        </a>
                        <a target="_blank" title="Twitter" rel="noreferrer" href="https://twitter.com/_proactivity" style={{ marginLeft: '10px'}}>
                            <svg width="20" height="20" viewBox="0 0 32 32"><path fill="white" stroke="white" d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"/></svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h4>Proud To Support</h4>
                    <a target="_blank" rel="noreferrer" href="https://shetechitaly.org/?lang=en">
                        <img src="/SheTech.png" alt="SheTech" width="100px" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.treedom.net/en/organization/fortitude-group/event/fortitude-forest/">
                        <img src="/Treedom.png" alt="Treedom" width="125px" />
                    </a>
                </div>
            </div>
            <div className = "footer-copyright">
                <p>ProActivity - A <a rel='noreferrer' href="https://fortitudegroup.it/" target="_blank">Fortitude Group</a> Company © Copyright {new Date().getFullYear()}.  All rights reserved.  VAT 11501860966 - Original artwork by Maurizio Monti</p>
            </div>
        </div>
    )

}

export default Footer
