import React from "react";

import UserProfile from "./components/user-profile/user-profile.jsx";
import UserList from "./components/user-list/user-list";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <UserList />
      <UserProfile name="Diane" email="leighd2008@gmail.com" />
    </div>
  );
}

export default App;
