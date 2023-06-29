import { github } from '../assets';
import { fadeIn } from './motion';
import { motion     } from 'framer-motion';
import { projects } from '../data';

const ProjectCard =  ({index, name, description, tags, image, source_code_link, live_link}) => {

    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className='glass-morph p-5 sm:w-[360px] w-full'>
                <div 
                onClick={() => window.open(live_link, "blank")}
                className='relative w-full h-[200px] cursor-pointer'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover rounded-2xL' />
                <div className='absolute inset-0 flex justify-end m-3'>
                    <div 
                    onClick={() => window.open(source_code_link, "blank")}
                    className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110">
                        <img 
                            src={github}
                            alt="github"
                            className='w-2/3 h-2/3 object-contain' />
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h3 className='text-deeporange font-light text-[25px]'>{name}</h3>
                <p className='mt-2 text-secondary font-light text-[14px]'>{description}</p>
            </div>
            <div className='mt-4 flex gap-1'/>
            {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                </p>
            ))}
     </motion.div>
    )

}

export default ProjectCard;