import React from "react";

const TituloPrincipal = ({comision, mes}) => {
    // aqui va la mayor parte de la logica

  return (
    // maquetado y muy poca logica
    <>
      <h1>Titulo primer APP</h1>
      <h2>Comision: {comision} - Mes actual: {mes}</h2>
    </>
  );
};

export default TituloPrincipal;
