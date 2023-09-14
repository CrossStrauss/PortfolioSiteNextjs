'use client'
import Lottie from "lottie-react"
import animdata from '../public/Building.json'

export default function Loading(){
    return <div className="w-full h-full flex items-center justify-center">
        <div className="w-1/2 h-1/2">
            <Lottie animationData={animdata}/>
        </div>
    </div>
}