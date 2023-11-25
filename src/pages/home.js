import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import '../pages/home.css';
import pic from '../Assets/pic.png';
 
const Home = () => {
    return(
        <div className="home">
          <div className="about">
             <h2>Hey, My name is Jonathan</h2>
               <div className="info">
               <img src={pic} alt="img" className="pic"/>
                  <h3> "As a dedicated software developer, I am driven by a relentless
                     passion for continuous learning and a commitment to innovative creation." 
                  </h3>
                <div className="media">
                <FaLinkedin />
                <FaGithub />
                <MdEmail />
                </div>  
              </div>
          </div>
          <div className="skills">
              <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                  <h2>Front-End</h2>
                   <span>
                    HTML, CSS, React.JS, Redux, Angular.
                   </span>
                </li>
                <li className="item">
                  <h2>Back-End</h2>
                  <span>
                    Node.js, Nest.js, .Net, MySQL, MongoDb, SQL, PostGres.
                  </span>
                </li>
                <li className="item">
                  <h2>Langueges</h2>
                  <span>
                    Javascript, C#, Ruby, Ruby On Rails
                  </span>
                </li>
            </ol>
          </div>
        </div>
    )
}

export default Home;