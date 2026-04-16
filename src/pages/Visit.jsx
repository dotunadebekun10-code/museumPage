import React from 'react';

const Visit = () => {
  return (
    <main>
      <section className="page-header">
        <h2>Plan Your Visit</h2>
        <p>Everything you need to know before you arrive.</p>
      </section>

      <section className="visit-info">
        <h3>Opening Hours</h3>
        <p>Mon–Fri: 10am – 6pm</p>
        <p>Sat–Sun: 11am – 8pm</p>
      </section>

      <section className="visit-info">
        <h3>Tickets</h3>
        <p>Adults: ₦22,500 | Students: ₦12,000 | Children under 12: Free</p>
      </section>

      <section className="visit-info">
        <h3>Location</h3>
        <p>Victoria Island, Lagos, Nigeria</p>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.951662709521!2d3.4218!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53b3ad8c0b3%3A0x2f3ef0f3f98e1fbb!2sVictoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1695221991264!5m2!1sen!2sng" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Museum Location Map"
          >
          </iframe>
        </div>
      </section>
    </main>
  );
};

export default Visit;
