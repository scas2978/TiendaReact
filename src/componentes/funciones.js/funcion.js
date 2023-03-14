import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.addEventListener('beforeunload', showAlert);

    return () => {
      window.removeEventListener('beforeunload', showAlert);
    };
  }, []);

  function showAlert(event) {
    event.preventDefault();
    event.returnValue = '';
    alert('¡No te vayas! ¿Estás seguro que quieres abandonar la página?');
  }

  return (
    <div>
      <h1>Mi aplicación</h1>
      <p>Contenido de la aplicación</p>
    </div>
  );
}

export default App;





