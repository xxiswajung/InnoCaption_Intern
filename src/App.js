import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/scrollspy.js";

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
      fetch('https://dummyjson.com/products')
          .then(response => response.json())
          .then(data => {
              setProducts(data.products);
              setFilteredProducts(data.products); 
          });
     }, []);

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
    };

    const handleRemoveFromCart = (productId) => {
      setCartItems(cartItems.filter(item => item.id !== productId));
  };

    const handleEditCartItem = (productId, newQuantity) => {
        setCartItems(currentItems => 
            currentItems.map(item => 
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleSearch = (searchTerm) => {
      if (!searchTerm) {
          setFilteredProducts(products);
      } else {
          setFilteredProducts(products.filter(product => 
              product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
              product.category.toLowerCase().includes(searchTerm.toLowerCase())
          ));
      }
  };

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
};

    const layoutStyle = {
        marginTop: '40px',
        display: 'flex', 
        justifyContent: 'space-evenly', 
        alignItems: 'stretch',
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto' 
    };

    return (
        <div style={centerStyle}>
            <h1>Welcome to E-commerce website</h1>
            <SearchBar onSearch={handleSearch} />
            <div style={layoutStyle}>
                <ProductList style={{ flex: 1, marginRight: '20px' }} products={filteredProducts} onAddToCart={handleAddToCart} />
                <Cart style={{ flex: 1 }} cartItems={cartItems} onRemove={handleRemoveFromCart} onEdit={handleEditCartItem} />
            </div>
        </div>
    );
};

export default App;

