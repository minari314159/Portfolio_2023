import {motion } from 'framer-motion';
import {staggerContainer} from './motion';


const SectionWrapper = (Component, idName) => 
function HOC(){
  return (
    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    className="max-w-7xl mx-auto my-10 relative w-5/6">
        <span className="m-6"id={idName}>
        </span>
        <Component />
    </motion.section>
  )
}

export default SectionWrapper