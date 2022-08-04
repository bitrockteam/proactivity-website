import React from "react"
import './style.scss'

function InfoAcademy(){
    return(
        <div className="bg-grey info-content">
            <div className="content">
                <h2>COSA, COME & QUANDO!</h2>
                <div className="box-info">
                    <div className="box">
                        <p>Il corso <b>partirà il 28 Settembre </b>e  <b>si concludera il 13 Ottobre 2022.</b> Il termine ultimo per la presentazione della domanda è <b>venerdì 16 Settembre 2022.</b></p>
                    </div>
                    <div className="box">
                        <p>Il corso sarà tenuto in modalità ibrida, dal <b>lunedì al venerdì dalle 9:00 alle 12:00 e dalle 15:00 alle 17:00.</b> In mattinata ci saranno lezioni teoriche in aula a Milano, mentre nel pomeriggio sono previsti esercizi pratici da remoto. Sarà pertanto necessario avere un PC portatile personale a disposizione.</p>
                    </div>
                </div>
                <p>Durante il corso, gli studenti avranno modo di approfondire i seguenti temi in ambito <b>Back-end:</b></p>
                <ul>
                    <li>:: Fondamenti di programmazione Java</li>
                    <li>:: Principi di Object Oriented Programming</li>
                    <li>:: Strutture dati</li>
                    <li>:: Debugging & Testing</li>
                    <li>:: Pattern essenziali</li>
                    <li>:: Fondamenti di database relazionali</li>
                </ul>
            </div>
        </div>
    )
}

export default InfoAcademy