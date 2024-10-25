import React from 'react';
import './AuthorInfo.css';  // Assuming you'll create a separate CSS file for styles

const AuthorInfo = () => (
  <section id="author-info" className="author-info">
    <div className="author-info__content">
      <div className="author-info__text">
        <p className="body_text">
          Michael Goe is an American fiction writer living in Bloomington, Indiana. 
          He grew up inspired by legends of sci-fi & fantasy storytelling like Philip K. Dick and Garth Nix, and credits his motivation to share his own stories
          to a lifelong love affair with tabletop role-playing games.
        </p>
        <h3 className="section_title">
          Creative storytelling can and should be a collaboration – 
          <a href="https://discord.gg/DfyfVfcgtV" target="_blank" rel="noopener noreferrer"> join the conversation today</a>
        </h3>
        <a href="https://discord.gg/DfyfVfcgtV" target="_blank" rel="noopener noreferrer">
          <img width="250px" src="images/discord_logo_full_black.png" alt="Official Discord" className="author-info__discord-logo" />
        </a>
      </div>
      <div className="author-info__image">
        <img width="250px" src="images/mgoe.jpg" alt="Michael Goe" />
      </div>
    </div>
  </section>
);

export default AuthorInfo;
