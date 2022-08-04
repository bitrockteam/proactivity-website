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
            </Fade>
            <Fade delay={400}>
            <p style={{ textTransform: "uppercase"}}><b>Quali requisiti devo avere per poter accedere all’Academy?</b></p> 
            <p>È necessario possedere i seguenti requisiti:</p>
            <ul style={{ listStyle: 'inside'}}>
                <p>
                <li>• età compresa tra i 18 e i 29 anni
                </li>
                <li>
                    • residenti e/o domiciliati in Lombardia
                </li>
                <li>
                    • non iscritti a nessun percorso di studi, né lavoratori
                </li>
                </p>
            </ul>
            </Fade>
            <Fade delay={500}>
                <p>Prevedendo parte del corso esercitazioni da remoto, agli studenti è inoltre richiesto il possesso di un PC personale. Non da ultimo, i candidati ideali devono possedere una buona conoscenza della lingua inglese e predisposizione al lavoro in team.</p>
                <p style={{ textTransform: "uppercase"}}><b>In quale lingua viene erogato il corso?</b></p> 
                <p>I corsi saranno erogati in lingua italiana, alternando lezioni teoriche in aula (Milano) ed esercitazioni pratiche da remoto.</p>
                <p style={{ textTransform: "uppercase"}}><b>Cosa succede al termine del corso?</b></p> 
                <p>Al termine del corso di formazione, della durata di 70 ore, a chiunque abbia dimostrato impegno costante e motivazione, verrà offerto uno stage extracurriculare retribuito della durata di 4 mesi con successiva possibilità di assunzione.</p>
            </Fade>
        </div>
    </SectionContainer>
    )
}

export default FAQ