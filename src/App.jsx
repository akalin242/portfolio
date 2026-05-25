import { useState, useEffect } from 'react';
import Sakura from './components/Sakura';
import CursorGlow from './components/CursorGlow';
import ScrollReveal from './components/ScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import styles from './App.module.css';

export default function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className={styles.app}>
      <CursorGlow />
      <Sakura />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className={styles.main}>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
