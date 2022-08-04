import React, { useEffect } from "react"
import { Fade } from "react-reveal"
import Contacts from "../components/Contacts"
import SectionContainer from "../components/SectionContainer"
import AcademyContent from "../components/Talent-Academy/AcademyMainContent"
import AcademyDescription from "../components/Talent-Academy/AcademyDescription"
import InfoAcademy from "../components/Talent-Academy/Box-info"
import RecapAcademy from "../components/Talent-Academy/RecapAcademy"
import Prerequisites from "../components/Talent-Academy/Prerequisites"
import FAQ from "../components/Talent-Academy/FAQ"

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
                            <Fade>
                                <p delay={200} style={{ textTransform: "uppercase"}}><b>Ti appassionano le tecnologie e i linguaggi di programmazione? <br/> Unisciti alla ProActivity Talent Academy e diventa Back-end Developer con noi!</b></p> 
                                <p>Mission della nostra Talent Academy è quella di erogare formazione teorica e professionale per chiunque voglia padroneggiare principi e tecnologie in ambito Back-end. <br/></p>
                                <p>Nello specifico, l’Academy prevede <b>un corso di formazione gratuito della durata di 70 ore.</b> Al termine del corso, agli studenti che avranno dimostrato maggior impegno e motivazione, verrà offerto uno <b>stage extracurriculare retribuito della durata di 4 mesi  con successiva possibilità di assunzione,</b> per continuare così il proprio percorso di sviluppo professionale.</p>
                                <p style={{ textTransform: "uppercase"}}><b>A chi è rivolta l'iniziativa?</b></p> 
                                <p>L’iniziativa è destinata a <b> giovani neodiplomati ad indirizzo informatico </b>, motivati ad intraprendere uno stimolante percorso formativo per consolidare le proprie skill. I candidati ideali per la nostra Talent Academy sono persone che condividano la nostra passione per la tecnologia, desiderose di crescere ed imparare.</p>
                            </Fade>
                    </SectionContainer>
                    <Prerequisites />
                </div>
            </div>
            <InfoAcademy />
            <div className="space-top">
                <div className="content">
                    <FAQ />
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