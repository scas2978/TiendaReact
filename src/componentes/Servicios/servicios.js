import React,{ Component} from 'react';
import './servicios.css';

class servicios extends Component {
  render() {
    return (
        <section  id="servicio">
        <h2 class="subtitulo">Nuestro servicios </h2>
        <div class="checklist-servicios">
            <div class="contenedor-servicio servicio">
                <img src="./Designer _Flatline.svg"  width="100%" alt=""/>
            </div>
            <div class="servicio">
            <div class="service">
            <h3 class="n-service"> <span class="number">1</span>Diseño web</h3>
            <p>El diseño web en un area enfocada en el desarrollo de interface digitales, como el diseño de sitios y aplicaciones para web</p>
            </div>

            <div class="service">
                <h3 class="n-service"> <span class="number">2</span>Tecnologia</h3>
                <p>Venta de todo tipo de articulos tecnologicos para mejorar la calidad de vida y agilizar tus tareas diarias</p>
            </div>

                <div class="service">
                    <h3 class="n-service"> <span class="number">3</span>Asesoria</h3>
                    <p>Te compartimos la informacion de los mejores productos en la actualidad con el fin de que siempre estes al tanto de los ultimos avances tecnologicos</p>
                </div>
            </div>
            </div>
    </section>

    ) ;
  }
}

export default servicios;