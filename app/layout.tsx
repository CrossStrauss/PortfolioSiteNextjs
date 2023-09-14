'use client'
import './globals.css'
import Link from 'next/link';
import { useState } from 'react';
import { useAnimate } from 'framer-motion';
import img1 from '../public/ResumeOfChrisStrauss_00001.jpg'

export const metadata = {
  title: 'Christopher Strauss portfolio',
  description: 'The skills portfolio of Christopher Strauss',
}

export default async function RootLayout({children,}: {children: React.ReactNode}) {

  const [scope, animate] = useAnimate()

  var cvVis = false;

  function showCV(){
    if(cvVis == false){
      animate([['.blackBackground',{y:0, opacity:0.5},{duration:0.3}],['.cvHolder',{y:0, opacity:1},{duration:0.3}]])
    } else {
      animate([['.cvHolder',{y:-1000, opacity:0},{duration:0.3}],['.blackBackground',{y:-1000, opacity:0},{duration:0.3}]]) 
    }
    cvVis = !cvVis
  }

  const date = new Date();
  let year = date.getFullYear();

  return (
    <html lang="en">
      <body>
        <main className="app">
          <div className='flex'>
            <div className='flex justify-center items-center topNavDiv h-screen'>
                <div className='w-full h-full'>
                  {children}
                </div>
            </div>
            <div className='sideNavDiv justify-center flex absolute sm:pr-0 lg:pr-20 xl:pr-20'>
                
                {/* Modified responsive design for links */}

                <div className='w-full flex items-center 
                                justify-around pr-[5%] 
                                pl-[5%] lg:pr-0 lg:pl-0 
                                lg:justify-end z-10 lg:bg-transparent
                                bg-slate-600 p-[2%] mt-5 lg:mt-0'>
                <ul>
                    <Link href="/">
                        <button className=' duration-200 text-zinc-50 skew 
                                          px-3 py-2 colSecondary btnFontCol 
                                          border-[#EEEEEE] hover:bg-[#06113C] rounded text-md
                                          md:text-2xl lg:mr-[2vw]'>
                        <p className='unskew'>
                          Home 
                        </p>
                        </button>
                    </Link>
                  </ul>
                  <ul> 
                    <Link href="/showcase">
                      <button className='duration-200 text-zinc-50 skew 
                                        px-3 py-2 colSecondary btnFontCol 
                                        border-[#EEEEEE] hover:bg-[#06113C] rounded text-md
                                        md:text-2xl lg:mr-[2vw]'>

                        <p className='unskew'>
                          Showcase
                        </p>
                      </button>
                    </Link>
                  </ul>
                  <ul>
                    <Link href="/contact">
                      <button className='duration-200 text-zinc-50 skew 
                                          px-3 py-2 colSecondary btnFontCol 
                                          border-[#EEEEEE] hover:bg-[#06113C] rounded text-md
                                          md:text-2xl lg:mr-[2vw]'>
                        <p className='unskew'>
                          Contact
                        </p>
                      </button>
                    </Link>
                  </ul>
                  <ul>
                    <button onClick={showCV} 
                            className=' text-zinc-50 skew px-3 
                            py-2 colPrimary btnFontCol
                            border-[#EEEEEE] hover:bg-[#FF8C32] rounded text-md
                            md:text-2xl lg:mr-[2vw]'>
                      <p className='unskew'>
                          Resumé
                      </p>
                    </button>
                  </ul>
                </div>
            </div>
            <div className="h-[5vh] w-full bg-slate-500 flex items-center justify-center font-bold text-zinc-50 absolute bottom-0 z-[-1]">
              <p>
                Copyright {year}
              </p>
            </div>
            {/* Modified responsive design for cv holder */}

            <div ref={scope} className='cvDiv w-full h-full flex absolute top-0 justify-center items-center overflow-hidden'>
              <div className='blackBackground w-full h-full bg-black absolute top-0 opacity-0 p-8 translate-y-full z-30'></div>
              <div className='cvHolder w-full h-5/6 translate-x-full flex z-40 flex-col'>
                <div className='w-full h-full flex items-start justify-center pt-4'>
                    <div className='w-4/6 h-5/6 border-2 rounded-md overflow-scroll'>
                      <img  className='w-full overflow-auto'
                        src='/ResumeOfChrisStrauss_00001.jpg'
                        alt="First page of resume"/>
                      <img  className='w-full overflow-auto'
                        src='/ResumeOfChrisStrauss_00002.jpg'
                        alt="First page of resume"/>
                    </div>
                </div>
                <div className='w-full h-full flex items-center justify-center'>
                  <div className='w-2/3 h-2/3 flex items-center justify-center'>
                    <Link href='/ResumeOfChrisStrauss.pdf' target='_blank'>
                      <button className='text-md md:text-lg lg:text-xl xl:text-2xl
                                       text-zinc-50 skew px-3 py-2 colPrimary btnFontCol rounded'>
                        <p className='unskew'>
                          Download Resumé
                        </p>
                      </button>
                    </Link>
                    <button onClick={showCV} className='text-md md:text-lg lg:text-xl xl:text-2xl
                                                      text-zinc-50 skew px-3 py-2 colPrimary btnFontCol rounded ml-[5%]'>
                      <p className='unskew'>
                          Close
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}