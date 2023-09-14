'use client'
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Lottie from 'lottie-react';
import animData from '../../public/ShowcaseAnim.json';
import Project from './[project]/page'

const Showcase = () => {

  const PlaceholderData = {
    id: 0,
    url: '',
    description: 'Loading...'
  }
  const [ProjectsData, setProjectsData] = useState([PlaceholderData])

  useEffect(() => {
    const data = async () =>{
    const res = await fetch('/api/GetProjectsData')
    const projects = await res.json()
    const projData = Object.entries(projects)
    setProjectsData(projects)
    }
    data()
  },[])

  return (
    <div className="w-full h-full">
      <div className="absolute flex w-full h-full text-zinc-50 overflow-hidden hidden lg:block">    
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
            <div className="w-1/4">
              <Lottie loop={false} animationData={animData}/>
            </div>
          </div>
          <div className="w-full h-4/6 flex justify-center items-center translate-x-40 -translate-y-32 z-20">
              <m.div    
                      className="w-4/6 h-full border-4 rounded-lg borderCol flex flex-wrap p-5"
                      initial={{y:"150%"}}
                      animate={{y:"0%"}}
                      transition={{duration:0.6, delay:0.5}}>
                      {ProjectsData.map((i)=>{
                        return <Project key={i.id} project={i.description} url={i.url}/>
                      })}
              </m.div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center lg:hidden pt-[12%]">
        <div className="w-4/5 h-[88%] border-4 rounded-lg borderCol flex items-center flex-col z-20">
          {ProjectsData.map((i)=>{
            return <Project key={i.id} project={i.description} url={i.url}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Showcase

