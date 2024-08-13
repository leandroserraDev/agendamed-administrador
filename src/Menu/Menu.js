import { useState } from 'react';
import '../input.css';
import MenuItem from './MenuItem';




function Menu(){

    const [openItemMenu, setOpenItemMenu] = useState(false); 
    console.log(openItemMenu);
    return(
        <div className=' flex   p-1 rounded w-[100px] '>
            <button className='

  p-1 rounded 
hover:border-b-[1px]
hover:transition-all
hover:duration-75

            w-full
            ' onClick={() => setOpenItemMenu(!openItemMenu)}> 
                MENU
            </button>
        <div className=
        {`
            ${openItemMenu ? 'transition-all duration-500 ' : ' transition-all duration-500 mr-[-100%]      '}
            fixed
            w-[160px]  
        top-11
        m-1
        right-0
        bg-white
         text-black
          rounded-sm
        '
    `}>
            <MenuItem />
         
        </div>
        </div>

    )
}

export default Menu;