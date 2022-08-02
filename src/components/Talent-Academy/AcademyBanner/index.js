import React from "react"
import './style.scss'

function AcademyBanner(){
    return(
        <div className="academy-banner">
            <div className="content">
                <div className="academy-text">
                    <p><b>TALENT ACADEMY</b> <span style={{ fontSize: 14, paddingLeft: '10%'}}>Il nostro nuovo percorso formativo per i giovani talenti del mondo IT. </span></p>
                </div>
                <div className="candidatura">
                    <div className="application-text" style={{display: 'inline-flex', gap: '1rem'}}>
                        Invia la tua candidatura tramite<a href="https://linkedin.it">Linkedin</a>
                        oppure
                        invia il tuo CV a <a href="mailto:hr@fortitudegroup.it"><b>hr@fortitudegroup</b></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcademyBanner