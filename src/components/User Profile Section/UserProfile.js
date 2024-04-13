// Write your JS code here
import React from 'react'

const UserProfile = ({name, phoneNumber, email, address}) => {
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>{phoneNumber}</p>
      <p>{email}</p>
      <address>{address}</address>
      <div className="actions">
        <button>EDIT</button>
        <button>LOGOUT</button>
      </div>
    </div>
  )
}

export default UserProfile
