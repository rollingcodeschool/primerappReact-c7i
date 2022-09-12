import { useState } from "react"; //aqui agregamos hook

const Contador = () => {
    // creamos el state
    //let [nombreEstado, nombre de funcion que actualiza al state ] = useState(indicar un valor inicial)
    let [counter, setCounter] = useState(9);
    //counter = 10 esto no puedo hacer
    //setCounter(10) asi modificamos el state
    const sumar = ()=>{
        console.log('desde sumar')
        //actualizar el state
        setCounter(counter + 1)
    }

    return (
        <div>
            <h2>Contador</h2>
            <h3>{counter}</h3>
            <button onClick={sumar}>+1</button>
        </div>
    );
};

export default Contador;