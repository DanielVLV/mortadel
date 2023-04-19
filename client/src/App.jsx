/* eslint-disable quotes */
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import Cart from "./components/Cart/Cart";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import { getProducts } from "./redux/product.slice";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { checkUser } from './redux/user.slice';

import MyDesign from "./components/MyDesign/MyDesign";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
    return () => {
      // console.log('unmount');
    };
  }, []);

  useEffect(() => {
    dispatch(getProducts());
    return () => {
      // console.log('unmount');
    };
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/categories" element={<Products />} />
          <Route path="/categories/:categoryId" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<ProtectedRoute flag redirectTo="/" />}>
            <Route path="/auth" element={<Auth />} />
          </Route>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/design" element={<MyDesign />} />
          <Route path="/*" element={<HomePage />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
