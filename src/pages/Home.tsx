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
        Welcome to the <b>{lab.longName}</b> in the {lab.department} at{" "}
        <b>{lab.institution}</b>. We study a variety of interdisciplinary problems centered around <b>modeling and control of complex
        systems</b>. Primary systems under study involve <b>thermoacoustic</b> instabilities, robotic systems inpsired by <b>biomimicry</b>, and <b>unsteady fluid flows</b>. 
        We also have a range of start-ups incubated, which focus on multirotor <b>autonomous aerial</b> vehicles, <b>reusable launch</b> vehicles. 
      </p>

      {/* Image slider */}
      <ImageSlider />

      {/* Research */}
      <div className="section-title">Research</div>
      <p style={{ fontSize: 14, color: "var(--color-muted)", maxWidth: 720, marginBottom: 18 }}>
        {/* Our work is organized around three closely connected thrusts:
        complex systems &amp; instabilities, dynamical systems &amp; control,
        and complex systems (networks, fluids, and data-driven methods). */}
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
              {(() => {
                const lead = p.leadId ? people.find((x) => x.id === p.leadId) ?? null : null;
                if (!lead) return null;
                return (
                  <a
                    href={lead.website ?? "#/people"}
                    onClick={(e) => {
                      if (!lead.website) {
                        e.preventDefault();
                        navigate("people");
                      }
                    }}
                    title={`${lead.name} — project lead`}
                  >
                    <Avatar person={lead} size={34} circle />
                  </a>
                );
              })()}
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
