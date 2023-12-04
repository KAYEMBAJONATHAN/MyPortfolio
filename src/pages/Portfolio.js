import React from "react";
import '../pages/portfolio.css';
import project1 from '../Assets/project1.png';
import calulator from '../Assets/calulator.png';
import Menufood from '../Assets/Menufood.png';

const Portfolio = () => {
    return(
        <section id="portfolio">
          <div className="center">
            <h2>Portfolio</h2>
            <div className="folio-container">
              <a className="image" href="#"><img src={project1} alt="countrymap" /></a>
              <a className="image" href="#"><img src={calulator} alt="travelhub" /></a>
              <a className="image" href="#"><img src={Menufood} alt="foodmenu" /></a>
            </div>
          </div>    
        </section>
    );
}

export default Portfolio;