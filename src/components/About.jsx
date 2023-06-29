
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../data";
import { SectionWrapper } from "../hoc";
import ServiceCard from "../utils/ServiceCard";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
return (
  <>
    <motion.div className="content-shadow">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='m-5 text-secondary text-sm md:text-lg max-w-6xl text-left   leading-[30px] font-light'
    >
      I am a frontend software developer with experience in JavaScript and Python, and expertise in frameworks like React, Node.js, and
      Three.js. I am a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Lets work together to bring your ideas to life!
      </motion.p>
    </motion.div>

    <div className='mt-20 flex flex-wrap gap-10 justify-center'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
  </>
);
};

export default SectionWrapper(About, "about");