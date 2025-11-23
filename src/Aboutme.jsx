import { useEffect, useState, useRef, useMemo } from 'react'
import React from 'react'
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
  const intervalID = setInterval(() => setAge(Date.now()), 100)

  return () => {
    clearInterval(intervalID)
  }
  }, [

  ])

    
  const languages = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind', 'Motion Framer' ,'TypeScript.js']
  const img = useMemo(() => [html,css,js,react,tailwind,motionImg,ts], [])

 
  
  const [hoverIndex,setHoverIndex] = useState(null)

  const onMouseHover = (index) => {
    setTimeout(() => {setHoverIndex(index)}, 150)
  }

  return (<>
<motion.div className='flex flex-1 flex-col md:flex-row text-white justify-center md:items-start items-center  mt-12 sm:justify-evenly will-change-transform will-change-opacity w-full' >
<motion.div className='flex flex-col gap-7 w-full lg:max-w-[750px] max-w-[500px] leading-14 flex-wrap items-center justify-center md:items-start' variants = {slideChildContainer}>
<h1 className='text-[2.5rem] sm:text-6xl mb-4 font-bold bg-clip-text bg-gradient-to-t text-transparent from-orange-400 to-red-400' > About me</h1>
<p className='text-[#ffffffa8] sm:text-[1.2rem] font-light' ><span className='text-white text-[1.5rem]' >My name is Mustafa Abdul Kareem </span>, 

  <span className='text-orange-400 border-b-2 ml-1 mr-3 py-1' >I'm 24.{age}</span>
 
years old born in Iraq, now living in UAE, Sharjah.
 I started self-studying front-end web development six months ago,
  started with off with HTML, CSS and JS, now I'm focusing on React.js and TypeScript, developed around 10 plus projects, 
  would say I'm confident enough to do problem solving in JS, however just began typeScript.js not too recently and overtime 
  I learned tailwind to up the speed of my styling and framer motion to animate websites.</p>
  <motion.ul className='flex flex-row sm:max-w-3xl md:flex-nowrap justify-center items-center gap-10 max-w-md 
   mt-5 rounded-2xl sm:py-2 md:p-4 bg-[#97979711] mb-10 w-full h-full sm:leading-10 leading-8 ' whileHover={{translateY:-10}} transition={{duration:0.14, ease: 'easeInOut'}} variants = {slideChildContainer}>
  <li className='font-medium sm:text-[0.9rem] text-[0.75rem] md:text-[1.1rem] text-orange-400 flex flex-col  md:gap-1 lg:flex-row items-center justify-center' variants = {slideChildContainer}>Nationality:
     <span className='font-light text-[0.70rem] sm:text-[0.77rem]  md:text-[1.05rem] text-[#ffffffc5]' variants = {slideChildContainer}>Iraq</span></li>

  <li className='font-medium sm:text-[0.9rem] text-[0.75rem] md:text-[1.1rem] text-orange-400 flex flex-col gap-1 lg:flex-row items-center'aaaa variants = {slideChildContainer}>Location:
     <span className='font-light text-[0.70rem] sm:text-[0.77rem]  md:text-[1.05rem] text-[#ffffffc5]' variants = {slideChildContainer}>UAE, Sharjah</span></li>

  <li className='font-medium sm:text-[0.9rem] text-[0.75rem] md:text-[1.1rem] text-orange-400 flex flex-col gap-1 lg:flex-row items-center' variants = {slideChildContainer}>Spoken Languages: 
    <span className='font-light text-[0.70rem] sm:text-[0.77rem]  md:text-[1.05rem] text-[#ffffffc5]' variants = {slideChildContainer}>English, Arabic</span></li>

</motion.ul>
</motion.div>

<motion.div className='flex md:flex-col items-center justify-center md:justify-start md:gap-10 lg:gap-8 gap-1' variants = {slideChildContainer}>

<motion.h1 className='text-[1.1rem] p-3 md:text-[1.8rem] font-medium' variants = {slideChildContainer}>Experience</motion.h1>

{img.map((item,index) => 
<motion.div className='flex items-center justify-center md:gap-2 gap-2 flex-wrap' variants = {slideChildContainer} onMouseEnter={() => onMouseHover(index)} onMouseLeave={() => setHoverIndex(null)} 
whileHover={{filter: "brightness(1.4) saturate(2)", scale:1.05}} transition={{duration:0.5, ease: 'easeInOut'}}>
  <motion.img key = {index} src={item} className='sm:w-10 w-7' variants = {slideChildContainer} >
</motion.img><motion.span className='font-mono font-extralight text-gray-300 md:text-[0.9rem] text-[0.65rem] ' 
variants = {slideChildContainer}>{hoverIndex === index && languages[index]}</motion.span></motion.div>)}
</motion.div>
</motion.div>



</>)

}


