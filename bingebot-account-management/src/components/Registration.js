import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { mockUsers } from '../mockData'; // Import mock data

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        // Check if the email is already registered
        const existingUser = mockUsers.find((user) => user.email === email);
        if (existingUser) {
            setErrorMessage("Email is already registered");
            return;
        }

        // Simulate adding a new user to the mock data
        mockUsers.push({ email, password, name: "New User" });
        history.push('/login'); // Redirect to login after successful registration
    };

    const handleLoginRedirect = () => {
        history.push('/login'); // Redirect to login page
    };

    return (
        <div className="login-container">
            {/* BINGEBOT Logo */}
            <a href="/" className="logo">BINGEBOT</a>

            {/* Registration Form */}
            <form onSubmit={handleRegister}>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                />
                <button type="submit">Register</button>

                {/* Login Button */}
                <button type="button" className="login-button" onClick={handleLoginRedirect}>
                    Back to Login
                </button>
            </form>
        </div>
    );
};

export default Registration;




