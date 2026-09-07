import { people, peopleGroups } from "../data/labData";
import Avatar from "../components/Avatar";

export default function People() {
  return (
    <div>
      {peopleGroups.map((g) => {
        const members = people.filter((p) => g.roles.includes(p.role));
        if (members.length === 0 && !g.isAlumni) return null;
        return (
          <section key={g.label}>
            <div className="section-title">{g.label}</div>
            {g.isAlumni ? (
              <ul className="alumni-list">
                {members.map((a) => (
                  <li key={a.id}>
                    {a.website ? (
                      <a href={a.website} target="_blank" rel="noreferrer">
                        {a.name}
                      </a>
                    ) : (
                      <span>{a.name}</span>
                    )}{" "}
                    <span>
                      {a.msThesis ?? a.phdThesis ?? "Alum, IIT Hyderabad"}.{" "}
                      {a.nowAt ? `${a.nowAt}.` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="people-grid">
                {members.map((p) => (
                  <div className="person" key={p.id}>
                    {p.website ? (
                      <a
                        href={p.website}
                        target="_blank"
                        rel="noreferrer"
                        title={p.topic}
                      >
                        <Avatar person={p} size={90} circle />
                        <div className="p-name">{p.name}</div>
                        {g.showTopic && p.topic && (
                          <div className="p-topic">{p.topic}</div>
                        )}
                      </a>
                    ) : (
                      <>
                        <Avatar person={p} size={90} circle />
                        <div className="p-name">{p.name}</div>
                        {g.showTopic && p.topic && (
                          <div className="p-topic">{p.topic}</div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
