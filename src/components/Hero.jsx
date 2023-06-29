import { motion } from "framer-motion";
import { SectionWrapper } from "../utils";

const Hero = () => {
  return (
    <section className="relative w-5/6 h-screen mx-auto mb-5">
      <div className="absolute inset-0 top-[100px]  max-w-4xl mx-auto flex flex-row items-start gap-5 ">
        <div className="content-shadow max-w-4xl">
          <h1 className="font-light text-secondary  mt-2 ml-3 leading-[98px] text-5xl lg:text-6xl md:text-6xl">
            | <span className="text-slate-400"> SJ Olsen</span> |
          </h1>
          <p className="font-light m-4 text-md text-secondary md:text-lg lg:text-xl text-justify s:text-left">
            Frontend software developer specializing in 3D visuals, interactive
            user interfaces and React web applications!
          </p>
        </div>
        {/* MandleBulb */}
      </div>

      <div className="absolute xs:bottom-5 bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-deeporange flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-slate-200 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "/");

//remove computer canvas and replace with spinning mandel bulb that goes behind title and name/
