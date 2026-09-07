import type { Route } from "../hooks/useHashRoute";
import { lab, projects, people, news } from "../data/labData";
import ImageSlider from "../components/ImageSlider";
import ProjectThumb from "../components/ProjectThumb";
import Avatar from "../components/Avatar";

type Props = {
  navigate: (r: Route, param?: string) => void;
};

export default function Home({ navigate }: Props) {
  // Show the three thrusts + 3 sub-projects on the home page.
  const featured = projects;

  return (
    <div>
      {/* Intro paragraph – matches the original DysCo wording */}
      <p className="hero">
        The <b>{lab.longName}</b> in <b>{lab.department}</b> at{" "}
        <b>{lab.institution}</b> studies nonlinear systems, fluid dynamics, and
        thermoacoustics with a strong focus on data-driven modeling,
        distributed control, and experimental validation. We combine
        analytical theory, numerical simulation, and table-top experiments.
      </p>

      {/* Image slider */}
      <ImageSlider />

      {/* Research */}
      <div className="section-title">Research</div>
      <p style={{ fontSize: 14, color: "var(--color-muted)", maxWidth: 720, marginBottom: 18 }}>
        Our work is organized around three closely connected thrusts:
        thermoacoustics &amp; instabilities, dynamical systems &amp; control,
        and complex systems (networks, fluids, and data-driven methods).
      </p>
      <div className="project-grid">
        {featured.map((p) => (
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
                    onClick={(e) => {
                      if (!person.website) {
                        e.preventDefault();
                        navigate("people");
                      }
                    }}
                    title={person.name}
                  >
                    <Avatar person={person} size={34} circle />
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 18, fontSize: 14 }}>
        <a
          href="#/research"
          onClick={(e) => {
            e.preventDefault();
            navigate("research");
          }}
        >
          All research projects »
        </a>
      </div>

      {/* News */}
      <div className="section-title">Recent News</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14 }}>
        {news.map((n, i) => {
          const d = new Date(n.date);
          return (
            <li key={i} style={{ padding: "4px 0" }}>
              <span
                style={{
                  fontVariantNumeric: "tabular-nums",
                  color: "var(--color-muted)",
                  marginRight: 12,
                  fontSize: 13,
                }}
              >
                {d.toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </span>
              {n.text}
            </li>
          );
        })}
      </ul>

      <div style={{ marginTop: 22, fontSize: 14 }}>
        <a
          href="#/publications"
          onClick={(e) => {
            e.preventDefault();
            navigate("publications");
          }}
        >
          Full publication list »
        </a>
        {" · "}
        <a
          href="#/people"
          onClick={(e) => {
            e.preventDefault();
            navigate("people");
          }}
        >
          People »
        </a>
        {" · "}
        <a
          href="#/join"
          onClick={(e) => {
            e.preventDefault();
            navigate("join");
          }}
        >
          Join the lab »
        </a>
      </div>
    </div>
  );
}
