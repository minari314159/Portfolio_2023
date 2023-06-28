
import { SectionWrapper } from "../hoc";
import { technologies } from "../data";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useState } from "react";


const Tech = () => {

  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <motion.div variants={textVariant()} className="content-shadow mb-10">
        <p className={`${styles.sectionSubText} text-left`}>Technologies</p>
        <h2 className={`${styles.sectionHeadText} text-left`}>Skills</h2>
      </motion.div>

      <div className=" flex flex-row flex-wrap justify-center gap-10 xs:mb-5">
        {technologies.map((technology) => (
          <div className="w-28 h-28 rounded-full cursor-pointer techbtn" 
          key={technology.name}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
            <img src={technology.icon} className="object-fit w-2/3  ml-4 mt-4" alt={technology.name} />
            {isShown && (<p className="font-light text-secondary text-center text-sm uppercase mt-7 titlebtn">{technology.name}</p>)}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "techbologies");


//write blurb about skills in section head//
