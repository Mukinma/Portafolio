import { useState } from "react";
import { ContactFooter } from "./components/ContactFooter";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Hero } from "./components/Hero";
import { ProjectGallery } from "./components/ProjectGallery";
import { ProjectRail } from "./components/ProjectRail";
import { VisualIdentitySection } from "./components/VisualIdentitySection";
import { ceriseIdentity, projects, type GalleryTarget } from "./data/projects";

export default function App() {
  const [galleryProject, setGalleryProject] = useState<GalleryTarget | null>(null);
  const featuredProjects = projects.filter((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <>
      <Hero leadProject={featuredProjects[0]} onOpenGallery={setGalleryProject} />
      <main>
        <FeaturedProjects projects={featuredProjects} onOpenGallery={setGalleryProject} />
        <ProjectRail projects={secondaryProjects} onOpenGallery={setGalleryProject} />
        <VisualIdentitySection identity={ceriseIdentity} onOpenGallery={setGalleryProject} />
      </main>
      <ContactFooter />
      <ProjectGallery project={galleryProject} onClose={() => setGalleryProject(null)} />
    </>
  );
}
