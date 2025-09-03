'use client'

import { useState } from 'react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent')
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1000)
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Contáctame directamente',
      value: 'ruben.ben111@gmail.com',
      href: 'mailto:ruben.ben111@gmail.com',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      description: 'Conectemos profesionalmente',
      value: 'Ruben Rodriguez',
      href: 'https://www.linkedin.com/in/ruben-rodriguez-193a71212/',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      description: 'Explora mis proyectos',
      value: 'RRG1312',
      href: 'https://github.com/RRG1312',
      gradient: 'from-gray-700 to-gray-800'
    },
    {
      icon: '💬',
      title: 'Discord',
      description: 'Charlemos sobre código',
      value: '@rubenibz13',
      href: 'https://discord.com/',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -left-32 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-blue-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            ¡Trabajemos Juntos!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Estoy siempre interesado en nuevos proyectos y oportunidades. 
            No dudes en contactarme si quieres colaborar o simplemente charlar sobre tecnología.
          </p>
        </div>
        
        {/* Contact Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={method.title}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group glass-card p-6 rounded-2xl text-center hover-lift border border-white/20 dark:border-gray-700/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {method.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {method.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 truncate">
                {method.value}
              </p>
            </a>
          ))}
        </div>
        
        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/20 dark:border-gray-700/30">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Envíame un mensaje
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Cuéntame sobre tu proyecto o simplemente di hola
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="¿De qué quieres hablar?"
                />
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Presupuesto (opcional)
                </label>
                <select
                  id="budget"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white transition-all duration-300"
                >
                  <option value="">Seleccionar rango</option>
                  <option value="< $1,000">Menos de $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="> $10,000">Más de $10,000</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto, tus ideas, o simplemente di hola..."
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {formStatus === 'idle' && 'Enviar mensaje'}
                  {formStatus === 'sending' && (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  )}
                  {formStatus === 'sent' && (
                    <span className="flex items-center justify-center">
                      ✅ ¡Mensaje enviado!
                    </span>
                  )}
                  {formStatus === 'error' && 'Error - Intenta de nuevo'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/RRG1312" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <span className="sr-only">GitHub</span>
              🐙
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <span className="sr-only">LinkedIn</span>
              💼
            </a>
            <a href="mailto:rubenrguez1312@gmail.com" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <span className="sr-only">Email</span>
              📧
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; 2024 Portfolio CV Digital. Desarrollado con ❤️ usando Next.js y Tailwind CSS.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
            Designed & Built by RRG1312
          </p>
        </footer>
      </div>
    </section>
  )
}