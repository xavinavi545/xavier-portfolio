export default function ExperienceSection() {
  const experiences = [
    {
      title: "Facilitador - Taller de Inteligencia Artificial",
      company: "Gestión de Reconocimiento Facial",
      description: "Dirigí un taller especializado en inteligencia artificial enfocado en tecnologías de reconocimiento facial, enseñando conceptos fundamentales de machine learning y computer vision a estudiantes y profesionales."
    },
    {
      title: "Prácticas Preprofesionales",
      company: "Hospital de Especialidades de Portoviejo",
      description: "Desarrollo de soluciones tecnológicas para optimizar procesos hospitalarios y sistemas de información médica, aplicando conocimientos de desarrollo de software en el sector salud."
    },
    {
      title: "Prácticas Preprofesionales",
      company: "Prefectura de Manabí",
      description: "Participación en proyectos de desarrollo de software para la administración pública, contribuyendo a la digitalización de procesos gubernamentales y mejora de servicios ciudadanos."
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">
        <i className="fas fa-briefcase"></i>
        Experiencia
      </h2>
      
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3 className="experience-title">{exp.title}</h3>
          <p className="experience-company">{exp.company}</p>
          <p className="experience-description">{exp.description}</p>
        </div>
      ))}
    </section>
  )
}