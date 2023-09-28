import {useContext, useState} from React
import { cartContext } from "./context/cartContext"
import {useForm} from 'react-hook-form'
import {collection, addDoc} from "firebase/firestore"
import {db} from "./base/firebase"
import './checkout.css'

const Checkout = () => {
    const {turnoId, setTurno} = useState('')
    const{cart, }
}