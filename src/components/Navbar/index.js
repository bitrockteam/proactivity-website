import React, {Fragment, useEffect, useRef} from 'react';
import './styles.scss'
import { Link } from "react-scroll";
import { Link as Linkto } from "@reach/router"

function NavBar() {

    const mobileNavigation = useRef()

    return(
        <div className="nav-container">
        <nav>
            <Linkto to=""><img alt='logo' width={400}  src="./Logo_Proactivity.png"/></Linkto>
            <div className = "links-container">
                <a  href='/#how-we-work'><p>How we work</p></a>
                <a  href='/#mindset'><p>Mindset</p></a>
                <a  href='/#technologies'><p>Technologies</p></a>
                <a  href='/#join-us'><p>Join Our Team</p></a>
                <a  href='/#contacts'><p>Contacts</p></a>
                <Linkto to="talent-academy"> <p>Talent Academy</p></Linkto>
            </div>
            <svg onClick={
                () => mobileNavigation.current.style.top==="93px" ?
                mobileNavigation.current.style.top="-36%":
                mobileNavigation.current.style.top="93px"
                }
                width="35px" height="35px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 384.97 384.97"  >
                <g>
                    <g>
                        <path d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
                            c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"/>
                        <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
                            S379.58,180.455,372.939,180.455z"/>
                        <path d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
                            c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"/>
                    </g>
                </g>
            </svg>
        </nav>
        <div  className="mobile-navigation" ref={mobileNavigation}>
                <a  href='/#how-we-work'><p>How we work</p></a>
                <a  href='/#mindset'><p>Mindset</p></a>
                <a  href='/#technologies'><p>Technologies</p></a>
                <a  href='/#join-us'><p>Join Our Team</p></a>
                <a  href='/#contacts'><p>Contacts</p></a>
                <a  href='/talent-academy'><p>Talent Academy</p></a>
        </div>
        </div>
    )

}

export default NavBar
