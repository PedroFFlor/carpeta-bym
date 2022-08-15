import { Fragment, useState } from "react";
import Prueba2 from "./Prueba2";
import Prueba3 from "./prueba3";

const Pruebas = () =>  {
 
    const [contador, setContador] = useState(0)     //declaro una variable de estado contador, con la funcion setContador para modificarla y la inicializo en 0
    const sumar = () => setContador(contador + 1)   //funcion que se ejecuta en el evento

    const [calor, setCalor] = useState(false)           //esto era mas facil de hacer pero tenia qe practicar xd
    const frioCalor = (eventCalor) =>{                      
        if(parseFloat(eventCalor.target.value) > 20) {
            setCalor(true)
        } else {
            setCalor(false)
        }
    }  

    const [numeros, setNumeros] = useState([1,2,3,4,5,6])   
    const [tiempo, setTiempo] = useState(1)
    const aumentar = () => {        //se ejecuta en el evento
      setTiempo(tiempo + 1) 
      setNumeros([
        ...numeros,                 //los 3 puntos son un operador de propagacion, a lo que tiene, le agrego
        tiempo + 6
      ])
    }

    const [datos,setDatos] = useState({
        nombre : '',
        apellido : ''
    })
    const cambio = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const guardarDados = (event) => {        //comento esto y el html correspondiente para seguir con el otro form validado
        event.preventDefault();                 // hace que cuando envias datos de un formulario no vaya por el metodo getc
        event.target.reset();               //limpiamos el formulario
        setDatos(                               //ponemos la variable en cero, vacia,etc
            datos.nombre = '',
            datos.apellido = ''
        )
    }


    return (
        <Fragment>
            <div>
                <button onClick={sumar}>Sumar</button>
                <p>El contador va: {contador}</p>
            </div>
            <hr />
            <div>
                <h2>Frío o Calor?</h2>
                <input type='text'name="calor" onChange={frioCalor}/>
                <p>
                    {
                    calor == true ? 'Calor!' : 'Frio!' //es un if en linea el IF es ? verdadero:falso
                    }
                </p>
            </div>
            <hr />
            <div>
                <ul>
                <button onClick={aumentar}>Aumentar</button>
                <p>Tiempo: {tiempo}</p>
                {
                    numeros.map((item, index) => 
                    <li key={index}>
                        {item} - {index}
                        </li>
                    )
                }
                </ul>
            </div>
            <hr />
            <div>
                <form onSubmit={guardarDados}>
                    <h2>Titulo del form</h2><br />
                    <input type="text" name="nombre" placeholder="Nombre" onChange={cambio} />
                    <input type="text" name="apellido" placeholder="Apellido" onChange={cambio} />
                    <button type="submit">Enviar</button>
                </form>
                 <p>{datos.nombre} - {datos.apellido}</p>
            </div>
            <hr />
           <Prueba2 />
           <Prueba3 />
        </Fragment>
    );
}
export default Pruebas;