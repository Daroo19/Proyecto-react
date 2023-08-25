import './item.css'
import ItemCount from './itemCount'

const ItemDetail = ({nombre, categoria, precio, img, turno, detalle, alt}) => {
    return (
        <div className='servicio'>
           <h2>{nombre}</h2>
           <img src={img} alt={alt} className='img-servicio'></img>
           <p className='precio-servicio'>Precio: $ {precio}</p>
           <p>Categoria: {categoria}</p>
           <p>Turnos disponibles: {turno}</p>
           <p><strong>Detalle servicio: {detalle}</strong></p>

           <ItemCount initial={1} turno={turno} onAdd={(quantity) => console.log ('Turno cargado', quantity)}/>
        </div>
    )
}

export default ItemDetail