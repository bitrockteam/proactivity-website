import React from "react"
import SectionContainer from "../../SectionContainer"
import './style.scss'

function Prerequisites(){
    return(
        <SectionContainer name={"prerequisiti"} sectionTitle={"Prerequisiti"}>
                        <div className="preprequisiti space-bottom">
                            <img alt="regione" src="/Quadro_Prerequisiti.jpg" width="850px" />
                            <div>
                                <p>Per accedere al corso, sarà necessario possedere i seguenti requisiti:</p>
                                <ul>
                                    <li>:: età compresa tra i 18 e i 29 anni</li>
                                    <li>:: residenti e/o domiciliati in Lombardia</li>
                                    <li>:: non iscritti a nessun percorso di studi, né lavoratori</li>
                                </ul>
                            </div>
                        </div> 
        </SectionContainer>
    )
}

export default Prerequisites