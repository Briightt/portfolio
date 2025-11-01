
import {motion} from 'framer-motion'
import { MdMail, MdPhone } from 'react-icons/md';

export default function ContactPage ({slideChildContainer, formDisabled, formSubmit, handleNextRef, handleField, inputRef, field, setField, formRef}) {

return (<>
<motion.div className='flex flex-col md:flex-row justify-center gap-10 items-center md:items-start p-5  border-[#ffffff4d] bg-gradient-to-t from-[#ffad161f] 
to-[rgb(8, 8, 8)] mt-20 will-change-transform will-change-opacity w-full overflow-auto'
 variants = {slideChildContainer}>
<motion.div className='flex flex-col justify-center gap-5 p-5 border-1 border-[#807e7e65] rounded-2xl text-white min-h-62' variants = {slideChildContainer} whileHover={{scale:1.05, translateY:-10}}>
 <h1 className=' text-[1.7rem] font-bold bg-clip-text bg-gradient-to-r text-transparent from-orange-400 to-red-400 border-b-1 border-b-[#ffffff4f] w-full' variants = {slideChildContainer} >Contact Details</h1>
<p className='text-[1.2rem] flex items-center gap-2 ' variants = {slideChildContainer} ><MdMail className='text-white'/>Email</p><span className='font-light text-[#a09f9f] text-[1.1rem] leading-0'>Mustafaabdulkareem16@gmail.com</span>
<p className='text-[1.2rem] flex items-center gap-2 mt-3' variants = {slideChildContainer} ><MdPhone className='text-white'/>Phone</p><span className='font-light text-[#a09f9f] text-[1.1rem] leading-1'>+971503181776</span>
</motion.div>

<form className='rounded-2xl'  onSubmit={formSubmit} ref = {formRef}>
<fieldset className='flex flex-col items-start justify-center text-white border-1 border-[#807e7e65] rounded-2xl w-svw md:w-185' >
<motion.div className='flex items-start flex-col gap-2 p-5 text-white mt-2 ml-2' variants = {slideChildContainer} >
 <h1 className='mb-4 text-[1.75rem] font-bold bg-clip-text bg-gradient-to-l text-transparent from-orange-400 to-red-400 border-b-1 border-b-[#ffffff4f] w-full'  >Leave a message</h1>
<label className='text-[1.1rem] font-medium p-1'  >Name<spa className = 'text-red-500'> *</spa></label>
<input type = 'text' className='bg-[#80808023] rounded-2xl w-svw md:w-180 min-h-11 p-3 placeholder:text-sm'   placeholder='Your Full Name...' value = {field.name}
 onChange={(e) => handleField('name', e.target.value.trim())} onKeyDown={(e) => handleNextRef(field.name !== '' && e, inputRef[1], field.name)} ref = {inputRef[0]}  name="name"></input>

<label  className='text-[1.1rem] font-medium p-1'  >Email<spa className = 'text-red-500' > *</spa></label>
<input type = 'email' className='bg-[#80808023] rounded-2xl w-svw md:w-180 min-h-11 p-3 placeholder:text-sm' placeholder='Your Email...'value = {field.email} onChange={(e) => handleField('email', e.target.value.trim())} 
 onKeyDown={(e) => handleNextRef(field.email !== '' && e, inputRef[2], field.email)}  ref = {inputRef[1]}  name="email"></input>
<label  className='text-[1.1rem] p-1 font-medium'  >Message<spa className = 'text-red-500'> *</spa></label>
<textarea className='bg-[#80808023] rounded-2xl w-svw md:w-180 p-3 min-h-50'  placeholder='Leave a message...' value = {field.message} ref ={inputRef[2]} onChange={(e) => handleField('message',e.target.value)}  name="message"></textarea>
<button type = 'submit' 
className=
'bg-gradient-to-l from-orange-400 to-red-400 self-center mt-3 text-black font-semibold p-2 rounded-3xl min-w-55 cursor-pointer hover:opacity-70 active:opacity-50 transition-all ease-in-out duration-200' 
disabled = {formDisabled()}>Submit</button>

</motion.div>
</fieldset>
</form>
</motion.div>


</>)











}
