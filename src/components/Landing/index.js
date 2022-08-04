import React from 'react';
import './styles.scss'
import Fade from 'react-reveal/Fade';
import { Link } from "react-scroll";

function Landing() {

    return(
        <div className="landing-container">
            <Fade bottom distance="50px">
            <div className="landing-title-container">
                <p>Developing </p>
                <p><b>software</b> is a </p>
                <p><b>new art </b>form </p>
                <br/>
                <Link offset={-93} to="more"><button>More</button></Link>
            </div>
            </Fade>
            <Fade bottom distance="100px" delay={200}>
            <img src="./landing.png"/>
            </Fade>
        </div>
    )

}

export default Landing