
// ----------------------- Functionality to handle user sign-up --------------------------
// It uses Firebase's createUserWithEmailAndPassword method to create a new user account
// If successful, it clears the input fields and alerts the user about the successful account creation
// If there's an error, it sets the error state to display the error message
// It also redirects the user to the login page after successful signup

import { useNavigate } from "react-router-dom";
import {auth} from '../firebase';
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("User created successfully!");
            setEmail("");
            setPassword("");
            setError("");
            navigate("/login"); // Redirecting to login page after signup
        } catch (err) {
            alert("Error creating user: " + err.message);
            setError(err.message);
        }
    };

    return (
        <div className="signup">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
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
                <button type="submit">Sign Up</button>
            </form>
            {error && 
            (<div className="error">
                <p>⚠️ Failed to Sign Up.</p>
                <p>Error: {error}</p>
                <p>Please try refreshing the page.</p>
            </div>
            )}
        </div>
    );
}

export default SignUp;