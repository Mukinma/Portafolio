import type { GalleryTarget, VisualIdentity } from "../data/projects";
import { Reveal } from "./Motion";

type VisualIdentitySectionProps = {
  identity: VisualIdentity;
  onOpenGallery: (target: GalleryTarget) => void;
};

export function VisualIdentitySection({ identity, onOpenGallery }: VisualIdentitySectionProps) {
  return (
    <section className="visual-identity-section" aria-label="Identidad visual">
      <Reveal className="visual-identity-media">
        <button
          className="visual-identity-cover"
          type="button"
          aria-label={`Abrir galería de ${identity.title}`}
          onClick={() => onOpenGallery(identity)}
        >
          <img src={identity.image} alt={`Logo de ${identity.title}`} loading="lazy" />
        </button>
      </Reveal>

      <Reveal className="visual-identity-content" delay={0.08}>
        <p className="section-marker">Identidad visual</p>
        <h2>{identity.title}</h2>
        <p className="project-headline">{identity.headline}</p>
        <p className="project-description">{identity.description}</p>

        <ul className="stack-list visual-identity-tags" aria-label={`Recursos de ${identity.title}`}>
          {identity.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="visual-identity-preview" aria-label={`Aplicaciones visuales de ${identity.title}`}>
          {identity.previewImages.map((image, index) => (
            <button
              className="visual-identity-thumb"
              key={image}
              type="button"
              aria-label={`Ver aplicación visual ${index + 1} de ${identity.title}`}
              onClick={() => onOpenGallery(identity)}
            >
              <img src={image} alt={`Aplicación visual ${index + 1} de ${identity.title}`} loading="lazy" />
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
