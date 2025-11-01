
import { useState} from 'react'
import {motion} from 'framer-motion'
import pimg1 from './assets/pimg1.png'
import pimg2 from './assets/pimg2.png'
import pimg4 from './assets/pimg4.png'
import pimg5 from './assets/pimg5.png'
import pimg6 from './assets/pimg6.png'
import pimg7 from './assets/pimg7.png'
import pimg8 from './assets/pimg8.png'
import loginimg from './assets/loginimg.png'
import {MdNavigateBefore} from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';


  

export default function Projects ({fadeChildContainer}) {


  const project1imgs = [pimg1,pimg2,pimg4,pimg5,loginimg]
   const project2imgs = [pimg6,pimg7]
   const project3imgs = [pimg8]

  const [indexes,setIndex] = useState({
    project1: 0,
    project2: 0,
    project3: 0
  })

  const nextImg = (projectimg,images, source) => {
  setIndex(prev => ({...prev, [projectimg]: (prev[projectimg] + 1) % images.length}))
  setSelectedImg(prev => ({...prev, [source]: null }))
   
  }
  
  const prevImg = (projectimg,images,source) => {
    setIndex(prev => ({...prev, [projectimg]: (prev[projectimg] - 1 + images.length) % images.length}))
    setSelectedImg(prev => ({...prev, [source]:null}))
  }
  
  const [selectedImg, setSelectedImg] = useState({
    p1:null,
    p2:null,
    p3:null
  })

  const selectImg = (source, value) => {
   setSelectedImg(prev => ({...prev, [source]: value}))
  }
  


return (<>

<motion.div className='flex justify-center mb-5 mt-10 overflow-auto' variants = {fadeChildContainer} >
<motion.h1 className='flex items-center text-[1.8rem] sm:text-[2.9rem] font-bold mt-10 mb-5 bg-clip-text bg-gradient-to-r text-transparent from-orange-400 to-red-400' 
 variants = {fadeChildContainer} >Projects</motion.h1>
</motion.div>
<motion.div className='flex justify-center items-center text-white gap-10' variants = {fadeChildContainer}>
<motion.span whileHover={{scale:1.2}} variants = {fadeChildContainer} ><MdNavigateBefore className='hidden md:block md:min-w-16 min-h-16 cursor-pointer select-none' onClick={() => prevImg('project1', project1imgs,'p1')}/></motion.span>
<motion.img src = {selectedImg.p1 ?? project1imgs[indexes.project1]} className='md:max-w-350 w-full rounded-2xl' variants = {fadeChildContainer} ></motion.img>
<motion.span className='cursor-pointer select-none' whileHover={{scale:1.2}} variants = {fadeChildContainer} ><MdNavigateNext className='hidden md:block md:min-w-16  min-h-16'  onClick={() => nextImg('project1', project1imgs,'p1')} /></motion.span>
</motion.div>
<motion.div className='flex gap-10 mt-5 mb-5 justify-center' variants = {fadeChildContainer}>
{project1imgs.map((item,index) => <motion.img key = {index} src = {item} onClick={() => selectImg('p1', item)} whileHover={{scale:1.2}} className='max-w-10 sm:max-w-25 md:max-w-30 cursor-pointer'></motion.img>)}
</motion.div>
<motion.div className='flex items-center justify-center mt-2' variants = {fadeChildContainer}>
<motion.p className='text-[#ffffffc9] text-[0.8rem] sm:text-base font-black leading-loose' variants = {fadeChildContainer} > E-commerce shopping website, unfinished missing kid's and women's page, but has a homepage, shopping cart, men's section, sign up page, login modal, the sign up credentials are linked to firebase </motion.p>
</motion.div>
<motion.div className='flex flex-col items-center' variants = {fadeChildContainer} >
<motion.div className='flex justify-center items-center text-white gap-10 mt-10' variants = {fadeChildContainer}>
<motion.span whileHover={{scale:1.1}} variants = {fadeChildContainer} ><MdNavigateBefore className='hidden md:block  md:min-w-16 min-h-16 cursor-pointer select-none' onClick={() => prevImg('project2', project2imgs,'p2')}/></motion.span>
<motion.img src = {selectedImg.p2 ?? project2imgs[indexes.project2]} className='w-full md:max-w-350 rounded-2xl' variants = {fadeChildContainer}  ></motion.img>
<motion.span className='cursor-pointer select-none' whileHover={{scale:1.1}}><MdNavigateNext className='hidden md:min-w-16 min-h-16 md:block '  onClick={() => nextImg('project2', project2imgs,'p2')} variants = {fadeChildContainer}  /></motion.span>

</motion.div>
<motion.div className='flex gap-10 mt-5 mb-5' variants = {fadeChildContainer}>
{project2imgs.map((item,index) => <motion.img key = {index} src = {item} onClick={() => selectImg('p2', item)} className='max-w-25 sm:max-w-25 md:max-w-45 cursor-pointer' variants = {fadeChildContainer} whileHover={{scale:1.2}}></motion.img>)}
</motion.div>
</motion.div>
<motion.div className='flex items-center justify-center mt-2 flex-wrap flex-1' variants = {fadeChildContainer}>
<motion.p className='text-[#ffffffc9] text-[0.8rem] sm:text-base font-black leading-loose' variants = {fadeChildContainer} >To do list with toggle, deleting, deadline tracking, and drag and drop for re-ordering, all stored in localStorage.</motion.p>
</motion.div>

<motion.div className='flex justify-center items-center text-white gap-10 mt-10'  variants = {fadeChildContainer}>
<motion.img src = {project3imgs[indexes.project3]} className='md:max-w-350 w-full rounded-2xl' variants = {fadeChildContainer} ></motion.img>

</motion.div>
<motion.div className='flex items-center justify-center mt-2 grow-0 shrink-0' variants = {fadeChildContainer}>
<motion.p className='text-[#ffffffc9] text-[1.2rem] md:text-[1.4rem] font-black leading-loose mb-10' variants = {fadeChildContainer} >Spotify UI Clone</motion.p>
</motion.div>

</>)














}
