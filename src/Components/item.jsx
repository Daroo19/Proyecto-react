import './item.css'
import { Link } from 'react-router-dom'

const Item = ({id, categoria, nombre, precio, img, }) => {
    return(
        <div className='servicio'>
            <h2>{nombre}</h2>
            <img src={img} alt={alt} className='img-servicio'></img>
            <p className='precio-servicio'>Precio: $ {precio}</p>
            <p>Categoria: {categoria}</p>
            <div>
                <Link to={`/item/${id}`} className='detalle'>Ver Detalle</Link>
            </div>
        </div>
        
    )
}

export default Item