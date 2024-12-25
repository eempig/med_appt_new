import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ userData }) => {
  return (
    <div className="profile-card">
      <h2>Welcome, {userData.name}</h2>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      {/* Add other necessary details as required */}
    </div>
  );
}

export default ProfileCard;
