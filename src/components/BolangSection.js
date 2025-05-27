import React from 'react';
import '../styles/BolangSection.css';

function BolangSection() {
  return (
    <section className="smart-nation">
      <div className="text">
        <h2>SMART NATION</h2>
        <p>Singapore strives to be a Smart Nation, in which people are empowered by technology to lead meaningful and fulfilled lives.</p>
        <button>Download 2025 Plan</button>
      </div>
      <div className="video">
        <img src="https://via.placeholder.com/400x250" alt="Video Placeholder" />
      </div>
    </section>
  );
}

export default BolangSection;