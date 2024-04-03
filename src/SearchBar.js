// SearchBar.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const SearchBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        onSearch(searchValue);
    };

    const searchStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px' 
    };

    const inputStyle = {
        height: '30px', 
        lineHeight: '15px', 
        fontSize: '15px' 
    };

    const buttonStyle = {
        height: '30px', 
        lineHeight: '15px', 
        fontSize: '15px'
    };
    
    return (
        <div style={searchStyle}>
            <input 
                type="text" 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} 
                placeholder="Search products..." 
                style={inputStyle}
            />
            <Button style={buttonStyle} onClick={handleSearch}>Search</Button>
        </div>
    );
};

export default SearchBar;

