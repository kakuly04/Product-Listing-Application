
// --------------------- Functionality to display the cart items ---------------------
// Fetches data from localStorage when the component mounts and sets it to the cart state
// Also updates the cart state whenever the key (that is the user), changes
// This ensures that the cart is always in sync with the localStorage and reflects the current user's cart
// Checkout functionality is not implemented yet, but a button is provided for future extension

import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useState, useEffect } from "react";
import MyCarousel_2 from '../Carousel_2';

const Cart = ({viewMode}) => {
    const [cart, setCart] = useState([]);
    const key = `cart-${auth.currentUser?.uid}`;
    const [error, setError] = useState(null);
  
    useEffect(() => {
        try {
            const storedCart = localStorage.getItem(key);
            if (storedCart) {
                const parsedCart = JSON.parse(storedCart);
                if (Array.isArray(parsedCart)) {
                    setCart(parsedCart);
                } else {
                    throw new Error("Invalid cart data format in localStorage");
                }
            } else {
                setCart([]);
            }
        } catch (err) {
            setError("Failed to load cart data. Please try again later.");
            console.error("Error loading cart data:", error);
            setCart([]);
        }
    }, [key]);

    // ---------------------- Function to remove an item from the cart ---------------------------
    // It filters out the item with the given id from the cart state and updates the localStorage
    // It also alerts the user that the product has been removed successfully

    const removeFromCart = (id) => {
        try {
            const updatedCart = cart.filter(item => item.id !== id);
            setCart(updatedCart);
            localStorage.setItem(key, JSON.stringify(updatedCart));
            alert("Product Removed Fron Cart Successfully!");
        } catch (err) {
            setError("Failed to remove item from cart. Please try again later.");
            console.error("Error removing item from cart:", err);
            alert("An error occurred while removing the item from the cart. Please try again later.");
        }
    };
    // ---------------------- Function to handle checkout functionality ---------------------------
    // Currently, it is a placeholder that alerts the user that the checkout functionality is not implemented
    const handleCheckout = () => {
        // Placeholder for future checkout functionality
        alert("Checkout functionality is not implemented yet.");
    };

    // Calculates the total price of all items in the cart by summing up their prices
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    // Renders the cart items in either grid or table view based on the viewMode prop
    // If viewMode is true, it displays the items in a grid format, otherwise in a table format
    if (error) {
        return (
        <div className="cart-error-message">
            <h2>{error}</h2>
            <Link to="/products" className="back-to-products">Back to Products</Link>
            <p>Please try again later.</p>
        </div>
        );
    }
    return (
        <>
        <MyCarousel_2/>
        <h1 className="cart-title">🛒 Welcome to Your Cart</h1>
        {viewMode ? (
            <div className="products-grid">
                {cart.map(product => (
                    <div key={product.id} className="product-grid-card">
                        <img src={product.images[0]} alt={product.title} />
                        <div className="product-grid-card-body">
                            <h3>{product.title}</h3>
                            <h4>₹{ product.price}</h4>
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
                            <h4>₹ {product.price}</h4>
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
                    <h2>Total Price: ₹ {totalPrice.toFixed(2)}</h2>
                    <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
                </div>
            ) : (
                <h2>Your cart is empty. Click on the View All Products button in the Navbar to add some products!</h2>
            )}
        </div>
        </>
        
    ); 
    
}

export default Cart;