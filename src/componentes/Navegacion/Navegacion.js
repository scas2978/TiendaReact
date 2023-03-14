import React, { Component } from 'react';
import './Navegacion.css';
import './script';
import imagen from './hamburguesa.svg';

class Navegacion extends Component {
  componentDidMount() {
    const hamburguer = document.querySelector('.hamburguer');
    const menu = document.querySelector('.menu-navegacion');

    hamburguer.addEventListener('click', () => {
      menu.classList.toggle('spread');
    });

    window.addEventListener('click', (e) => {
      if (
        menu.classList.contains('spread') &&
        e.target != menu &&
        e.target != hamburguer
      ) {
        menu.classList.toggle('spread');
      }
    });
  }

  render() {
    return (
      <header class="header" id="inicio">
        <img src={imagen} class="hamburguer" />
        <nav class="menu-navegacion">
          <a href="#inicio">inicio</a>
          <a href="#servicio">servicio</a>
          <a href="#portafolio">portafolio</a>
          <a href="#expertos">expertos</a>
          <a href="#contacto">contacto</a>
        </nav>
        <div class="contenedor head">
          <h1 class="titulo">convertimos tus sueños en realidad</h1>
          <p class="copy">Te asesoramos</p>
        </div>
      </header>
    );
  }
}

export default Navegacion;