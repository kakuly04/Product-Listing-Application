
// -------------- Functional Component for Protected Route --------------
// This component checks if the user is authenticated before allowing access to certain routes
// If the user is not authenticated, it redirects them to the login page

import { Navigate } from "react-router-dom";
import {auth } from "./firebase";

const ProtectedRoute = ({ children }) => {
    const user = auth.currentUser;

    if (!user) {
        // User is not authenticated, redirecting to login page
        return <Navigate to="/login" replace />;
    }

    // User is authenticated, rendering the children components
    return children;
}
export default ProtectedRoute;