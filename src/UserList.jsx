import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">User List</h2>
      <ul className="space-y-3">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="bg-gray-50 p-4 shadow rounded">
              {user.name} - {user.email}
            </li>
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;
