export interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  name: string
  company?: string
  blog?: string
  location?: string
  email?: string
  bio?: string
  public_repos: number
  followers: number
  following: number
  html_url: string
}

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description?: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language?: string
  topics: string[]
  created_at: string
  updated_at: string
  homepage?: string
}