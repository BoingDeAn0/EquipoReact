import React from 'react'
import '../Componentes/Estilos/ComponenteMiguelCss.css'

function ComponenteMiguel() {
  return (
    <div class="color">
        <div class="presentacion">
            <h1 class="h1-present">Luis Miguel García Tapia</h1>
            <h3 class="h2-present">CUMPLEAÑOS: 15 DE SEPTIEMBRE DE 1999</h3>
            <h2 class="h3-present">Mis pasatiempos favoritos son:</h2>
        </div>
        <div class="containerMiguel">
            <div class="container-video">
                <img class="VIDEOJUEGOS" src="https://cdn-3.expansion.mx/dims4/default/5fd17a8/2147483647/strip/true/crop/3864x2576+0+0/resize/1200x800!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F33%2F38%2F425ea19f487680315036da9ef5f3%2Fistock-1334436084.jpg" alt=""/>
                <h4 class="h4-video">JUGAR VIDEOJUEGOS</h4>
                <p class="p-video">Me gusta jugar Fortnite y Call of Duty</p>
            </div>

            <div class="container-pelis">
                <img class="PELIS" src="https://i.blogs.es/56949d/1366_2000-1-/1366_2000.jpeg" alt=""/>
                <h4 class="h4-pelis">VER SERIES Y PELIS</h4>
                <p class="p-pelis">Me gustan las peliculas de Ciencia Ficcion y series de Netflix</p>
            </div>

            <div class="container-box">
                <img class="BOX" src="https://diariodechiapas.com/wp-content/uploads/media/articles/headers/1643833648379.jpeg" alt=""/>
                <h4 class="h4-box">PRACTICAR BOX</h4>
                <p class="p-box">Me gusta prácticar el boxeo en mis ratos libres</p>
            </div>
        </div>
    
</div>
  )
}

export default ComponenteMiguel