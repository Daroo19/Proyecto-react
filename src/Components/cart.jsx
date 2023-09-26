import React, {useContext} from 'react';
import {cartContext} from './context/cartContext';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './cart.css'

const Cart = () => {
    const {cart, clearCart} =useContext(cartContext);
    const format = (precio) => {
        return new Intl.NumberFormat('es',{ style: 'currency', currency: 'ARG'}).format(precio);   
    };

    const total = cart.reduce((acc, item) => acc + item.precio,0)
    return (
        <div className="counter">
            <div>
                {cart.length === 0 ? (
                    <div className='row'>
                        <h1 className='display-5 text-center'>Carro Vacio</h1>
                        <Link to="/" className='btnCheck'>Volver al Catálogo</Link>
                    </div>
                ) : (
                    <div>
                        {cart.map((item) => (
                            <div key={item.id} className='counterFinal'>
                                <div>
                                    <h5 className='nombreCart'>{item.nombre}</h5>
                                    <h6>Precio: {format(item.precio)}</h6>
                                    <h6>Sub-Total: {format(item.precio * item.quantity)}</h6>
                                </div>
                            </div>
                ))}
                        <div className='total1'>
                            <span className='total'>Total: {format(total)}</span>
                        </div>
                        <div className='counterFinal2'>
                            <button className='btnClear' onClick={() => clearCart()}>Vaciar Carrito</button>
                            <Link to='/checkout'><button className='btnCheck'>Checkout</button></Link>
                            <Link to="/"><button className='btnCheck1'>Volver al Catálogo</button></Link>
                        </div>
                    </div>   
                )}
            </div>
        </div>
    );
};

export {Cart}
