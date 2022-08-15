
import { useForm } from 'react-hook-form' 
import React, {Fragment, useState} from "react";

const Prueba3 = () =>  {        
 
    const { register, handleSubmit,  formState: { errors } } = useForm();
    
    const onSubmit = (data, e) =>{
        console.log(data)
        setEntradas([
            ...entradas,
            data
        ])
        e.target.reset()
    }

    const [entradas, setEntradas] = useState([])
    
    return (
        <Fragment>
            <h1 className='text-black'>Ejemplo 1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    placeholder='Ingrese titulo'
                    className='form-control my-2'
                    {...register("tittle", { 
                        required: {value: true, message: "Ingrese titulo"},
                        maxLength: {value: 40, message: "Maximo 40 caracteres de descripcion"}
                    })}
                />
                <span className='text-danger text-small d-block mb-2'>
                    {errors.tittle?.message} 
                </span>
                <input 
                    placeholder='Ingrese descripcion'
                    className='form-control my-2'
                    {...register("description", { 
                        required: {value: true, message: "Ingrese descripcion"},
                        minLength: {value: 20, message: "Minimo 20 caracteres de descripcion"}
                    })}
                />
                 <span className='text-danger text-small d-block mb-2'>
                    {errors.description?.message} 
                </span>
                <button type="submit" className='btn btn-primary'>Agregar</button>
            </form>
            <ul>
                {
                    entradas.map(item =>
                        <li>{item.tittle} - {item.description}</li>
                    ) 
                }
            </ul>
        </Fragment>
    );
}
export default Prueba3;