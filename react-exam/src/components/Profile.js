import React from 'react';

const Profile = ({ name, surname, email, gender, age, region, img }) => {
  return (
    <div className="ui card">
      <img alt={name} src={img} />
      <h3>
        {name} {surname}
      </h3>
      <p>Email: {email}</p>
      <p>Gender: {gender}</p>
      <p>Age: {age}</p>
      <p>Country of origin: {region}</p>
    </div>
  );
};

export default Profile;
