import { Link } from "react-router-dom";

const NavBar = ({viewMode, setViewMode}) => {
    const toggleViewMode = () => {
        setViewMode((prev) => !prev);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h2>Product Listing App</h2>
                <Link to="/" className="nav-main-button">View All Products</Link>
            </div>
            <div className="navbar-links">
                <button onClick={toggleViewMode}>
                    {viewMode ? "Switch to Table View" : "Switch to Grid View"}
                </button>
                <Link to="/cart">View Cart</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </nav>
    );
}

export default NavBar;
