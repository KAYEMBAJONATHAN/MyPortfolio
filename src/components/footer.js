import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SiWellfound } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import './footer.css';

const Footer = () => {
    return(
      <div className="footer">
        <div className="social-media">
          <a href="https://www.linkedin.com/in/cimena-kayemba/">
             <FaLinkedin />
          </a>
          <a href="">
          <FaTwitter />
          </a>
          <a href="https://wellfound.com/u/cimena-kayemba-jonathan">
          <SiWellfound />
          </a>
          <a href="https://github.com/KAYEMBAJONATHAN">
            <FaGithub />
          </a>
        </div>
        <p> &CopyRight: 2023 kayembejonathan5@gmail.com</p>
      </div>
    );
}

export default Footer;