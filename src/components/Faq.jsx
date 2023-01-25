import { React } from 'react'
import Card from './Card'
function Faq() {
  var qa = [
    {
      title: 'Що таке Netflix?',
      answer: "Netflix — це сервіс потокового передавання відео, що дає змогу дивитися різноманітні відзначені нагородами телесеріали, фільми, аніме, документалістику й інший контент на тисячах пристроїв із підключенням до Інтернету. Ви можете дивитися скільки завгодно й коли завгодно без реклами, і все це за єдиною низькою щомісячною ціною.Ви завжди знайдете для себе щось нове.Крім того, ще більше телесеріалів і фільмів додається щотижня!"
    },
    {
      title: "Скільки коштує підписка Netflix?",
      answer: "Дивіться Netflix на смартфоні, планшеті, Smart TV, ноутбуці або пристрої потокової передачі за фіксованою щомісячною ціною. Плани від 4,99 EUR до 9,99 EUR на місяць. Без доплат й угод."
    },
    {
      title: "Де можна дивитися контент?",
      answer: "Дивіться будь-де, будь-коли. Увійдіть у свій обліковий запис Netflix, щоб дивитися контент онлайн на сайті netflix.com з персонального комп’ютера або будь-якого пристрою з підключенням до Інтернету, на якому можна завантажити застосунок Netflix, як-от Smart TV, смартфон, планшет, медіапрогравач для потокової передачі або ігрова приставка. Крім того, ви можете завантажувати улюблені телешоу в застосунку для iOS, Android або Windows 10. Завантажуйте контент і дивіться його в дорозі навіть без підключення до Інтернету. Беріть Netflix із собою."
    },
    {
      title: "Як скасувати підписку Netflix?",
      answer: "Netflix надає гнучкі умови. Жодних надокучливих угод чи зобов’язань. Скасувати підписку можна всього за два кліки. Жодних комісій за скасування. Оформити або скасувати підписку можна будь-коли."
    },
    {
      title: "Що можна подивитися на Netflix?",
      answer: "Netflix пропонує обширну бібліотеку художніх фільмів, документалістики, телесеріалів, аніме, відзначеного нагородами оригінального контенту тощо. Дивіться скільки завгодно й коли завгодно."
    },
    {
      title: "Netflix підходиться для дітей?",
      answer: "Інтерфейс Netflix для дітей включено у вашу підписку. Діти можуть насолоджуватися телесеріалами й фільмами для всієї родини у своєму профілі, а батьки при цьому контролюватимуть такий контент.<br><br>Дитячі профілі захищаються батьківським контролем із PIN-кодом. Таким чином ви зможете ставити вікові обмеження на дитячий контент і блокувати певні найменування, щоб дитина їх не переглядала."
    },
    {
      title: "Чому відображається текст цією мовою?",
      answer: "Бо державною!"
    },
  ]
  return (
    <div className='m-auto max-w-[1800px] pt-12 m-auto border-b-[8px] border-[#222]'>
      <h1 className='text-[3.1rem] font-[600] text-center mb-8'
      >Поширені запитання</h1>
      <ul className='max-w-[825px] m-auto mb-14 px-4 max-[500px]:px-0'>
        {qa.map(elem => {
          return <Card question={elem.title} answer={elem.answer} />
        })}
      </ul>
      <div className='max-w-[900px] m-auto text-center pb-16'>
        <form>
          <h3 className="margin-auto py-2 px-2 pb-2
          text-[1.3rem] m-auto max-w-[1000px] leading-[1]
          max-[950px]:text-[1.2rem]
          max-[950px]:m-4
          max-[690px]:text-[1.1rem] 
          max-[200px]:px-0'>">
            Готові до перегляду? Введіть адресу електронної пошти, щоб оформити або поновити підписку.
          </h3>
          <div className="email-form flex px-20 items-center justify-center mt-4
            max-[950px]:flex-col 
            max-[950px]:px-2
            max-w-[850px] m-auto
            min-w-[300px]
            ">
            <input autoComplete='email'
              className='h-14 text-black
              max-[950px]:mb-[20px]
              max-[950px]:rounded-[2px]
              max-[950px]:h-full
              max-[700px]:text-[1rem]
              max-[600px]:text-[0.7rem]
              max-[450px]:text-[0.5rem]
               text-[1rem] w-[60%] rounded-l-[2px] pl-[10px] py-[10px]' type="text" placeholder='Адреса електронної пошти' />
            <button onClick={e => e.preventDefault()} className='submit bg-red px-6 text-[2rem] pr-[1.3rem] rounded-r-[2px] h-14
              max-[950px]:rounded-[2px]
              max-[950px]:h-full
              max-[700px]:text-[1.6rem]
              max-[600px]:text-[1.3rem]
              max-[450px]:text-[1.1rem]
               inline-flex items-center justify-center'>
              <span className='pb-2 max-[700px]:pb-[5px]'>
                Почати
              </span>
              <svg className='w-[11px] ml-4' viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="white" fill-rule="evenodd"></path></svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Faq