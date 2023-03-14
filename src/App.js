import React,{ Component } from "react";
import Navegacion from "./componentes/Navegacion/Navegacion";
import Servicios from "./componentes/Servicios/servicios";
import Portafolio from "./componentes/Portafolio/portafolio";

function App() {
  return (
    <div className="App">
       <Navegacion></Navegacion>
       <Servicios></Servicios>
       <Portafolio></Portafolio>
       </div>
   
       
       );
}

export default App;
