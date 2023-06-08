import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  
  return (
<Tilt  
  perspective={500} 
  glareEnable={true}
  glareMaxOpacity={0.3}
  scale={1.05}
  glarePosition="all"
  className='xs:w-[250px] w-full'>
  <motion.div
    variants={fadeIn("left", "spring", index * 0.5, 0.75)}
    className='w-full bmorph p-[1px] rounded-[10px]'
  >
    <div 
      options= {{ 
        max: 40, 
        scale: 0.5, 
        speed: 500,}}
      className= 'rounded-[10px] py-5 px-5 min-h-[200px] flex justify-evenly items-center flex-col'
    >
      <img
        src={icon}
        alt={title}
        className='w-16 h-16 object-contain'
      />

      <h3 className='text-white text-[20px] font-bold text-center'>
        {title}
      </h3>
    </div>

  </motion.div>
</Tilt>
);
}

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
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      I am a frontend software developer with experience in JavaScript and Python, and expertise in frameworks like React, Node.js, and
      Three.js. I am a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Lets work together to bring your ideas to life!
      </motion.p>
    </motion.div>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);
};

export default SectionWrapper(About, "about");