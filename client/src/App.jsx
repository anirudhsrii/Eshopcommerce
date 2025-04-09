import React from 'react'
import Navbar from './components/navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import {Toaster} from 'react-hot-toast';
import Footer from './components/Footer';
import { useAppContext } from './context/appcontext';
import Login from './components/Login';
import AllProducts from './pages/AllProducts';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
const App = () => {
  
  const isSellerPath = useLocation().pathname.includes('/seller');
  const {showUserlogin} = useAppContext();


  return (
    <div>
      {isSellerPath ? null : <Navbar/>} 
      {showUserlogin ? <Login/> : null}

      <Toaster/>
      <div className={' $ {isSellerPath ? "" : "px-6 md:px-20 lg:px-32 xl:px-40 2xl:px-52"}'}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<AllProducts/>} />
          <Route path='/products/:category' element={<ProductCategory/>} />
          <Route path='/products/:category/:id' element={<ProductDetails/>} />
        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
    </div>
  )
}

export default App
