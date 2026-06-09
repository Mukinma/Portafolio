import { describe, expect, it } from "vitest";
import { ceriseIdentity, projects } from "./projects";

describe("project portfolio data", () => {
  it("defines six projects with the approved featured hierarchy and repository links", () => {
    expect(projects).toHaveLength(6);

    const featured = projects.filter((project) => project.featured);
    expect(featured.map((project) => project.slug)).toEqual(["osvium", "filacero"]);

    expect(projects.map((project) => [project.slug, project.repoUrl])).toEqual([
      ["osvium", "https://github.com/Mukinma/Osvium"],
      ["filacero", "https://github.com/TerminaDes2/FilaCero"],
      ["virus-attack", "https://github.com/patomax31/Virus-Attack"],
      ["lira", "https://github.com/Mukinma/LiraVisualPrototype"],
      ["mydrugs", "https://github.com/Mukinma/MyDrugs"],
      ["paz-justicia", "https://github.com/Mukinma/Paz-Justicia-Blog"]
    ]);
  });

  it("uses the screenshot contract for every local project image", () => {
    for (const project of projects) {
      expect(project.image).toMatch(new RegExp(`^/projects/${project.slug}/cover\\.(png|jpg|webp)$`));
      expect(project.gallery.map((item) => item.src)).toEqual([
        `/projects/${project.slug}/cover.png`,
        `/projects/${project.slug}/detail-01.png`,
        `/projects/${project.slug}/detail-02.png`
      ]);
      expect(project.stack.length).toBeGreaterThanOrEqual(4);
    }
  });

  it("defines Cerise as a visual identity gallery with nine png images", () => {
    expect(ceriseIdentity.title).toBe("Cerise");
    expect(ceriseIdentity.gallery).toHaveLength(9);
    expect(ceriseIdentity.gallery.map((item) => item.src)).toEqual([
      "/projects/cerise/cover.png",
      "/projects/cerise/detail-01.png",
      "/projects/cerise/detail-02.png",
      "/projects/cerise/detail-03.png",
      "/projects/cerise/detail-04.png",
      "/projects/cerise/detail-05.png",
      "/projects/cerise/detail-06.png",
      "/projects/cerise/detail-07.png",
      "/projects/cerise/detail-08.png"
    ]);
  });

  it("marks Osvium screenshots as tablet portrait instead of desktop landscape", () => {
    const osvium = projects.find((project) => project.slug === "osvium");

    expect(osvium?.displayMode).toBe("tablet-portrait");
  });
});
