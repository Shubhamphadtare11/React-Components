import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const RouterPage = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export const About = () => {
    return (
      <div>
        <h2>About Page</h2>
        <p>This is the About page of our application.</p>
      </div>
    );
  };

 export const UserProfile = () => {
    return (
      <div>
        <h2>User Profile Page</h2>
        <p>Here you can view user information.</p>
      </div>
    );
  };

  export const Home = () => {
    return (
      <div>
        <h2>Home Page</h2>
        <p>Welcome to the Home page!</p>
      </div>
    );
  };
  

export default RouterPage;
