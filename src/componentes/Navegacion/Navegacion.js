import React,{ Component} from 'react';
import './Navegacion.css';

class Navegacion extends Component {
  render() {
    return (
      <header class="header" id="inicio">
        <img src="url(/hamburguesa.svg" alt="" class="hamburguer" ></img>
          <nav class="menu-navegacion">
          <a href="#inicio">inicio</a>
          <a href="#servicio">servicio</a>
          <a href="#portafolio">portafolio</a>
          <a href="#expertos">expertos</a>
          <a href="#contacto">contacto</a>
          </nav>
          <div class="contenedor head">
              <h1 class="titulo">convertimos tus sueños en realidad</h1>
              <p class="copy" >Te asesoramos</p>
          </div>
        </header>
    ) ;
  }
}

export default Navegacion;