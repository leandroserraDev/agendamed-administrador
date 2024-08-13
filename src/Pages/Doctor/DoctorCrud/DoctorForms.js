import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import '../../../input.css';
import { useNavigate, useSearchParams } from "react-router-dom";

function DoctorForms() {
  const navigate = useNavigate();
  const { register, control, handleSubmit, reset, trigger, setError} = useForm({
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [doctor, setDoctor] = useState();

  useEffect(() =>{
  const idParameter = searchParams.get("id");
    if(idParameter != null){

      fetch(`https://localhost:7036/api/Doctor/${idParameter}`)
   .then( response => {
      return response.json() 
   }
 
  )
   .then(  data => {
      setDoctor(data)
      reset( data);
   })
   .catch(error => console.error(error));


  }
    
 },[])


  function submitData(data){
    fetch(`https://localhost:7036/api/Doctor/${data.id !=  null? data.id:""}`, {
      method: `${searchParams.get("id") != null ? "PUT" : "POST"}`,
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then( response => {
       return response.json() 
    }
  
  )
    .then(  data => {
      navigate({pathname:"/doctors"})
       return data;
  
    })
    .catch(error => console.error(error));
  };
  
  return (
    <div className="flex absolute w-full h-[90%]  justify-center items-center">

    <form className="flex flex-col w-[50%] border border-black " onSubmit={handleSubmit(data =>submitData(data))}>
      <ul className="flex flex-col">
        Nome
      <input
      defaultValue={doctor && doctor.nome}
        {...register("nome",  {  required: "Please enter your first name." })} // custom message
      />
      Sobrenome
      <input
      defaultValue={doctor && doctor.sobrenome}
        {...register("sobrenome", { required: "Please enter your first name." })} // custom message
      />
      Email
      <input
      disabled={doctor != null ? true :false}
      defaultValue={doctor && doctor.email}

        {...register("email", { required: "Please enter your first name." })} // custom message
      />
      CRM
       <input
      defaultValue={doctor && doctor.crm}
        {...register("crm", { required: "Please enter your first name." })} // custom message
      />

      </ul>

      <input type="submit" />
    </form>
    </div>

  );
}

export default DoctorForms;