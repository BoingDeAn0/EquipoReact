import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './Componentes/Estilos/Componente1.css';
import './Componentes/Js/Componente1';
import Componente1 from './Componentes/Componente1';
import ComponenteDylan from './Componentes/ComponenteDylan';
import './Componentes/Estilos/ComponenteDylanCss.css';
import ComponenteJesus from './Componentes/ComponenteJesus';

import ComponenteMiguel from './Componentes/ComponenteMiguel';
import './Componentes/Estilos/ComponenteMiguelCss.css';
import ComponenteEli from './Componentes/componenteEli';
import ComponeteAngel from './Componentes/ComponenteAngel';
import Card from './Componentes/Card';
import Card2 from './Componentes/Card2';



function App() {


  return (


      <>
      <Componente1/>
      <ComponenteDylan/>
      <ComponenteJesus/>
      <ComponenteMiguel/>
      <ComponenteEli/>
      <ComponeteAngel/>
      <div className="glo">
        <div className='g-1'>
          <div className="contenedorSubCard">
            <h2>Tecnologías que mas me gustan</h2>
            <div className="contenedorCard">
              <div className='card1'>
                <Card />
              </div>
              <div className='card2'>
                <Card2 />
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
     

    
  )
}

export default App
