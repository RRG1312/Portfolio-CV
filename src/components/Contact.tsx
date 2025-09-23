'use client'

import { useState, useRef, useEffect } from 'react'

declare global {
  interface Window {
    grecaptcha: {
      render: (element: string | Element, options: {
        sitekey: string;
        callback?: (token: string) => void;
        'error-callback'?: () => void;
        theme?: 'light' | 'dark';
      }) => number;
      execute: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
      reset: (widgetId?: number) => void;
    };
  }
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    budget: '',
    message: ''
  })
  const recaptchaRef = useRef<HTMLDivElement>(null)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  useEffect(() => {
    // Load reCAPTCHA when the component mounts
    const loadRecaptcha = () => {
      try {
        if (window.grecaptcha && recaptchaRef.current && !recaptchaLoaded) {
          // Check if recaptcha is already rendered in this element
          if (recaptchaRef.current.children.length === 0) {
            const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LflMr4rAAAAAFgf6ebRDZH99_mKdbW1EK_eHU5Z'
            window.grecaptcha.render(recaptchaRef.current, {
              sitekey: siteKey,
              theme: 'light',
              callback: () => {
                console.log('reCAPTCHA solved')
              },
              'error-callback': () => {
                console.error('reCAPTCHA error occurred')
              }
            })
            setRecaptchaLoaded(true)
          }
        }
      } catch (error) {
        console.error('Error loading reCAPTCHA:', error)
      }
    }

    if (typeof window !== 'undefined') {
      if (window.grecaptcha) {
        loadRecaptcha()
      } else {
        let attempts = 0
        const maxAttempts = 50 // 5 seconds maximum
        const interval = setInterval(() => {
          attempts++
          if (window.grecaptcha) {
            loadRecaptcha()
            clearInterval(interval)
          } else if (attempts >= maxAttempts) {
            console.warn('reCAPTCHA failed to load after 5 seconds')
            clearInterval(interval)
          }
        }, 100)

        return () => clearInterval(interval)
      }
    }
  }, [recaptchaLoaded])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')

    // Get reCAPTCHA token
    const recaptchaToken = window.grecaptcha?.getResponse()
    if (!recaptchaToken) {
      setFormStatus('error')
      alert('Por favor completa el reCAPTCHA')
      return
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      })

      if (response.ok) {
        setFormStatus('sent')
        setFormData({ name: '', email: '', subject: '', budget: '', message: '' })
        window.grecaptcha?.reset()
        setTimeout(() => setFormStatus('idle'), 3000)
      } else {
        const error = await response.json()
        console.error('Error:', error)
        setFormStatus('error')
        setTimeout(() => setFormStatus('idle'), 3000)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 3000)
    }
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Contáctame directamente',
      value: 'ruben.ben111@gmail.com',
      href: 'mailto:ruben.ben111@gmail.com',
      gradient: 'from-primary to-primary-hover'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      description: 'Conectemos profesionalmente',
      value: 'Ruben Rodriguez',
      href: 'https://www.linkedin.com/in/ruben-rodriguez-193a71212/',
      gradient: 'from-primary-600 to-primary-700'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      description: 'Explora mis proyectos',
      value: 'RRG1312',
      href: 'https://github.com/RRG1312',
      gradient: 'from-primary-700 to-primary-800'
    },
    {
      icon: '💬',
      title: 'Discord',
      description: 'Charlemos sobre código',
      value: '@rubenibz13',
      href: 'https://discord.com/',
      gradient: 'from-primary-500 to-primary-600'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
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
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
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
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-300"
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
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-300"
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
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="¿De qué quieres hablar?"
                />
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Presupuesto (opcional)
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-white transition-all duration-300"
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
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto, tus ideas, o simplemente di hola..."
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <div className="mb-6 flex justify-center">
                  <div ref={recaptchaRef}></div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-gradient-to-r from-primary to-primary-hover text-white font-semibold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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