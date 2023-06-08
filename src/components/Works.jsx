import Tilt from 'react-parallax-tilt';
import { motion     } from 'framer-motion';
import { github, } from '../assets';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard =  ({index, name, description, tags, image, source_code_link}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt  
                options= {{ 
                    max: 40, 
                    scale: 0.5, 
                    speed: 500,}}
                className='bmorph p-5 sm:w-[360px] w-full'>
                <div className='relative w-full h-[200px]'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover rounded-2xL' />
                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                    <div 
                    onClick={() => window.open(source_code_link, "blank")}
                    className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        <img 
                            src={github}
                            alt="github"
                            className='w-2/3 h-2/3 object-contain' />
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24]'>{name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </div>
            <div className='mt-4 flex flex-wrap gap-1'/>
            {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                </p>
            ))}
        </Tilt>
     </motion.div>
    )

}
const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()} className="content-shadow">
        <p className={`${styles.sectionSubText} text-left`}>
          My Work
        </p>
        <h2 className={`${styles.sectionHeadText} text-left`}>
          Projects.</h2>

        <p className='text-secondary p-1'>
                The following projects showcase my skill and experience through real-world examples of my work. Each project is briefly described with links to the code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
    </motion.div>

      <div className='w-full flex'>
        <div className='mt-20 flex flex-wrap gap-7'>
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