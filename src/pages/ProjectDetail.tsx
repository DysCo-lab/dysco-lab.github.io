import type { Route } from "../hooks/useHashRoute";
import { projects, people } from "../data/labData";
import Avatar from "../components/Avatar";
import { useState } from "react";

type Props = {
  slug: string;
  navigate: (r: Route, param?: string) => void;
};

export default function ProjectDetail({ slug, navigate }: Props) {
  const project = projects.find((p) => p.slug === slug);
  const [failed, setFailed] = useState(false);

  if (!project) {
    return (
      <div>
        <div className="section-title">Project not found</div>
        <p>
          The project you're looking for doesn't exist.{" "}
          <a
            href="#/research"
            onClick={(e) => {
              e.preventDefault();
              navigate("research");
            }}
          >
            Back to all projects
          </a>
          .
        </p>
      </div>
    );
  }

  const members = project.memberIds
    .map((id) => people.find((p) => p.id === id))
    .filter(Boolean) as typeof people;

  return (
    <div className="project-detail">
      <div style={{ fontSize: 13, marginBottom: 14 }}>
        <a
          href="#/research"
          onClick={(e) => {
            e.preventDefault();
            navigate("research");
          }}
        >
          « All research
        </a>
      </div>

      <h2>{project.title}</h2>

      <div className="people-row">
        {members.map((p) => (
          <a
            key={p.id}
            href={p.website ?? "#/people"}
            onClick={(e) => {
              if (!p.website) {
                e.preventDefault();
                navigate("people");
              }
            }}
          >
            <Avatar person={p} size={38} circle />
            <span style={{ fontSize: 13 }}>{p.name}</span>
          </a>
        ))}
      </div>

      {!failed ? (
        <img
          className="thumb"
          src={`images/projects/${project.image}`}
          alt={project.title}
          onError={() => setFailed(true)}
          style={{
            background: "var(--color-bg-soft)",
            height: 420,
            objectFit: "cover",
          }}
        />
      ) : (
        <div
          className="thumb ph"
          style={{
            height: 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-muted)",
          }}
        >
          Project image placeholder: {project.image}
        </div>
      )}

      {project.longDescription
        .split(/\n\n/)
        .map((para, i) => (
          <p key={i} style={{ marginBottom: "0.9em" }}>
            {para}
          </p>
        ))}

      {project.links && project.links.length > 0 && (
        <>
          <div className="subsection-title">Links</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14 }}>
            {project.links.map((l, i) => (
              <li key={i} style={{ padding: "2px 0" }}>
                <a href={l.url}>{l.label}</a>
              </li>
            ))}
          </ul>
        </>
      )}

      <div style={{ marginTop: 28, fontSize: 14 }}>
        <a
          href="#/research"
          onClick={(e) => {
            e.preventDefault();
            navigate("research");
          }}
        >
          « All research
        </a>
      </div>
    </div>
  );
}
