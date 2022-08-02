import React, { useEffect } from "react"
import { Fade } from "react-reveal"
import Contacts from "../components/Contacts"
import SectionContainer from "../components/SectionContainer"
import AcademyContent from "../components/Talent-Academy/AcademyContent"
import AcademyDescription from "../components/Talent-Academy/description"
import InfoAcademy from "../components/Talent-Academy/Box-info"
import RecapAcademy from "../components/Talent-Academy/RecapAcademy"

function TalentAcademy() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    
    return(
        <>
            <AcademyContent />
            <AcademyDescription />
            <div className="space-top">
                <div className="content">
                    <SectionContainer className="space-top" name={"academy"} sectionTitle={"Il nostro nuovo percorso formativo per I giovani talenti del mondo IT"}>
                            <Fade delay={200} style={{ textTransform: "uppercase"}}><b>Ti appassionano le tecnologie e i linguaggi di programmazione? <br/> Unisciti alla ProActivity Talent Academy e diventa Back-end Developer con noi!</b></Fade> 
                            <p>Mission della nostra Talent Academy è quella di erogare formazione teorica e professionale per chiunque voglia padroneggiare principi e tecnologie in ambito Back-end.</p>
                            <p style={{ textTransform: "uppercase"}}><b>A chi è rivolta l'iniziativa?</b></p> 
                            <p>L’iniziativa è destinata a <b> giovani neodiplomati ad indirizzo informatico </b>, motivati ad intraprendere uno stimolante percorso formativo per consolidare le proprie skill. I candidati ideali per la nostra Talent Academy sono persone che condividano la nostra passione per la tecnologia, desiderose di crescere ed imparare.</p>
                    </SectionContainer>
                    <SectionContainer name={"prerequisiti"} sectionTitle={"Prerequisiti"}>
                        <div className="preprequisiti space-bottom">
                            <img alt="regione" src="/Quadro_Prerequisiti.jpg" width="850px" />
                            <div>
                                <p>Il corso di formazione è finanziato da <b>Regione Lombardia</b>, in collaborazione con <b>Ok School</b> e <b>Ok Academy</b>. <br/>Per accedere al corso, sarà necessario possedere i seguenti requisiti:</p>
                                <ul>
                                    <li>:: età compresa tra i 18 e i 29 anni</li>
                                    <li>:: residenti e/o domiciliati in Lombardia</li>
                                    <li>:: non iscritti a nessun percorso di studi, né lavoratori</li>
                                </ul>
                                <div className="loghi-container">
                                    <img alt="lombardia" width={200} src="/Logo_RegioneLombradia.jpg" />
                                    <img alt="okacademy" src="/Logo_OKAcademy.jpg" width={80} />
                                </div>
                            </div>
                        </div>
                    </SectionContainer>
                </div>
            </div>
            <InfoAcademy />
            <div className="space-top">
                <div className="content">
                    <SectionContainer name={"faq"} sectionTitle={"F.A.Q."}>
                        <div className="faq">
                            <Fade delay={200}>
                            <p style={{ textTransform: "uppercase"}}><b>Devo pagare per poter frequentare l’Academy o si tratta di formazione  gratuita?</b></p> 
                            <p>Non solo la ProActivity Talent Academy è un corso formativo interamente gratuito: al termine, per gli studenti più brillanti, è previsto uno stage extracurriculare retribuito della durata di 4 mesi, con successiva possibilità di assunzione.</p>
                            </Fade>
                            <Fade delay={400}>
                            <p style={{ textTransform: "uppercase"}}><b>Quali requisiti devo avere per poter accedere all’Academy?</b></p> 
                            <p>E’ necessario possedere i seguenti requisiti:</p>
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
                    <RecapAcademy />
                    <SectionContainer name={"contacts"} sectionTitle={"Contacts"}>
                        <Contacts/>
                    </SectionContainer>
                </div>
            </div>
        </>
    )
}

export default TalentAcademy