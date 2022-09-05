import React from 'react'
import Analytics from './components/Analytics';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Card />
    </div>
  );
}

export default App;
