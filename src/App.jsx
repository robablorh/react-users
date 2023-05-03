import React, { useState } from 'react';
import Users from './componets/users';
import Adduserforms from './componets/Adduserforms';

function App() {
  const [users, setUsers] = useState([
    { name: 'Roberta Ablorh', email: 'robeb@example.com', gen: 1 },
    { name: 'Juliet Boateng', email: 'jboat@example.com', gen: 2 },
    { name: 'Najat Osman', email: 'najman@example.com', gen: 3 },
  ]);


  function addUser(newUser) {
    setUsers([...users, newUser]);
  }

  return (
    <div>
      <Users users={users} />
      <hr />
      <Adduserforms addUser={addUser} />
    </div>
  );
}

export default App;


