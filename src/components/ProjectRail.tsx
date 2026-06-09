import type { Project } from "../data/projects";
import { Reveal } from "./Motion";
import { ProjectImage } from "./ProjectImage";
import { RepoLink } from "./RepoLink";

type ProjectRailProps = {
  projects: Project[];
  onOpenGallery: (project: Project) => void;
};

export function ProjectRail({ projects, onOpenGallery }: ProjectRailProps) {
  return (
    <section className="project-rail-section" aria-label="Otros proyectos">
      <Reveal className="rail-intro">
        <h2>Otros proyectos</h2>
        <p>
          Exploraciones, prototipos y reconstrucciones que muestran versatilidad visual, criterio de
          interfaz y atención al detalle.
        </p>
      </Reveal>

      <div className="project-rail">
        {projects.map((project, index) => (
          <Reveal className="project-card" key={project.slug} delay={index * 0.06}>
            <ProjectImage project={project} onOpen={onOpenGallery} />
            <div className="project-card__body">
              <h3>{project.title}</h3>
              <p>{project.headline}</p>
              <RepoLink href={project.repoUrl} label="Repositorio" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
