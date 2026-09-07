import { useEffect, useState, useCallback } from "react";

export type Route =
  | "home"
  | "research"
  | "project"
  | "people"
  | "publications"
  | "schedule"
  | "projects-sheet"
  | "join";

const KNOWN: Record<string, Route> = {
  "": "home",
  "/": "home",
  "/research": "research",
  "/people": "people",
  "/publications": "publications",
  "/schedule": "schedule",
  "/projects-sheet": "projects-sheet",
  "/join": "join",
};

export type ParsedRoute = {
  route: Route;
  param?: string; // e.g. project slug for #/project/slug
};

function parseHash(): ParsedRoute {
  const raw = window.location.hash.replace(/^#/, "");
  // /project/<slug>
  const projMatch = raw.match(/^\/project\/(.+)$/);
  if (projMatch) return { route: "project", param: projMatch[1] };
  return { route: KNOWN[raw] ?? "home" };
}

export function useHashRoute(): [ParsedRoute, (r: Route, param?: string) => void] {
  const [parsed, setParsed] = useState<ParsedRoute>(() => parseHash());

  useEffect(() => {
    const onChange = () => {
      setParsed(parseHash());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const navigate = useCallback((r: Route, param?: string) => {
    let target = "#/";
    if (r === "project") target = `#/project/${param ?? ""}`;
    else if (r !== "home") target = `#/${r}`;
    if (window.location.hash !== target) {
      window.location.hash = target;
    }
  }, []);

  return [parsed, navigate];
}
