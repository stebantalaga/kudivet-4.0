import { busquedaMascota } from "../helpers/busquedaMascota";
import Item from "./Item";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ResultadoBusqueda = ({ valueEmoji }) => {
    const arrayMascota = busquedaMascota(valueEmoji);


    return (
        <>
        <div className="card-container">
            {
                arrayMascota && arrayMascota.map(item => (
                    <Item
                        key={item.raza}
                        imagen={item.imagen}
                        raza={item.raza}
                        expectativa_vida={item.expectativa_vida}
                        prevalencia_problemas_salud={item.prevalencia_problemas_salud}
                        origen={item.origen}
                        tamano={item.tamano}
                        cuidados_especiales={item.cuidados_especiales}
                        colores_comunes={item.colores_comunes}
                        requisitos_ejercicio={item.requisitos_ejercicio}
                    />
                ))
            }
            </div>
        </>
    );
}
 
export default ResultadoBusqueda;