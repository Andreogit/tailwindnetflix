import { React, useEffect, useState } from 'react'

function Hero() {
  const [outHeight, setoutHeight] = useState(0)
  const [height, setHeight] = useState(document.querySelector('body').outerHeight)
  useEffect(() => {
    setoutHeight(document.querySelector('.headwrapper').clientHeight)
    let y = window.innerWidth
    if (y < 550) {
      setHeight(555)
      return
    } else if (y < 644) {
      setHeight(706)
      return
    }
    else if (y < 740) {
      setHeight(700)
      return
    } else if (y < 956) {
      setHeight(706)
      return
    } else if (y < 1300) {
      setHeight(750)
      return
    }
    else if (y < 2100) {
      setHeight(756)
      return
    }
    else if (y < 3700) {
      setHeight(756)
      return
    } else setHeight(756)
  }, [])

  window.addEventListener('resize', () => {
    setoutHeight(document.querySelector('.headwrapper').clientHeight)
    let y = window.innerWidth
    if (y < 550) {
      setHeight(555)
      return
    } else if (y < 644) {
      setHeight(706)
      return
    }
    else if (y < 740) {
      setHeight(700)
      return
    } else if (y < 956) {
      setHeight(706)
      return
    } else if (y < 1300) {
      setHeight(750)
      return
    }
    else if (y < 2100) {
      setHeight(756)
      return
    }
    else if (y < 3700) {
      setHeight(756)
      return
    } else setHeight(756)
  })
  return (
    <div className='hero-card'>
      <div style={{ height: `${height - outHeight + 8}px` }} className='our-story-card-bg background border-b-[8px] border-[#222]'>
        <div style={{ height: `${height}px` }} className='image-wrapper absolute top-0 bottom-0 left-0 right-0'>
          <img id='bgimg' src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/0bbf2574-170a-48fa-9154-03978d201ba8/UA-uk-20230116-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/0bbf2574-170a-48fa-9154-03978d201ba8/UA-uk-20230116-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/0bbf2574-170a-48fa-9154-03978d201ba8/UA-uk-20230116-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/0bbf2574-170a-48fa-9154-03978d201ba8/UA-uk-20230116-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""
            className='object-cover overflow-clip h-full w-full origin-center selection:bg-transparent grayscale-[.1]' />
        </div>
        <div style={{ height: `${height}px` }} className="gradient shadow-bot bg-heroimg absolute top-0 left-0 right-0 bottom-0"></div>
        <div className='card-text text-center absolute top-[250px] 
        text-[1.6rem] m-auto w-full
        max-[1300px]:top-[230px]
        max-[950px]:px-4 
        max-[900px]:top-[200px]
        max-[690px]:top-[160px]
        max-[550px]:px-2 max-[550px]:top-[150px]
        max[400px]:px-[5px]
        '>
          <h1 className='z-[1] font-[500]
          text-[4.2rem] m-auto max-w-[940px] leading-[1]
          max-[1300px]:text-[3.6rem]
          max-[948px]:text-[2.8rem]
          max-[550px]:text-[2rem]
          max-[500px]:text-[1.7rem]
          max-[400px]:px-0'>
            Фільми, серіали й інший контент без обмежень.
          </h1>
          <h2 className="margin-auto py-4 px-4
          text-[1.8rem] m-auto max-w-[850px] leading-[1]
          max-[948px]:text-[1.7rem]
          max-[690px]:text-[1.5rem] 
          max-[500px]:text-[1.2rem]
          max-[200px]:px-0'>">
            Дивіться будь-де. Скасувати підписку можна будь-коли.
          </h2>
          <form>
            <h3 className="margin-auto py-2 px-2 pb-4
          text-[1.3rem] m-auto max-w-[1000px] leading-[1]
          max-[948px]:text-[1.2rem]
          max-[690px]:text-[1.1rem] 
          max-[200px]:px-0'>">
              Готові до перегляду? Введіть адресу електронної пошти, щоб оформити або поновити підписку.
            </h3>
            <div className="email-form flex px-20 items-center justify-center mt-4
            max-[950px]:flex-col 
            max-[950px]:px-2
            max-w-[850px] m-auto h-[4.4rem]
            ">
              <input autoComplete='email'
                className='h-full text-black flex-1
              max-[950px]:mb-[20px]
              max-[950px]:rounded-[2px]
              max-[700px]:min-w-[100%]
               text-[1rem] w-[60%] rounded-l-[2px] pl-[10px] py-[10px]' type="text" placeholder='Адреса електронної пошти' />
              <button onClick={e => e.preventDefault()} className='submit bg-red px-6 text-[2rem] pr-[1.3rem] h-full rounded-r-[2px]
              max-[950px]:rounded-[2px]
              max-[700px]:text-[1.6rem]
              max-[600px]:text-[1.3rem]
              max-[450px]:text-[1.1rem]
               inline-flex items-center justify-center'>
                <span className='pb-2 max-[700px]:py-[5px]'>
                  Почати
                </span>
                <svg className='w-[11px] ml-4' viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="white" fill-rule="evenodd"></path></svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Hero