import Contador from "./components/Contador";
import HolaMundo from "./components/HolaMundo";
import TituloPrincipal from "./components/TituloPrincipal";
import './app.css'


function App() {
  let month = 9;

  return (
    <div>
      {/* los componentes se puede escribir como etiquetas dobles o simples */}
      {/* <TituloPrincipal ></TituloPrincipal> */}
      <TituloPrincipal comision='c7i' mes={month}/>
      <HolaMundo/>
      <hr/>
      <Contador></Contador>
    </div>
  );
}

export default App;
