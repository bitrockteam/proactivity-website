import React, {Fragment, useRef} from 'react';

function Contacts() {
    const subject = useRef("");
    const mailBody = useRef("");

    const handleMailToSend = () => {
        if(subject.current.value !== "" && mailBody.current.value !== "") location.href = `mailto:info@proactivity.it?subject=${subject.current.value}&body=${mailBody.current.value}`;
    }

    return(
        <Fragment>
            <div className="contacts-container">
            <div>
              <p>If you want to find out more on our services and take advantage of our tech Professionals’ expertise, fill in the form. We’d love to assist you.</p>
              <br/>
              <div>
                <p><b>Milano</b></p>
                <p>Via Pietro Borsieri, 41</p>
                <p>20159 Milano (MI) - Italy</p>
                <p>Phone: +39 0422 1600025</p>
                <a href="mailto:info@proactivity.it"><p>info@proactivity.it</p></a>
              </div>
            </div>
            <div>
              <label htmlFor="subject">Subject *</label>
              <input ref={subject} id="subject" type="text" ></input>
              <br/>
              <label htmlFor="mail-body">Mail Body *</label>
              <input ref={mailBody} id="mail-body" type="text" ></input>
              <br/>
              <br/>
              <button onClick={handleMailToSend}>Send message</button>
            </div>
          </div>
        </Fragment>
        
    )

}

export default Contacts