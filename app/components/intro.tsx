import { NextPage } from "next";

interface props {
  introText :string
}

const intro: NextPage<props> = (props) => {

  return (
    <div className='w-full h-full flex items-center'>
        <p id='test' className="text-zinc-50 text-xl text-center">
            {props.introText}
        </p>
    </div>
  )
}

export default intro