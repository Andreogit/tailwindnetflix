import { React, useState } from 'react'

export default function Card({ question, answer }) {
    const [isOpened, setIsOpened] = useState(false)
    let handleClick = () => setIsOpened(!isOpened)
    return (
        <>
            <li className='m-auto mb-[2px] relative'><button onClick={handleClick} className='bg-[#333] py-[1.1rem] px-8 w-full text-[1.7rem] flex items-center justify-between 
                max-[900px]:text-[1.5rem]
                max-[690px]:text-[1.3rem]
                max-[420px]:text-[1.2rem]
                '>{question}
                <svg className={isOpened ? 'svg-opened' : 'svg-closed'} viewBox="0 0 26 26" class="svg-closed" focusable="true"><path fill='white' d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
            </button>
            </li>
            <div className={`${isOpened ? 'opened' : 'closed'} bg-[#333] text-[1.7rem] mb-2`}>
                <span className='inline-block py-[1.1rem] px-8
                max-[900px]:text-[1.3rem]
                max-[690px]:text-[1rem]
        '>
                    {answer}
                </span>
            </div>
        </>
    )
}
