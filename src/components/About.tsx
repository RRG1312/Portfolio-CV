import { RevealWrapper, StaggerReveal } from "@/components/ui/reveal-wrapper";

export default function About() {
  const skillCategories = [
    {
      title: 'Lenguajes de Programación',
      icon: '💻',
      gradient: 'from-blue-600 to-indigo-600',
      skills: [
        { name: 'Java', icon: '☕' },
        { name: 'Python', icon: '🐍' },
        { name: 'JavaScript', icon: '🟨' },
      ]
    },
    {
      title: 'Frontend',
      icon: '🎨',
      gradient: 'from-purple-600 to-pink-600',
      skills: [
        { name: 'HTML', icon: '📄' },
        { name: 'CSS', icon: '🎨' },
        { name: 'Tailwind CSS', icon: '💨' },
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
      ]
    },
    {
      title: 'Backend & Bases de Datos',
      icon: '🗄️',
      gradient: 'from-green-600 to-teal-600',
      skills: [
        { name: 'Django', icon: '🔥' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'SQL', icon: '💾' },
      ]
    },
    {
      title: 'Testing & Sistemas',
      icon: '⚙️',
      gradient: 'from-teal-600 to-cyan-600',
      skills: [
        { name: 'JUnit', icon: '✅' },
        { name: 'Linux', icon: '🐧' },
        { name: 'Prompt Engineering', icon: '💭' },
      ]
    }
  ]

  const experiences = [
    {
      title: 'Prácticas en Departamento GRC',
      company: 'KPMG',
      period: '2025 - 2026',
      description: 'Desarrollo y personalización de herramientas de gestión de riesgos y controles para clientes. Revisión y adaptación de matrices de riesgo y control. Comunicación con clientes para análisis de requisitos. Despliegue de soluciones en entornos cliente.',
      tags: ['GRC', 'Gestión de Riesgos', 'Client-Facing', 'Despliegue']
    },
    {
      title: 'Grado en Ingeniería Informática',
      company: 'Universidad Alfonso X el Sabio',
      period: '2022 - 2026',
      description: 'Formación en ingeniería informática abarcando desarrollo de software, bases de datos, redes, sistemas y fundamentos de inteligencia artificial'
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
      description: 'Desarrollo de aplicaciones multiplataforma con enfoque Android'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <RevealWrapper animation="fadeUp" duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              Sobre mí
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ingeniero Informático con experiencia en consultoría y desarrollo web
            </p>
          </div>
        </RevealWrapper>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-8">
            <RevealWrapper animation="slideRight" delay={0.3} duration={0.8}>
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
                Graduado en Ingeniería Informática y con experiencia profesional en consultoría GRC en KPMG,
                trabajo para convertirme en desarrollador full-stack mientras me especializo en IA. En un proceso constante
                de aprendizaje y mejora, veo cada desafío como una oportunidad para crecer y dar forma al futuro
                con la tecnología.
              </p>
              </div>
            </RevealWrapper>

            {/* Experience */}
            <RevealWrapper animation="slideRight" delay={0.5} duration={0.8}>
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
                    {'tags' in exp && exp.tags && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              </div>
            </RevealWrapper>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <RevealWrapper animation="slideLeft" delay={0.4} duration={0.8}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
                  ⚡
                </span>
                Habilidades Técnicas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCategories.map((category) => (
                  <div key={category.title} className="glass-card p-6 rounded-2xl hover-lift">
                    <div className="flex items-center mb-4">
                      <span className={`w-8 h-8 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center text-white mr-3 text-sm`}>
                        {category.icon}
                      </span>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {category.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 border border-gray-200/50 dark:border-gray-700/50 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-300"
                        >
                          <span className="text-xs">{skill.icon}</span>
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </RevealWrapper>

            {/* Interests */}
            <RevealWrapper animation="slideLeft" delay={0.6} duration={0.8}>
              <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center text-white mr-3">
                  🎯
                </span>
                Intereses
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
                    <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                      {interest.name}
                    </span>
                  </div>
                ))}
              </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}
