import { lab } from "../data/labData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <div style={{ fontWeight: 600, color: "var(--color-ink)", marginBottom: 2 }}>
          {lab.longName}
        </div>
        <div>{lab.room}</div>
        <div>{lab.department}</div>
        <div>{lab.institution}</div>
        <div>Kandi, Sangareddy, Telangana 502284</div>
      </div>
      <div>
        <div>
          <a href={`mailto:${lab.email}`}>{lab.email}</a>
        </div>
        <div>
          PI: <a href={`mailto:${lab.piEmail}`}>{lab.piEmail}</a>
        </div>
        <div>
          <a href={lab.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <div>
          <a href={`mailto:${lab.mailingList}`}>Mailing list</a>
        </div>
      </div>
    </footer>
  );
}
