import { useState } from "react"; //aqui agregamos hook

const Contador = ({valorInicial}) => {
    // creamos el state
    //let [nombreEstado, nombre de funcion que actualiza al state ] = useState(indicar un valor inicial)
    let [counter, setCounter] = useState(valorInicial);
    //counter = 10 esto no puedo hacer
    //setCounter(10) asi modificamos el state
    
    // const sumar = ()=>{
    //     // console.log('desde sumar')
    //     //actualizar el state
    //     setCounter(counter + 1)
    // }

    return (
        <div>
            <h2>Contador</h2>
            <h3>{counter}</h3>
            <button onClick={()=> setCounter(counter + 1)}>+1</button>
            <button onClick={()=> setCounter(counter - 1)}>-1</button>
            <button onClick={()=> setCounter(valorInicial)}>Reset</button>
        </div>
    );
};

export default Contador;