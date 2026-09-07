import type { Person } from "../data/labData";

type Props = {
  person: Person;
  size?: number;
  circle?: boolean;
};

// Standard avatar: tries images/people/<photo>, falls back to a placeholder
// with the person's initials.
export default function Avatar({
  person,
  size = 90,
  circle = true,
}: Props) {
  // Relative path (no leading /) so the site works under subpaths on GitHub Pages.
  const src = person.photo ? `images/people/${person.photo}` : "";
  const initials = person.name
    .replace(/\[.*?\]/g, "?")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={circle ? "avatar avatar-round" : "avatar"}
      style={{
        width: size,
        height: size,
        borderRadius: circle ? "50%" : 0,
      }}
    >
      {src && (
        <img
          src={src}
          alt={person.name}
          title={person.name}
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            img.style.display = "none";
            const fb = img.nextElementSibling as HTMLElement | null;
            if (fb) fb.style.display = "flex";
          }}
        />
      )}
      <div
        className="avatar-fallback"
        style={{
          display: src ? "none" : "flex",
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
        }}
      >
        {initials}
      </div>
    </div>
  );
}
