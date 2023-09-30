import './itemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from './itemDetail'
import { useParams } from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import {db} from './base/firebase'

const ItemDetailContainer = () => {
    const [servicio, setServicio] = useState(null)
    const [loading, setLoading] =useState(true)
    const {itemId} = useParams()
    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'servicios', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = {id: response.id, ...data}
                setServicio(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div className='itemDetailContainer'>
            <ItemDetail {...servicio}/>
        </div>
    )
}

export default ItemDetailContainer