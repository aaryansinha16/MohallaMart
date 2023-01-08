import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Admin from './admin/Admin'
import BecomeSeller from './BecomeSeller'
import Cart from './cart/Cart'
import ForgotPassword from './forgot_password/ForgotPassword'
import Home from './Home/Home'
import Login from './Login'
import Orders from './orders/Orders'
import Products from './products/Products'
import SingleProductPage from './products/SingleProduct'
import Signup from './Signup'
import Wishlist from './wishlist/Wishlist'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={
          <>
          {/* <Navbar /> */}
            <Home />
          <Footer />
          </>
        } />
        <Route path='/products' element={
          <>
          <Navbar />
            <Products/>
          <Footer />
          </>
        } />
        <Route path='/products/:id' element={
          <>
          <Navbar />
            <SingleProductPage/>
          <Footer />
          </>
        } />
        <Route path='/wishlist' element={
          <>
          <Navbar />
            <Wishlist />
          <Footer />
          </>
        } />
        <Route path='/orders' element={
          <>
          <Navbar />
            <Orders />
          <Footer />
          </>
        } />
        <Route path='/cart' element={
          <>
          <Navbar />
            <Cart />
          <Footer />
          </>
        } />
        <Route path='/forgot-password' element={
          <>
            <Navbar />
              <ForgotPassword />
            <Footer />
          </>
        } />
        <Route path='/become-seller' element={
          <>
            <Navbar />
              <BecomeSeller />
            <Footer />
          </>
        } />
        <Route path='/login' element={
          <>
            <Navbar />
              <Login />
            <Footer />
          </>
        } />
        <Route path='/signup' element={
          <>
            <Navbar />
              <Signup />
            <Footer />
          </>
        } />
        <Route path='admin' element={<Admin />} />
    </Routes>
  )
}

export default AllRoutes
