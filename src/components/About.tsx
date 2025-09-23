export default function About() {
  const skillCategories = [
    {
      title: 'Lenguajes de Programación',
      skills: [
        { name: 'Java', icon: '☕', level: 75 },
        { name: 'Python', icon: '🐍', level: 60 },
        { name: 'JavaScript', icon: '🟨', level: 30 },
        { name: 'C', icon: '⚙️', level: 30 },
        { name: 'TypeScript', icon: '🔵', level: 10 },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: '📄', level: 70 },
        { name: 'CSS', icon: '🎨', level: 50 },
        { name: 'Tailwind CSS', icon: '💨', level: 10 },
        { name: 'React', icon: '⚛️', level: 25 },
        { name: 'Next.js', icon: '▲', level: 20 },
      ]
    },
    {
      title: 'Backend & Bases de Datos',
      skills: [
        { name: 'Node.js', icon: '💚', level: 10 },
        { name: 'Django', icon: '🔥', level: 30 },
        { name: 'PostgreSQL', icon: '🐘', level: 70 },
        { name: 'MongoDB', icon: '🍃', level: 70 },
        { name: 'SQL', icon: '💾', level: 70 },
      ]
    },
    {
      title: 'Testing, Sistemas & IA',
      skills: [
        { name: 'JUnit', icon: '✅', level: 40 },
        { name: 'Linux', icon: '🐧', level: 60 },
        { name: 'Machine Learning', icon: '🧠', level: 20 },
        { name: 'Prompt Engineering', icon: '💭', level: 50 },
      ]
    }
  ]

  const experiences = [
    {
      title: 'Grado en Ingeniería Informática',
      company: 'Universidad Alfonso X el Sabio',
      period: '2022 - Presente',
      description: 'Estudios superiores en ingeniería informática con especialización en desarrollo de software y tecnologías emergentes'
    },
    {
      title: 'Desarrollador Web',
      company: 'Dencanto Community',
      period: '2022',
      description: 'Desarrollo, mantenimiento y debugging de una plataforma web utilizando Django. Resolución de errores y optimización del rendimiento del sistema'
    },
    {
      title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
      company: 'Escuela Arte Granada',
      period: '2020 - 2022',
      description: 'Desarrollo de aplicaciones multiplataforma cone nfoque Android'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-72 h-72 bg-accent-light/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Sobre mí
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Desarrollador apasionado por crear experiencias digitales excepcionales
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-lg hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <span className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white mr-3">
                  🚀
                </span>
                Mi Historia
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Impulsado por la curiosidad y una pasión por la innovación, me enfoco en explorar el 
                mundo del desarrollo web y la inteligencia artificial. Disfruto dar vida a las ideas 
                a través del código, combinando creatividad y tecnología para construir soluciones con impacto.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Actualmente, en el último año de mi carrera en Ingeniería Informática, trabajo para 
                convertirme en desarrollador full-stack mientras me especializo en IA. En un proceso constante 
                de aprendizaje y mejora, veo cada desafío como una oportunidad para crecer y dar forma al futuro 
                con la tecnología.
              </p>
            </div>

            {/* Experience */}
            <div className="glass-card p-8 rounded-lg hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <span className="w-8 h-8 bg-accent-light rounded-lg flex items-center justify-center text-white mr-3">
                  💼
                </span>
                Experiencia
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-border pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-accent-light rounded-full"></div>
                    <h4 className="font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-accent-light text-sm font-medium">{exp.company}</p>
                    <p className="text-text-secondary text-sm mb-2">{exp.period}</p>
                    <p className="text-text-secondary text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Skills */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-lg hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <span className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white mr-3">
                  ⚡
                </span>
                Habilidades Técnicas
              </h3>
              <div className="space-y-6">
                {skillCategories.map((category, categoryIndex) => (
                  <div key={category.title} className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                      {category.title}
                    </h4>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="group">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">{skill.icon}</span>
                              <span className="font-medium text-foreground">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-sm text-text-secondary">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-border rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-accent to-accent-light h-2 rounded-full transition-all duration-1000"
                              style={{
                                width: `${skill.level}%`,
                                animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Interests */}
            <div className="glass-card p-8 rounded-lg hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <span className="w-8 h-8 bg-accent-light rounded-lg flex items-center justify-center text-white mr-3">
                  🎯
                </span>
                Intereses
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { name: 'Open Source', icon: '🔓' },
                  { name: 'Machine Learning', icon: '🧠' },
                  { name: 'Cloud Computing', icon: '☁️' },
                  { name: 'DevOps', icon: '⚙️' },
                  { name: 'Web Development', icon: '🌐' },
                  { name: 'UI/UX Design', icon: '🎨' },
                  { name: 'Generative AI', icon: '🤖' }
                ].map((interest) => (
                  <div
                    key={interest.name}
                    className="flex items-center space-x-3 p-3 bg-surface-secondary rounded-lg hover:bg-border transition-all duration-200 hover-lift"
                  >
                    <span className="text-lg">{interest.icon}</span>
                    <span className="font-medium text-foreground">
                      {interest.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}