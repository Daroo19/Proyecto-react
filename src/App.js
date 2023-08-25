import './app.css'
import ItemDetailContainer from './Components/itemDetailContainer'
import ItemListContainer from './Components/itemListContainer'
import NavBar from "./Components/navBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='app'>  
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenido al taller mecanico Nitro'} />}></Route>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

