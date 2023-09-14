'use client'
import { Suspense, useEffect, useState } from "react";
import {motion as m} from "framer-motion";
import Lottie from 'lottie-react';
import animData from '../public/109119-coding-slide.json';
import mobileAnim from '../public/Mobile_anim.json'

export default function Home()
 {
  const [IntroText, setIntroText] = useState("Loading ... ");

  useEffect(() => {
    const data = async () =>{
    const res = await fetch('/api/GetUserData')
    const test = await res.json()
    setIntroText(test.content)
    }
    data()
  },[])

  return (
    <div className="flex absolute w-full h-full overflow-hidden ">
    <div className="w-full h-full hidden lg:block">
      <div className="skew w-4/6 h-full">
        <m.div className="test colPrimary w-full h-1/2 flex justify-center items-center rounded pr-20"
               initial={{x:"-100%"}} 
               animate={{x:"-26%"}} 
               transition={{duration: 0.5}}
              >
            <div className="unskew w-3/4 h-5/6 flex">
              <div className="h-full w-2/5 ml-8 flex justify-center items-center">
                <img  src="/good_day.png" 
                      className ="rounded-lg w-[50%] 
                                  h-auto "/>
              </div>
              <div className="h-full w-2/5 flex items-center">
                <p id='test' className="text-zinc-50 text-center sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                  {IntroText}
                </p>
              </div>
            </div>
        </m.div>
        <m.div  className="colSecondary w-5/6 h-1/2 flex justify-center items-center" 
                initial={{x:"-100%"}} 
                animate={{x:"-25%"}} 
                transition={{duration: 0.5, delay:0.4}}>
        </m.div>
      </div>
      <m.div  className="w-full h-full flex justify-end items-center pb-10"
                initial={{y:"150%"}} 
                animate={{y:"-100%"}} 
                transition={{duration: 0.7, delay:0.4}}>
        <div className=" w-1/2">
          <Lottie animationData={animData} width={'100%'}/>
        </div>
      </m.div>
    </div>

      {/* Mobile responsive design */}
      <div className="h-full w-full flex items-center justify-center flex-col lg:hidden">
        <div className="w-full h-[10vh]"></div>
        <div className="h-[35vh] w-full flex items-center justify-center p-8">
          <div className=" w-full flex items-center colPrimary skew rounded-md p-4">
            <p id='test' className="text-zinc-50 text-center unskew text-sm md:text-xl">
              {IntroText}
            </p>
          </div>
        </div>
        <div className="h-[50vh] w-full flex items-center justify-center">
          <Lottie animationData={mobileAnim} width={"50%"}/>
        </div>
      </div>
    </div>
  )
}

