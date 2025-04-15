import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const About = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <header style={{ marginBottom: '20px' }}>
        <nav>
          <Link to="/hotels" style={{ textDecoration: 'none', color: '#2a9d8f', fontSize: '1.2rem' }}>
            View Hotel Cards
          </Link>
        </nav>
      </header>
      <h1>The Great Hoard of Unused Hotel Soaps</h1>
      <p>
        Every day, millions of hotel guests use a soap bar once or twice before leaving it behind. 
        This leads to a massive, unseen stockpile of barely used soaps across hotels worldwide. 
        While some of these soaps are discarded, others are repurposed through recycling programs 
        to help communities in need.
      </p>
      <p>
        Organizations like <strong>Clean the World</strong> work to collect and process these 
        leftover soaps, turning waste into a valuable resource for hygiene and sanitation efforts globally. 
        With sustainability initiatives on the rise, many hotels are adopting dispenser-style toiletries 
        and encouraging guests to minimize waste.
      </p>
      <p>
        The Great Hoard of Unused Hotel Soaps highlights both the challenges of modern hospitality waste 
        and the potential for positive change through recycling and responsible consumption.
      </p>
    </div>
  );
};

export default About;