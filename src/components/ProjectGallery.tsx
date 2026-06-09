import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { GalleryTarget } from "../data/projects";

type ProjectGalleryProps = {
  project: GalleryTarget | null;
  onClose: () => void;
};

export function ProjectGallery({ project, onClose }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    setActiveIndex(0);
    setFailedImages(new Set());
  }, [project?.slug]);

  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % project.gallery.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + project.gallery.length) % project.gallery.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  const image = project.gallery[activeIndex];
  const failed = failedImages.has(image.src);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + project.gallery.length) % project.gallery.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % project.gallery.length);
  };

  return (
    <div className="gallery-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className={`gallery-dialog gallery-dialog--${project.displayMode}`}
        role="dialog"
        aria-modal="true"
        aria-label={`Galería de ${project.title}`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="gallery-header">
          <div>
            <p>Captura {activeIndex + 1} de {project.gallery.length}</p>
            <h2>Galería de {project.title}</h2>
          </div>
          <button className="gallery-icon-button" type="button" aria-label="Cerrar galería" onClick={onClose}>
            <X aria-hidden="true" size={22} strokeWidth={2} />
          </button>
        </header>

        <div className="gallery-stage">
          <button className="gallery-icon-button" type="button" aria-label="Captura anterior" onClick={goToPrevious}>
            <ChevronLeft aria-hidden="true" size={24} strokeWidth={2} />
          </button>

          <figure className="gallery-figure">
            <div className="gallery-image-frame">
              <div className="gallery-fallback" aria-hidden={failed ? undefined : "true"}>
                <span>{image.label}</span>
                <small>{image.description}</small>
              </div>
              {!failed && (
                <img
                  src={image.src}
                  alt={image.label}
                  onError={() => {
                    setFailedImages((current) => new Set(current).add(image.src));
                  }}
                />
              )}
            </div>
            <figcaption>{image.description}</figcaption>
          </figure>

          <button className="gallery-icon-button" type="button" aria-label="Siguiente captura" onClick={goToNext}>
            <ChevronRight aria-hidden="true" size={24} strokeWidth={2} />
          </button>
        </div>

        <div className="gallery-thumbs" aria-label="Miniaturas de capturas">
          {project.gallery.map((item, index) => (
            <button
              key={item.src}
              className={index === activeIndex ? "gallery-thumb is-active" : "gallery-thumb"}
              type="button"
              aria-label={`Ver captura ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{item.label}</small>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
