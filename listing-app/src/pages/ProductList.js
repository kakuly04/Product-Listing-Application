
// --------------------- Functionality to display a list of products ---------------------
// The ProductList component displays a list of products fetched from the API
// It allows users to view products in either grid or table format based on the viewMode
// It also allows users to search for products by title and add them to their cart

import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useState, useEffect } from "react";

const ProductList = ({ products_listing, viewMode, searchQuery }) => {
    
    const [cart, setCart] = useState([]);
    const key = `cart-${auth.currentUser?.uid}`;
    const filteredProducts = products_listing.products.filter(product =>
        product.title.toLowerCase().includes((searchQuery || "").toLowerCase())
    );

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem(key)) || [];
        setCart(storedCart);
    }, [key]);

    // ---------------------- Function to add an item to the cart ---------------------------
    // It adds the selected product item to the cart state and updates the localStorage
    // It also alerts the user that the product has been added successfully
    
    const addToCart = (product_item) => {
        const updatedCart = [...cart, product_item];
        setCart(updatedCart);
        localStorage.setItem(key, JSON.stringify(updatedCart));
        alert("Product Added to Cart Successfully!");
    };

    return (
        <>
        {viewMode ? (
            <div className="products-grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-grid-card">
                        <img src={product.images[0]} alt={product.title} />
                        <div className="product-grid-card-body">
                            <h3>{product.title}</h3>
                            <h4>₹ {product.price}</h4>
                            <p>{product.stock} pieces left. Hurry!</p>
                            <button onClick = {() => addToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="products-table">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-table-card">
                        <img src={product.images[0]} alt={product.title} />
                        <div className="product-table-card-body">
                            <h3>{product.title}</h3>
                            <h4>Serial Number: {product.id}</h4>
                            <h4>₹ {product.price}</h4>
                            <p>{product.stock} pieces left. Hurry!</p>
                            <button onClick = {() => addToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        )}
        </>
    ); 
}

export default ProductList;