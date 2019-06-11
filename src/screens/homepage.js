import React from 'react';
import NavbarComponent from '../components/navbar';
import '../App.css';

const Homepage = () => {
    return (
        <div className="App">
          <NavbarComponent />
          <header className="App-header">
            <img src={'img/Wall-e27.png'} className="App-logo" alt="logo" />
            <h1 className="App-title">Let's find your best companions!</h1>
          </header>
        </div>
    )
}

export default Homepage;