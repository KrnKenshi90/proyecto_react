import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Principal from './inicio/Principal'
import Registro from './inicio/Registro'
import Acceder from './inicio/Acceder'
import Carta from './inicio/Carta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Principal/>}/>
      <Route path='/carta' element={<Carta/>}/>
      </Routes>
    </BrowserRouter>
      {/* <Principal>
      </Principal> */}
      {/*<Registro></Registro>*/}
      {/*<Acceder></Acceder>*/}
      {/* <Carta></Carta> */}
    </>
  )
}

export default App
