import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import '../pages/contact.css';

const Contact = () => {
    return(
        <section id="contact">
          <div> 
           <h2 className="cent">Contact Me</h2>
              <div className="boxs">
                  <h4>Mails</h4>
                  <p>kayembejonathan5@gmail.com</p>
                 <a href="http://www.kayembejonathan5@gmail.com" className="imagess">
                    <FaEnvelope />
                 </a>
              </div>
              <div className="boxs">
                  <h4>phone</h4>
                  <p>+27746480168</p>
                 <a href="https://www.+27746480169">
                   <FaPhone />
                 </a>
               </div>
               <br />
             <div className="boxs">
                 <h4>Location</h4>
                 <p>Pretoria South Africa</p>
               <a href="https://www.google.com/maps/place/Wapadrand,+Pretoria,+0050/">
                <FaLocationDot />
               </a>
             </div>
          </div>   
        </section>
    );
}

export default Contact;
