import { FaLaptopCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { FcGallery } from "react-icons/fc";
import { useActive } from "../context/useActiveLink";
import { motion } from "framer-motion";


function Skills() {
    const{refs,addRef}=useActive()
    const variants={visible:{opacity:1,transition:{staggerChildren:.3,}},hidden:{opacity:0}}
    return (
        <>
            <h1  ref={el=>addRef(el)} id="skills" className=" capitalize text-center my-20 mt-24 text-7xl font-semibold text-violet-700 dark:text-gray-100 relative
            after:absolute lg:after:w-[20%] after:h-1 after:top-[50%] after:bg-pink-600 after:right-[20%]
            before:absolute lg:before:w-[20%] before:h-1 before:top-[50%] before:bg-pink-600 before:mr-2 before:left-[20%]">
                <span className=" w-0 lg:w-5 h-5 rounded-full bg-pink-600 absolute top-[69%] left-[43%] "></span>
                my skills
            </h1>
        <section className="flex-col py-20 md:flex-row items-center flex justify-center gap-10  md:items-stretch">
            <motion.div initial={{y:200,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:.5}}
            className=" bg-gray-200 dark:bg-slate-700 dark:text-gray-100 py-10 px-20 rounded-xl text-3xl font-code  flex flex-col items-center gap-5 w-[80%] lg:w-[40rem]">
                <FaLaptopCode className=" text-8xl text-gray-600 dark:text-gray-100 z-50 "/>
                <h1 className=" text-5xl font-semibold mb-5 ">{"< Code >"}</h1>
                <p>
                i have amazing programming excperience,tackled many
            started with solving c/c++ problems to
            mastring javascript then mainly using react for web development<br></br>

                </p>
                <motion.ul className=" mt-5 uppercase text-2xl flex gap-5 my-auto flex-wrap" initial='hidden' whileInView='visible' variants={variants} >
                <motion.li variants={variants} className=" py-2 px-10 rounded-full bg-gray-300 dark:bg-slate-800 inline-block">javascript</motion.li>
                <motion.li variants={variants} className=" py-2 px-10 rounded-full bg-gray-300  dark:bg-slate-800 inline-block">react</motion.li>
                <motion.li variants={variants} className=" py-2 px-10 rounded-full bg-gray-300  dark:bg-slate-800 inline-block">redux</motion.li></motion.ul>
            </motion.div>
            <motion.div initial={{y:200,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:.5}}
              className="  bg-gray-200 dark:bg-slate-700 dark:text-gray-100 py-10 px-20 rounded-xl text-3xl 
            flex flex-col items-center gap-5 w-[80%] lg:w-[40rem]">
            <FcGallery className=" text-8xl z-50  " />
                <h1 className=" text-5xl font-semibold mb-5 ">Design</h1>
                <p className=" text-3xl tracking-wide">
                i am not that much of a designer but i ve built many layouts
            starting from plain css to sass and mainly using tailwind to build
            my layouts
                </p>
                <motion.ul className=" uppercase text-[1.2rem] flex gap-5 flex-wrap mt-auto" initial='hidden' whileInView='visible' variants={variants}>
                <motion.li variants={variants} className=" py-2 px-10 rounded-full bg-gray-300 dark:bg-slate-800 inline-block">html</motion.li>
                <motion.li variants={variants} className=" py-2 px-10 rounded-full bg-gray-300 dark:bg-slate-800 inline-block">css</motion.li>
                <motion.li variants={variants} className=" py-2 px-10 rounded-full bg-gray-300 dark:bg-slate-800 inline-block">tailwind</motion.li>
                <motion.li variants={variants} className=" py-2 px-10 rounded-full bg-gray-300 dark:bg-slate-800 inline-block">sass</motion.li></motion.ul>
            </motion.div>
         
        </section>
        </>
    )
}

export default Skills
