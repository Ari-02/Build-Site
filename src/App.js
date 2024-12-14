import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <section id="home" className="section">
        <h1>Home</h1>
        <p>Welcome </p>
      </section>
      <section id="about" className="section">
        <h1>About Us</h1>
        <p></p>
      </section>
      <section id="events" className="section">
        <h1>Events</h1>
        <p>
          
        </p>
      </section>
      <section id="contact" className="section">
        <h1>Contact Us</h1>
        <p>Get in touch with us for more information.</p>
      </section>
    </React.Fragment>
  );
}

export default App;
