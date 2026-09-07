import type { Route } from "../hooks/useHashRoute";
import { lab, logo } from "../data/labData";

type Props = {
  current: Route;
  navigate: (r: Route, param?: string) => void;
};

const NAV: { label: string; route: Route }[] = [
  { label: "Home", route: "home" },
  { label: "Research", route: "research" },
  { label: "People", route: "people" },
  { label: "Publications", route: "publications" },
  { label: "Schedule", route: "schedule" },
  { label: "Projects", route: "projects-sheet" },
  { label: "Join / Contact", route: "join" },
];

export default function Navbar({ current, navigate }: Props) {
  return (
    <header className="topnav">
      <div className="topnav-inner">
        {/* Left: lab name */}
        <a
          href="#/"
          className="topnav-brand"
          onClick={(e) => {
            e.preventDefault();
            navigate("home");
          }}
        >
          <div>
            <div className="topnav-title">{lab.longName}</div>
            <div className="topnav-subtitle">
              {lab.department} · {lab.institution}
            </div>
          </div>
        </a>

        {/* Center: nav links */}
        <nav className="topnav-nav">
          <ul className="topnav-links">
            {NAV.map((n) => (
              <li key={n.route}>
                <a
                  href={n.route === "home" ? "#/" : `#/${n.route}`}
                  className={current === n.route ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(n.route);
                  }}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: logo image (drop in public/images/logo.png to replace) */}
        <a
          href="#/"
          className="topnav-logo"
          onClick={(e) => {
            e.preventDefault();
            navigate("home");
          }}
          aria-label={`${lab.shortName} home`}
        >
          {logo.useImage ? (
            <img
              src={logo.imageSrc}
              alt={`${lab.shortName} logo`}
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.style.display = "none";
                const fb = img.nextElementSibling as HTMLElement | null;
                if (fb) fb.style.display = "inline-flex";
              }}
            />
          ) : null}
          <span
            className="topnav-logo-fallback"
            style={{ display: logo.useImage ? "none" : "inline-flex" }}
            aria-hidden={logo.useImage}
          >
            {/* Inline text monogram — used when useImage is false OR image fails to load */}
            <svg
              viewBox="0 0 140 50"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="DysCo"
              style={{ height: "clamp(40px, 6vw, 64px)", width: "auto" }}
            >
              <text
                x="0"
                y="36"
                fontFamily="Nunito, 'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="32"
                fontWeight="800"
                letterSpacing="-0.5"
                fill="#111"
              >
                D
              </text>
              <text
                x="23"
                y="36"
                fontFamily="Nunito, 'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="32"
                fontWeight="800"
                fill="#8b1a1a"
              >
                y
              </text>
              <text
                x="41"
                y="36"
                fontFamily="Nunito, 'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="32"
                fontWeight="800"
                fill="#111"
              >
                sCo
              </text>
              <line
                x1="0"
                y1="43"
                x2="88"
                y2="43"
                stroke="#8b1a1a"
                strokeWidth="2"
              />
            </svg>
          </span>
        </a>
      </div>
    </header>
  );
}
