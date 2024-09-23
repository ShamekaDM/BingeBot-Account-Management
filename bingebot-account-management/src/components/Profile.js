import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mockUsers } from '../mockData'; // Import mock data

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const history = useHistory();
    const dropdownRef = useRef(null);

    useEffect(() => {
        // Simulate fetching user data from mockUsers
        const token = localStorage.getItem('token');
        if (token) {
            const loggedInUser = mockUsers[0]; // Simulate fetching the first user (replace as needed)
            setUserData(loggedInUser);
        } else {
            history.push('/login'); // Redirect to login if no token is found
        }
    }, [history]);

    const handleSignOut = () => {
        localStorage.removeItem('token'); // Clear the token from localStorage
        history.push('/login'); // Redirect to login page after sign-out
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleAccountPage = () => {
        history.push('/account'); // Navigate to account page
    };

    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    if (!userData) return <div>Loading...</div>;

    return (
        <div className="profile-dashboard">
            {/* BINGEBOT Logo */}
            <a href="/" className="logo">BINGEBOT</a>

            {/* User Name in Top Right with Dropdown */}
            <div className="user-name" onClick={toggleDropdown} ref={dropdownRef}>
                <span>Welcome, {userData.name}</span>
                {/* Dropdown Icon (SVG) */}
                <span className="dropdown-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="15px" height="15px">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
                {dropdownOpen && (
                    <div className="dropdown-menu">
                        <div className="dropdown-item" onClick={handleAccountPage}>Account</div>
                        <div className="dropdown-item" onClick={handleSignOut}>Sign Out</div>
                    </div>
                )}
            </div>

            {/* Recommended Movies Section */}
            <section className="movie-section">
                <h3>Recommended Movies</h3>
                <div className="movies-row">
                    {/* Mock movie items */}
                    <div className="movie-item">Movie 1</div>
                    <div className="movie-item">Movie 2</div>
                    <div className="movie-item">Movie 3</div>
                    <div className="movie-item">Movie 4</div>
                    <div className="movie-item">Movie 5</div>
                </div>
            </section>

            {/* Recently Watched Movies Section */}
            <section className="movie-section">
                <h3>Recently Watched Movies</h3>
                <div className="movies-row">
                    {/* Mock movie items */}
                    <div className="movie-item">Movie A</div>
                    <div className="movie-item">Movie B</div>
                    <div className="movie-item">Movie C</div>
                    <div className="movie-item">Movie D</div>
                    <div className="movie-item">Movie E</div>
                </div>
            </section>
        </div>
    );
};

export default Profile;


