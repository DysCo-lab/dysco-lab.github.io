import type { Route } from "../hooks/useHashRoute";
import { projects, people } from "../data/labData";
import Avatar from "../components/Avatar";
import { useState } from "react";
import AuthorThumb from "../components/AuthorThumb";
import ImageGrid from "../components/ImageGrid";
import { publications } from "../data/labData";

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
  const lead = members[0] ?? null;

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

      {lead && (
        <div style={{ margin: "12px 0" }}>
          <AuthorThumb person={lead} size={64} />
        </div>
      )}

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


          {/* Publications & Code (project-specific links shown inline when possible) */}
          <div style={{ marginTop: 12 }}>
            <div className="subsection-title">Publications & Code</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14 }}>
              {publications.map((p, i) => (
                <li key={i} style={{ padding: "4px 0" }}>
                  {p.title} — {p.venue} ({p.year})
                  {p.links?.[0] && /arxiv|preprint/i.test(p.links[0].label || p.links[0].url || "") && (
                    <a href={p.links[0].url} target="_blank" rel="noreferrer"> [{p.links[0].label}]</a>
                  )}
                </li>
              ))}

              {/* Project-specific code / external links (github, arxiv) */}
              {project.links?.filter(Boolean).map((l, i) => {
                const isVideo = /youtube|youtu\.be|drive\.google\.com/i.test(l.url);
                const isCode = /github|gitlab|bitbucket/i.test(l.url);
                const isArxiv = /arxiv/i.test(l.url) || /arxiv/i.test(l.label || "");
                // show inline label; link if it's arxiv or code or video
                return (
                  <li key={`pl-${i}`} style={{ padding: "4px 0" }}>
                    {l.label}
                    {(isCode || isArxiv) && (
                      <a href={l.url} target="_blank" rel="noreferrer"> [{l.label}]</a>
                    )}
                    {!isCode && !isArxiv && !isVideo && (
                      <span> — {l.url}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Publications: lightweight list (could be filtered per project later) */}
          <div style={{ marginTop: 12 }}>
            <div className="subsection-title">Publications & Code</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14 }}>
              {publications.map((p, i) => (
                <li key={i} style={{ padding: "4px 0" }}>
                  {p.title} — {p.venue} ({p.year}) {p.links?.[0] && (
                    <a href={p.links[0].url} target="_blank" rel="noreferrer"> [{p.links[0].label}]</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div style={{ flex: "1 1 52%" }}>
          {/* Abstract / long description placed at top (no title) */}
          {project.longDescription
            .split(/\n\n/)
            .map((para, i) => (
              <p key={i} style={{ marginBottom: "0.9em" }}>
                {para}
              </p>
            ))}
        </div>
      </div>

      {/* Methodology section */}
      <div style={{ marginTop: 20 }}>
        <div className="subsection-title">Methodology</div>
        <div style={{ marginTop: 8 }}>
          {/* placeholder: allow text or image */}
          {project.gallery && project.gallery.length > 0 ? (
            <ImageGrid images={project.gallery} size={160} />
          ) : (
            <p style={{ marginBottom: 8 }}>Describe methodology here.</p>
          )}

          {/* Video preview: if project.links contains a YouTube or Drive link, embed preview */}
          {project.links?.find((l) => /youtube|youtu\.be|drive\.google\.com/i.test(l.url)) && (
            <div style={{ marginTop: 12 }}>
              {project.links!.map((l, i) => {
                if (/youtube|youtu\.be/i.test(l.url)) {
                  // Normalize YouTube to embed URL
                  const ytIdMatch = l.url.match(/(v=|youtu\.be\/)??([A-Za-z0-9_-]{6,})/);
                  const id = ytIdMatch ? ytIdMatch[2] : null;
                  if (!id) return null;
                  return (
                    <div key={i} style={{ marginTop: 8 }}>
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${id}`}
                        title={l.label || "Video"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  );
                }
                if (/drive\.google\.com/i.test(l.url)) {
                  // Attempt to extract file ID and embed (works for viewers)
                  const idMatch = l.url.match(/[-\w]{25,}/);
                  const id = idMatch ? idMatch[0] : null;
                  if (!id) return null;
                  return (
                    <div key={i} style={{ marginTop: 8 }}>
                      <iframe
                        src={`https://drive.google.com/file/d/${id}/preview`}
                        width="640"
                        height="360"
                        allow="autoplay"
                        title={l.label || "Drive Video"}
                      />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
      </div>

      {/* Results section */}
      <div style={{ marginTop: 20 }}>
        <div className="subsection-title">Results</div>
        <div style={{ marginTop: 8 }}>
          <p style={{ marginBottom: 8 }}>Results and discussion go here.</p>
        </div>
      </div>

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
