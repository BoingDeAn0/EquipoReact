import React from 'react'
import './Estilos/CompoRub.css'

function CompoRub() {
  return (
    <>
    <div className="App">
    <div className="all">
    <div className="principal">
        <div>
            <img src="/src/assets/IMG/fotoruben.jpeg" width="410" height="560"/>
            <div className="texto">
                <h3>Ruben Ulianov Blanco Chavarría</h3>  
                <p>Nacì el 25 de Oct de 1998<br/>
                Foto de cuando estaba de gira en la CDMX.</p>
            </div>
        </div>
    </div>
    
    <div className="tarjetass">
        <div>
        <img src="../src/assets/IMG/cine.jpg" width="258" height="220"/>
          <div className="texto">
            <h4>Cine</h4>  
            <p>Me gusta mucho ir al cine y las historias que se cuentan, son inspiradoras.</p>
          </div>
        </div>

      <div>
        <img src="../src/assets/IMG/cicl.png" width="258" height="220"/>
        <div className="texto">
            <h4>Ciclismo</h4>   
          <p>Me relaja andar en la bicicleta por la noche en las balaceadas calles de Cuautla.</p>
        </div>
      </div>

      <div>
        <img src="../src/assets/IMG/game.jpg" width="258" height="220"/>
        <div className="texto">
            <h4>Videojuegos</h4>   
          <p>Ojala tuviera tiempo para jugar diario, los considero otro tipo de arte.</p>
        </div>
      </div>
    
      <div>
        <img src="../src/assets/IMG/music.jpeg"  width="258" height="220"/>
        <div className="texto">
            <h4>Música</h4>  
          <p>Escucho mùsica todos los dias, me gusta de todo menos banda y reggueton bro.</p>
        </div>
      </div> 

      <div>
        <img src="../src/assets/IMG/fotos.jpg"  width="258" height="220"/>
        <div className="texto">
          <h4>Fotografía</h4>  
          <p>Me gusta la fotografìa artistica aunque no tengo la manera de hacerlo profesionalmente :c.</p>
        </div>
      </div>

      <div>
        <img src="../src/assets/IMG/reloj.jpg"  width="258" height="220"/>
        <div className="texto">
            <h4>Relojes</h4>  
            <p>Obsesionado con comprar relojes, me encantan esas màquinas, todos deberìan usar uno.</p>
        </div>
      </div>
    </div>
    </div>
  </div>
  </>
  )
}

export default CompoRub