import {useContext, useState} from React
import { cartContext } from "./context/cartContext"
import {useForm} from 'react-hook-form'
import {collection, addDoc} from "firebase/firestore"
import {db} from "./base/firebase"
import './checkout.css'

const Checkout = () => {
    const {turnoId, setTurno} = useState('')
    const{cart, total, clearCart} = useContext(cartContext)
    const{register, handleSubmit} = useForm()
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            servicio: cart,
            total: total(),
        }

        console.log(pedido)

        const pedidosRef = collection(db, 'pedidos')
        addDoc(pedidosRef, pedido).then((doc) => {
            setTurno(doc.id)
            clearCart()
        })
    }

    if (turnoId) {
        return (
            <div className="container">
                <h1 className="agradecimiento">Gracias por su compra!</h1>
                <p className="compraId">Tu pedido es: {turnoId}	</p>
            </div>
        )
    }

    return (
        <div className='containerCheck'>
            <form className='formulario' onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} className="inputFormulario"></input>
                <input type="email" placeholder="Ingresa tu email" {...register("email")} className="inputFormulario"></input>
                <input type="phone" placeholder="Ingrese su telefono" {...register("telefono")} className="inputFormulario"></input>
                <button className="enviar" type="submit">Finalizar compra</button>
            </form>
        </div>
    )
}

export default Checkout