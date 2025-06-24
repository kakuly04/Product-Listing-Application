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
        alert("Product Removed Fron Cart Successfully!");
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
                            <button onClick = {() => removeFromCart(product.id)}>Remove From Cart</button>
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
                            <button onClick = {() => removeFromCart(product.id)}>Remove From Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        )}
        <div className="cart-total">
            {cart.length > 0 ? (
                <div className="cart-summary">
                    <h2>Total Price: ₹{totalPrice}</h2>
                    <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
                </div>
            ) : (
                <h2>Your cart is empty. Click on the View All Products button in the Navbar to add some products!</h2>
            )}
        </div>
        </>
        
    ); 
    
}

export default Cart;