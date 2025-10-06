import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Recovery from './Recovery.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/recovery' element={<Recovery/>}/>
      </Routes>  
    </BrowserRouter>
  </StrictMode>
)
