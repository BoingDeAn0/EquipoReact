import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './Componentes/Estilos/Componente1.css';
import './Componentes/Js/Componente1';
import Componente1 from './Componentes/Componente1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Componente1></Componente1>
    </div>
  )
}

export default App
