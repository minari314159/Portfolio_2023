import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../data";
import  {SectionWrapper}  from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "rgba(200, 200, 200, 0.05)", color:'lightslategray', backdropFilter: "blur(5px)", boxShadow:"0 15px 15px -4px rgba(0, 0, 0, 0.5), inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2),0 -5px 10px -1px rgba(255, 255, 255, 0.6), inset 0 3px 4px -0.4px rgba(255, 255, 255, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.2), inset 0 10px 30px 0 rgba(255, 255, 255, 0.2)", borderRadius:"2px" }}
      contentArrowStyle={{ borderRight: "10px solid  #4A4A4A" }}
      animate={{Boolean: true}}
      date={experience.date}
      iconStyle={{ background: 'rgba(243, 241, 240, 0.5)', width: 40, height: 40, color:'rgba(243, 241, 240, 0.3)'}} >
      <div>
        <h3 className='text-deeporange text-[24px] font-light'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-light'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-secondary text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="content-shadow">
        <p className={`${styles.sectionSubText} text-left`}>
          Current
        </p>
        <h2 className={`${styles.sectionHeadText} text-left`}>
          Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work")