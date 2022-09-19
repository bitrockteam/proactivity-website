import React from "react"
import './style.scss'

function InfoAcademy(){
    return(
        <div className="bg-grey info-content">
            <div className="content">
                <h2>CONTENUTI DEL CORSO</h2>
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