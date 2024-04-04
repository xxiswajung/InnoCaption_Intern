import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const CartItem = ({ item, onRemove, onEdit }) => {
    const [editMode, setEditMode] = useState(false);
    const [quantity, setQuantity] = useState(item.quantity);

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        onEdit(item.id, quantity);
        setEditMode(false);
    };

    const buttonStyle = {
        height: '25px', 
        lineHeight: '10px', 
        fontSize: '15px' 
    };

    return (
        <div style={{marginLeft:'10px'}}>
            <h4>{item.title}</h4>
            {editMode ? (
                <div>
                    <input 
                        type="number" 
                        value={quantity} 
                        min="1"
                        onChange={handleQuantityChange}
                        style={{marginRight: '10px'}}
                    />
                    <Button variant="outline-success" onClick={handleSave}>Save</Button>
                </div>
            ) : (
                <div>
                    <p>Quantity: {item.quantity}</p>
                    <Button style={{...buttonStyle, marginBottom:'10px'}}variant="outline-warning" onClick={handleEdit}>Edit</Button>
                    <Button style={{...buttonStyle, marginLeft:'10px', marginBottom:'10px'}} variant="outline-danger" onClick={() => onRemove(item.id)}>Remove</Button>
                </div>
            )}
        </div>
    );
};

export default CartItem;
