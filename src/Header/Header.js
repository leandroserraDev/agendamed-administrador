import '../index.css';
import MenuHeader from './MenuHeader';


function Header(){
    return (
        <div className='  z-50 sticky top-0 w-full'>

       <div className='flex 
        text-white
        flex-row
        justify-between
        items-center
                     bg-black  
                       w-full 
                       h-[50px]
                       rounded
                       p-1
                       bg-gradient-to-tr from-slate-700 to-slate-900
                       shadow-[0px_1px_20px_0px_#00000024]
                       shadow-black
                    '>

               

            <div className='m-4'>
                
            LOGO
            </div>
            <div>
            AGENDA MED
            </div>
            <div>
         <MenuHeader/>

            </div>
       </div>
       </div>

    )
}

export default Header;