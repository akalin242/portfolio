import { FiMail, FiGithub } from 'react-icons/fi';
import profile from '../data/profile';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">联系方式</h2>
      <div className={styles.links}>
        <a href={`mailto:${profile.contact.email}`} className={styles.link}>
          <FiMail size={20} />
          <span>{profile.contact.email}</span>
        </a>
        <a href={profile.contact.github} className={styles.link} target="_blank" rel="noopener noreferrer">
          <FiGithub size={20} />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}
