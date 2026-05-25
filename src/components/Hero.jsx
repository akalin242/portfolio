import { FiGithub, FiMail } from 'react-icons/fi';
import { SiBilibili } from 'react-icons/si';
import profile from '../data/profile';
import styles from './Hero.module.css';

const iconMap = {
  github: FiGithub,
  email: FiMail,
  bilibili: SiBilibili,
};

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.card}>
        {profile.avatar ? (
          <img src={profile.avatar} alt={profile.name} className={styles.avatar} />
        ) : (
          <div className={styles.avatarPlaceholder}>
            {profile.name.slice(0, 1)}
          </div>
        )}

        <h1 className={styles.name}>
          {profile.name.split('').map((ch, i) => (
            <span key={i} className={styles.nameChar}>{ch}</span>
          ))}
        </h1>

        <p className={styles.bio}>{profile.bio}</p>

        <div className={styles.divider} />

        <div className={styles.social}>
          {profile.social.map(s => {
            const Icon = iconMap[s.icon];
            return Icon ? (
              <a key={s.label} href={s.url} className={styles.socialLink} title={s.label}
                 target={s.url.startsWith('mailto') ? undefined : '_blank'}
                 rel="noopener noreferrer">
                <Icon size={18} />
              </a>
            ) : null;
          })}
        </div>
      </div>
    </section>
  );
}
