import type { Route } from "../hooks/useHashRoute";
import { projects, people } from "../data/labData";
import ProjectThumb from "../components/ProjectThumb";
import Avatar from "../components/Avatar";

type Props = {
  navigate: (r: Route, param?: string) => void;
};

export default function Research({ navigate }: Props) {
  return (
    <div>
      <div className="section-title">Research</div>
      <p style={{ marginBottom: 22, maxWidth: 720 }}>
        Our research spans nonlinear dynamics, thermoacoustics, data-driven
        modeling, and the control of aerial robotic systems. A common thread is
        a tight coupling between analysis, simulation, and physical experiment.
        Each active project is listed below; click through for descriptions,
        involved students, and related papers.
      </p>
      <div className="project-grid">
        {projects.map((p) => (
          <div key={p.slug} className="project-card">
            <ProjectThumb
              project={p}
              onClick={() => navigate("project", p.slug)}
            />
            <h4>
              <a
                href={`#/project/${p.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("project", p.slug);
                }}
              >
                {p.title}
              </a>
            </h4>
            <div className="desc">{p.summary}</div>
            <div className="readmore">
              <a
                href={`#/project/${p.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("project", p.slug);
                }}
              >
                Read more »
              </a>
            </div>
            <div className="people-row">
              {p.memberIds.map((mid) => {
                const person = people.find((x) => x.id === mid);
                if (!person) return null;
                return (
                  <a
                    key={mid}
                    href={person.website ?? "#/people"}
                    title={person.name}
                    onClick={(e) => {
                      if (!person.website) {
                        e.preventDefault();
                        navigate("people");
                      }
                    }}
                  >
                    <Avatar person={person} size={34} circle />
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
