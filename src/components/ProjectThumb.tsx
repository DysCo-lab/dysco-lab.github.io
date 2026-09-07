import { useState } from "react";
import type { Project } from "../data/labData";

type Props = {
  project: Project;
  onClick?: () => void;
};

export default function ProjectThumb({ project, onClick }: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <a
      href={`#/project/${project.slug}`}
      className="thumb"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {!failed ? (
        <img
          src={`images/projects/${project.image}`}
          alt={project.title}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="thumb-fallback">{project.shortTitle ?? project.title}</div>
      )}
    </a>
  );
}
