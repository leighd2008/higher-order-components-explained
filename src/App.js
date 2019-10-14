import React from "react";

import UserProfile from "./components/user-profile/user-profile.jsx";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <UserProfile name="Diane" email="leighd2008@gmail.com" />
    </div>
  );
}

export default App;
