import React, { Component } from 'react';

class Footer extends Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      document.body.style.backgroundColor = this.getRandomColor();
    }, 500); // Cambia el color cada 500 milisegundos
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <footer id="contacto">
        <div class="contenedor-footer-content">
          <div class="contact-us">
            <h2 class="brand">Santiago Agudelo Jimenez</h2>
            <h2 class="brand">Santiago Castañeda Arango</h2>
            <p>Somos expertos en la creacion de tus sueños</p>
          </div>
          <div class="socialmedia">
            <a href="./" class="social-media-icon">
              <i class='bx bxl-facebook'></i>
            </a>
            <a href="./" class="social-media-icon">
              <i class='bx bxl-twitter'></i>
            </a>
            <a href="./" class="social-media-icon">
              <i class='bx bxl-instagram'></i>
            </a>
          </div>
        </div>
        <div class="line"></div>
      </footer>
    );
  }
}

export default Footer;