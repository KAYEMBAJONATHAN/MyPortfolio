import React from "react";
import Skills from "./skills";
import '../pages/about.css';

const About = () => {
    return(
       <section id="About">
          <div className="center">
            <h2>About Me</h2>
              <p>"Versatile full-stack developer proficient in both front-end and back-end development, with expertise in JavaScript, Ruby on Rails, React, and Redux. Well-versed in utilizing technologies like Ruby, MySQL, and MongoDB to create seamless and scalable applications. Experienced in collaborative pair-programming, dedicated to delivering high-quality code, and fueled by a passion for creating innovative and impactful solutions."</p>
          </div>
          <Skills />
       </section>
    );
}

export default About;