import React, { useState } from 'react';
import '../../../shared/Form.css';

const SignUpForm = ({ onSignUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // send sign up request to backend
    const userData = {
      name: name,
    };
    onSignUp(userData);
  };

  return (
    <form className="form" onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;