import { motion, useScroll, useTransform,useInView } from "framer-motion";
import { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
function Parrallex() {
    const variants={initial:{x:-10,opacity:0,y:100},animate:{x:0,y:0,opacity:1,transition:{duration:1,staggerChildren:0.1}}}
  const ref = useRef();
  const ref2 = useRef();
  const isInView=useInView(ref2,{margin:'-100px'}) //we give it a ref to check if it is in view or not
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      ref={ref} 
      className=" bg-slate-950 h-[100vh] flex items-center relative flex-col overflow-hidden "
    >
      <motion.h1 style={{ y: yBg }} className=" m-auto ">
        About
      </motion.h1>
      <motion.div className="mountains lg:block hidden"></motion.div>
      <motion.div style={{ y: yBg }} className="planets"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
      <motion.div ref={ref2} className="lg:flex-row flex flex-col  items-center gap-10 py-6 px-12 z-[2] bg-slate-950 absolute rounded-lg top-[10%]  "
      initial='initial' animate={isInView&&"animate"} variants={variants}>
        <motion.div className=" border-b-2 lg:border-r-2 border-pink-600" variants={variants}>
        <img src="/noor.jpg" className=" flex-1 w-[20rem] lg:w-[33rem] rounded-md" alt="" />
        </motion.div>
        <motion.div className=" flex flex-col lg:gap-10 justify-center flex-[40%] text-white md:w-[54rem] lg:py-5 lg:px-10 " variants={variants}>
          <h2 className=" font-semibold text-pink-500 text-center lg:text-justify">My intro</h2>
          <p className="text-white text-lg text-center lg:text-2xl leading-10 ">
          A passionate full-stack web developer with 2 years of experience has built up variety of huge websites , highly experienced
in problem solving and designing layouts.Equipped with a diverse and promising skill set Proficient in an assortment of
technologies, including Javascript,React js, tailwind css, Redux tool kit, and more. I am able to effectively self-manage
during independent projects as well as collaborate in a team setting.
          </p>
        <ul className=" capitalize">
            <li className="flex items-center mb-4 gap-4 text-xl lg:text-2xl  text-pink-500 font-semibold"><MdEmail/>email : <p className=" font-normal lowercase text-gray-200"> noordragon2004@gmail.com</p></li>
            <li className="flex items-center justify-start text-xl lg:text-2xl  gap-4 text-pink-500 font-semibold"><FaPhone/>phone : <p className=" font-normal  text-gray-200"> +20 1145838187</p></li>
        </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Parrallex;
