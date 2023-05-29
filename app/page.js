'use client'
import {motion as m} from "framer-motion";
import Lottie from 'lottie-react';
import animData from '../public/109119-coding-slide.json';

const Home = () => {
  return (
    <div className="flex absolute w-full h-full overflow-hidden">
      <div className="skew w-4/6 h-full">
        <m.div className="test colPrimary w-full h-1/2 flex justify-center items-center"
               initial={{x:"-100%"}} 
               animate={{x:"-26%"}} 
               transition={{duration: 0.5}}
              >
            <div className="unskew w-3/4 h-5/6 flex">
              <div className="h-full w-2/5 flex justify-center items-center">
                <img  src="/placeholder.jpg" 
                      className ="rounded-full w-64 
                                  h-64"/>
              </div>
              <div className="h-full w-3/5">
                <p className="text-zinc-50 text-base text-center">
                  Praesent ac mauris elit. Ut feugiat tempus diam, sed luctus sapien euismod sed. 
                  Nam a lacus nibh. Duis nec pharetra enim, eget luctus lorem. Praesent quis pharetra arcu. 
                  Fusce id molestie nunc, eu aliquet neque. Vestibulum lacus neque, posuere ac elit sit amet, elementum malesuada tellus. 
                  Praesent pharetra iaculis dapibus. Vestibulum pretium porta risus, vitae mollis felis pretium porta. 
                  Aenean pretium et libero vitae elementum. Cras et eleifend magna, sit amet eleifend felis. In hac habitasse platea dictumst. 
                  Donec sodales, tortor non laoreet feugiat, ipsum nisl congue dolor, at venenatis lectus augue ut urna. Cras malesuada varius leo.
                  Nam a lacus nibh. Duis nec pharetra enim, eget luctus lorem. Praesent quis pharetra arcu. 
                  Fusce id molestie nunc, eu aliquet neque. Vestibulum lacus neque, posuere ac elit sit amet, elementum malesuada tellus. 
                  Praesent pharetra iaculis dapibus. Vestibulum pretium porta risus, vitae mollis felis pretium porta. 
                </p>
              </div>
            </div>
        </m.div>
        <m.div  className="colSecondary w-5/6 h-1/2 flex justify-center items-center" 
                initial={{x:"-100%"}} 
                animate={{x:"-25%"}} 
                transition={{duration: 0.5, delay:0.4}}>
                <div className="unskew w-3/6 h-5/6">
                    
                </div>
        </m.div>
      </div>
      <div className="-translate-x-20 w-3/6 h-full flex justify-center items-center overflow-hidden">
        <m.div  className="w-full h-full flex justify-center items-center"
                initial={{y:"150%"}} 
                animate={{y:"0%"}} 
                transition={{duration: 0.5, delay:0.3}}>
            <Lottie animationData={animData}/>
        </m.div>
      </div>
    </div>
  )
}

export default Home
