import { Routes, Route, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Helmet } from 'react-helmet-async'

import Layout from './Component/Common/Layout.jsx'
import Home from './Component/Common/Home.jsx'
import Shop from './Component/Common/Shop.jsx'
import About from './Component/Common/About.jsx'
import Contact from './Component/Common/Contact.jsx'
import Cart from './Component/Common/Cart.jsx'
import Checkout from './Component/Common/Checkout.jsx'


export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>

      <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar theme="dark" />
    </>
  )
}
