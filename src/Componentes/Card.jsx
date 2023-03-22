import { Fragment } from "react"
import './Estilos/ComponenteAngel.css'
const Card = () => {
    return (
        <Fragment>
            <div className="card">
                <img src="/src/assets/images/java.webp" alt="Avatar" />
                <div className="containerJ">
                    <h4><b>Java</b></h4>
                    <p>Desarrollo Movile &  Desktop</p>
                    <div className="contendorBoton">
                        <div className="boton">
                            <a href="https://github.com/Pwd12angel/ManejadorDeArchivos">Ir al proyecto</a>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Card