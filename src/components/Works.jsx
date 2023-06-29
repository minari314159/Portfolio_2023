import { motion     } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../utils';
import ProjectCard from '../utils/ProjectCard';
import { projects } from '../data';
import { textVariant } from '../utils/motion';


const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()} className="content-shadow">
        <p className={`${styles.sectionSubText} text-left`}>
          My Work
        </p>
        <h2 className={`${styles.sectionHeadText} text-left`}>
          Projects.</h2>

        <p className='m-5 text-secondary text-sm md:text-lg max-w-6xl text-left leading-[30px] font-light ml-4 mb-4'>

                The following showcase my skill and experience through which I developed web applications for real-world projects and product I personally created in the past. Each project is briefly described with links to the code repositories and live demos. It reflects my ability to solve complex problems computationally and with past engineering and design projects, work with different technologies, and manage projects effectively.
        </p>
    </motion.div>

      <div className='w-full '>
        <div className='mt-20 flex flex-wrap justify-center gap-7'>
            {projects.map((project, index) => (
                <ProjectCard
                    key={`project-${index}`}
                    index={index}
                    {...project} />
            ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");