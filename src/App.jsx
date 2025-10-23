import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import {Link, Element} from 'react-scroll'
import {motion} from 'framer-motion'
import github from './assets/github.svg'
import twitter from './assets/twitter.svg'
import linkedin from './assets/linkedin.svg'
import HeroPage from './HeroPage'
import Aboutme from './Aboutme'
import Projects from './Projects'
import ContactPage from './ContactPage'
import emailjs from '@emailjs/browser'
import './App.css'


function App() {
  
useEffect(() => {
  document.title = 'Portfolio'
} ,

[])


  const {ref:HomeRef, inView:homeView} = useInView({
    threshold:0.4
  })

  const {ref:AboutMeRef, inView:AboutMeView} = useInView({
    threshold:0.4
  })

   const {ref:ProjectsRef, inView:projectsView} = useInView({
    threshold:0.33,triggerOnce: true
  })

    const {ref:contactRef, inView:contactView} = useInView({
    threshold:0.4
  })
  
  const {ref:fadeRef, inView:fadeView} = useInView({
    threshold:0.4
  })

    const {ref:slideRef, inView:slideView} = useInView({
    threshold:0.4
  })

  const fadeParentContainer = {
    hidden: {opacity:0},
    show:{opacity:1, transition:{staggerChildren:0.4}}
  }

    const fadeChildContainer = {
    hidden: {opacity:0},
    show:{opacity:1, transition:{duration:1}, ease:'easeInOut'}
  }

    const slideParentContainer = {
    hidden: {opacity:0},
    show:{opacity:1, transition:{staggerChildren:0.4}}
  }

    const slideChildContainer = {
    hidden: {opacity:0, x:-200},
    show:{opacity:1, x:0, transition:{duration:1.2, ease:'easeOut'}}
  }

  const formRef = useRef()

  const [field, setField] = useState({
    name:'',
    email:'',
    message:''
  })

  const handleField = (field, value) => {
    setField(prev => ({...prev, [field]: value}))
  }


  const inputRef = [useRef(null),useRef(null),useRef(null)]

  const handleNextRef = (e, nextRef) => {
  if(e.key === 'Enter') 
   nextRef.current.focus()
 
  }

const formDisabled = () => {
const {name,email,message} = field
 return !name.trim() || !email.trim() || !message.trim();
}

  const formSubmit = (e) => {
  e.preventDefault()
   emailjs.sendForm(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
  import.meta.env.VITE_EMAIL_TEMPLATE_ID,
  formRef.current,
  import.meta.env.VITE_EMAIL_PUBLIC_KEY  
  )
  .then(() => {
    window.alert('✅ Message sent successfully!')
    setField({ name: '', email: '', message: '' })
  })
  .catch((err) => {
    console.error('Error:', err)
    window.alert('❌ Something went wrong. Try again later.')
  })
}

  

  return (
    <>
<motion.header className="sticky top-0 left-0 z-[1000] bg-[#141313] p-3">
  <motion.nav
    ref={fadeRef}
    variants={fadeParentContainer}
    initial="hidden"
    animate={fadeView ? "show" : "hidden"}
    className="flex flex-wrap justify-around items-center mx-auto"
  >
    <div className="flex flex-wrap justify-center items-center gap-4 text-[#ffa500] font-semibold text-sm sm:text-base md:text-1xl">
      {["Home", "AboutMe", "Projects", "Contact"].map((section) => (
        <motion.span
          key={section}
          variants={fadeChildContainer}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={section}
            smooth
            duration={500}
            offset={section === "AboutMe" ? -200 : 0}
            className="cursor-pointer hover:text-[#fcaa1185] transition-colors duration-200"
          >
            {section === "AboutMe" ? "About" : section}
          </Link>
        </motion.span>
      ))}
    </div>

    <div className="flex gap-3 sm:gap-5 justify-center items-center mt-3 sm:mt-0">
      {[github, linkedin, twitter].map((icon, i) => (
        <motion.img
          key={i}
          src={icon}
          whileHover={{ scale: 1.1 }}
          className="w-6 sm:w-8 cursor-pointer rounded-md"
        />
      ))}
    </div>
  </motion.nav>
</motion.header>


<Element name = 'Home'>
  <motion.div variants = {slideParentContainer} ref ={HomeRef} initial = 'hidden' animate = {homeView ? 'show' : 'hidden'}>
<HeroPage slideChildContainer = {slideChildContainer}/>
</motion.div>
</Element>


 <div className='bg-gradient-to-t from-[#1f1f1f] to-[rgb(8, 8, 8)] p-1'>
  <Element name ='AboutMe'>
<motion.div variants = {slideParentContainer} ref ={AboutMeRef} initial = 'hidden' animate = {AboutMeView ? 'show' : 'hidden'}>
  <Aboutme slideChildContainer={slideChildContainer}/>
</motion.div>
</Element>

<Element name = 'Projects'>
<motion.div variants = {fadeParentContainer} ref ={ProjectsRef} initial = 'hidden' animate = {projectsView ? 'show' : 'hidden'}>
  <Projects fadeChildContainer={fadeChildContainer}/>
</motion.div>
</Element>

<Element name='Contact'>
<motion.div variants = {slideParentContainer} ref ={contactRef} initial = 'hidden' animate = {contactView ? 'show' : 'hidden'}>
<ContactPage slideChildContainer = {slideChildContainer} handleField = {handleField} formSubmit = {formSubmit}
 formDisabled = {formDisabled} handleNextRef = {handleNextRef} inputRef = {inputRef} field = {field} setField={setField} formRef = {formRef}/>
</motion.div>
</Element>
</div>

    </>
  )
}

export default App





  


