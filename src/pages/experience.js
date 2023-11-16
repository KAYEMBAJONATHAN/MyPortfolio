import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return(
        <div className="experience">
          <VerticalTimeline lineColor="#3e497a">
             <VerticalTimelineElement className="vertical-timeline-element--education"
               date="2022 - 2023"
               iconStyle={{background: "#3e497a", color: "#fff"}}
             >
              <h3 className="vertical-timeline-element-title">
                My Random High School, Random Place, Random State
              </h3>
              <h4>College School Diploma</h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
    )
}

export default Experience;
