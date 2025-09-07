// src/App.jsx

import React, { useState } from "react";
import Login from "./Components/login.jsx";
import Signup from "./Components/signup.jsx";


// Corrected import path with proper capitalization
import ForgotPassword from "./Components/forgetpassword.jsx"; 

const App = () => {
  const [view, setView] = useState('login');

  const handleToggle = (newView) => {
    setView(newView);
  };

  const renderView = () => {
    switch (view) {
      case 'login':
        return <Login onToggle={handleToggle} />;
      case 'signup':
        return <Signup onToggle={handleToggle} />;
      case 'forgotPassword':
        return <ForgotPassword onToggle={handleToggle} />;
      default:
        return <Login onToggle={handleToggle} />;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cyan-500 p-4">
      {renderView()}
    </div>
  );
};

export default App;