import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
      <div className="about">
        This is about component
        <Link to="/">
          <p>Go to homepage</p>
        </Link>
      </div>
    );
}

export default About;
