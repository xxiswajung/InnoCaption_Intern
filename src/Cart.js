import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onRemove, onEdit }) => {

    const CartStyle = {
        minHeight: '400px', // 컨테이너 최소 높이 설정
        maxHeight: '400px', // 컨테이너 최대 높이 설정
        minWidth: '500px',  // 컨테이너 최소 너비 설정
        maxWidth: '500px',  // 컨테이너 최대 너비 설정
        border: '1px solid gray',
        overflowY: 'auto'  // 세로 스크롤 설정
    };

    const emptyCartStyle = {
        fontSize: '24px',    // 텍스트 크기 설정
        textAlign: 'center', // 텍스트를 중앙에 정렬합니다
        lineHeight : '400px',
        color: 'gray'        // 텍스트의 색상 설정 (선택적)
    };

    return (
        <div>
            <h2>Your Cart</h2>
            <div style={CartStyle}>
            {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item} onRemove={onRemove} onEdit={onEdit} />
                    ))
                ) : (
                    <p style={emptyCartStyle}>Your cart is empty</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
