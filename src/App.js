import React,{ Component } from "react";
import Navegacion from "./componentes/Navegacion/Navegacion";
import Servicios from "./componentes/Servicios/servicios";
import Portafolio from "./componentes/Portafolio/portafolio";
import Expertos from "./componentes/Expertos/expertos";
import Footer from "./componentes/Footer/footer";
import showAlertOnUnload from "./componentes/showAlertOnUnload";
import Weather from './componentes/Weather';




function App() {
  return (
    <div className="App">
       <Navegacion></Navegacion>
       <Servicios></Servicios>
       <Portafolio></Portafolio>
       <Expertos></Expertos>
       <Footer></Footer>
       <showAlertOnUnload></showAlertOnUnload>
       <Weather />
       
       </div>
   
       
       );
}



export default App;







