import React,{ Component} from 'react';
import './portafolio.css';

class portafolio extends Component {
  render() {
    return (
        <section class="gallery" id="portafolio">
        <div class="contenedor-galeria">
            <h2 class="subtitulo">Galeria</h2>
            <div class="contenedor-galeria">
                <img src="./Teclado.avif" alt="" class="img-galeria"/>
                <img src="./Ram.avif" alt="" class="img-galeria"/>
                <img src="./Pc.avif" alt="" class="img-galeria"/>
                <img src="./Celular.avif" alt="" class="img-galeria"/>
                <img src="./Xbox.avif" alt="" class="img-galeria"/>
                <img src="./img6.jpg" alt="" class="img-galeria"/>
            </div>
        </div>
    </section>
    ) ;
  }
}

export default portafolio;