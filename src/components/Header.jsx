import { React } from 'react'
import logo from '../Assets/Netflix_Logo_PMS.png'
function Header() {
  return (
    <div className="headwrapper max-w-[1920px] relative top-0 left-0 m-auto overflow-hidden">
      <div className='bg-transparent w-full relative z-[1] pt-2'>
        <div className="flex max-[400px]:justify-center max-[400px]:m-0 max-[700px]:ml-4 max-[700px]:mr-6 justify-between items-center ml-8 mr-12">
          <img className='h-[5.5rem] max-[950px]:h-[4rem] max-[700px]:h-[3.3rem] object-cover saturate-[1.4] brightness-[.83]' src={logo} alt="logo" />
          <div className='flex justify-between items-center'>
            <div className="select-wrapper">
              <select className='selection pb-[9px] max-[550px]:p-1 max-[550px]:px-5 appearance-none text-white py-[.4rem] px-[1.5rem] w-full text-sm bg-transparent border-white border rounded-[2px]'
                name="language" id="lang">
                <option>Українська</option>
                <option>Англійська</option>
                <option>Інше</option>
              </select>
            </div>
            <button className='bg-red text-[1.2rem] ml-8 
            max-[700px]:ml-3 
            max-[700px]:text-[1rem] 
            max-[700px]:p-1 
            max-[700px]:px-2 
            max-[500px]:m-1 
            max-[500px]:text-[.9rem] 
            max-[500px]:px-2
            pb-[9px] py-[.4rem] px-[1.1rem] font-Netflix text-white text-sm rounded-[3px] h-min'>Увійти</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header