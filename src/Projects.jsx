
import { useState,useMemo,useCallback} from 'react'
import {motion} from 'framer-motion'
import pimg1 from './assets/pimg1.webp'
import pimg2 from './assets/pimg2.webp'
import pimg4 from './assets/pimg4.webp'
import pimg5 from './assets/pimg5.webp'
import pimg6 from './assets/pimg6.webp'
import pimg7 from './assets/pimg7.webp'
import loginimg from './assets/loginimg.png'
import {MdNavigateBefore, MdTab} from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';
import html from './assets/html.svg'
import css from './assets/css.svg'
import js from './assets/js.svg'
import react from './assets/react.svg'
import tailwind from './assets/tailwind.svg'
import ts from './assets/ts.svg'
import motionImg from './assets/motion.svg'

import { ImNewTab } from "react-icons/im";



export default function Projects ({fadeChildContainer}) {

  const project1imgs = useMemo(() => [pimg1,pimg2,pimg4,pimg5,loginimg])
   const project2imgs = useMemo(() => [pimg6,pimg7])


  const [indexes,setIndex] = useState({
    project1: 0,
    project2: 0,
    project3: 0
  })

  const nextImg = useCallback((projectimg,images, source) => {
  setIndex(prev => ({...prev, [projectimg]: (prev[projectimg] + 1) % images.length}))
  setSelectedImg(prev => ({...prev, [source]: null }))
   
  })
  
  const prevImg = useCallback((projectimg,images,source) => {
    setIndex(prev => ({...prev, [projectimg]: (prev[projectimg] - 1 + images.length) % images.length}))
    setSelectedImg(prev => ({...prev, [source]:null}))
  })
  
  const [selectedImg, setSelectedImg] = useState({
    p1:null,
    p2:null,
    p3:null
  })

  const selectImg = useCallback((source, value) => {
   setSelectedImg(prev => ({...prev, [source]: value}))
  })

  const [imgmodal,setImgModal] = useState(false)
  const [imageM,setImageM] = useState(null)

  const passImageM = useCallback((value) => {
    setImageM(value)
    setImgModal(true)
  })


  const img1langs =  ['React', 'Javascript', 'CSS', 'Tailwind' , 'HTML', 'Motion Framer']
  const img2langs =  ['React', 'Javascript', 'CSS','Tailwind', , 'HTML']

  const img1Icons = useMemo(() => [react,js,css,tailwind,html,motionImg])
  const img2Icons = useMemo(() => [react,js,css,tailwind,html,html])

  const img1Style = useMemo(() =>
  ['  flex items-center justify-center rounded-2xl border border-white/11 bg-slate-500/11 backdrop-blur-md text-white/85 text-[0.8rem] 2xl:px-6 2xl:py-2 py-2 px-6 xl:py-1.5 xl:px-3.5 font-medium', 
   '  flex items-center justify-center rounded-2xl border border-white/11 bg-slate-500/11 backdrop-blur-md text-white/85 text-[0.8rem]   2xl:px-6 2xl:py-2 py-2 px-6 xl:py-1.5 xl:px-3.5 font-medium', 
   '  flex items-center justify-center rounded-2xl border border-white/11 bg-slate-500/11 backdrop-blur-md text-white/85 text-[0.8rem]    2xl:px-6 2xl:py-2 py-2 px-6 xl:py-1.5 xl:px-3.5 font-medium', 
   '  flex items-center justify-center rounded-2xl border border-white/11 bg-slate-500/11 backdrop-blur-md text-white/85 text-[0.8rem]   2xl:px-6 2xl:py-2 py-2 px-6 xl:py-1.5 xl:px-3.5 font-medium', 
   ' flex items-center justify-center  rounded-2xl border border-white/11 bg-slate-500/11 backdrop-blur-md text-white/85 text-[0.8rem]    2xl:px-6 2xl:py-2 py-2 px-6 xl:py-1.5 xl:px-3.5 font-medium', 
   ' flex items-center justify-center  rounded-2xl border border-white/11 bg-slate-500/11 backdrop-blur-md text-white/85 text-[0.8rem]    2xl:px-6 2xl:py-2 py-2 px-6 xl:py-1.5 xl:px-3.5 font-medium', 
  ], [])

   const img2Style = 
  ['flex items-center justify-center rounded-2xl border border-white/11 bg-slate-500/11 backdrop-blur-md text-white/85 text-[0.8rem] py-1.5 px-6 font-medium', 
   'flex items-center justify-center rounded-2xl border border-white/11 bg-slate-500/11 backdrop-blur-md text-white/85 text-[0.8rem] py-1.5 px-6 font-medium', 
   'flex items-center justify-center rounded-2xl border border-white/11 bg-slate-500/11 backdrop-blur-md text-white/85 text-[0.8rem] py-1.5 px-6 font-medium', 
   'flex items-center justify-center rounded-2xl border border-white/11 backdrop-blur-md bg-slate-500/11 text-white/85 text-[0.8rem] py-1.5 px-6 font-medium', 
   'flex items-center justify-center rounded-2xl border border-white/11 bg-slate-500/11 backdrop-blur-md text-white/85 text-[0.8rem] py-1.5 px-6 font-medium', 
    'flex items-center justify-center rounded-2xl border border-white/11 bg-slate-500/11 backdrop-blur-md text-white/85 text-[0.8rem] py-1.5 px-6 font-medium',
  ]

 
return (
<>
  
  {imgmodal && (
  <div
    className="fixed bg-black/70 top-0 left-0 w-full h-full z-1000 flex items-center justify-center"
    onClick={() => setImgModal(!imgmodal)}
  >
    <img
    loading='lazy'
      src={
      imageM || ''
      }
      className="w-full max-w-7xl"
    />
  </div>
)}



<motion.div className='flex justify-center mb-5 mt-10 ' variants = {fadeChildContainer} >
<motion.h1 className='text-[1.8rem] sm:text-[2.9rem] font-bold mt-10 mb-5 bg-clip-text bg-gradient-to-r text-transparent from-orange-400 to-red-400' 
 variants = {fadeChildContainer} >Projects</motion.h1>
</motion.div>

<div className='grid xl:grid-cols-2 lg:grid-cols-1 justify-center gap-30 2xl:p-20 xl:p-7'>
  
<div className='flex flex-col gap-7 w-full items-start  justify-center h-full border-white/5 border rounded-2xl p-10 bg-linear-to-t 
 from-slate-600/10 to-slate-500/10 backdrop-blur-md will-change-transform '>

<motion.div className='flex justify-center self-center items-center text-white will-change-transform' variants = {fadeChildContainer}>
<motion.span whileHover={{scale:1.2}} variants = {fadeChildContainer} ><MdNavigateBefore className='hidden md:block md:min-w-12 min-h-12 cursor-pointer select-none' onClick={() => prevImg('project1', project1imgs,'p1')}/></motion.span>
<motion.img decoding="async" loading='lazy' src = {selectedImg.p1 ?? project1imgs[indexes.project1]} className='w-full max-w-175 rounded-2xl cursor-pointer' variants = {fadeChildContainer} onClick={() => passImageM(selectedImg.p1 ?? project1imgs[indexes.project1])} ></motion.img>
<motion.span className='cursor-pointer select-none' whileHover={{scale:1.2}} variants = {fadeChildContainer} ><MdNavigateNext className='hidden md:block md:min-w-12 min-h-12'  onClick={() => nextImg('project1', project1imgs,'p1')} /></motion.span>
</motion.div>


<motion.div className='flex self-center gap-10 items-center justify-center will-change-transform' variants = {fadeChildContainer}>
{project1imgs.map((item,index) => <motion.img decoding="async" loading='lazy' key = {index} src = {item} onClick={() => selectImg('p1', item)} whileHover={{scale:1.2}} 
className='max-w-10 sm:max-w-25 md:max-w-28 lg:max-w-17 2xl:max-w-28 cursor-pointer'></motion.img>)}
</motion.div>
<h1 className='font-bold text-white text-[2rem] 2xl:self-start leading-7 mt-2'>Online clothing store</h1>
<motion.p className='text-[0.8rem] text-white/50 sm:text-[0.9rem] font-medium leading-loose' variants = {fadeChildContainer} >
 E-commerce shopping website, unfinished missing kid's and women's page, but has a homepage, shopping cart, men's section, sign up page,
  login page, the sign up credentials are linked to firebase. </motion.p>
  <div className='flex gap-5 flex-wrap'>
 {img1langs.map((item,index) =>
<div className = {`${img1Style[index]} line-clamp-1`}>
<p className='flex gap-2 items-center justify-center'>{item}<img decoding="async" loading='lazy' src = {img1Icons[index]} className='w-5 h-5'></img></p>
  </div>

)}
  
</div>
  <button className='cursor-pointer hover:opacity-75 hover:transition-opacity ease-linear flex
   items-center gap-3 py-2 px-10 font-bold bg-blue-500 text-white rounded-2xl 2xl:self-start shadow-[3px_5px_15px] shadow-blue-500'><a className='flex items-center gap-3' href = '' target='_blank'>Link<ImNewTab/></a></button>
</div>


<div className='flex flex-col gap-7 w-full items-start 2xl:items-start justify-center h-full border-white/5 border rounded-2xl p-10 bg-linear-to-t 
 from-slate-600/10 to-slate-500/10 backdrop-blur-md will-change-transform'>
<motion.div className='flex self-center justify-center items-center text-white will-change-transform ' variants = {fadeChildContainer}>
<span whileHover={{scale:1.1}} variants = {fadeChildContainer} ><MdNavigateBefore className='hidden md:block md:min-w-12 min-h-12 cursor-pointer select-none' onClick={() => prevImg('project2', project2imgs,'p2')}/></span>
<motion.img decoding="async" loading='lazy' src = {selectedImg.p2 ?? project2imgs[indexes.project2]} className='cursor-pointer w-full max-w-175 rounded-2xl' variants = {fadeChildContainer} onClick={() => passImageM(selectedImg.p2 ?? project2imgs[indexes.project2])} ></motion.img>
<span className='cursor-pointer select-none' whileHover={{scale:1.1}}><MdNavigateNext className='hidden md:min-w-12 min-h-12 md:block '  onClick={() => nextImg('project2', project2imgs,'p2')} variants = {fadeChildContainer}  /></span>
</motion.div>

<motion.div className='flex gap-10 justify-center items-center self-center will-change-transform' variants = {fadeChildContainer}>
{project2imgs.map((item,index) => <motion.img decoding="async" loading='lazy' key = {index} src = {item} onClick={() => selectImg('p2', item)}
 className='max-w-25 sm:max-w-25 md:max-w-40 lg:max-w-30 2xl:max-w-60 py-3 cursor-pointer' whileHover={{scale:1.2}} ></motion.img>)}
</motion.div>

<h1 className='font-bold text-white text-[2rem] 2xl:self-start leading-7 mt-2'>To-Do list</h1>
<motion.p className='text-[0.8rem] text-white/50 sm:text-[0.9rem] font-medium leading-loose' variants = {fadeChildContainer} >To do list with toggle, deleting, deadline tracking, and drag and drop for re-ordering, mainly used it for learning purposes all stored in localStorage.</motion.p>
  <div className='flex gap-5 flex-wrap'>
 {img2langs.map((item,index) =>
<div className = {`${img2Style[index]}`}>
<p className='flex gap-2 items-center justify-center'>{item}<img decoding="async" loading='lazy' src = {img2Icons[index]} className='w-5 h-5'></img></p>
  </div>
  

)}

</div>
<button className='cursor-pointer hover:opacity-75 hover:transition-opacity ease-linear
 flex items-center gap-3 py-2 px-10 font-bold bg-blue-500 text-white rounded-2xl 2xl:self-start shadow-[3px_5px_15px] shadow-blue-500'><a className='flex items-center justify-center gap-3' href = '' target='_blank'>Link<ImNewTab/></a></button>
</div>

</div>

</>)

}

