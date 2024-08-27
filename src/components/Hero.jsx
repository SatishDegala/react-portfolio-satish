import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/satishprofilepic.jpg";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},  
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Satish Degala
            </motion.h1>
            <motion.span
            variants={container(1)}
            initial="hidden"
            animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Front-end Developer
            </motion.span>
            <motion.p
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
             className="my-2 max-w-xl py-6 font-light">{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className="w-full lg:ml-28 lg:mt-11 lg:h-96 lg:w-96 flex lg:justify-end">
          <motion.img
          initial={{ x:100, opacity: 0}}
          animate={{ x:0, opacity: 1}}
          transition={{duration:1 , delay:1.2}}
            src={profilepic}
            alt="Satish Degala"
            className="rounded-2xl w-48 h-auto lg:w-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;