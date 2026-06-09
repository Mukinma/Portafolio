import { ExternalLink, Github } from "lucide-react";

type RepoLinkProps = {
  href: string;
  label?: string;
  variant?: "repo" | "profile";
};

export function RepoLink({ href, label = "Ver repositorio", variant = "repo" }: RepoLinkProps) {
  const Icon = variant === "profile" ? Github : ExternalLink;

  return (
    <a className="repo-link" href={href} target="_blank" rel="noreferrer">
      <span>{label}</span>
      <Icon aria-hidden="true" size={17} strokeWidth={2} />
    </a>
  );
}
