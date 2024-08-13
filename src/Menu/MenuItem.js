import '../input.css';
import { IoHome, IoPeople  } from "react-icons/io5";

function MenuItem(){

    return  (
        <div 
        
        > 
       <div className=' w-full' >
        <a href='/' className=' flex border-b-2 items-center  '>
            <div className='w-[50%] m-2 ml-4  '>
            <IoHome className=' '/>

            </div>

            <span className='w-full '>
            Início
            </span>

            

        </a>

        </div>

        <div className=' w-full' >
        <a href='/doctors' className=' flex border-b-2 items-center '>
            <div className='w-[50%] m-2 ml-4 '>
            <IoPeople className=''/>

            </div>

            <span className='w-full'>
            Médicos
            </span>

            

        </a>

        </div>
               
    
    </div>
    )
}

export default MenuItem;