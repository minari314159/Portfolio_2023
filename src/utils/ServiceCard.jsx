import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn} from "./motion";

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

  export default ServiceCard;