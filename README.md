# User Management App

This is a simple **React application** styled with **Tailwind CSS** that allows users to view and add new users through a form. It demonstrates key concepts of **asynchronous React**, including JSON handling, form data, promises, and `async/await`.

## Features

- **Fetch User List**: Displays users from a public API.
- **Add New User**: Submits user data to an API.

## How to Install and Run the App

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd user-management-app

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Start the server:

   ```bash
   npm start

   ```

4. Open at http://localhost:5173/.

Components

- App.js: Combines AddUserForm and UserList, managing user state.
- UserList.js: Fetches and displays users from https:// jsonplaceholder.typicode.com/users.
- AddUserForm.js: Contains a form to input name and email, sending the data via a POST request.

# Asynchronous React Explained

Asynchronous Operations
Asynchronous operations, such as API calls, allow the app to fetch and submit data without blocking the UI. This app uses async/await to handle these operations seamlessly.

## Key Concepts

- JSON: Data format used for API responses and requests.
- Form Data: User input collected and sent to the API.
- Promises: Handle asynchronous operations, resolving or rejecting based on success.
- Async/Await: Syntactic sugar for managing promises, making asynchronous code easier to read.

This app showcases how to effectively manage asynchronous operations in React while providing a user-friendly interface using Tailwind CSS.
