import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import  {SectionWrapper}  from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: 'rgba(243, 241, 240, 0.1)', color: '#fff', backdropFilter: "blur(10px)", boxShadow:"0 15px 15px -4px rgba(0, 0, 0, 0.5), inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2), 0 -10px 10px -1px rgba(255, 255, 255, 0.6), inset 0 3px 4px -0.4px rgba(255, 255, 255, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.2), inset 0 10px 30px 0 rgba(255, 255, 255, 0.2)", borderRadius:"10px" }}
      contentArrowStyle={{ borderRight: "7px solid  #DF3562" }}
      animate={{Boolean: true}}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, width: 40, height: 40 }}
      icon={
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-full h-full  object-contain flex justify-center items-center '
          />
      }
    >
      <div>
        <h3 className='text-secondary text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-white text-[16px] font-semibold'
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