import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <main className="hero">
        <h2>Experience Timeless Art</h2>
        <p>
          Explore masterpieces from across centuries and cultures. From ancient masterpieces 
          to contemporary marvels, each piece tells a story of human ingenuity, emotion and spirit—
          discover the endless conversations that art holds.
        </p>
        <Link to="/collections" className="btn">View Collections</Link>
      </main>
      
      <section>
        <h3>Featured highlights</h3>
        <div className="grid">
          <article>
            <img src="benin-mask.jpeg" alt="Benin Mask" />
            <h4>Art (Sculptures)</h4>
          </article>
          <article>
            <img src="monaLisa-painting.jpg" alt="Monalisa" />
            <h4>International Art</h4>
          </article>
          <article>
            <img src="broadwayBoogieWoogie-painting.jpeg" alt="Broadway Boogie Woogie" />
            <h4>Abstract Art</h4>
          </article>
          <article>
            <img src="ife-bronze.jpeg" alt="Ife Bronze" />
            <h4>Art (Sculptures)</h4>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
