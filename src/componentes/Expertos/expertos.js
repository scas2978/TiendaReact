import React,{ Component} from 'react';
import './expertos.css';
import Analisis from './Analisis.svg';

class Expertos extends Component {
  render() {
    return (
        <section class="contenedor" id="expertos">
            <h2 class="subtitulo">Expertos en:</h2>
                <section class="experts">
                    <div class="cont-expert">
                    <img src={Analisis}  alt=""/>
                    <h3 class="n-expert">Analítica</h3>
                    </div>
                    <div class="cont-expert">
                    <img src="./SEO.svg" alt=""/>
                    <h3 class="n-expert">SEO</h3>
                    </div>
                    <div class="cont-expert">
                    <img src="./Seguridad.svg" alt=""/>
                    <h3 class="n-expert">Seguridad</h3>
                    </div>
                </section>
        </section>
    ) ;
  }
}

export default Expertos;