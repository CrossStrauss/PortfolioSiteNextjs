'use client'
import React from 'react'
import Lottie from 'lottie-react';
import { motion as m } from "framer-motion";
import animData from 'public/89449-contacte-mail.json';
const Contact = () => {
  return (
    <div className="absolute w-full h-full overflow-hidden">
      <div className='absolute flex w-full h-full flex-row skew'>
        <div className='w-3/6 h-full flex justify-center items-center unskew'>
          <m.div  className='w-5/6 h-5/6 colSecondary'
                  initial={{y:"150%"}}
                  animate={{y:"0%"}}
                  transition={{duration:0.6, delay:0.5}}>

          </m.div>
        </div>
        <m.div  className='w-3/6 h-full colPrimary'
                initial={{x:"100%"}}
                animate={{x:"50%"}}
                transition={{duration:0.6}}>

                <m.div  initial={{x:"100%"}}
                        animate={{x:"-50%"}}
                        transition={{duration:0.6, delay:0.5}}>

                  <Lottie animationData={animData} className='unskew'/>
                </m.div>
        </m.div>
      </div>
    </div>
  )
}

export default Contact