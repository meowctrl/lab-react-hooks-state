import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleDarkMode() {
    setIsDarkMode((prev) => !prev);
  }
  // TODO: Implement state for cart management
  const [cart, setCart] = useState([]);
  function handleAddToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
    console.log('Added', product);
  }
  // TODO: Implement state for category filtering
  const [category, setCategory] = useState("all");
  const handleCategoryChange = (e) => setCategory(e.target.value);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode}/>
      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList onAddToCart={handleAddToCart} selectedCategory={category}/>

      {/* TODO: Implement and render Cart component */}
      <Cart cartItems={cart}/>
    </div>
  )
}

export default App