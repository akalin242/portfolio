import { FiExternalLink } from 'react-icons/fi';
import profile from '../data/profile';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">项目经历</h2>
      <div className={styles.grid}>
        {profile.projects.map(project => (
          <div key={project.title} className={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.techList}>
              {project.tech.map(t => (
                <span key={t} className={styles.tech}>{t}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                查看项目 <FiExternalLink />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
