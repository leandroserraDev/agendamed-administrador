import { useNavigate , createSearchParams, Navigate } from "react-router-dom";


function ItemDoctor({data}){
    const navigate =  useNavigate();

    const goToDoctor = () =>
        navigate({
          pathname: '/doctor',
          search: `${createSearchParams({id: data.id})}`,
        });
    return (
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {data.nome} {data.sobrenome}
                </th>
                <td className="px-6 py-4">
                    {data.email}
                </td>
                <td className="px-6 py-4">
                    {data.crm}
                </td>
                <td className="px-6 py-4">
                {data && data.specialities && data.specialities.map((item, index) =>{
                return(
                    item.name + " "

                )

            })}
                </td>
                <td className="px-6 py-4 text-right">
                
                    <button      onClick={goToDoctor}  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                
                
                </td>
            </tr>
        </tbody>
   )
}

export default ItemDoctor;