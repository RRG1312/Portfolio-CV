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
      <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-4 border-blue-500/20 border-t-blue-500 animate-glow"></div>
      </header>
    )
  }

  return (
    <header className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-teal-400/20 to-blue-600/20 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-12">
            {user?.avatar_url && (
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur animate-glow"></div>
                <Image
                  src={user.avatar_url}
                  alt={user.name || user.login}
                  width={160}
                  height={160}
                  className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-white/50 shadow-2xl hover-lift"
                  priority
                />
              </div>
            )}
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight">
              <span className="gradient-text">
                {user?.name || 'Tu Nombre'}
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8 tracking-wide">
              Ingeniero Informático
            </h2>
            
            {user?.bio && (
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                {user.bio}
              </p>
            )}
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {user?.location && (
              <span className="glass-card text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium hover-lift">
                📍 {user.location}
              </span>
            )}
            {user?.company && (
              <span className="glass-card text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium hover-lift">
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
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10">Ver GitHub</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            )}
            {user?.blog && (
              <a
                href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass-card text-gray-800 dark:text-white font-semibold rounded-xl hover:bg-white/20 hover-lift"
              >
                Sitio Web
              </a>
            )}
          </div>

          {user && (
            <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-lg mx-auto">
              <div className="glass-card p-6 rounded-2xl text-center hover-lift">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">{user.public_repos}</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Repositorios</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center hover-lift">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">{user.followers}</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Seguidores</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center hover-lift">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">{user.following}</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Siguiendo</div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  )
}