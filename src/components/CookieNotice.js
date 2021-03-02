import React, {Fragment, useRef} from 'react';

function CookieNotice() {

    const cookie = useRef()

    const acceptCookies = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem("proactivity-cookie-accept", true)
        }
        closeCookieNotice()
    }

    const closeCookieNotice = () => {
        cookie.current.style.display = "none";
    }

    return(

        
        <Fragment>
            { typeof window !== 'undefined' ? !(localStorage.getItem("proactivity-cookie-accept") ) ? 
            <div ref={cookie} className="cookie-notice">
                <p>We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</p>
                <button onClick={acceptCookies}>Ok</button>
                <svg
                    onClick={closeCookieNotice}
                    width="15px"
                    height="15px"
                    viewBox="0 0 15 15"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g>
                    <line x1="0" y1="0" x2="15" y2="15" strokeWidth="1" fill="white" stroke="white"/>
                    <line x1="0" y1="15" x2="15" y2="0" strokeWidth="1" fill="white" stroke="white"/>
                    </g>
                </svg>
            </div>
            : null :null
            }
        </Fragment>
        
        
    )

}

export default CookieNotice