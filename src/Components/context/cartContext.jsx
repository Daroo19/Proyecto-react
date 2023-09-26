import {createContext, useState} from "react"

export const cartContext = createContext ({
    cart:[]    
})

export const CartProvider = ({children}) => {
    const [cart, setCart]  =useState([])
    console.log (cart)
    
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error ('Producto ya agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart([...cartUpdate]);
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const total = () => {
        return   cart.reduce((acc, prod)=> acc + prod.precio, 0);
    }

    const totalQty = () => {
        return    cart.reduce ((total, item) => total + item.quantity, 0 );
    }

    return (
        <cartContext.Provider value={{addItem, removeItem, clearCart, total, totalQty}}>
            {children}
        </cartContext.Provider>
    )
}