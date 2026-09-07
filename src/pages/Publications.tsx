import { useMemo } from "react";
import { publications } from "../data/labData";

// Split into (years -> months -> pubs), months sorted in reverse calendar
// order (Dec first, Jan last within each year).
const MONTH_ORDER = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function Publications() {
  const grouped = useMemo(() => {
    const byYear = new Map<number, Map<string, typeof publications>>();
    for (const p of publications) {
      if (!byYear.has(p.year)) byYear.set(p.year, new Map());
      const yearMap = byYear.get(p.year)!;
      const month = p.month ?? "Other";
      if (!yearMap.has(month)) yearMap.set(month, []);
      yearMap.get(month)!.push(p);
    }
    const years = Array.from(byYear.entries()).sort((a, b) => b[0] - a[0]);
    return years.map(([year, mm]) => {
      const months = Array.from(mm.entries()).sort(
        (a, b) => MONTH_ORDER.indexOf(b[0]) - MONTH_ORDER.indexOf(a[0])
      );
      return { year, months };
    });
  }, []);

  return (
    <div>
      <div className="section-title">Publications</div>
      <p style={{ fontSize: 13.5, color: "var(--color-muted)", marginBottom: 18 }}>
        Authors marked with <b style={{ color: "var(--color-ink)" }}>*</b> are
        DysCo Lab members.
      </p>

      {grouped.map(({ year, months }) => (
        <div key={year}>
          <div className="pub-year">{year}</div>
          {months.map(([month, pubs]) => (
            <div key={`${year}-${month}`}>
              {month !== "Other" && <div className="pub-month">{month}</div>}
              {pubs.map((p, i) => (
                <div key={i} className="pub-entry">
                  <div className="pub-title">
                    {p.links && p.links[0] ? (
                      <a href={p.links[0].url}>{p.title}</a>
                    ) : (
                      <span>{p.title}</span>
                    )}
                  </div>
                  <div>
                    {p.authors.split(/,\s*/).map((a, idx, arr) => {
                      const isLab = a.includes("*");
                      return (
                        <span key={idx}>
                          <span style={isLab ? { fontWeight: 600 } : undefined}>
                            {a}
                          </span>
                          {idx < arr.length - 1 ? ", " : ""}
                        </span>
                      );
                    })}
                  </div>
                  <div>
                    <span className="pub-venue">{p.venue}</span>
                    {p.location && (
                      <span className="pub-venue">. {p.location}.</span>
                    )}
                    {p.note && (
                      <span className="pub-note"> {p.note}</span>
                    )}
                  </div>
                  {p.links && p.links.length > 0 && (
                    <div className="pub-links">
                      {p.links.map((l, j) => (
                        <a key={j} href={l.url}>
                          [{l.label}]
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
