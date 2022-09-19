import React from "react"
import './style.scss'

function AcademyBanner(){
    return(
        <div className="academy-banner">
            <div className="content" >
                <div className="academy-text" style={{display: 'inline-flex', gap: '1rem', alignItems: 'center'}}>
                    <h2><b>TALENT ACADEMY</b></h2> 
                    <p style={{ fontSize: 16, paddingLeft: '0%', marginBottom: 0,}}>Il nostro nuovo <a style={{ display: 'inline-flex', textDecoration: 'underline', color: 'inherit'}} href="/talent-academy">percorso formativo</a> per i giovani talenti del mondo IT. </p>
                </div>
            </div>
        </div>
    )
}

export default AcademyBanner