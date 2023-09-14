'use client'
import React, { useState, useRef } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { motion as m, useAnimate } from "framer-motion";
import animData from '../../public/wing_mail.json';
import animLoader from '../../public/Loader.json'
import { useFormik } from 'formik';
import Lottie from 'lottie-react';

const Contact = () => {

   const [scope, animate] = useAnimate();

   const sentRef = useRef<Player>(null)

   const [Btndisable, setBtndisable] = useState({btnDis: false,
                                                 btnText: 'Submit',
                                                 btnHidden: false});

   const formik = useFormik({
      initialValues: {
         name: '',
         email: '',
         message: '',
      },
      onSubmit: values => {
         
         setBtndisable({btnDis: true,
                        btnText: 'Sending...',
                        btnHidden: true});

         const res = async ()=>{
           const apiMailCall =  await fetch('/api/PostEmail',{
               method:'POST',
               body: JSON.stringify({
                  values 
               }),
               headers:{'Content-Type': 'application/json'}
            })

            const dat = await apiMailCall.json()

            if(dat[0].sent == true){
               sentRef.current?.play();
               setBtndisable({btnDis: false,
                              btnText: 'Submit',
                              btnHidden: false});
            }

         }
         res()

      },
    });

  return (
   
   <div>
      {/* Desktop View */}
      <div className='w-full h-full absolute flex-col overflow-hidden hidden lg:flex'>
         <div className='w-full h-1/2 skew'>
            <m.div className='w-1/2 h-full colSecondary rounded'
                  initial={{x:"-100%"}}
                  animate={{x:"-50%"}}
                  transition={{duration:0.5}}>
            </m.div>  
         </div>
         <div className='w-full h-1/2 skew'>
            <m.div className='w-1/2 h-full colPrimary rounded'
                  initial={{x:"220%"}}
                  animate={{x:"150%"}}
                  transition={{duration:0.5}}>
            </m.div>  
         </div>
         <div className='w-full h-full absolute z-10 flex items-center justify-centers'>
            <m.div className='w-1/2 h-full'
                  initial={{y:"100%"}}
                  animate={{y:"0%"}}
                  transition={{duration:0.7, delay:0.1}}>
                  <div className='w-full h-full flex items-center justify-center '>
                     <div className='w-5/6 h-5/6 '>
                        <div className='w-5/6 h-5/6 bg-black opacity-50 absolute rounded-lg'/>
                        <div className='w-5/6 h-5/6 absolute z-20'>
                           <form className='w-full h-2/3 p-5' onSubmit={formik.handleSubmit}>
                              <input   name='name' 
                                       id='name' 
                                       className='ml-1 mb-2 mt-3 rounded' 
                                       onChange={formik.handleChange} 
                                       value={formik.values.name}
                                       placeholder='Full Name'/><br/>
                              <input name='email' className='ml-1 mb-2 mt-3 rounded' 
                                    onChange={formik.handleChange} 
                                    value={formik.values.email}
                                    placeholder='Email'/><br/>
                              <textarea name='message' 
                                       className='ml-1 mb-2 h-1/2 w-full mt-3 rounded max-h-[52%] min-h-[52%]' 
                                       onChange={formik.handleChange}
                                       value={formik.values.message}
                                       placeholder='Message...'/><br/>
                              <button type="submit" hidden={Btndisable.btnHidden} disabled={Btndisable.btnDis} className='text-2xl mb-5 text-[#DDDDDD] colPrimary p-2 ml-2 hover:bg-[#FF8C32] cursor-pointer rounded'>
                                 <span>{Btndisable.btnText}</span>
                              </button>
                              <div hidden={!Btndisable.btnHidden} className='w-full h-[10%]'> 
                                 <div className='w-[20%] h-full flex justify-center items-center'>
                                    <div className='w-[50%] '>
                                       <Lottie animationData={animLoader} loop={true}/>
                                    </div>
                                 </div>
                              </div>
                           </form>
                           <div className='w-full h-1/3 flex justify-center p-4 lg:items-end xl:items-center'>
                              <div className='w-1/2 flex justify-center p-1 flex-col rounded-md ml-2 bg-slate-50'>
                                 <p className='text-sm font-bold text-[#06113C] '>
                                    Emails responded to within 24 hours.  
                                 </p>
                                 <p className='text-sm font-bold text-[#06113C]'>
                                    Time zone: GMT+2 
                                 </p>
                                 <p className='text-sm font-bold text-[#06113C]'>
                                 South Africa
                                 </p>
                              </div>
                              <div ref={scope} className='lottieSent w-1/2 h-full flex justify-center items-center'>
                                 <div className='w-1/2 h-1/2 flex justify-center items-center'>
                                    <Player 
                                    src={animData}
                                    className='player'
                                    ref={sentRef}/>
                                 </div>
                              </div>
                           </div>
                        </div> 
                     </div>
                  </div>
            </m.div>
            <m.div className='w-1/2 h-full flex items-center justify-center'
                  initial={{y:"-100%"}}
                  animate={{y:"0%"}}
                  transition={{duration:0.7,delay:0.1}}>
               <div className='w-3/4 h-3/4'>
                  {/* <Lottie id='test' animationData={animData} loop={false} className='w-full h-full'/> */}
               </div>
            </m.div>
         </div>
      </div>
      {/* Mobile view */}
      <div className='flex items-center justify-center lg:hidden w-[100vw] h-[95vh] '>

         <div className='w-4/5 h-[78%] rounded-lg mt-[15vh] bg-slate-600 absolute z-10'>
            <form className='w-full h-2/3 p-5' onSubmit={formik.handleSubmit} >
                  <input   name='name' 
                           id='name' 
                           className='ml-1 mb-2 mt-3 rounded' 
                           onChange={formik.handleChange} 
                           value={formik.values.name}
                           placeholder='Full Name'/><br/>
                  <input name='email' className='ml-1 mb-2 mt-3 rounded' 
                     onChange={formik.handleChange} 
                     value={formik.values.email} 
                     placeholder='Email'/><br/>
                  <textarea name='message' 
                            className='ml-1 mb-2 h-1/2 w-full mt-3 rounded max-h-[52%] min-h-[52%]' 
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            placeholder='Message...'/><br/>
                  <div className='w-full h-[20%] flex justify-center items-center mt-[5vh]'>
                     <button type="submit" hidden={Btndisable.btnHidden} disabled={Btndisable.btnDis} className='text-2xl mb-5 text-[#DDDDDD] colPrimary p-2 ml-2 hover:bg-[#FF8C32] cursor-pointer rounded'>
                        <span>{Btndisable.btnText}</span>
                     </button>
                     <div hidden={!Btndisable.btnHidden} className='w-full h-full'> 
                        <div className='flex w-full h-full items-center justify-center '>
                           <div className='w-[40%] h-full flex items-center justify-center'>
                              <Lottie animationData={animLoader} loop={true}/>
                           </div>
                        </div>
                     </div>
                  </div> 
                  <div className='w-full flex-row mt-[2vh] md:mt-[5vh]'>
                     <p className='text-[2vh] font-bold text-[#DDDDDD]'>
                        Emails responded to within 24 hours.  
                     </p>
                     <p className='text-[2vh] font-bold text-[#DDDDDD]'>
                        Time zone: GMT+2 
                     </p>
                     <p className='text-[2vh] font-bold text-[#DDDDDD]'>
                        South Africa
                     </p>
                  </div>
            </form>
         </div>
      </div>
   </div>
  )
}

export default Contact