
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { services } from "../data";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {

  
  return (
  <motion.div
    variants={fadeIn("left", "spring", index * 0.5, 0.75)}
    className='xs:w-[250px] w-full p-[1px] bmorph'
  >
    <Tilt  
      perspective={500} 
      glareEnable={true}
      glareMaxOpacity={0.1}
      scale={1.05}
      glarePosition="all"
      className='xs:w-[250px]'>

        <div 
          className= 'rounded-[10px] py-5 px-5 min-h-[200px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-gray-500 text-[20px] font-light text-center'>
            {title}
          </h3>
        </div>

      
    </Tilt>
</motion.div>
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
      className='m-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
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