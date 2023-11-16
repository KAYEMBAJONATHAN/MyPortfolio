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
          <FaLinkedin />
          <FaTwitter />
          <SiWellfound />
          <FaGithub />
        </div>
        <p> &CopyRight: 2023 kayembejonathan5@gmail.com</p>
      </div>
    );
}

export default Footer;