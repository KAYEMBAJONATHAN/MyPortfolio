import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";
import { IoMdCodeWorking } from "react-icons/io";
import '../pages/experience.css';

const Experience = () => {
    return(
        <div className="experience">
          <VerticalTimeline lineColor="#3e497a">
             <VerticalTimelineElement className="vertical-timeline-element--education"
               date="2022 - 2023"
               iconStyle={{background: "#3e497a", color: "#fff"}}
             >
              <div className="icon"><MdSchool /></div>
              
              <h3 className="vertical-timeline-element-title">
                My Random High School, Random Place, Random State
              </h3>
              <h4>College School Diploma</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education"
               date="2022 - 2023"
               iconStyle={{background: "#3e497a", color: "#fff"}}
             >
              <div className="icon"><MdSchool /></div>
              
              <h3 className="vertical-timeline-element-subtitle">
                Bachelor's Degree
              </h3>
              <h4>Computer Science</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--work"
               date="2022 - 2023"
               iconStyle={{background: "#e9d35d", color: "#fff"}}
             >
              <div className="icon"><IoMdCodeWorking /></div>
              
              <h3 className="vertical-timeline-element-subtitle">
                Fullstuck developer at Retro Rabbit
              </h3>
              <h4>Pretoria South Africa</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education"
               date="2022 - 2023"
               iconStyle={{background: "#e9d35d", color: "#008000"}}
             >
              <div className="icon"><IoMdCodeWorking /></div>
              
              <h3 className="vertical-timeline-element-title">
                Front-End developer
              </h3>
              <h4>At Self Project</h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
    )
}

export default Experience;
