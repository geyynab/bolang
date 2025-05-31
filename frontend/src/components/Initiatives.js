import React from 'react';
import '../styles/Initiatives.css';

function Initiatives() {
  return (
    <section className="initiatives">
      <h2>SMART INITIATIVES</h2>
      <div className="initiative-list">
        <div className="item">
          <h3>Mobility</h3>
          <p>In Singapore with a population of 5 million, there are approximately 1 million licensed vehicles. At the same time, our rail network exceeds 180km.</p>
        </div>
        <div className="item">
          <h3>Beeline</h3>
          <img src="https://via.placeholder.com/200x100" alt="Beeline" />
        </div>
        <div className="item">
          <h3>SG Next Bus</h3>
          <img src="https://via.placeholder.com/200x100" alt="SG Next Bus" />
        </div>
      </div>
    </section>
  );
}

export default Initiatives;