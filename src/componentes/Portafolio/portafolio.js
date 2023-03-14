import React, { Component } from 'react';
import './portafolio.css';
import imagen from "./Teclado.avif";
import imagen2 from "./Ram.avif";
import imagen3 from "./Pc.avif";
import imagen4 from "./Celular.avif";
import imagen5 from "./Xbox.avif";
import imagen6 from "./img6.jpg";

class Portafolio extends Component {
  handleOpenImage = (imageUrl) => {
    window.open(imageUrl, '_blank');
  }

  render() {
    return (
      <section className="gallery" id="portafolio">
        <div className="contenedor-galeria">
          <h2 className="subtitulo">Galeria</h2>
          <div className="contenedor-galeria">
            <img src={imagen} width="100%" alt="./Teclado.avif" className="img-galeria" onClick={() => this.handleOpenImage(imagen)} />
            <img src={imagen2} width="100%" alt="./Ram.avif" className="img-galeria" onClick={() => this.handleOpenImage(imagen2)} />
            <img src={imagen3} width="100%" alt="./Pc.avif" className="img-galeria" onClick={() => this.handleOpenImage(imagen3)} />
            <img src={imagen4} width="100%" alt="./Celular.avif" className="img-galeria" onClick={() => this.handleOpenImage(imagen4)} />
            <img src={imagen5} width="100%" alt="./Xbox.avif" className="img-galeria" onClick={() => this.handleOpenImage(imagen5)} />
            <img src={imagen6} width="100%" alt="./img6.jpg" className="img-galeria" onClick={() => this.handleOpenImage(imagen6)} />
          </div>
        </div>
      </section>
    );
  }
}

export default Portafolio;
