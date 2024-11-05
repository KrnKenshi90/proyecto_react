import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Principal from './inicio/Principal'
import Registro from './inicio/Registro'
import Acceder from './inicio/Acceder'
import Carta from './inicio/Carta'
import Pedidos from './Menu/Pedidos'
import Productos from './Menu/Productos'
import Categorias from './Menu/Categorias'
import Principal2 from './inicio/Principal2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Principal/>}/>
      <Route path='/pedidos' element={<Pedidos />}/>
      <Route path='/categorias' element={<Categorias />}/>
      <Route path='/productos' element={<Productos />}/>
      <Route path='/carta' element={<Carta/>}/>
      <Route path='/registro' element={<Registro/>}/>
      <Route path='/acceder' element={<Acceder/>}/>
      <Route path='/principal' element={<Principal2/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
