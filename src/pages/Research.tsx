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
        {/* Our research spans nonlinear dynamics, thermoacoustics, data-driven
        modeling, and the control of aerial robotic systems. A common thread is
        a tight coupling between analysis, simulation, and physical experiment.
        Each active project is listed below; click through for descriptions,
        involved students, and related papers. */}
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
              {(() => {
                const leadIds = Array.isArray(p.leadIds)
                  ? p.leadIds
                  : p.leadId
                    ? p.leadId.split(",").map((id) => id.trim()).filter(Boolean)
                    : [];
                const leads = leadIds
                  .map((id) => people.find((x) => x.id === id) ?? null)
                  .filter((person): person is NonNullable<typeof person> => Boolean(person));

                return leads.map((lead) => (
                  <a
                    key={lead.id}
                    href={lead.website ?? "#/people"}
                    title={`${lead.name} — project lead`}
                    onClick={(e) => {
                      if (!lead.website) {
                        e.preventDefault();
                        navigate("people");
                      }
                    }}
                  >
                    <Avatar person={lead} size={34} circle />
                  </a>
                ));
              })()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
