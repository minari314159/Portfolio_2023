import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import ExperienceCard from "../utils/ExperienceCards";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../data";
import { SectionWrapper } from "../utils";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="content-shadow">
        <p className={`${styles.sectionSubText} text-left`}>Current</p>
        <h2 className={`${styles.sectionHeadText} text-left`}>Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
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

export default SectionWrapper(Experience, "work");
