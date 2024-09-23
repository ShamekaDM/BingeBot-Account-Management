import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const Account = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('John Doe'); // Example initial data for personal info
    const [address, setAddress] = useState('123 Main St');
    const history = useHistory();
    const dropdownRef = useRef(null);

    const handlePasswordChange = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        alert('Password changed successfully!');
    };

    const handlePersonalInfoUpdate = (e) => {
        e.preventDefault();
        alert('Personal information updated successfully!');
    };

    const handleSignOut = () => {
        localStorage.removeItem('token');
        history.push('/login');
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleOutsideClick = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setDropdownOpen(false);
        }
    };

    return (
        <div className="account-dashboard">
            {/* BINGEBOT Logo */}
            <a href="/" className="logo">BINGEBOT</a>

            {/* User Name in Top Right with Dropdown */}
            <div className="user-name" onClick={toggleDropdown} ref={dropdownRef}>
                <span>Welcome, {name}</span>
                <span className="dropdown-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="15px" height="15px">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
                {dropdownOpen && (
                    <div className="dropdown-menu">
                        <div className="dropdown-item" onClick={() => history.push('/profile')}>Profile</div>
                        <div className="dropdown-item" onClick={handleSignOut}>Sign Out</div>
                    </div>
                )}
            </div>

            {/* Account Preferences Section */}
            <section className="account-section">
                <h3>Account Preferences</h3>
                <form onSubmit={handlePasswordChange}>
                    <h4>Change Password</h4>
                    <input
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Save New Password</button>
                </form>

                <form onSubmit={handlePersonalInfoUpdate}>
                    <h4>Update Personal Information</h4>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <button type="submit">Save Personal Information</button>
                </form>
            </section>

            {/* Settings Section */}
            <section className="account-section">
                <h3>Settings</h3>
                <p>Additional account settings can be managed here.</p>
            </section>
        </div>
    );
};

export default Account;



