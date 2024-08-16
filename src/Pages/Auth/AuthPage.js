import { useState } from 'react';
import Login from './Login.js'
import '../../input.css';
import { set } from 'date-fns';

export default function AuthPage(){
const[novoUsuario, setNovoUsuario]= useState(false);
    return(
        <div className='flex flex-col  justify-center h-[100vh] w-full '>


      
       <Login/>
        
       
        </div>
    )
}