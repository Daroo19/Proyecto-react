import './itemCount.css'
import { useState } from 'react'

const ItemCount = ({turno, initial, onAdd}) => {
    const[quantity, setQuantity] = useState(initial)
    const increment = () => {
        if (quantity < turno) {
        setQuantity(quantity + 1)}
    }
    const decrement = () => {
        if (quantity > turno){
        setQuantity(quantity - 1)}
    }

    return (
        <div className='divContainer'>
            <div className='controlContainer'>
                <button className='btnDI' onClick={increment}>+</button>
                <h3 className='numberDI'>{quantity}</h3>
                <button className='btnDI' onClick={decrement}>-</button>
            </div>
            <div>
                <button className='btnAdd' onClick={() => onAdd(quantity)} disabled={!turno}>Agregar a carrito</button>
            </div>
        </div>
    )
}

export default ItemCount