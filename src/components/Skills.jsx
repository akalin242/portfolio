import profile from '../data/profile';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">技能</h2>
      <div className={styles.grid}>
        {profile.skills.map(skill => (
          <span key={skill} className={styles.badge}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
