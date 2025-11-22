
import {motion} from 'framer-motion'
import { MdMail, MdPhone } from 'react-icons/md';

export default function ContactPage ({slideChildContainer, formSubmit, formRef,register, handleSubmit, errors}) {

return (<>
<motion.div className='flex flex-col md:flex-row justify-center gap-10 items-center md:items-start p-5 border-[#ffffff4d] bg-gradient-to-t from-[#ffad161f] 
to-[rgb(8, 8, 8)] mt-20 will-change-transform will-change-opacity w-full h-full'
 variants = {slideChildContainer}>
<motion.div className='flex flex-col justify-center gap-5 p-7 border-1 border-[#807e7e65] rounded-2xl max-w-xs text-white w-full lg:max-w-xs h-full' variants = {slideChildContainer} whileHover={{scale:1.05, translateY:-10}}>
 <h1 className=' text-[1.7rem] font-bold bg-clip-text bg-gradient-to-r text-transparent from-orange-400 to-red-400 border-b-1 border-b-[#ffffff4f]' variants = {slideChildContainer} >Contact Details</h1>
<p className='text-[1.2rem] flex items-center gap-2 ' variants = {slideChildContainer} ><MdMail className='text-white'/>Email</p><span className='font-light text-[#a09f9f] text-[1.1rem] leading-0'>Mustafaabdulkareem16@gmail.com</span>
<p className='text-[1.2rem] flex items-center gap-2 mt-3' variants = {slideChildContainer} ><MdPhone className='text-white'/>Phone</p><span className='font-light text-[#a09f9f] text-[1.1rem] leading-1'>+971503181776</span>
</motion.div>

<form className='rounded-2xl w-full h-full max-w-4xl'  onSubmit={handleSubmit(formSubmit)} ref = {formRef}>
<fieldset className='flex flex-col items-start justify-center text-white border-1 border-[#807e7e65] rounded-2xl w-full h-full' >
<motion.div className='flex items-start flex-col gap-2 p-7 text-white w-full h-full' variants = {slideChildContainer} >
 <h1 className='mb-4 text-[1.75rem] font-bold bg-clip-text bg-gradient-to-l text-transparent from-orange-400 to-red-400 border-b-1 border-b-[#ffffff4f] w-full'  >Leave a message</h1>
<label className='text-[1.1rem] font-medium p-1'  >Name<spa className = 'text-red-500'> *</spa></label>
<input {...register('name', {required:'Your name is required!'})} type = 'text' 
className={`bg-[#80808023] rounded-2xl w-full h-full p-3 ${errors.name && 'ring ring-red-500'}`} placeholder:text-sm border-red   placeholder='Your Full Name...' name="name"></input>
{errors.name && <p className='text-red-500 font-bold'>{errors.name.message}</p>}

<label  className='text-[1.1rem] font-medium p-1'  >Email<spa className = 'text-red-500' > *</spa></label>
<input {...register('email', {required:'Your Email is required!'})} type = 'email'
 className={`bg-[#80808023] rounded-2xl w-full h-full p-3 placeholder:text-sm ${errors.email && 'ring ring-red-500'}`} placeholder='Your Email...'  name="email" ></input>
{errors.email && <p className='text-red-500 font-bold'>{errors.email.message}</p>}

<label  className='text-[1.1rem] p-1 font-medium'  >Message<spa className = 'text-red-500'> *</spa></label>
<textarea className={`bg-[#80808023] rounded-2xl w-full h-full p-4 min-h-55 resize-none overflow-hidden ${errors.message && 'ring ring-red-500'}`}  {...register('message', {required:'Your name is required!'})} {...register('message', {required:'Your Message is required!'})} placeholder='Leave a message...'  name="message"></textarea>
{errors.message && <p className='text-red-500 font-bold'>{errors.message.message}</p>}

<button type = 'submit' 
className=
'bg-gradient-to-l from-orange-400 to-red-400 self-center mt-3 text-black font-semibold p-3 rounded-3xl w-full max-w-xs cursor-pointer hover:opacity-70 active:opacity-50 transition-all ease-in-out duration-200' 
>Submit</button>

</motion.div>
</fieldset>
</form>
</motion.div>


</>)











}
