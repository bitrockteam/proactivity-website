import { Link } from "@reach/router"
import React from "react"
import './style.scss'

function AcademyCta() {
        return(
            <div className="promo-background">
                <div className="content">
                    <div className="promo-text">
                        <h2>TALENT ACADEMY</h2>
                        <p>Il nostro nuovo percorso formativo <br/> per i giovani talenti del mondo IT.</p>                    
                        <Link to="/talent-academy"><button className="cta-promo">SCOPRI DI PIÙ</button></Link>
                    </div>
                </div>
            </div>
        )
}

export default AcademyCta