import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'
import Header from './components/Header'
import { ProductsList } from './pages/ProductsList'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductsList />} />
        <Route path='/product-details/:index?' element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
