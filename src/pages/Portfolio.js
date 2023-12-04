import React from "react";
import '../pages/portfolio.css';
import project1 from '../Assets/project1.png';
import calulator from '../Assets/calulator.png';
import Menufood from '../Assets/Menufood.png';
import books from '../Assets/books.png';
import pfolio from '../Assets/pfolio.png';

const Portfolio = () => {
    return(
        <section id="portfolio">
          <div className="center">
            <h2>Portfolio</h2>
            <div className="folio-container">
              <a className="image" href="https://github.com/KAYEMBAJONATHAN/React-t"><img src={project1} alt="countrymap" /></a>
              <a className="image" href="https://github.com/mohamedSabry0/space_travelers_hub"><img src={calulator} alt="travelhub" /></a>
              <a className="image" href="https://github.com/Elhambasir/Food-Menu"><img src={Menufood} alt="foodmenu" /></a>
              <a className="image" href="https://github.com/HenaryKhuraijam/bookList"><img src={books} alt="foodmenu" /></a>
              <a className="image" href="https://kayembajonathan.github.io/Desk/"><img src={pfolio} alt="foodmenu" /></a>
            </div>
          </div>    
        </section>
    );
}

export default Portfolio;