import React from 'react';
import './App.css';

function App() {
  return (
    <div className="form-container">
      <form className="register-form">
        <input
        className="form-field"
        placeholder="First Name"
        name="firstName"
        ></input>
        <input
        className="form-field"
        placeholder="Last Name"
        name="lastName"
        ></input>
        <input
        className="form-field"
        placeholder="Email"
        name="email"
        ></input>
        <button
        className="form-field"
        type="submit"
        >Register</button>
      </form>
    </div>
  );
}

export default App;
