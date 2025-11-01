
import {motion} from 'framer-motion'
import video from './assets/template.mp4'
import image from './assets/image.webp'

export default function HeroPage ({slideChildContainer}) {

return (<>


<div variants = {slideChildContainer} className="grid grid-rows-1 [grid-template-areas:'video'] will-change-transform will-change-opacity justify-center mb-15" >
<video variants = {slideChildContainer} playsInline muted autoPlay loop disablePictureInPicture preload="auto" controls={false} src= {video} className='w-full [grid-area:video] h-auto object-cover
 will-change-transform will-change-opacity' >
</video>
<motion.div variants = {slideChildContainer} 
className='[grid-area:video] z-[1] flex flex-col lg:flex-row flex-1 items-center justify-center lg:justify-evenly font-medium leading-snug p-3 lg:gap-15'>
<motion.div variants = {slideChildContainer} className='flex flex-col gap-2 flex-wrap items-center lg:items-start'>
<h1 variants = {slideChildContainer}className='text-2xl sm:text-[3rem] lg:text-[4.2rem xl:text-[5rem] bg-gradient-to-bl from-[#ffa500] to-[#f80000]
 text-transparent bg-clip-text whitespace-nowrap'>Mustafa Abdul Kareem</h1>
<h1 className='text-xl sm:text-[2rem] md:text-[1.5rem] lg:text-[2.5rem] xl:text-[3rem] text-[#ffffff] mb-2 sm:mb-5'variants = {slideChildContainer}>Front-End Web Developer Student</h1>
<motion.div className='flex sm:mb-5 gap-4' variants = {slideChildContainer}>
  <motion.button whileHover={{scale:1.1}}
   className='text-[#ffffff] border-2 border-orange-300 rounded-2xl p-1 sm:p-2 md:min-w-33 transition-colors duration-200
    hover:bg-orange-300 cursor-pointer active:bg-orange-950 min-w-18 h-8 sm:text-base text-[0.8rem] sm:min-h-10 sm:min-w-30 flex items-center justify-center'>Projects</motion.button>
  <motion.button whileHover={{scale:1.1}}
   className='text-white border-2 border-amber-600 rounded-2xl sm:p-2 sm:min-w-30 
   transition-colors duration-200 hover:bg-orange-800 active:bg-orange-950 cursor-pointer min-w-18 h-8 sm:min-h-10 sm:text-base text-[0.8rem] p-1 flex items-center justify-center'>
    Contact</motion.button>
</motion.div>
<motion.div variants = {slideChildContainer} className='flex flex-row gap-5 mt-3'>
<motion.p  whileHover = {{translateY:-10}} transition={{duration:0.1, ease: 'easeInOut'}}
 className='bg-[#ffffff33] flex items-center justify-center flex-col rounded-2xl xl:w-70 xl:h-20
  text-[#ffa500] sm:whitespace-nowrap flex-1 flex-wrap min-w-22 h-10 sm:w-45 sm:h-15'>
  <span  className='xl:text-[1.8rem] sm:text-[1.3rem] text-[1.1rem] font-bold'>6</span>
  <span  className='text-white xl:text-base sm:text-[0.9rem] text-[0.65rem]'>Months Self-Study</span></motion.p>
<motion.p className='bg-[#ffffff33] flex items-center justify-center flex-col rounded-2xl
 xl:min-w-70 xl:min-h-20 text-[#ffa500] flex-1 flex-wrap sm:whitespace-nowrap min-w-20 h-10 sm:w-45 sm:h-15' transition={{duration:0.1, ease: 'easeInOut'}}
 whileHover = {{translateY:-10}} ><span  className='xl:text-[1.8rem] sm:text-[1.3rem] text-[1.1rem] font-bold'>10+</span>
<span  className='text-white xl:text-base sm:text-[0.9rem] text-[0.61rem]'>Projects</span></motion.p>
<motion.p whileHover = {{translateY:-10}} transition={{duration:0.1, ease: 'easeInOut'}}
 className='bg-[#ffffff33] flex items-center justify-center flex-col rounded-2xl xl:w-70 xl:h-20 sm:w-60 sm:h-15 text-[#ffa500] 
  flex-1 flex-wrap sm:whitespace-nowrap min-w-34 h-10'>
  <span  className='xl:text-[1.8rem] sm:text-[1.3rem] text-[0.9rem] font-bold'>2+</span>
  <span  className='text-white xl:text-base sm:text-[0.8rem] text-[0.55rem]'>Months of Experience with React</span></motion.p>

</motion.div>
</motion.div>
<motion.div variants = {slideChildContainer}>
<motion.img variants = {slideChildContainer} src = {image} className='hidden md:w-full lg:max-w-85 xl:max-w-100 lg:block 
rounded-2xl bg-clip-padding p-0.5 bg-gradient-to-tr from-gray-950 to bg-orange-400'>
</motion.img>
</motion.div>
</motion.div>
</div>













</>)

}





