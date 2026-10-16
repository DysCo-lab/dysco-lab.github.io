import type { Route } from "../hooks/useHashRoute";
import { projects, people } from "../data/labData";
import { useState } from "react";
import Avatar from "../components/Avatar";
import ImageGrid from "../components/ImageGrid";

type Props = {
  slug: string;
  navigate: (r: Route, param?: string) => void;
};

function resolveVideoEmbedUrl(url?: string): string | null {
  if (!url) return null;

  if (/youtube|youtu\.be/i.test(url)) {
    const ytIdMatch = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    const id = ytIdMatch ? ytIdMatch[1] : null;
    return id ? `https://www.youtube.com/embed/${id}` : null;
  }

  if (/drive\.google\.com/i.test(url)) {
    const idMatch = url.match(/[-\w]{25,}/);
    const id = idMatch ? idMatch[0] : null;
    return id ? `https://drive.google.com/file/d/${id}/preview` : null;
  }

  return null;
}

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

  const lead = project.leadId ? people.find((p) => p.id === project.leadId) ?? null : null;
  const methodologyImages = project.methodologyImages ?? project.gallery ?? [];
  const resultsImages = project.resultsImages ?? [];
  const projectLinks =
    (project.links ?? []).filter((link) => !!link.url && !link.url.startsWith("#"))
      .length > 0
      ? (project.links ?? []).filter((link) => !!link.url && !link.url.startsWith("#"))
      : [
          { label: "Project paper", url: "https://example.com/project-paper" },
          { label: "Project code", url: "https://github.com/DysCo-lab" },
        ];
  const videoEmbedUrl =
    resolveVideoEmbedUrl(project.videoUrl) ??
    projectLinks.map((l) => resolveVideoEmbedUrl(l.url)).find(Boolean) ??
    null;

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

      <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
        <div style={{ flex: "0 0 48%" }}>
          {!failed ? (
            <img
              className="thumb"
              src={`images/projects/${project.image}`}
              alt={project.title}
              onError={() => setFailed(true)}
              style={{
                background: "var(--color-bg-soft)",
                width: "100%",
                height: 360,
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

          <div style={{ marginTop: 12 }}>
            <div className="project-detail-section-title">Publications &amp; code</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 15 }}>
              {projectLinks.map((l, i) => (
                <li key={`pl-${i}`} style={{ padding: "4px 0" }}>
                  <a
                    href={l.url}
                    target={l.url.startsWith("#") ? undefined : "_blank"}
                    rel={l.url.startsWith("#") ? undefined : "noreferrer"}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ flex: "1 1 52%" }} className="project-detail-body">
          {(project.longDescription ? project.longDescription.split(/\n\n/) : ["Project description coming soon."]).map((para, i) => (
            <p key={i} style={{ marginBottom: "0.9em" }}>
              {para}
            </p>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 28 }}>
        <div className="project-detail-section-title">Methodology</div>

        {videoEmbedUrl && (
          <div style={{ marginTop: 12, marginBottom: 12 }}>
            <iframe
              width="100%"
              height="360"
              src={videoEmbedUrl}
              title={project.videoTitle || project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "1px solid var(--color-border)" }}
            />
          </div>
        )}

        {project.methodology ? (
          <p style={{ marginBottom: 12, fontSize: 15, lineHeight: 1.7 }}>{project.methodology}</p>
        ) : (
          <p style={{ marginBottom: 12, fontSize: 15, lineHeight: 1.7 }}>Methodology write-up coming soon.</p>
        )}

        {methodologyImages.length > 0 && (
          <div style={{ marginTop: 12 }}>
            <ImageGrid images={methodologyImages} size={190} gap={12} />
          </div>
        )}
      </div>

      <div style={{ marginTop: 28 }}>
        <div className="project-detail-section-title">Results</div>
        {project.results ? (
          <p style={{ marginBottom: 12, fontSize: 15, lineHeight: 1.7 }}>{project.results}</p>
        ) : (
          <p style={{ marginBottom: 12, fontSize: 15, lineHeight: 1.7 }}>Results and discussion coming soon.</p>
        )}
        {resultsImages.length > 0 && (
          <div style={{ marginTop: 12 }}>
            <ImageGrid images={resultsImages} size={190} gap={12} />
          </div>
        )}
      </div>

      {lead && (
        <div style={{ marginTop: 28 }}>
          <div className="project-detail-section-title">Project lead</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
            <Avatar person={lead} size={56} circle />
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{lead.name}</div>
              {lead.email && (
                <div style={{ fontSize: 13, color: "var(--color-muted)" }}>
                  <a href={`mailto:${lead.email}`}>{lead.email}</a>
                </div>
              )}
            </div>
          </div>
        </div>
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
