'use client'

import { FocusCards } from "@/components/ui/focus-cards";
import { RevealWrapper, StaggerReveal } from "@/components/ui/reveal-wrapper";

export default function WebsShowcase() {
  const websites = [
    {
      title: "DD Excellence",
      src: "/dd_mockup.png", // Usuario pondrá la imagen real
      url: "https://ddexcellence.es", // Cambiar por la URL real
    },
    {
      title: "Custom",
      src: "/captura_para_mpockup.png",
      url: "https://custom-taupe.vercel.app/", // Sin URL porque está en desarrollo
    },
    {
      title: "Work in Progress",
      src: "/work_in_progress.png",
      url: null, // Sin URL porque está en desarrollo
    },
    {
      title: "Work in Progress",
      src: "/work_in_progress.png",
      url: null, // Sin URL porque está en desarrollo
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