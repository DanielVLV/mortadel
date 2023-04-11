import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Products from './components/Products/Products';
import Categories from './components/Categories/Categories';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Auth from './components/Auth/Auth';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
