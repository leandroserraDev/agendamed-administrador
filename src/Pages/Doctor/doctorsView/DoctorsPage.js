import { useEffect, useState } from 'react';
import '../../../input.css';
import TableDoctors from './TableDoctors';
import { useNavigate,createSearchParams } from 'react-router-dom';




function DoctorsPage(){
    const [_doctorList, SetDoctorList] = useState([]);
const navigate = useNavigate();
const goToNewDoctor = () =>
   navigate({
     pathname: '/doctor'
   });
    useEffect(() =>{

        fetch(`${process.env.REACT_APP_URI_API}/Doctor`)
     .then( response => {
        return response.json() 
     }
   
   )
     .then(  data => {
        SetDoctorList(data)
   
     })
     .catch(error => console.error(error));
   },[])
    return (
    <>
    <div className='flex  justify-end m-2 '>
      <button onClick={goToNewDoctor} className='
     duration-300
      hover:scale-105
      text-white
      bg-cyan-400 
                       rounded
                       p-1
                       bg-gradient-to-tr from-cyan-600 to-cyan-900
                       shadow-[0px_1px_6px_0px_#00000024]
                       shadow-black'>
         Novo médico
      </button>
    </div>
    <TableDoctors doctors={_doctorList}/>
    </>
    )
}

export default DoctorsPage;