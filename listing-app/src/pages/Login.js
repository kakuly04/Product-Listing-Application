
// ----------------------- Functionality to handle login --------------------------
// It uses Firebase's signInWithEmailAndPassword method to authenticate the user
// If successful, it clears the input fields and redirects to the home page
// If there's an error, it sets the error state to display the error message
// It also alerts the user about the success or failure of the login attempt

import { useState } from "react";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
            setEmail("");
            setPassword("");
            setError("");
            navigate("/"); // Redirecting to home page after login
        } catch (err) {
            alert("Error logging in: " + err.message);
            setError(err.message);
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Login;