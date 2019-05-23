import React from 'react';

const User = ({ user, getUserProfile }) => {
  const listStyle = () => {
    return {
      cursor: 'pointer',
      display: 'inline-block',
    };
  };

  return (
    <ul>
      <li style={listStyle()} onClick={getUserProfile}>
        {user.name} {user.surname}
      </li>
    </ul>
  );
};

export default User;
