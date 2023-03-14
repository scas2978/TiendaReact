import React,{ Component} from 'react';
import './portafolio.css';
import  imagen from "./Teclado.avif";
import  imagen2 from "./Ram.avif";
import  imagen3 from "./Pc.avif";
import  imagen4 from "./Celular.avif";
import  imagen5 from "./Xbox.avif";
import  imagen6 from "./img6.jpg";
class portafolio extends Component {
  render() {
    return (
        <section class="gallery" id="portafolio">
        <div class="contenedor-galeria">
            <h2 class="subtitulo">Galeria</h2>
            <div class="contenedor-galeria">
                
                <img src= {imagen} width="100%" alt="./Teclado.avif" class="img-galeria"/>
                          
                <img src= {imagen2} width="100%" alt="./Ram.avif" class="img-galeria"/>
             
                <img src= {imagen3} width="100%" alt="./Pc.avif" class="img-galeria"/>
             
                <img src= {imagen4} width="100%" alt="./Celular.avif" class="img-galeria"/>
             
                <img src= {imagen5} width="100%" alt="./Xbox.avif" class="img-galeria"/>

                <img src= {imagen6} width="100%" alt="./img6.jpg" class="img-galeria"/>
             
       
            </div>
        </div>
    </section>
    ) ;
  }
}

export default portafolio;