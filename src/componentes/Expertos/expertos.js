import React, { Component } from 'react';
import './expertos.css';
import Analisis from './Analisis.svg';
import SEO from './SEO.svg';
import Seguridad from './Seguridad.svg';

class Expertos extends Component {
  handleClickExpert = (expertName) => {
    alert(`Estas haciendo clieck en: ${expertName}!`);
  }

  render() {
    return (
      <section className="contenedor" id="expertos">
        <h2 className="subtitulo">Expertos en:</h2>
        <section className="experts">
          <div className="cont-expert" onClick={() => this.handleClickExpert('Analítica')}>
            <img src={Analisis} alt="" />
            <h3 className="n-expert">Analítica</h3>
          </div>
          <div className="cont-expert" onClick={() => this.handleClickExpert('SEO')}>
            <img src={SEO} alt="" />
            <h3 className="n-expert">SEO</h3>
          </div>
          <div className="cont-expert" onClick={() => this.handleClickExpert('Seguridad')}>
            <img src={Seguridad} alt="" />
            <h3 className="n-expert">Seguridad</h3>
          </div>
        </section>
      </section>
    );
  }
}

export default Expertos;