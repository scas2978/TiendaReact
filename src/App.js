import React,{ Component } from "react";
import Navegacion from "./componentes/Navegacion/Navegacion";
import Servicios from "./componentes/Servicios/servicios";
import Portafolio from "./componentes/Portafolio/portafolio";
import Expertos from "./componentes/Expertos/expertos";


function App() {
  return (
    <div className="App">
       <Navegacion></Navegacion>
       <Servicios></Servicios>
       <Portafolio></Portafolio>
       <Expertos></Expertos>

       </div>
   
       
       );
}

export default App;
