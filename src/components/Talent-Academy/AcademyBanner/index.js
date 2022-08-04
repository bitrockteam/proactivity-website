import React from "react"
import './style.scss'

function AcademyBanner(){
    return(
        <div className="academy-banner">
            <div className="content" >
                <div className="academy-text" style={{display: 'inline-flex', gap: '1rem', alignItems: 'center'}}>
                    <h2><b>TALENT ACADEMY</b></h2> 
                    <p style={{ fontSize: 16, paddingLeft: '0%', marginBottom: 0,}}>Il nostro nuovo percorso formativo per i giovani talenti del mondo IT. </p>
                </div>
                <div className="candidatura">
                    <div className="application-text" style={{display: 'inline-flex', gap: '1rem'}}>
                        Invia la tua candidatura tramite<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/jobs/view/3188547234/?refId=EjnLEBVklrGT9y4%2BhyJxDg%3D%3D&trackingId=UXZtfHN5Z5nyV0QS4aZ%2BqA%3D%3D">Linkedin</a>
                        oppure
                        invia il tuo CV a <a href="mailto:hr@fortitudegroup.it"><b>hr@fortitudegroup</b></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcademyBanner