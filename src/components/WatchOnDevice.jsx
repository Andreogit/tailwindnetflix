import { React } from 'react'

function WatchOnDevice() {
  return (
    <div className='flex border-b-8 px-12 overflow-hidden py-12 border-[#222] '>
      <div className="container flex flex-row justify-between items-center min-[1600px]:justify-center max-[950px]:flex-col m-auto
    ">
        <div className="text min-w-[420px] 
        px-10
      max-[950px]:w-full max-[950px]:px-4 max-[950px]:mb-4
      max-[350px]:mb-4
      ">
          <h1 className='text-[3rem] leading-[1.1] mb-6 font-bold 
        max-[950px]:text-center
        max-[948px]:text-[2.5rem]
        max-[640px]:text-[2.2rem]
        max-[550px]:text-[1.6rem]
        '>
            Дивіться будь-де.
          </h1>
          <h2 className='text-[1.6rem] m-auto leading-[1.25] max-w-[500px] 
        max-[950px]:pr-0
        max-[950px]:text-center
        max-[1300px]:text-[1.4rem]
        max-[948px]:text-[1.3rem]
        max-[640px]:text-[1.2rem]
        max-[550px]:text-[1.1rem]'>
            Дивіться фільми й телесеріали без обмежень на смартфоні, планшеті, ноутбуці й телевізорі без доплат.
          </h2>
        </div>
        <div className="imgcontainer max-[400px]:w-full">
          <img src="./Assets/device-pile.png" alt="mobile" />
        </div>
      </div>
    </div>
  )
}

export default WatchOnDevice