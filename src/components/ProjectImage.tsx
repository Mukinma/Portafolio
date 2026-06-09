import { useState } from "react";
import type { Project } from "../data/projects";

type ProjectImageProps = {
  project: Project;
  priority?: boolean;
  onOpen?: (project: Project) => void;
};

export function ProjectImage({ project, priority = false, onOpen }: ProjectImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <button
      className={`project-image project-image--${project.displayMode}`}
      data-project={project.slug}
      type="button"
      aria-label={`Abrir galería de ${project.title}`}
      onClick={() => onOpen?.(project)}
    >
      <div className="project-image__fallback" aria-hidden={failed ? undefined : "true"}>
        <span>{project.title}</span>
        <small>{project.displayMode === "tablet-portrait" ? "Vista vertical tablet" : "Captura de proyecto"}</small>
      </div>
      {!failed && (
        <img
          src={project.image}
          alt={`Captura del proyecto ${project.title}`}
          loading={priority ? "eager" : "lazy"}
          onError={() => setFailed(true)}
        />
      )}
      <span className="project-image__hint">Ver galería</span>
    </button>
  );
}
