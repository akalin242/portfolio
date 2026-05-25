import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import styles from './Navbar.module.css';

const links = [
  { href: '#hero', label: '首页' },
  { href: '#about', label: '关于' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>Home</a>

        <div className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <button className={styles.themeBtn} onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
        </div>

        <button className={styles.menuBtn} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
}
