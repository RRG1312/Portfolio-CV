import Navigation from '@/components/Navigation'
import Header from '@/components/Header'
import About from '@/components/About'
import WebsShowcase from '@/components/WebsShowcase'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen w-full grid-background relative">
      {/* Unified background blur effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Header area blur */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-accent/10 to-accent-light/10 rounded-full blur-3xl"></div>

        {/* About area blur */}
        <div className="absolute top-[100vh] right-0 w-[600px] h-[400px] bg-gradient-to-bl from-accent-light/8 to-accent/8 rounded-full blur-3xl"></div>

        {/* Projects area blur */}
        <div className="absolute top-[180vh] left-0 w-[500px] h-[400px] bg-gradient-to-tr from-accent/6 to-accent-light/6 rounded-full blur-3xl"></div>

        {/* Contact area blur */}
        <div className="absolute top-[260vh] right-1/4 w-[700px] h-[500px] bg-gradient-to-tl from-accent-light/10 to-accent/10 rounded-full blur-3xl"></div>

        {/* Additional ambient blurs */}
        <div className="absolute top-[50vh] left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-[150vh] right-0 w-[400px] h-[300px] bg-accent-light/5 rounded-full blur-3xl animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute top-[220vh] left-1/3 w-[350px] h-[350px] bg-accent/4 rounded-full blur-3xl animate-float" style={{animationDelay: '-4s'}}></div>
      </div>

      <Navigation />
      <section id="home">
        <Header />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="websites">
        <WebsShowcase />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}