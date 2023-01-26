import { React } from 'react'
import tv from '../Assets/tv.png'
function OpenOnTv() {
  return (
    <div className='px-[45px] py-[45px] max-[500px]:px-2 border-b-[8px] border-[#222]'>
      <div className="container flex max-w-[1100px] m-auto items-center justify-between
      max-[950px]:flex-wrap
      ">
        <div className="text">
          <h1 className='text-[3.3rem] leading-[1.1] mb-6 font-bold pr-[20%]
          max-[950px]:pr-0
          max-[950px]:text-center
          max-[1300px]:text-[3rem]
          max-[948px]:text-[2.8rem]
          max-[640px]:text-[2.4rem]
          max-[550px]:text-[1.6rem]
          '>Дивіться на телевізорі.</h1>
          <h2 className='text-[1.6rem] leading-[1.25] pr-[15%]
          max-[950px]:pr-0
          max-[950px]:text-center
          max-[1300px]:text-[1.4rem]
          max-[948px]:text-[1.3rem]
          max-[640px]:text-[1.2rem]
          max-[550px]:text-[1.1rem]'>
            Дивіться на Smart TV, Playstation, Xbox, Chromecast, Apple TV, Blu-ray-програвачах тощо.
          </h2>
        </div>
        <div className="img-container m-auto relative flex flex-initial h-full w-[80%] overflow-hidden">
          <img className='' src={tv} alt="TV" />
        </div>
      </div>
    </div>
  )
}

export default OpenOnTv