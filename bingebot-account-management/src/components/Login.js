import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { mockUsers } from '../mockData'; // Import mock data

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();

        // Mock login logic
        const user = mockUsers.find((user) => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('token', 'mockToken');
            history.push('/profile');
        } else {
            setErrorMessage('Invalid email or password');
        }
    };

    const handleRegisterRedirect = () => {
        history.push('/register'); // Redirect to registration page
    };

    return (
        <div className="login-container">
            {/* BINGEBOT Logo */}
            <a href="/" className="logo">BINGEBOT</a>

            {/* Login Form */}
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
                <p>Don't have an account? <span className="register-link" onClick={handleRegisterRedirect}>Sign Up</span></p>
            </form>
        </div>
    );
};



export default Login;



