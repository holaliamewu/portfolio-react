import React from "react"

export default function Contact(){
    function sendEmail(e) {
        const emailSubject = "";
        const mailtoLink = "mailto:me.amewu@gmail.com?subject=" + encodeURIComponent(emailSubject) + "&body=" + encodeURIComponent(emailAddress);
        window.location.href = mailtoLink;
      }    

    return(
        <div id="contact">
            <h3 id="contact-hd">WANT TO GET IN TOUCH ?</h3>
                <button type="button" onclick={sendEmail}>say hello</button>
        </div>
    )
}
