
// --------------------- Functionality to display the cart items ---------------------
// Fetches data from localStorage when the component mounts and sets it to the cart state
// Also updates the cart state whenever the key (that is the user), changes
// This ensures that the cart is always in sync with the localStorage and reflects the current user's cart
// Checkout functionality is not implemented yet, but a button is provided for future extension

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

    // ---------------------- Function to remove an item from the cart ---------------------------
    // It filters out the item with the given id from the cart state and updates the localStorage
    // It also alerts the user that the product has been removed successfully

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem(key, JSON.stringify(updatedCart));
        alert("Product Removed Fron Cart Successfully!");
    };

    // Calculates the total price of all items in the cart by summing up their prices
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    // Renders the cart items in either grid or table view based on the viewMode prop
    // If viewMode is true, it displays the items in a grid format, otherwise in a table format
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
                    <button className="checkout-button">Proceed to Checkout</button>
                </div>
            ) : (
                <h2>Your cart is empty. Click on the View All Products button in the Navbar to add some products!</h2>
            )}
        </div>
        </>
        
    ); 
    
}

export default Cart;