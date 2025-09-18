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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-72 h-72 bg-blue-400/5 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-72 h-72 bg-purple-400/5 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Sobre mí
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Desarrollador apasionado por crear experiencias digitales excepcionales
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-3">
                  🚀
                </span>
                Mi Historia
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Impulsado por la curiosidad y una pasión por la innovación, me enfoco en explorar el 
                mundo del desarrollo web y la inteligencia artificial. Disfruto dar vida a las ideas 
                a través del código, combinando creatividad y tecnología para construir soluciones con impacto.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Actualmente, en el último año de mi carrera en Ingeniería Informática, trabajo para 
                convertirme en desarrollador full-stack mientras me especializo en IA. En un proceso constante 
                de aprendizaje y mejora, veo cada desafío como una oportunidad para crecer y dar forma al futuro 
                con la tecnología..
              </p>
            </div>

            {/* Experience */}
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center text-white mr-3">
                  💼
                </span>
                Experiencia
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-200 dark:border-blue-800 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Skills */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
                  ⚡
                </span>
                Habilidades Técnicas
              </h3>
              <div className="space-y-6">
                {skillCategories.map((category, categoryIndex) => (
                  <div key={category.title} className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
                      {category.title}
                    </h4>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="group">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">{skill.icon}</span>
                              <span className="font-medium text-gray-900 dark:text-white">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-blue-500/25"
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
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center text-white mr-3">
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
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-300 hover-lift"
                  >
                    <span className="text-lg">{interest.icon}</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">
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