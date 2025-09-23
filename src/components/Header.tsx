'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { GitHubUser } from '@/types/github'

export default function Header() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const username = 'RRG1312'
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

        const response = await fetch(`https://api.github.com/users/${username}`, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        })

        clearTimeout(timeoutId)

        if (response.ok) {
          const userData = await response.json()
          setUser(userData)
        } else if (response.status === 403) {
          console.warn('GitHub API rate limit exceeded for user data')
        } else {
          console.error(`GitHub API responded with status: ${response.status}`)
        }
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            console.warn('GitHub API request timed out for user data')
          } else {
            console.error('Error fetching GitHub user:', error.message)
          }
        } else {
          console.error('Unknown error fetching GitHub user:', error)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  if (loading) {
    return (
      <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-4 border-gray-200 border-t-accent"></div>
      </header>
    )
  }

  return (
    <header className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-gray-200/10 to-gray-300/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-accent-light/5 to-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-12">
            {user?.avatar_url && (
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light rounded-full blur opacity-20"></div>
                <Image
                  src={user.avatar_url}
                  alt={user.name || user.login}
                  width={160}
                  height={160}
                  className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-white shadow-lg hover-lift"
                  priority
                />
              </div>
            )}
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight">
              <span className="gradient-text">
                {user?.name || 'Tu Nombre'}
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-text-secondary mb-8 tracking-wide">
              Ingeniero Informático
            </h2>
            
            {user?.bio && (
              <p className="text-base sm:text-lg lg:text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
                {user.bio}
              </p>
            )}
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {user?.location && (
              <span className="glass-card text-accent px-4 py-2 rounded-full text-sm font-medium hover-lift">
                📍 {user.location}
              </span>
            )}
            {user?.company && (
              <span className="glass-card text-accent-light px-4 py-2 rounded-full text-sm font-medium hover-lift">
                🏢 {user.company}
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12">
            {user?.html_url && (
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-all duration-200 hover-lift"
              >
                <span className="relative z-10">Ver GitHub</span>
              </a>
            )}
            {user?.blog && (
              <a
                href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass-card text-foreground font-medium rounded-lg hover-lift"
              >
                Sitio Web
              </a>
            )}
          </div>

          {user && (
            <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-lg mx-auto">
              <div className="glass-card p-6 rounded-lg text-center hover-lift">
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{user.public_repos}</div>
                <div className="text-sm sm:text-base text-text-secondary font-medium">Repositorios</div>
              </div>
              <div className="glass-card p-6 rounded-lg text-center hover-lift">
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{user.followers}</div>
                <div className="text-sm sm:text-base text-text-secondary font-medium">Seguidores</div>
              </div>
              <div className="glass-card p-6 rounded-lg text-center hover-lift">
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{user.following}</div>
                <div className="text-sm sm:text-base text-text-secondary font-medium">Siguiendo</div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  )
}