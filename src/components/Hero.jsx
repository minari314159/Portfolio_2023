import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>

      <div className="absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5"
      >
        <div className="content-shadow">
          <h1 className={`${styles.heroHeadText}`}>
          | <span className='text-slate-400'> SJ Olsen</span> |
          </h1>
          <p className={`${styles.heroSubText} mt-5 text-gray-500`}>
            Frontend software developer specializing in 3D visuals, interactive user interfaces and React web applications!
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-5 bottom-5 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-deeporange flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-slate-200 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

//remove computer canvas and replace with spinning mandel bulb that goes behind title and name/