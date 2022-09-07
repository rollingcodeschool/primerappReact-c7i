import HolaMundo from "./components/HolaMundo";
import TituloPrincipal from "./components/TituloPrincipal";

function App() {
  let month = 9;

  return (
    <div>
      {/* los componentes se puede escribir como etiquetas dobles o simples */}
      {/* <TituloPrincipal ></TituloPrincipal> */}
      <TituloPrincipal comision='c7i' mes={month}/>
      <HolaMundo/>
    </div>
  );
}

export default App;
