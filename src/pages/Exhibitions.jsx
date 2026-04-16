import React from 'react';

const Exhibitions = () => {
  return (
    <main>
      <section className="page-header">
        <h2>Exhibitions</h2>
        <p>Discover exhibitions that showcase the richness of art, history, and culture across time. From ancient civilizations and timeless traditions to modern creativity and global expressions of identity.</p>
      </section>

      <section>
        <h3>Current Exhibitions</h3>
        <article className="exhibit">
          <img src="egyptImage.jpeg" alt="Egyptian Art Exhibit" />
          <div>
            <h4>Egyptian Art</h4>
            <p>On view until December 31st, 2026. Travel back to the land of pharaohs and pyramids. Discover sacred relics, ancient writings, and everyday objects that tell the story of life along the Nile.</p>
          </div>
        </article>

        <article className="exhibit">
          <img src="THE GREAT WAVE OF KANAGAWA(1831).jpeg" alt="Contemporary Exhibit" />
          <div>
            <h4>Contemporary Art</h4>
            <p>On view until November 30th, 2026. This exhibition showcases the diverse voices of today's artists. From paintings and installations to digital media, each piece reflects bold ideas and creativity.</p>
          </div>
        </article>
      </section>

      <section>
        <h3>Upcoming Exhibition</h3>
        <article className="exhibit">
          <img src="jerseyMuseum.jpeg" alt="Football Culture Exhibit" />
          <div>
            <h4>Football as a Culture</h4>
            <p>Opening January 2027. More than a game, football is a global language of passion and identity. Explore jerseys, posters, and memorabilia that celebrate artistry, tradition, and the community spirit of the world’s most beloved sport.</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Exhibitions;
