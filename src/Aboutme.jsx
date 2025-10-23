import { useEffect, useState, useRef } from 'react'
import {easeInOut, motion, scale, useScroll, useTransform} from 'framer-motion'
import html from './assets/html.svg'
import css from './assets/css.svg'
import js from './assets/js.svg'
import react from './assets/react.svg'
import tailwind from './assets/tailwind.svg'
import ts from './assets/ts.svg'
import motionImg from './assets/motion.svg'



export default function Aboutme ({slideChildContainer}) {

  const [age,setAge] = useState(Date.now())

  useEffect(() => {
  const intervalID = setInterval(() => setAge(Date.now()), 10)

  return () => {
    clearInterval(intervalID)
  }
  }, [

  ])

    
  const languages = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind', 'Motion Framer' ,'TypeScript.js']
  const img = [html,css,js,react,tailwind,motionImg,ts]
  
  const [hoverIndex,setHoverIndex] = useState(null)

  const onMouseHover = (index) => {
    setTimeout(() => {setHoverIndex(index)}, 150)
  }

  return (<>
<motion.div className='flex flex-1 text-white justify-evenly mt-12 will-change-transform will-change-opacity' >
<motion.div className='flex flex-col max-w-175 gap-8 leading-12 flex-wrap' variants = {slideChildContainer}>
<h1 className='text-[3.5rem] mb-4 font-bold bg-clip-text bg-gradient-to-t text-transparent from-orange-400 to-red-400' > About me</h1>
<p className='text-[#ffffffa8] text-[1.2rem] font-light' ><span className='text-white text-[1.5rem]' >My name is Mustafa Abdul Kareem</span>,
 <span className='text-orange-400 underline-offset-2 decoration-1 underline mr-1' >I'm 24.{age} </span>
years old born in Iraq, now living in UAE, Sharjah.
 I started self-studying front-end web development six months ago,
  started with off with HTML, CSS and JS, now I'm focusing on React.js and TypeScript, developed around 10 plus projects, 
  would say I'm confident enough to do problem solving in JS, however just began typeScript.js not too recently and overtime 
  I learned tailwind to up the speed of my styling and framer motion to animate websites.</p>
  <motion.ul className='flex gap-10 whitespace-nowrap mt-5 rounded-2xl p-4 bg-[#97979711] mb-10' whileHover={{translateY:-10}} transition={{duration:0.14, ease: 'easeInOut'}} variants = {slideChildContainer}>
  <li className='font-medium text-[1.1rem] text-orange-400' variants = {slideChildContainer}>Nationality: <span className='font-light text-[1.05rem] text-[#ffffffc5] ' variants = {slideChildContainer}>Iraq</span></li>
  <li className='font-medium text-[1.1rem] text-orange-400' variants = {slideChildContainer}>Location: <span className='font-light text-[1.05rem] text-[#ffffffc5]' variants = {slideChildContainer}>UAE, Sharjah</span></li>
  <li className='font-medium text-[1.1rem] text-orange-400' variants = {slideChildContainer}>Spoken Languages: <span className='font-light text-[1.05rem] text-[#ffffffc5]' variants = {slideChildContainer}>English, Arabic</span></li>
</motion.ul>
</motion.div>

<motion.div className='flex flex-col items-center justify-center gap-5' variants = {slideChildContainer}>

<motion.h1 className='text-[1.8rem] font-medium border-[#ffffff5b]' variants = {slideChildContainer}>Experience</motion.h1>
{img.map((item,index) => 
<motion.div className='flex items-center justify-center' variants = {slideChildContainer} onMouseEnter={() => onMouseHover(index)} onMouseLeave={() => setHoverIndex(null)} whileHover={{filter: "brightness(1.4) saturate(2)", scale:1.1}} transition={{duration:0.5, ease: 'easeInOut'}}>
  <motion.img key = {index} src={item} className='w-10' variants = {slideChildContainer} >
</motion.img><motion.span className='font-mono font-extralight text-gray-300 text-[0.9rem] ml-2' variants = {slideChildContainer}>{hoverIndex === index && languages[index]}</motion.span></motion.div>)}
</motion.div>
</motion.div>



</>)
}