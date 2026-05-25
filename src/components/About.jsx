import profile from '../data/profile';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">关于我</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          {profile.about.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className={styles.edu}>
          <h3>{profile.education.school}</h3>
          <div className={styles.tags}>
            {profile.education.details.map(d => (
              <span key={d} className={styles.tag}>{d}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
