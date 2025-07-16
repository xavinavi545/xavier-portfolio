import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <Image src="/profile-photo.jpg" alt="Xavier Navia" width={150} height={150} />
      </div>
      <div className="profile-header">
      </div>
      <div className="profile-info">
        <h1 className="name">Xavier Navia</h1>
        <p className="title">Desarrollador de Software & IA</p>
        <p className="university">Estudiante de Ingeniería en Software<br />PUCEM - Manabí</p>
        
        <div className="languages">
          <h3><i className="fas fa-language"></i> Idiomas</h3>
          <div className="language-item">
            <span>Español</span>
            <span className="language-level">Nativo</span>
          </div>
          <div className="language-item">
            <span>Inglés</span>
            <span className="language-level">B2</span>
          </div>
          <div className="language-item">
            <span>Francés</span>
            <span className="language-level">A2</span>
          </div>
        </div>
        
        <div className="contact-info">
          <a href="https://github.com/xavinavi545" className="contact-item" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            <span>xavinavi545</span>
          </a>
          <a href="https://www.linkedin.com/in/xavier-eduardo-navia-bravo-0543352bb/" className="contact-item" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="mailto:xaviedunavia@gmail.com" className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>Contacto</span>
          </a>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Portoviejo, Manabí</span>
          </div>
        </div>
      </div>
    </div>
  )
}