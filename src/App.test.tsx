import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("portfolio page", () => {
  it("renders the Spanish editorial hero with approved identity and contact actions", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Christopher Eugenio Nieves Martínez"
    );
    expect(screen.getByText("Diseñador frontend")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /uchihawiner@gmail.com/i })[0]).toHaveAttribute(
      "href",
      "mailto:uchihawiner@gmail.com"
    );
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/Mukinma"
    );
  });

  it("renders Osvium and FilaCero as featured projects before the secondary project rail", () => {
    render(<App />);

    const featured = screen.getByLabelText("Proyectos destacados");
    expect(within(featured).getByRole("heading", { name: "Osvium" })).toBeInTheDocument();
    expect(within(featured).getByRole("heading", { name: "FilaCero" })).toBeInTheDocument();

    const secondary = screen.getByLabelText("Otros proyectos");
    expect(within(secondary).getByRole("heading", { name: "Virus Attack" })).toBeInTheDocument();
    expect(within(secondary).getByRole("heading", { name: "Lira Visual Prototype" })).toBeInTheDocument();
    expect(within(secondary).getByRole("heading", { name: "MyDrugs UI Recreation" })).toBeInTheDocument();
    expect(within(secondary).getByRole("heading", { name: "Paz Justicia Blog" })).toBeInTheDocument();
  });

  it("opens a navigable project gallery from a project image", () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole("button", { name: /abrir galería de osvium/i })[0]);

    const dialog = screen.getByRole("dialog", { name: /galería de osvium/i });
    expect(within(dialog).getByText("Captura 1 de 3")).toBeInTheDocument();

    fireEvent.click(within(dialog).getByRole("button", { name: /siguiente captura/i }));

    expect(within(dialog).getByText("Captura 2 de 3")).toBeInTheDocument();
  });

  it("renders Cerise as a standalone visual identity section without a repository link", () => {
    render(<App />);

    const section = screen.getByLabelText("Identidad visual");

    expect(within(section).getByRole("heading", { name: "Cerise" })).toBeInTheDocument();
    expect(within(section).getByText("Logo y aplicaciones para una marca de bazar de ropa.")).toBeInTheDocument();
    expect(within(section).queryByRole("link", { name: /repositorio/i })).not.toBeInTheDocument();
  });

  it("opens the nine image Cerise gallery from the visual identity section", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: /abrir galería de cerise/i }));

    const dialog = screen.getByRole("dialog", { name: /galería de cerise/i });
    expect(within(dialog).getByText("Captura 1 de 9")).toBeInTheDocument();
  });
});
