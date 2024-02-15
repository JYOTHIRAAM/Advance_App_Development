import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello from './components/pages/Hello'
import Navbar from './components/pages/Navbar'
import Signin from './components/pages/Signin'
import Signup from './components/pages/Signup'
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Bookevent from './components/pages/Bookevent';
import ViewEvents from './components/pages/ViewEvents';
import AdminHome from './components/pages/AdminHome';
import CreateEvent from './components/pages/CreateEvent';
import AdminViewEvents from './components/pages/AdminViewEvents';
import UserSignin from './components/pages/UserSignin';
import Landing from './components/pages/Landing';
import UserSignup from './components/pages/UserSignup';
import FoodMenu from './components/pages/FoodMenu';
import Addons from './components/pages/Addons';

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/Signin' element={<Signin/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/UserSignup' element={<UserSignup/>}></Route>
          <Route path='/UserSignin' element={<UserSignin/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Events' element={<Events/>}></Route>
          <Route path='/Bookevent' element={<Bookevent/>}></Route>
          <Route path='/ViewEvents' element={<ViewEvents/>}></Route>
          <Route path='/AdminHome' element={<AdminHome/>}></Route>
          <Route path='/CreateEvent' element={<CreateEvent/>}></Route>
          <Route path='/FoodMenu' element={<FoodMenu/>}></Route>
          <Route path='/Addons' element={<Addons/>}></Route>
          <Route path='/AdminViewEvents' element={<AdminViewEvents/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
