import React from "react";


function Users(props) {
    return (
      <div>
        {props.users.map((user, index) => (
          <div key={index}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Gen: {user.gen}</p>
          </div>
        ))}
      </div>
    );
  }

export default Users
