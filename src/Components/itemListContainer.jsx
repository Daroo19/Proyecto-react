import './itemListContainer.css'
import { useState, useEffect } from 'react'
import { data } from '../data'
import ItemList from './itemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [servicios, setServicios] = useState([])
    const {categoriaId} = useParams()
    const categoryFilter = categoriaId ? categoriaId : false;
        useEffect(() => {
            data(categoryFilter)
                .then(response => {
                    setServicios(response)
                })
                .catch(error => {
                    console.error(error)
                })
        }, [categoryFilter])
    return (
        <div>
            <h1 className='saludo'>{greeting}</h1>
            <h2 className='tituloSer'>Servicios disponibles:</h2>
            <section className='seccion-servicios'>
                <div>
                    <ItemList servicios={servicios}/>
                </div>
            </section>
        </div>
    )
}

export default ItemListContainer