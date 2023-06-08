import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
       <motion.div variants={textVariant()} className="content-shadow mb-10">
        <p className={`${styles.sectionSubText} text-left`}>
          Technologies
        </p>
        <h2 className={`${styles.sectionHeadText} text-left`}>
          Skills
        </h2>
      </motion.div>

    <div className=" flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology => (
        <div className="w-28 h-28"
        key={technology.name}>
          <BallCanvas icon={technology.icon} />

        </div>
      )))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "techbologies")