import { lab } from "../data/labData";

export default function Join() {
  return (
    <div>
      <div className="section-title">Join / Contact</div>

      <p>
        We are always looking for motivated students (BTP, MS, PhD), interns,
        and postdoctoral candidates with a background or strong interest in
        dynamics, control, fluid mechanics, thermoacoustics, applied
        mathematics, or robotics.
      </p>

      <div className="subsection-title">How to join</div>
      <p>
        Admission to the PhD, MS (by Research), and BTech programs at IIT
        Hyderabad is handled through the regular institute admission process;
        please see the{" "}
        <a href="https://iith.ac.in" target="_blank" rel="noreferrer">
          IIT Hyderabad website
        </a>{" "}
        for formal application portals and deadlines.
      </p>
      <p>
        <b>Before or after you apply</b>, feel free to email the PI to introduce
        yourself. Please include:
      </p>
      <ul style={{ fontSize: 14, paddingLeft: 20 }}>
        <li>a short CV (at most two pages),</li>
        <li>
          a brief description of your research interests (half a page is
          plenty) and why you are interested in DysCo specifically,
        </li>
        <li>
          for postdocs: a research statement and 1–2 representative
          publications,
        </li>
        <li>names and contact details of two references.</li>
      </ul>

      <div className="subsection-title">Mailing list</div>
      <p>
        To stay up to date on talks, meetings, and social events, join the lab
        Google Group:
      </p>
      <ul className="info-list">
        <li>
          Email the list:{" "}
          <a href={`mailto:${lab.mailingList}`}>{lab.mailingList}</a>
        </li>
        <li>
          <a href={lab.mailingListSignup} target="_blank" rel="noreferrer">
            Subscribe to the DysCo Google Group
          </a>
        </li>
      </ul>

      <div className="subsection-title">Student openings</div>
      <ul className="info-list">
        <li>
          <b>PhD positions:</b> Candidates with a Master’s in Mechanical,
          Aerospace, Electrical, Chemical Engineering, Engineering Mechanics,
          Applied Mathematics, Physics, or related fields are encouraged to
          apply through the regular IITH PhD admissions cycle.
        </li>
        <li>
          <b>MS (By Research):</b> Admitted twice a year through the IITH MS
          program.
        </li>
        <li>
          <b>BTP / Undergraduate projects (IITH):</b> Please stop by the lab or
          send email with your CV and transcript.
        </li>
        <li>
          <b>Summer internships:</b> We host 1–2 interns per summer through the
          IITH Summer Research Fellowship Program, or via external fellowships
          (KVPY, INSPIRE, DAAD-WISE, MITACS, S.N. Bose, etc.).
        </li>
        <li>
          <b>Postdocs:</b> Write to the PI with a CV, research statement, and
          two references; we can also support applications for NPDF, DST
          Inspire Faculty, etc.
        </li>
      </ul>

      <div className="subsection-title">Contact</div>
      <address
        style={{
          fontStyle: "normal",
          fontSize: 14,
          lineHeight: 1.7,
        }}
      >
        <div style={{ fontWeight: 600 }}>{lab.longName}</div>
        {lab.address.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        <div style={{ marginTop: 6 }}>
          Email:{" "}
          <a href={`mailto:${lab.email}`}>{lab.email}</a>
        </div>
        <div>
          PI email:{" "}
          <a href={`mailto:${lab.piEmail}`}>{lab.piEmail}</a>
        </div>
        <div>
          GitHub:{" "}
          <a href={lab.github} target="_blank" rel="noreferrer">
            {lab.github}
          </a>
        </div>
      </address>
    </div>
  );
}
