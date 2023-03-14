import React,{ Component} from 'react';
import './portafolio.css';
import  imagen from "./Teclado.avif";
import  imagen2 from "./Ram.avif";
class portafolio extends Component {
  render() {
    return (
        <section class="gallery" id="portafolio">
        <div class="contenedor-galeria">
            <h2 class="subtitulo">Galeria</h2>
            <div class="contenedor-galeria">
                
                <img src= {imagen} width="100%" alt="./Teclado.avif"/>
                          
                <img src= {imagen2} width="100%" alt="./Ram.avif"/>
             
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