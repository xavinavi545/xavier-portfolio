export default function ProjectsSection() {
  const projects = [
    {
      title: "Sistema de Salud",
      tech: "TypeScript • React • Backend Integration",
      description: "Frontend moderno para sistema de gestión hospitalaria con interfaces intuitivas y funcionalidades avanzadas para el manejo de información médica.",
      github: "https://github.com/xavinavi545/sistema-salud-fronted"
    },
    {
      title: "Reconocimiento Facial - FaceNet",
      tech: "Python • TensorFlow • Computer Vision",
      description: "Implementación de tecnología FaceNet para reconocimiento facial preciso, aplicando redes neuronales profundas y algoritmos de machine learning.",
      github: "https://github.com/xavinavi545/facenet"
    },
    {
      title: "Sistema de Pedidos",
      tech: "Java • Spring Boot • REST API",
      description: "API robusta para gestión de pedidos empresariales con arquitectura escalable y patrones de diseño modernos en Spring Boot.",
      github: "https://github.com/xavinavi545/pedidos-springboot"
    },
    {
      title: "Reconocimiento de Vehículos",
      tech: "Python • OpenCV • Deep Learning",
      description: "Sistema inteligente de reconocimiento y clasificación de vehículos utilizando técnicas avanzadas de visión por computadora.",
      github: "https://github.com/xavinavi545/vehicle-recognition"
    },
    {
      title: "Procesador de Logs",
      tech: "Python • Flask • Data Processing",
      description: "Herramienta eficiente para procesamiento y análisis de logs del sistema, con capacidades de filtrado y generación de reportes automáticos.",
      github: "https://github.com/xavinavi545/procesador-logs-flask"
    },
    {
      title: "Sistema de Voto Electrónico",
      tech: "Java • Spring Boot • Security",
      description: "Backend seguro para sistema de votación electrónica con medidas de seguridad robustas y manejo de grandes volúmenes de datos.",
      github: "https://github.com/xavinavi545/voto_api"
    },
    {
      title: "Aplicación de Kubernetes",
      tech: "Kubernetes • Docker • Microservices",
      description: "Despliegue de microservicios en Kubernetes, demostrando habilidades en orquestación de contenedores y gestión de microservicios.",
      github: "https://github.com/xavinavi545/Kubernetes_ejemplo"
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">
        <i className="fas fa-project-diagram"></i>
        Proyectos Destacados
      </h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-tech">{project.tech}</p>
            <p className="project-description">{project.description}</p>
            <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> Ver código
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}