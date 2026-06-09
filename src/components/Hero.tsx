import { Mail } from "lucide-react";
import { motion, MotionConfig } from "framer-motion";
import type { Project } from "../data/projects";
import { ProjectImage } from "./ProjectImage";
import { RepoLink } from "./RepoLink";

type HeroProps = {
  leadProject: Project;
  onOpenGallery: (project: Project) => void;
};

export function Hero({ leadProject, onOpenGallery }: HeroProps) {
  return (
    <MotionConfig reducedMotion="user">
      <header className="site-hero" id="inicio">
        <nav className="site-nav" aria-label="Navegación principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#enfoque">Enfoque</a>
          <a href="#contacto">Contacto</a>
          <span>Diseñador frontend</span>
        </nav>

        <div className="hero-grid">
          <motion.div
            className="hero-title-wrap"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1>
              <span>Christopher </span>
              <span>Eugenio </span>
              <span>Nieves </span>
              <span>Martínez</span>
            </h1>
          </motion.div>

          <motion.div
            className="hero-copy"
            id="enfoque"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>
              Diseño interfaces con composición, ritmo visual y una base técnica que mantiene la
              experiencia clara cuando el producto se vuelve complejo.
            </p>
            <div className="hero-actions">
              <a className="mail-link" href="mailto:uchihawiner@gmail.com">
                <Mail aria-hidden="true" size={18} strokeWidth={2} />
                <span>uchihawiner@gmail.com</span>
              </a>
              <RepoLink href="https://github.com/Mukinma" label="GitHub" variant="profile" />
            </div>
          </motion.div>

          <motion.div
            className="hero-media"
            initial={{ opacity: 0, rotate: 2.5, y: 30 }}
            animate={{ opacity: 1, rotate: -1.5, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectImage project={leadProject} priority onOpen={onOpenGallery} />
          </motion.div>
        </div>
      </header>
    </MotionConfig>
  );
}
