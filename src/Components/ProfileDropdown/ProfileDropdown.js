import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfileDropdown.css';

function ProfileDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="profile-dropdown">
            <span onClick={() => setIsOpen(!isOpen)}>Welcome, User</span>

            {isOpen && (
                <div className="dropdown-content">
                    <Link to="/profile">Your Profile</Link>
                    {/* Add other links or actions as required */}
                </div>
            )}
        </div>
    );
}

export default ProfileDropdown;
