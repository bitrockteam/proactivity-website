import React, {Fragment} from 'react';

function JoinUs() {

    return(
        <Fragment>
          <h3>JUMP ABOARD</h3>
           <p>
             ProActivity is a new-born company, who is eager to welcome new talents.
             <br />
             If you’re an experienced IT Professional who wants to play a crucial role in helping businesses grow and disclose their full potential by experiencing the best IT solutions and services, check our current Job Openings or send us your resume for an unsolicited application.
          </p>
          <p>
            Your next job opportunity is just a click away.
          </p>
          <div className="join-us-links">
            <a href="https://www.linkedin.com/company/proactivitysrl/jobs/" target="_blank" rel="noreferrer">VIEW JOB OPENINGS</a>
            <a href="mailto:hr@fortitudegroup.it?subject=ProActivity - Unsolicited application">SEND US YOUR CV</a>
          </div>
        </Fragment>
    )
}

export default JoinUs

