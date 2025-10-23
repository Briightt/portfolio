
import {motion} from 'framer-motion'
import video from './assets/template.mp4'
import image from './assets/image.webp'

export default function HeroPage ({slideChildContainer}) {

return (<>


<motion.div className="grid grid-cols-1 [grid-template-areas:'video'] max-w-full will-change-transform will-change-opacity" >
<video autoPlay = {true} muted = {true} loop = {true} src= {video} className='min-w-full max-h-full [grid-area:video] z-[-1]' >
</video>
<motion.div variants = {slideChildContainer} className='[grid-area:video] z-[1] flex flex-1 items-center justify-evenly font-medium leading-snug mb-15 p-3'>
<motion.div variants = {slideChildContainer} className='flex flex-col gap-2 flex-wrap items-start mb-5'>
<h1 variants = {slideChildContainer}className='text-[5rem] bg-gradient-to-bl from-[#ffa500] to-[#f80000] text-transparent bg-clip-text'>Mustafa Abdul Kareem</h1>
<h1 className='text-[3rem] text-[#ffffff] mb-5'variants = {slideChildContainer}>Front-End Web Developer Student</h1>
<motion.div className='flex self-start mb-5 gap-4' variants = {slideChildContainer}>
  <motion.button whileHover={{scale:1.1}}
   className='text-[#ffffff] border-2 border-orange-300 rounded-2xl p-2 min-w-33 transition-colors duration-200 hover:bg-orange-300 cursor-pointer active:bg-orange-950 '>Projects</motion.button>
  <motion.button whileHover={{scale:1.1}}
   className='text-white border-2 border-amber-600 rounded-2xl p-2 min-w-30 transition-colors duration-200 hover:bg-orange-800 active:bg-orange-950 cursor-pointer'>
    Contact</motion.button>
</motion.div>
<motion.div variants = {slideChildContainer} className='flex flex-row gap-5 mt-3'>
<motion.p  whileHover = {{translateY:-10}} transition={{duration:0.1, ease: 'easeInOut'}}
 className='bg-[#ffffff33] flex items-center justify-center flex-col rounded-2xl min-w-70 min-h-20 text-[#ffa500]'>
  <span  className='text-[1.8rem] font-bold'>6</span>
  <span  className='text-white text[0.7rem]'>Months Self-Study</span></motion.p>
<motion.p className='bg-[#ffffff33] flex items-center justify-center flex-col rounded-2xl min-w-70 min-h-20 text-[#ffa500]' transition={{duration:0.1, ease: 'easeInOut'}}
 whileHover = {{translateY:-10}} ><span  className='text-[1.8rem] font-bold'>10+</span>
<span  className='text-white text[0.7rem]'>Projects</span></motion.p>
<motion.p whileHover = {{translateY:-10}} transition={{duration:0.1, ease: 'easeInOut'}}
 className='bg-[#ffffff33] flex items-center justify-center flex-col rounded-2xl min-w-70 min-h-20 text-[#ffa500]'>
  <span  className='text-[1.8rem] font-bold'>2+</span>
  <span  className='text-white text[0.7rem]'>Months of Experience with React</span></motion.p>

</motion.div>
</motion.div>
<motion.div variants = {slideChildContainer} className='flex max-w-105 min-w-20'>
<motion.img variants = {slideChildContainer} src = {image} className=' rounded-2xl bg-clip-padding p-0.5 bg-gradient-to-tr from-gray-950 to bg-orange-400'>
</motion.img>
</motion.div>
</motion.div>
</motion.div>













</>)
}