# Cerise Visual Identity Section Design

## Context

The portfolio currently presents frontend, product, and software projects through featured sections, a secondary project rail, and a reusable modal gallery. The Cerise assets already exist under `public/projects/cerise` as one `cover.png` image and eight detail images.

Cerise should communicate visual design interest without shifting the portfolio away from a professional frontend/software presentation.

## Approved Direction

Add a compact standalone section after the secondary project rail. The section is separate from the code project list and framed as visual identity work, not as a repository-backed software project.

The approved layout is the "seccion propia compacta" option:

- On desktop, a two-column section with the circular cover image on the left and copy plus supporting images on the right. On mobile, the cover image stacks above the copy.
- A concise text block labeled as visual identity work.
- The exact chips/tags: `Logo`, `Identidad visual`, `Aplicación de marca`, and `Galería`.
- A short cluster of three supporting square images from `detail-01.png`, `detail-02.png`, and `detail-03.png`.
- A gallery action that reuses the existing project gallery modal.

## Visible Copy

Use professional copy that focuses on the work, not the personal context:

- Section marker: `Identidad visual`
- Title: `Cerise`
- Headline: `Logo y aplicaciones para una marca de bazar de ropa.`
- Description: `Diseño de identidad para Cerise, una marca de bazar de ropa. Exploré un logo flexible, aplicaciones de marca y composiciones pensadas para verse limpias en piezas digitales.`

The app already uses accented Spanish text, so the implementation should preserve accents in visible copy.

## Gallery Content

The gallery should include all nine Cerise images in order:

1. `/projects/cerise/cover.png`
2. `/projects/cerise/detail-01.png`
3. `/projects/cerise/detail-02.png`
4. `/projects/cerise/detail-03.png`
5. `/projects/cerise/detail-04.png`
6. `/projects/cerise/detail-05.png`
7. `/projects/cerise/detail-06.png`
8. `/projects/cerise/detail-07.png`
9. `/projects/cerise/detail-08.png`

The gallery image descriptions should describe logo variants, brand applications, and presentation compositions. Cerise should not show a repository link.

## Architecture

Use the existing portfolio patterns:

- Introduce a small shared gallery item shape for `ProjectGallery` so it can open both software projects and the Cerise visual identity gallery.
- Keep the existing `Project` model repository-focused; do not add an empty repository URL for Cerise.
- Prefer a dedicated `VisualIdentitySection` component instead of forcing Cerise into `ProjectRail`.
- Reuse `ProjectGallery` for the modal and keyboard navigation.
- Keep `ProjectImage` or a small new visual button component only if it matches the approved circular cover treatment.

## Styling

The section should stay within the existing dark editorial system:

- Same max-width and border language as adjacent sections.
- No new page-wide palette or decorative theme.
- The Cerise pink should come primarily from the images.
- Cover image should be circular as approved.
- Supporting images should be square, cropped consistently, and not oversized.
- Mobile layout should stack cleanly with no text or image overlap.

## Testing

Update or add tests to verify:

- The Cerise visual identity section renders after the secondary projects.
- Cerise has no repository link.
- Opening the Cerise gallery shows `Captura 1 de 9`.
- The data contract allows all nine `.png` Cerise images without breaking existing projects.

## Out of Scope

- No full Cerise case study page.
- No extra brand story about the relationship context.
- No new routing.
- No redesign of existing hero, featured projects, or contact footer.
