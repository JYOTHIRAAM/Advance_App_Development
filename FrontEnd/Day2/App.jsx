import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello from './components/pages/Hello'
import Navbar from './components/pages/Navbar'
import Signin from './components/pages/Signin'
import Signup from './components/pages/Signup'
import Home from './components/pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Signin/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>
        </Routes>
      </div>
    </BrowserRouter> */}
    <Home/>
    </>
  )
}

export default App
