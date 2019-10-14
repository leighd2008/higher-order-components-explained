import React from "react";

import UserProfile from "./components/user-profile/user-profile.jsx";
import UserList from "./components/user-list/user-list";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
      <UserProfile
        dataSource="https://jsonplaceholder.typicode.com/posts"
        name="Diane"
        email="leighd2008@gmail.com"
      />
    </div>
  );
}

export default App;
