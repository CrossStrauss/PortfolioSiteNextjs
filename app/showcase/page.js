'use client'
import { motion as m } from "framer-motion";
import Lottie from 'lottie-react';
import animData from 'public/126196-jansmavip-html-and-coding-pages.json';

const Showcase = () => {
  return (
    <div className="absolute flex w-full h-full text-zinc-50 overflow-hidden">    
      <div className="absolute flex w-full h-full skew">
        <m.div  className="w-1/2 h-full colSecondary" 
                initial={{x:"-100%"}}
                animate={{x:"-70%"}}
                transition={{duration:0.5}}>
        </m.div>
        <m.div  className="w-1/2 h-full colPrimary"
                initial={{x:"100%"}}
                animate={{x:"70%"}}
                transition={{duration:0.5}}>
        </m.div>
      </div>
      <div className="absolute flex flex-col w-full h-full">
        <div className="w-full h-2/6">
          <div  className="w-1/4">
            <Lottie loop={false} animationData={animData}/>
          </div>
        </div>
        <div className="w-full h-4/6 flex justify-center items-center translate-x-40 -translate-y-32">
            <m.div  className="w-4/6 h-full border-4 rounded-lg borderCol"
                    initial={{y:"150%"}}
                    animate={{y:"0%"}}
                    transition={{duration:0.6, delay:0.5}}>

            </m.div>
        </div>
      </div>
    </div>
  )
}

export default Showcase

