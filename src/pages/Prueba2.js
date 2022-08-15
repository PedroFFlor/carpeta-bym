import { Fragment } from "react";
import { useForm } from 'react-hook-form' 

const Prueba2 = () =>  {        //ojo que va variando con las versiones
 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data, event) => {
        console.log(data);
        event.target.reset();           //resetea el formulario
    }
    
    return (
        <Fragment>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="Nombre"
                        className="form-control mb-2"
                        {...register("firstName", { required: "Necesitamos un nombre", maxLength: 20 })}
                    /><br />
                    <span className="text-danger text-small d-block mb-2">          {/*errors? pregunta si hay errores, el punto concatena y pregunta si es firstName y message selecciona el campo*/}
                        {errors.firstName?.type === 'maxLength' && "El nombre tiene que tener maximo 20 caracteres"}   {/*es una advertencia mientras llenas el formulario*/}
                    </span>
                     <input
                        placeholder="Apellido"
                        className="form-control mb-2"
                        {...register("lastName", { required: true, maxLength: 35 })}
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors.lastName && <p>Last name is required</p>}    {/*es una advertencia mientras llenas el formulario*/}
                    </span>
                    <input 
                        placeholder="Edad"
                        type="number" 
                        {...register("age", { required: "Necesitamos una edad", min: 5, max: 99 })}
                    />
                    <span className="text-danger text-small d-block mb-2">
                     {errors.age?.message}          {/*es una advertencia mientras llenas el formulario*/}
                     </span>
                    <button type="submit" className="btn btn-primary">
                        Enviar
                    </button>
                </form>
            </div>
            <hr />
        </Fragment>
    );
}
export default Prueba2;