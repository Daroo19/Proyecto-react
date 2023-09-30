import './item.css'
import ItemCount from './itemCount'
import {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {cartContext} from './context/cartContext'

const ItemDetail = ({nombre, categoria, precio, img, turno, detalle, alt}) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const {addItem} = useContext(cartContext)
    const agregar = (quantity) => {
        setCantidadAgregada (quantity)
        const item = {
            id, nombre, precio
        }
        addItem (item, quantity)
    }
    return (
        <div className='servicio'>
           <h2>{nombre}</h2>
           <img src={img} alt={alt} className='img-servicio'></img>
           <p className='precio-servicio'>Precio: $ {precio}</p>
           <p>Categoria: {categoria}</p>
           <p>Turnos disponibles: {turno}</p>
           <p><strong>Detalle servicio: {detalle}</strong></p>

           <div> {
            cantidadAgregada > 0 ? (
                <Link to='/cart' className='carrito'>Finalizar compra</Link>  
            ) : (
            <ItemCount initial={1} turno={turno} onAdd={agregar}/>
            )}
           </div>           
        </div>
    )
}

export default ItemDetail