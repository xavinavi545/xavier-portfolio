export default function SkillsSection() {
  const skills = [
    {
      icon: "fas fa-server",
      name: "Backend",
      list: "Java (Spring Boot)\nPython (Flask)\nNode.js"
    },
    {
      icon: "fas fa-desktop",
      name: "Frontend",
      list: "TypeScript\nJavaScript\nReact"
    },
    {
      icon: "fas fa-brain",
      name: "Inteligencia Artificial",
      list: "TensorFlow\nComputer Vision\nFaceNet"
    },
    {
      icon: "fas fa-mobile-alt",
      name: "Mobile",
      list: "Kotlin\nReact Native\nAndroid"
    },
    {
      icon: "fas fa-cloud",
      name: "DevOps",
      list: "Kubernetes\nAzure\nDocker"
    },
    {
      icon: "fas fa-database",
      name: "Bases de Datos",
      list: "MongoDB\nMySQL\nPostgreSQL"
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">
        <i className="fas fa-code"></i>
        Habilidades Técnicas
      </h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-category">
            <div className="skill-icon">
              <i className={skill.icon}></i>
            </div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-list">
              {skill.list.split('\n').map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}