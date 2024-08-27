import React from 'react';
import Header from '../components/Header';
import BookDetails from '../components/BookDetails';
import AuthorInfo from '../components/AuthorInfo';
import Action from '../components/Action';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Header />
    <main>
      <BookDetails />
      <AuthorInfo />
      <Action />
    </main>
    <Footer />
  </>
);

export default Home;
