import './cardWidget.css'
import {useContext} from 'react';
import {CartContext} from './context/cartContext'
import { Link } from 'react-router-dom';

const CardWid = () => {
    const {totalQty} =useContext (CartContext)

    return (
        <>
        <Link to='/cart' className='btnCart'>
            <i className='bi bi-cart-plus-fill'>{totalQty}</i>
        </Link>
        </>

    )
}

export default CardWid; 