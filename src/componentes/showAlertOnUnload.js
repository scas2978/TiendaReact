

import React, { useEffect } from 'react';
import showAlertOnUnload from './showAlertOnUnload';

function MyComponent() {
  useEffect(() => {
    showAlertOnUnload('¡No te vayas! ¿Estás seguro que quieres abandonar la página?');
  }, []);

  return (
    <div>
      <h1>Bienvenido a mi página</h1>
      <button>Hacer algo</button>
    </div>
  );
}

export default MyComponent;



