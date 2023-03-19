import React from 'react';
import './Home.css';

const Home = ({ user }) => {
  return (
    <div className="home">
      <h1>Welcome, {}!</h1>
      <p>Hi there, thanks for logging in!</p>
    </div>
  );
};

export default Home;