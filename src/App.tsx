import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WebinarDetails from './components/WebinarDetails';
import Speakers from './components/Speakers';
import Testimonials from './components/Testimonials';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  // Update the page title
  React.useEffect(() => {
    document.title = 'LinguaLeap | Effective Communication Strategies Webinar';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WebinarDetails />
        <Speakers />
        <Testimonials />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;