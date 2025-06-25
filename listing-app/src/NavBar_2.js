
// ------------- Functional Component for Navigation Bar -------------
// This component provides navigation links, search functionality, and view mode toggle for the product listing app
// It also provides buttons for user authentication and logout functionality

import { Link } from "react-router-dom";
import {auth } from "./firebase";
import {signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const NavBar_Menu = ({viewMode, setViewMode, searchQuery, setSearchQuery}) => {
    const user = auth.currentUser;
    const navigate = useNavigate();
    const toggleViewMode = () => {
        setViewMode((prev) => !prev);
    };

    // -------------------- Function to handle user logout --------------------
    // It signs out the user using Firebase authentication and redirects to the login page
    // It also alerts the user about the successful logout or any error that occurs during the process
    
    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("Logged out successfully!");
            navigate("/login"); // Redirecting to login page after logout
        } catch (error) {
            alert("Error logging out!");
            console.error("Error logging out:", error);
            alert("Error logging out: " + error.message);
        }
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h2>Product Listing App</h2>
                {user && <Link to="/" className="nav-main-button">View All Products</Link>}
            </div>
            <div className="navbar-links">
                { user && (
                    <input type = "text"
                    className="search-bar"
                    placeholder="Search Products"
                    value = {searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                )}
                {user &&
                <button onClick={toggleViewMode}>
                    {viewMode ? "Switch to Table View" : "Switch to Grid View"}
                </button>
                }
                { user && <Link to="/cart">View Cart</Link>}
                <Link to="/login">
                    Login
                </Link>
                <Link to="/signup">Sign Up</Link>
                {user &&
                <button className = "logging-out" onClick={handleLogout}>
                    Logout
                </button>
                }
            </div>
        </nav>
    );
}

export default NavBar_Menu;
