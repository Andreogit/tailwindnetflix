import { React } from 'react'

function Footer() {
  return (
    <div className='max-w-[950px] m-auto pt-16 pb-10 px-6'>
      <span className='text-[#777]'>
        Маєте запитання? Зателефонуйте за номером <a className='hover:underline' href='tel:0800-509-416'>
          0800-509-416
        </a>
      </span>
      <ul className='text-[.7rem] max-w-[950px] py-6 flex flex-wrap'>
        <li className='w-[25%] max-[740px]:w-[33%] max-[500px]:w-[50%] mb-4 pr-3 min-w-[100px] text-[13px] hover:underline text-[#777]'><a href="#">Поширені запитання</a></li>
        <li className='w-[25%] max-[740px]:w-[33%] max-[500px]:w-[50%] mb-4 pr-3 min-w-[100px] text-[13px] hover:underline text-[#777]'><a href="#"></a>Довідковий центр</li>
        <li className='w-[25%] max-[740px]:w-[33%] max-[500px]:w-[50%] mb-4 pr-3 min-w-[100px] text-[13px] hover:underline text-[#777]'><a href="#"></a>Обліковий запис</li>
        <li className='w-[25%] max-[740px]:w-[33%] max-[500px]:w-[50%] mb-4 pr-3 min-w-[100px] text-[13px] hover:underline text-[#777]'><a href="#"></a>Медіацентр</li>
        <li className='w-[25%] max-[740px]:w-[33%] max-[500px]:w-[50%] mb-4 pr-3 min-w-[100px] text-[13px] hover:underline text-[#777]'><a href="#"></a>Зв’язки з інвесторами</li>
        <li className='w-[25%] max-[740px]:w-[33%] max-[500px]:w-[50%] mb-4 pr-3 min-w-[100px] text-[13px] hover:underline text-[#777]'><a href="#"></a>Вакансії</li>
        <li className='w-[25%] max-[740px]:w-[33%] max-[500px]:w-[50%] mb-4 pr-3 min-w-[100px] text-[13px] hover:underline text-[#777]'><a href="#"></a>Способи перегляду</li>
        <li className='w-[25%] max-[740px]:w-[33%] max-[500px]:w-[50%] mb-4 pr-3 min-w-[100px] text-[13px] hover:underline text-[#777]'><a href="#"></a>Умови використання</li>
        <li className='w-[25%] max-[740px]:w-[33%] max-[500px]:w-[50%] mb-4 pr-3 min-w-[100px] text-[13px] hover:underline text-[#777]'><a href="#"></a>Конфіденційність</li>
        <li className='w-[25%] max-[740px]:w-[33%] max-[500px]:w-[50%] mb-4 pr-3 min-w-[100px] text-[13px] hover:underline text-[#777]'><a href="#"></a>Налаштування файлів cookie</li>
        <li className='w-[25%] max-[740px]:w-[33%] max-[500px]:w-[50%] mb-4 pr-3 min-w-[100px] text-[13px] hover:underline text-[#777]'><a href="#"></a>Корпоративна інформація</li>
        <li className='w-[25%] max-[740px]:w-[33%] max-[500px]:w-[50%] mb-4 pr-3 min-w-[100px] text-[13px] hover:underline text-[#777]'><a href="#"></a>Зв’язатися з нами</li>
        <li className='w-[25%] max-[740px]:w-[33%] max-[500px]:w-[50%] mb-4 pr-3 min-w-[100px] text-[13px] hover:underline text-[#777]'><a href="#"></a>Перевірка швидкості</li>
        <li className='w-[25%] max-[740px]:w-[33%] max-[500px]:w-[50%] mb-4 pr-3 min-w-[100px] text-[13px] hover:underline text-[#777]'><a href="#"></a>Юридичні повідомлення</li>
        <li className='w-[25%] max-[740px]:w-[33%] max-[500px]:w-[50%] max-[500px]:w-[50%] mb-4 pr-3 min-w-[100px] text-[13px] hover:underline text-[#777]'><a href="#"></a>Тільки на Netflix</li>
      </ul>
      <div className="select-big relative">
        <select className='selection focus:outline-none py-[.65rem] appearance-none text-[#898989] pl-[3rem] pr-[1.6rem] text-[1.1rem] bg-transparent border-[#333] border-[1px] rounded-[1px]'
          name="language" id="lang">
          <option>Українська</option>
          <option>Англійська</option>
          <option>Інше</option>
        </select>
      </div>
      <p className='text-[#777] text-[14px] pt-6'>Netflix Україна</p>
    </div>
  )
}

export default Footer