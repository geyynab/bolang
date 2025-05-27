import React from 'react';
import '../styles/Popular.css';

function Popular() {
  return (
    <section className="apps">
      <h2>POPULAR APPS</h2>
      <div className="app-list">
        <div className="app">
          <img src="https://via.placeholder.com/100x100" alt="App1" />
          <p>Beeline</p>
        </div>
        <div className="app">
          <img src="https://via.placeholder.com/100x100" alt="App2" />
          <p>Singapore City Guide</p>
        </div>
        <div className="app">
          <img src="https://via.placeholder.com/100x100" alt="App3" />
          <p>Dash Singapore</p>
        </div>
        <div className="app">
          <img src="https://via.placeholder.com/100x100" alt="App4" />
          <p>SG School Guide</p>
        </div>
      </div>
    </section>
  );
}

export default Popular;