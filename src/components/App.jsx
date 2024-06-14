import React from 'react';
import MiApi from './MiApi';

function App() {
  return (
    <div>
      <header>
        <h1>Indicadores economicos</h1>
        <p>Bienvenido a nuestra aplicación que consume una API de indicadores económicos en Chile.</p>
      </header>
      <div className="container">
        <MiApi />
      </div>
    </div>
  );
}

export default App;
