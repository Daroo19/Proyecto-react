import './app.css'
import ItemDetailContainer from './Components/itemDetailContainer'
import ItemListContainer from './Components/itemListContainer'
import NavBar from "./Components/navBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Components/context/cartContext'
import {Cart} from './Components/cart'
import Checkout from './Components/checkout'

function App() {
  return (
    <div className='app'>
      <CartProvider>  
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenido al taller mecanico Nitro'} />}></Route>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>  
    </div>
  )
}

export default App;

