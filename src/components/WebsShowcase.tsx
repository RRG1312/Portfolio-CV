'use client'

import { FocusCards } from "@/components/ui/focus-cards";
import { RevealWrapper, StaggerReveal } from "@/components/ui/reveal-wrapper";

export default function WebsShowcase() {
  const websites = [
    {
      title: "DD Excellence",
      src: "/dd_mockup.png",
      url: "https://ddexcellence.es",
    },
    {
      title: "BM Global Capital",
      src: "/bmglobalcapital_mockup.png",
      url: "https://bmglobalcapital.info/",
    },
    {
      title: "Asia Hotel",
      src: "/asiahotel_mockup.png",
      url: "https://www.asiahotel.com.pe/",
    },
    {
      title: "Anguna Navarro",
      src: "/angunavarro_mockup.png",
      url: "https://angunavarro.com/",
    },
    {
      title: "Instalación Baterías Madrid",
      src: "/bateriasmadrid_mockup.png",
      url: "https://instalacionbateriasmadrid.com/",
    },
  ];

  return (
    <section id="websites" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <RevealWrapper animation="fadeUp" duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              Webs Desplegadas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explora las aplicaciones web que he desarrollado y desplegado en producción
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper animation="slideUpFade" delay={0.3} duration={0.8}>
          <FocusCards cards={websites} />
        </RevealWrapper>

      </div>
    </section>
  )
}