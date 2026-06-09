import { ArrowUpRight, Mail } from "lucide-react";

export function ContactFooter() {
  return (
    <footer className="contact-footer" id="contacto">
      <div>
        <h2>Hablemos.</h2>
        <p>
          Estoy abierto a colaborar en productos digitales donde la interfaz, la identidad visual y
          la implementación tengan el mismo peso.
        </p>
      </div>

      <a className="footer-mail" href="mailto:uchihawiner@gmail.com">
        <Mail aria-hidden="true" size={20} strokeWidth={2} />
        <span>uchihawiner@gmail.com</span>
        <ArrowUpRight aria-hidden="true" size={22} strokeWidth={2} />
      </a>

      <p className="copyright">
        © {new Date().getFullYear()} Christopher Eugenio Nieves Martínez. Hecho con intención,
        diseño y mucha creatividad.
      </p>
    </footer>
  );
}
