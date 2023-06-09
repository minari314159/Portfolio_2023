import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="content-shadow">
          <h1 className={`${styles.heroHeadText}`}>
          | <span className='text-deeporange'> SJ Olsen</span> |
          </h1>
          <p className={`${styles.heroSubText} mt-5 text-gray-500`}>
            Frontend developer specializing in 3D visuals, interactive user interfaces and web applications!
          </p>
        </div>
      </div>
      <ComputersCanvas />

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
              className='w-3 h-3 rounded-full bg-deeporange mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;