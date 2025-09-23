'use client'

import { useEffect, useState } from 'react'
import { GitHubRepo } from '@/types/github'

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const username = 'RRG1312'
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
          {
            signal: controller.signal,
            headers: {
              'Accept': 'application/vnd.github.v3+json'
            }
          }
        )

        clearTimeout(timeoutId)

        if (response.ok) {
          const reposData = await response.json()
          // Filtrar repos más importantes y obtener todos, no solo los con estrellas
          const featuredRepos = reposData
            .filter((repo: GitHubRepo) =>
              !repo.name.includes('.github') &&
              !repo.name.toLowerCase().includes('readme') &&
              repo.description // Solo repos con descripción
            )
            .sort((a: GitHubRepo, b: GitHubRepo) => {
              // Ordenar por estrellas, luego por fecha de actualización
              if (b.stargazers_count !== a.stargazers_count) {
                return b.stargazers_count - a.stargazers_count
              }
              return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
            })
            .slice(0, 6)
          setRepos(featuredRepos)
        } else if (response.status === 403) {
          console.warn('GitHub API rate limit exceeded, using fallback data')
          setRepos([]) // Could set fallback data here
        } else {
          console.error(`GitHub API responded with status: ${response.status}`)
          setRepos([])
        }
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            console.warn('GitHub API request timed out')
          } else {
            console.error('Error fetching GitHub repos:', error.message)
          }
        } else {
          console.error('Unknown error fetching GitHub repos:', error)
        }
        setRepos([]) // Set empty array on error to prevent UI crashes
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f1e05a',
      TypeScript: '#3178c6',
      Python: '#3776ab',
      Java: '#ed8b00',
      'C++': '#00599c',
      CSS: '#1572B6',
      HTML: '#e34c26',
      React: '#61dafb',
      Vue: '#4fc08d',
      Go: '#00add8',
      Rust: '#000000',
      Swift: '#fa7343',
      Kotlin: '#7f52ff',
      PHP: '#777bb4',
    }
    return colors[language] || '#6b7280'
  }

  const generateProjectImage = (repoName: string, language: string) => {
    // Generate a simple SVG as placeholder since we don't have real images
    const gradients = [
      'from-blue-400 to-purple-600',
      'from-green-400 to-teal-600', 
      'from-purple-400 to-pink-600',
      'from-yellow-400 to-orange-600',
      'from-indigo-400 to-blue-600',
      'from-pink-400 to-red-600'
    ]
    const gradientClass = gradients[repoName.length % gradients.length]
    
    return `data:image/svg+xml,${encodeURIComponent(`
      <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24" font-weight="bold">${repoName}</text>
      </svg>
    `)}`
  }

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text">
            Proyectos Destacados
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="glass-card rounded-lg overflow-hidden">
                  <div className="h-48 bg-surface-secondary"></div>
                  <div className="p-6">
                    <div className="h-4 bg-border rounded mb-2"></div>
                    <div className="h-3 bg-border rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Una selección de mis proyectos más recientes y destacados en GitHub
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <div
              key={repo.id}
              className="group glass-card rounded-lg overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${
                  [
                    'from-accent to-accent-light',
                    'from-gray-400 to-gray-600',
                    'from-accent-light to-accent',
                    'from-gray-500 to-gray-700',
                    'from-accent/80 to-accent-light/80',
                    'from-gray-600 to-gray-800'
                  ][index % 6]
                } flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <div className="text-3xl mb-2">📁</div>
                    <div className="text-sm font-semibold opacity-90 px-4">
                      {repo.name}
                    </div>
                  </div>
                </div>
                
                {/* Overlay with stats */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="bg-black/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center">
                    ⭐ {repo.stargazers_count}
                  </span>
                  <span className="bg-black/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center">
                    🍴 {repo.forks_count}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent-light transition-colors">
                    {repo.name}
                  </h3>
                </div>
                
                <p className="text-text-secondary text-sm mb-4 leading-relaxed line-clamp-2">
                  {repo.description || 'Proyecto en desarrollo...'}
                </p>
                
                {/* Language and topics */}
                <div className="flex items-center justify-between mb-4">
                  {repo.language && (
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      ></div>
                      <span className="text-sm text-foreground font-medium">
                        {repo.language}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-xs text-text-secondary">
                    {new Date(repo.updated_at).toLocaleDateString('es-ES')}
                  </div>
                </div>
                
                {/* Topics */}
                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="bg-surface-secondary text-accent px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Action buttons */}
                <div className="flex space-x-3">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-accent text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-accent/90 transition-all duration-200 hover-lift"
                  >
                    Ver Código
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center glass-card text-foreground text-sm font-semibold py-2 px-4 rounded-lg hover-lift"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a
            href="https://github.com/RRG1312"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent/90 transition-all duration-200 hover-lift"
          >
            Ver todos los proyectos en GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}