import { Link } from "react-router-dom";

const NavBar = ({viewMode, setViewMode}) => {
    const toggleViewMode = () => {
        setViewMode((viewMode) => (viewMode === "grid" ? "table" : "grid"));
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h2>Product Listing App</h2>
            </div>
            <div className="navbar-links">
                <button onClick={toggleViewMode}>
                    {viewMode === "grid" ? "Switch to Table View" : "Switch to Grid View"}
                </button>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </nav>
    );
}

export default NavBar;
