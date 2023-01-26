import { React } from 'react'
import mobile from '../Assets/mobile.jpg'
import boxshot from '../Assets/boxshot.png'
import icon from '../Assets/download-icon.gif'
function DownloadAndWatch() {
  return (
    <div className='DownloadAndWatch border-b-8 border-[#222]'>
      <div className="container flex flex-row-reverse px-[70px] py-[25px] max-[500px]:px-2 justify-evenly items-center relative 
      min-[1600px]:justify-center
      max-[950px]:flex-col
      ">
        <div className="text w-[500px] 
        max-[950px]:w-full max-[950px]:px-4 max-[950px]:mb-14
        max-[400px]:mb-20
        ">
          <h1 className='text-[3rem] leading-[1.1] mb-6 font-bold 
          max-[950px]:text-center
          max-[948px]:text-[2.5rem]
          max-[640px]:text-[2.2rem]
          max-[550px]:text-[1.6rem]
          '>
            Завантажуйте контент і дивіться його офлайн.
          </h1>
          <h2 className='text-[1.6rem] leading-[1.25]
          max-[950px]:pr-0
          max-[950px]:text-center
          max-[1300px]:text-[1.4rem]
          max-[948px]:text-[1.3rem]
          max-[640px]:text-[1.2rem]
          max-[550px]:text-[1.1rem]'>
            Легко зберігайте улюблені телесеріали й фільми, щоб дивитися їх будь-коли.</h2>
        </div>
        <div className="img-container min-h-full flex items-center flex-initial max-[950px]:mt-[-10%] max-[950px]:pt-[3%] max-[350px]:mb-[25px] max-[350px]:mt-[-23%] max-[266px]:hidden">
          <div className="animationcontainer overflow-hidden min-[950px]:ml-[-15%] flex items-center justify-center max-[950px]:pt-[-10%] max-[950px]:mb-[10%] max-[366px]:mb-[50px]">
            <div className="imgcontainer w-[80%] max-[400px]:w-full">
              <img src={mobile} alt="mobile" />
            </div>
            <div className="download border-2 overflow-hidden flex border-[#333] rounded-[20px] bg-black
         items-center absolute bottom-[15%] max-[950px]:bottom-[5rem] px-3 py-2 z-10 w-[20rem]
         max-[600px]:bottom-16
          max-[550px]:text-[1.1rem]
          max-[550px]:w-[50%]
          max-[420px]:bottom-8
          max-[320px]:bottom-4
         ">
              <div className="imagecontainer h-[5rem] mr-4 max-[500px]:mr-2 inline-flex
              max-[600px]:h-[4rem]
              max-[450px]:h-[3rem]
              'max-w-[100px] md:max-w-[50px]'
              ">
                <img src={boxshot} alt="stranger things" />
              </div>
              <div className="text inline-flex flex-col">
                <h1 className='font-bold
          max-[1300px]:text-[1rem]
          max-[700px]:text-[.9rem]
          max-[515px]:text-[.6rem]
                '>Дивні дива</h1>
                <h2 className='text-blue-600
                max-[1300px]:text-[1rem]
          max-[700px]:text-[.9rem]
          max-[515px]:text-[.5rem]
                '>Завантаження...</h2>
              </div>
              <div className="gifcontainer inline-flex absolute right-5 max-[400px]:right-2">
                <img className='h-[3rem] max-[400px]:h-[1.8rem]' src={icon} alt="download" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadAndWatch