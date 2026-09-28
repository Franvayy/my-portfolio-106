import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="intro">THIS IS</p>

        <h1>
          FRANCESCA
          <br />
          SAYCON
        </h1>

        <p className="tagline">
          forging stories, sounds, and ideas into the digital dimensions.
        </p>

        <div className="hero-buttons">
          <a href="#about" className="btn">
            READ MY JOURNEY
          </a>

          <a href="#contact" className="btn">
            CONNECT WITH ME
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;