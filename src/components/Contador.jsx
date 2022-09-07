import { useState } from "react";

const Contador = () => {
    let [counter, setCounter] = useState(9);
    return (
        <div>
            <h2>Contador</h2>
            <h3>{counter}</h3>
            <button>+1</button>
        </div>
    );
};

export default Contador;