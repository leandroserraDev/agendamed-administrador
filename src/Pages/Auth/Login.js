import { useNavigate } from 'react-router-dom';
import '../../input.css';
import { useForm } from 'react-hook-form';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import EnderecoAPI from '../../enderecoAPI/EnderecoAPI';

function Login({data}){

    const navigate = useNavigate();
    const { register, control, handleSubmit, reset, trigger, setError} = useForm({
    });
    const[errorAPI, setErrorAPI] = useState([]);

    async function submitData(data){
       await  fetch(`${process.env.REACT_APP_URI_API}/Auth`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then( response => {

             return response.json();
          }
        
        )
          .then(  data => {
console.log(data);
            if(data.success){

            var decodeToken = jwtDecode(data.data);

            if(decodeToken.role != "Administrador"){
              setErrorAPI({message:[{id: 1, message: "Sem acesso"}]})
              return;
            }

            localStorage.setItem("token", data.data);
            localStorage.setItem("id",decodeToken.sid);
            localStorage.setItem("userName",decodeToken.name);
            localStorage.setItem("email",decodeToken.email);
            navigate({pathname:"/"});
          }

          setErrorAPI(data)
        
          })
          .catch(error => console.error(error));
    }

    return(
        <div className="flex flex-row w-full justify-center items-center ">

        <form className="flex flex-col  w-[300px] border border-black rounded p-3 " onSubmit={handleSubmit(data =>submitData(data))}>
          <ul className="flex flex-col">

          <label for="E-mail" class="block mb-1 ml-4 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
          <input
          className='
          pl-2
           self-center
           h-[25px]
       "block  rounded-md border-0 mb-4  w-[90%] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-white focus:ring-1 focus:ring-indigo-600 sm:text-sm sm:leading-6"
           '
           
          type='email'
            {...register("email",  {  required: "Please enter your email." })} // custom message
          />
                    <label for="Password" class="block mb-1 ml-4 text-sm font-medium text-gray-900 dark:text-white">Password</label>

          <input
          className='
          pl-2
           self-center
           h-[25px]
       "block  rounded-md border-0  w-[90%] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-white focus:ring-1 focus:ring-indigo-600 sm:text-sm sm:leading-6"
           '
          type='password'
            {...register("password", { required: "Please enter your password." })} // custom message
          />
          </ul>
    
          <input type="submit" />
          {
            errorAPI.error && errorAPI.error.map((item,index)=>{
              return(
                <li className=' h-[20px]  text-red-500' key={item.id}>
                  <span>
                    {item.message}
                  </span>
                  </li>
              )
            })
          }
        </form>
        </div>
    
)
}

export default Login;