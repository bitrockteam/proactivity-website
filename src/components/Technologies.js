import React, {Fragment} from 'react';

function Technologies() {

    return(
        <Fragment>
            <h3>UNPARALLELED SKILLS FOR A LONG-TERM SUCCESS</h3>
          <p>We deploy highly skilled specialists to boost needed capacity or provide specialized capabilities that are lacking within a company’s internal IT team. With Proactivity’s help, clients gain access to high quality, knowledgeable resources that can support them on both Back-end and Front-end side. </p>
          <div className="technologies-container">
            <div>
                <h4>Backend</h4>
              <p><b>Java 8+ / Java EE 7+</b></p>
              <p><b>Support on less recent Java EE versions </b>(ex. Java EE 6)</p>
              <p><b>Application Server </b>(Open Source / Main Vendors)</p>
              <p><b>Relational Database </b>(Open Source / Main Vendors)</p>
              <p><b>JPA </b>( 2.x or previous)</p>
              <p><b>WS* </b>(SOAP)</p>
              <p><b>JAX-RS </b>(Rest)</p>
              <p><b>Spring / Spring Boot</b></p>
              <p><b>Microservices </b>(Jakarta EE Micro Profile / Spring Cloud)</p>
              <p><b>Cloud based technologies </b>(mainly AWS)</p>
            </div>
            <div>
                <h4>Frontend</h4>
              <p>Angular</p>
              <p>Angular.js</p>
              <p>Vue.js</p>
            </div>
          </div>
        </Fragment>
        
    )

}

export default Technologies