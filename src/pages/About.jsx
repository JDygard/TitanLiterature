import React from 'react';
import Header from '../components/Header';
import BookDetails from '../components/BookDetails';
import AuthorInfo from '../components/AuthorInfo';
import Action from '../components/Action';
import Footer from '../components/Footer';
import MailerLite from '../components/MailerLite';
// Import the background image
import backgroundImage from './background2.png';  // Adjust the path based on your file structure

const About = () => (
  <>
  <div class="container" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "100vh",
      color: "#fff"
    }}>
      <Header />
      <main >
      <MailerLite />
  
        <AuthorInfo />
      </main>
      <Footer />
  </div>
  </>
);

export default About;
