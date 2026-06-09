import type { Project } from "../data/projects";
import { Reveal } from "./Motion";
import { ProjectImage } from "./ProjectImage";
import { RepoLink } from "./RepoLink";

type FeaturedProjectsProps = {
  projects: Project[];
  onOpenGallery: (project: Project) => void;
};

export function FeaturedProjects({ projects, onOpenGallery }: FeaturedProjectsProps) {
  return (
    <section className="featured-section" id="proyectos" aria-label="Proyectos destacados">
      {projects.map((project, index) => (
        <Reveal className="featured-project" key={project.slug} delay={index * 0.08}>
          <aside className="featured-project__index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </aside>
          <div className="featured-project__content">
            <p className="section-marker">Proyecto destacado</p>
            <h2>{project.title}</h2>
            <p className="project-headline">{project.headline}</p>
            <p className="project-description">{project.description}</p>
            <ul className="stack-list" aria-label={`Tecnologías de ${project.title}`}>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <RepoLink href={project.repoUrl} />
          </div>
          <ProjectImage project={project} priority={index === 0} onOpen={onOpenGallery} />
        </Reveal>
      ))}
    </section>
  );
}
