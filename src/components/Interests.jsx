import profile from '../data/profile';
import styles from './Interests.module.css';

export default function Interests() {
  return (
    <section id="interests">
      <h2 className="section-title">兴趣 & 爱好</h2>
      <div className={styles.grid}>
        {profile.interests.map(item => (
          <div key={item.title} className={styles.card} style={{ '--accent-color': item.color }}>
            <span className={styles.emoji}>{item.emoji}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
