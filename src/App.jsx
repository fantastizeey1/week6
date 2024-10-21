import React, { useState } from "react";
import UserList from "./UserList";
import AddUserForm from "./AddUserForm";

const App = () => {
  const [users, setUsers] = useState([]);

  // Add a new user to the list
  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        User Management App
      </h1>
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <AddUserForm onAddUser={handleAddUser} />
        <UserList users={users} />
      </div>
    </div>
  );
};

export default App;
