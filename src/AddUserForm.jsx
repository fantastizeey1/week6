import React, { useState } from "react";

const AddUserForm = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    // Simulate adding a user to an API
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );
      const result = await response.json();
      onAddUser(result);
    } catch (error) {
      console.error("Error adding user:", error);
    }

    // Clear form
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
