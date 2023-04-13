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
import Login from "./components/Auth/Login";


function App() {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }

  console.log(localStorage.cart);
  // const { categoryId } = useParams();
  // console.log(categoryId);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useffect<<<<<<<<<<<<<<<<<<<");
    dispatch(getProducts());

    return () => {
      // console.log('unmount');
    };
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/categories" element={<Products />} />
        <Route path="/categories/:categoryId" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
