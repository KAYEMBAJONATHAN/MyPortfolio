import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import '../pages/home.css';
import pic from '../Assets/pic.png';
 
const Home = () => {
    return(
        <main>
           <header  className="headeer">
              <div className="header-social">
                <a href="https://www.linkedin.com/in/cimena-kayemba/">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/KAYEMBAJONATHAN">
                  <FaGithub />
                </a>
                <a href="http://www.kayembejonathan5@gmail.com">
                  <MdEmail />
                </a>
              </div>
           </header>
          <section id="intro">
            <div>
              <h3>I'm Jonathan Kayemba <br/> 
               Full-stuck Developer<br/> 
              "As a dedicated software developer, <br/>I am driven by a relentless
              <br/> passion for continuous learning and <br/>a commitment to innovative creation."
              </h3>
              <a href="/contact">Contact Me</a>
            </div>
            <div>
            <img src={pic} alt="pic" />
            </div>
          </section>
        </main>
    )
}

export default Home;