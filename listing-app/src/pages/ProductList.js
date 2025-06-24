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
                            <h4>₹{product.price}</h4>
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
                            <h4>₹{product.price}</h4>
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