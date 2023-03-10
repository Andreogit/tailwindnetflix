import { React } from 'react'
import img from '../Assets/forkids.png'
function KidsProfiles() {
  return (
    <div className='flex border-b-8 py-12 px-12 max-[500px]:px-2 border-[#222]'>
      <div className="container flex flex-row-reverse justify-around min-[1600px]:justify-center items-center max-[950px]:flex-col m-auto
    ">
        <div className="text max-w-[500px] min-[1600px]:ml-10
      max-[950px]:w-full max-[950px]:px-4 max-[950px]:mb-4
      max-[350px]:mb-4
      ">
          <h1 className='text-[3rem] leading-[1.1] mb-6 font-bold 
        max-[950px]:text-center
        max-[948px]:text-[2.5rem]
        max-[640px]:text-[2.2rem]
        max-[550px]:text-[1.6rem]
        '>
            Створюйте профілі для дітей.
          </h1>
          <h2 className='text-[1.6rem] max-[950px]:m-auto leading-[1.25] max-w-[500px]
        max-[950px]:pr-0
        max-[950px]:text-center
        max-[1300px]:text-[1.4rem]
        max-[948px]:text-[1.3rem]
        max-[640px]:text-[1.2rem]
        max-[550px]:text-[1.1rem]'>
            Ваші діти зможуть мандрувати країною фантазії разом з улюбленими персонажами в спеціальних профілях, які входять у вартість підписки.
          </h2>
        </div>
        <div className="imgcontainer w-[40%] max-[950px]:w-full">
          <img src={img} className='max-[950px]:m-auto' alt="mobile" />
        </div>
      </div>
    </div>
  )
}

export default KidsProfiles