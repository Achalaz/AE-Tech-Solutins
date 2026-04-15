import './index.css';
import './App.css';
import { useState } from 'react';
import useScrollReveal from './hooks/useScrollReveal';

import Loader    from './components/Loader';
import Cursor    from './components/Cursor';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import Marquee   from './components/Marquee';
import Services  from './components/Services';
import Work      from './components/Work';
import About     from './components/About';
import Testimonials from './components/Testimonials';
import FAQ       from './components/FAQ';
import Contact   from './components/Contact';
import Footer    from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  // Activate scroll-reveal after loader finishes
  useScrollReveal();

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
