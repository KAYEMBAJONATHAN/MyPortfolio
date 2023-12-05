import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import '../pages/skills.css'

const Skills = () => {
    return(
       <section id="skills">
          <div className="center">
             <h2>Skills</h2> 
             <div className="container"> 
                 <FaHtml5 className="box"/>
                 <FaCss3 className="box"/>
                 <IoLogoJavascript className="box"/>
                 <FaReact className="box"/>
                 <FaAngular className="box"/>
                 <FaNode className="box"/>
                 <DiMysql className="box"/>
                 <BiLogoPostgresql className="box"/>
                 <DiRuby className="box"/>
                 <SiRubyonrails className="box"/>
                 <AiOutlineConsoleSql className="box"/>
                 <FaGit className="box"/>
                 <FaGithub className="box"/>
                 <FaGitlab className="box"/>
                 <TbBrandCSharp className="box"/>
                 <DiMongodb className="box"/>
             </div>
          </div> 
       </section>
    );
}

export default Skills;