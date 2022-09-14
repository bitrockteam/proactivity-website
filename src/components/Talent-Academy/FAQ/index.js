import React from "react"
import SectionContainer from "../../SectionContainer"
import './style.scss'
import { Fade } from "react-reveal"

function FAQ(){
    return(
        <SectionContainer name={"faq"} sectionTitle={"F.A.Q."}>
        <div className="faq">
            <Fade delay={200}>
            <p style={{ textTransform: "uppercase"}}><b>Devo pagare per poter frequentare l’Academy o si tratta di formazione  gratuita?</b></p> 
            <p>Non solo la ProActivity Talent Academy è un corso formativo interamente gratuito: al termine, per gli studenti più brillanti, è previsto uno stage extracurriculare retribuito della durata di 4 mesi, con successiva possibilità di assunzione.</p>
            <p>Prevedendo parte del corso esercitazioni da remoto, agli studenti è inoltre richiesto il possesso di un PC personale. Non da ultimo, i candidati ideali devono possedere una buona conoscenza della lingua inglese e predisposizione al lavoro in team.</p>
            </Fade>
            <Fade delay={500}>
                <p style={{ textTransform: "uppercase"}}><b>Cosa succede al termine del corso?</b></p> 
                <p>Al termine del corso di formazione, della durata di 70 ore, a chiunque abbia dimostrato impegno costante e motivazione, verrà offerto uno stage extracurriculare retribuito della durata di 4 mesi con successiva possibilità di assunzione.</p>
            </Fade>
        </div>
    </SectionContainer>
    )
}

export default FAQ