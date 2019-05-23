import React from 'react';

const User = ({ user, getUserProfile }) => {
  return (
    <ul>
      <li style={{ cursor: 'pointer' }} onClick={getUserProfile}>
        {user.name} {user.surname}
      </li>
    </ul>
  );
};

export default User;
