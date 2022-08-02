import React from "react"
import './style.scss'

function AcademyContent(){
    return (
        <div className="academy-picture">  
            <div className="content">
                <div className="landing-content">
                    <h1>TALENT ACADEMY</h1>
                    <p><b>Il nostro nuovo percorso formativo <br/> per i giovani talenti del mondo IT.</b></p>
                    <h4>ISCRIVITI SUBITO!</h4>
                    <p>Invia la tua candidatura tramite <a rel="noreferrer" target="_blank" href="https://www.linkedin.it"><b>Linkedin</b></a></p>
                    <br/>
                    <p>Oppure invia il tuo CV a <a href="mailto:hr@fortitudegroup.it"><b>hr@fortitudegroup</b></a></p>
                </div>
            </div>
        </div>
    )
}

export default AcademyContent