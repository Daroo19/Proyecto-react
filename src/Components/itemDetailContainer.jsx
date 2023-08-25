import './itemDetailContainer.css'
import { useState, useEffect } from 'react'
import { dataId } from '../data'
import ItemDetail from './itemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [servicio, setServicio] = useState(null)
    const {itemId} = useParams()
    useEffect(() => {
        dataId(itemId)
            .then(response => {
                setServicio(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className='itemDetailContainer'>
            <ItemDetail {...servicio}/>
        </div>
    )
}

export default ItemDetailContainer