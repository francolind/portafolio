import pc2 from '../assets/pc2.png';
import '../style/Skills.css'
import { useState } from 'react';
import { FaCss3Alt, FaHtml5, FaReact,FaGitSquare,FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress,SiNodedotjs,SiMysql,SiMongodb,SiBootstrap,SiFirebase } from "react-icons/si";
import { motion,  AnimatePresence } from "framer-motion";

export const Skills = () => {

        const [coll, setColl] = useState(false)
        console.log(coll)
        const handleClick = ()=> {
         setColl(!coll)
        };
     return(
         <section id='Skills' className="skills">
               <div className='my-skills'>
               <h2>MY SKILLS</h2>
                <div className="divider"></div>
               </div>
            <motion.img 
             animate={{ y: 100 }}
             transition={{ duration: 1 }}
            src={pc2} alt="computadora" />
            <motion.div 
                className="skills-info ">
                    <motion.p 
                     initial={{ opacity: 0, scale: 0.5 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5 }}>
                       I have the skills of a web developer.<br/> These are specific skills needed to successfully perform in a web developer role. Having these skills allows for correct coding and a functional website and better performance when performing daily tasks at work. <br/> As with any job, I am constantly developing my skills as a web developer. Practicing, learning the fundamentals of programming, general design skills, and testing and debugging code. </motion.p>
                    
                    <button onClick={handleClick} className='download'>My skills</button>
            </motion.div>
            <div className={ coll ? 'skillsContent active' : 'skillsContent'}>
                        <div className="about-icons"><FaCss3Alt size={100}/>Css</div>
                        <div className="about-icons"><FaHtml5 size={100}/>Html</div>
                        <div className="about-icons"><IoLogoJavascript size={100} />JavasCript</div>
                        <div className="about-icons"><FaReact size={100} />React</div>
                        <div className="about-icons"><SiExpress size={100} />Express</div>
                        <div className="about-icons"><SiNodedotjs size={100} />NodeJS</div>
                        <div className="about-icons"><SiMysql size={100} />MySQL</div>
                        <div className="about-icons"><SiMongodb size={100} />Mongodb</div>
                        <div className="about-icons"><SiBootstrap size={100} />Bootstrap</div>
                        <div className="about-icons"><FaGitSquare size={100} />Git</div>
                        <div className="about-icons"><SiFirebase size={100} />Firebase</div>
                        <div className="about-icons"><FaAws size={100} />AWS</div>
                    </div>
        </section>
       
     ) 
};