import Avatar from "./Avatar";
import type { Person } from "../data/labData";

type Props = {
  person: Person;
  size?: number;
  circle?: boolean;
};

export default function AuthorThumb({ person, size = 90, circle = true }: Props) {
  const profileUrl =
    person.website || person.links?.find((l) => /linkedin|website|google scholar|github/i.test(l.label))?.url;

  const content = (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Avatar person={person} size={size} circle={circle} />
      <div style={{ fontSize: 15 }}>
        <div style={{ fontWeight: 600 }}>{person.name}</div>
        {person.topic && <div style={{ fontSize: 13 }}>{person.topic}</div>}
      </div>
    </div>
  );

  return profileUrl ? (
    <a href={profileUrl} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}
