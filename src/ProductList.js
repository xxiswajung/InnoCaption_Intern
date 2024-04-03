import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

const ProductList = ({ products, onAddToCart }) => {
    // const [product, setProduct] = useState([]);

    const scrollContainerStyle = {
        maxHeight: '400px', 
        maxWidth: '650px',  
        overflowY: 'scroll',  
        border: '1px solid gray'
    };

    const buttonStyle = {
        height: '25px', 
        lineHeight: '10px', 
        fontSize: '15px' 
    };

    return (
        <div>
            <h2>Product List</h2>
            <div style={scrollContainerStyle}>
                {products.map(product => (
                    <div key={product.id} style={{ marginBottom: '20px' }}>
                            <div style={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
                                <h3 style={{ marginLeft:'10px', marginRight: '10px' }}>{product.title}</h3>
                                <Button style={buttonStyle} variant="outline-success" onClick={() => onAddToCart(product)}>Add to Cart</Button>
                            </div>
                            <p style={{marginLeft:'10px'}}>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
