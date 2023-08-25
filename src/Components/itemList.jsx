import './itemList.css'
import Item from './item'

const ItemList = ({servicios}) => {
    return (
        <div className='lista'>
            {servicios.map(ser => <Item key={ser.id} {...ser} />)}
        </div>
    )
}

export default ItemList