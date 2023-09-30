import './itemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from './itemList'
import { useParams } from 'react-router-dom'
import {getDoc, collection, query, where} from 'firebase/firestore'
import {db} from './base/firebase'

const ItemListContainer = ({greeting}) => {
    const [servicios, setServicios] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()
        useEffect(() => {
            setLoading(true)
            const collectionRef = categoriaId
                ? query (collection(db, 'servicios'), where ('categoria', '==', categoriaId))
                : collection (db, 'servicios')
            getDoc(collectionRef)
                .then(response => {
                    const productsAdapted = response.docs.map(doc =>{
                        const data = doc.data()
                        return {id: doc.id, ...data}
                    })
                    setServicios(productsAdapted)
                })
                .catch(error => {
                    console.error(error)
                })
                .finally(() => {
                    setLoading(false)
                })

        }, [categoriaId])
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