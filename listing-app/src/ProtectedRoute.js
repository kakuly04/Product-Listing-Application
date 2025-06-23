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