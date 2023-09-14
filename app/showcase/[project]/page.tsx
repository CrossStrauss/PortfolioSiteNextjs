import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link"

type props = {
  project: String,
  url: Url
}


export default function page({project, url}:props) {
  return (
    <div className="w-1/6 h-[15%] lg:h-1/6 min-w-[60%] lg:min-w-[25%] border-4 m-[1%] cursor-pointer tiles font-bold bg-slate-50 rounded-md flex items-center justify-center skew">
      <Link href={url} target="_blank">
          <div className=" h-full text-[2vh] lg:text-[1.2vw] font-bold p-6 unskew ">
            <div>
              {project}
            </div>  
          </div>
      </Link>
    </div>
  )
}






