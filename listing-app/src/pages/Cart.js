import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useState, useEffect } from "react";

const Cart = ({viewMode}) => {
    const [cart, setCart] = useState([]);
    const key = `cart-${auth.currentUser?.uid}`;

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem(key)) || [];
        setCart(storedCart);
    }, [key]);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem(key, JSON.stringify(updatedCart));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <>
        {viewMode ? (
            <div className="products-grid">
                {cart.map(product => (
                    <div key={product.id} className="product-grid-card">
                        <img src={product.images[0]} alt={product.title} />
                        <div className="product-grid-card-body">
                            <h3>{product.title}</h3>
                            <h4>₹{product.price}</h4>
                            <p>{product.stock} pieces left. Hurry!</p>
                            <button onClick = {() => removeFromCart(product)}>Remove From Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="products-table">
                {cart.map(product => (
                    <div key={product.id} className="product-table-card">
                        <img src={product.images[0]} alt={product.title} />
                        <div className="product-table-card-body">
                            <h3>{product.title}</h3>
                            <h4>Serial Number: {product.id}</h4>
                            <h4>₹{product.price}</h4>
                            <p>{product.stock} pieces left. Hurry!</p>
                            <button onClick = {() => removeFromCart(product)}>Remove From Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        )}
        </>
    ); 
    
}

export default Cart;