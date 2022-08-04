import React from "react"
import SectionContainer from "../../SectionContainer"
import './style.scss'

function Prerequisites(){
    return(
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
    )
}

export default Prerequisites