// Central data file for the DysCo Lab website.
// All content lives here; to edit the site, edit this file and the
// files inside public/images/ (no JSX changes needed for routine updates).

// Logo configuration:
//   Set useImage: true and drop a file (SVG / PNG / JPG) into
//   public/images/logo.<ext>, then point imageSrc at it. If the image
//   fails to load, the monogram text "DysCo" falls back automatically.
export const logo = {
  useImage: true,
  // Relative URL — works whether the site is served at / or at a subpath
  // (e.g. https://<user>.github.io/dysco-lab/).
  imageSrc: "images/logo.png",
  // Recommended size: at least 200 px tall for crisp display; SVG preferred.
};

export const lab = {
  shortName: "DysCo Lab",
  longName: "Dynamics and Control Lab",
  department: "Department of Mechanical and Aerospace Engineering",
  institution: "IIT Hyderabad",
  institutionShort: "IITH",
  address: [
    "Dynamics and Control (DysCo) Lab",
    "Dept. of Mechanical and Aerospace Engineering",
    "Indian Institute of Technology Hyderabad",
    "Kandi, Sangareddy, Telangana 502284, India",
  ],
  room: "MAE Block, IIT Hyderabad",
  email: "dysco-lab@mae.iith.ac.in",
  piEmail: "pi@mae.iith.ac.in",
  mailingList: "dysco-lab@googlegroups.com",        // Google Group for reminders
  mailingListSignup: "https://groups.google.com/forum/#!forum/dysco-lab/join",
  github: "https://github.com/DysCo-lab",
  labCalendarUrl:
    "https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata",
  // Replace with DysCo lab calendar public iCal URL / embed src.
  labCalendarICal: "#",
  // PI's free/busy calendar (embed with showTitle=0&showNav=0&showDate=0&mode=WEEK etc.
  // Google only exposes free/busy when the calendar is shared as "See only free/busy (hide details)".)
  piCalendarUrl:
    "https://calendar.google.com/calendar/embed?mode=WEEK&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&height=400&src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata",
  // Google Sheet published as HTML (File → Share → Publish to web → Embed).
  projectsSheetUrl:
    "https://docs.google.com/spreadsheets/d/12345abcdef/pubhtml?widget=true&amp;headers=false",
  projectsSheetEditUrl:
    "https://docs.google.com/spreadsheets/d/12345abcdef/edit",
};

// ------------------------- PEOPLE -------------------------
// photo: file name inside public/images/people/ (retain the original
// filename whenever possible; otherwise use a descriptive name).
// role is used to group them.

export type Person = {
  id: string;
  name: string;
  role:
    | "pi"
    | "faculty"
    | "postdoc"
    | "visitor"
    | "staff"
    | "phd"
    | "ms"
    | "undergrad"
    | "alumni";
  roleLabel?: string; // override group label if needed
  photo?: string;     // filename inside /images/people/
  email?: string;
  website?: string;
  topic?: string;     // research topic / thesis title; shown under name
  // For alumni:
  phdThesis?: string;
  msThesis?: string;
  nowAt?: string;
  graduationYear?: number;
};

export const people: Person[] = [
  // Faculty
  {
    id: "pi",
    name: "[PI Name]",
    role: "pi",
    roleLabel: "Faculty",
    photo: "pi.jpg",
    email: lab.piEmail,
    website: "#",
    topic: "Principal Investigator",
  },

  // Postdocs
  // { id: "postdoc-1", name: "[Postdoc Name]", role: "postdoc", photo: "postdoc1.jpg", website: "#" },

  // PhD students
  {
    id: "phd-1",
    name: "[PhD Student 1]",
    role: "phd",
    photo: "phd1.jpg",
    email: "student1@iith.ac.in",
    topic: "Thermoacoustic instabilities",
  },
  {
    id: "phd-2",
    name: "[PhD Student 2]",
    role: "phd",
    photo: "phd2.jpg",
    email: "student2@iith.ac.in",
    topic: "Geometric control of UAVs",
  },
  {
    id: "phd-3",
    name: "[PhD Student 3]",
    role: "phd",
    photo: "phd3.jpg",
    email: "student3@iith.ac.in",
    topic: "Synchronization in oscillator networks",
  },

  // MS students
  {
    id: "ms-1",
    name: "[MS Student 1]",
    role: "ms",
    photo: "ms1.jpg",
    email: "ms1@iith.ac.in",
    topic: "Data-driven reduced-order models",
  },
  {
    id: "ms-2",
    name: "[MS Student 2]",
    role: "ms",
    photo: "ms2.jpg",
    email: "ms2@iith.ac.in",
    topic: "Koopman/DMD for reacting flows",
  },

  // Undergrads / BTP
  {
    id: "ug-1",
    name: "[BTP Student 1]",
    role: "undergrad",
    photo: "btp1.jpg",
    email: "btp1@iith.ac.in",
    topic: "Quadrotor state estimation",
  },

  // Visitors / staff
  // { id: "visitor-1", name: "[Visitor Name]", role: "visitor", photo: "visitor1.jpg", website: "#", topic: "Data-driven forecasting" },

  // Alumni (keep these in the alumni group below)
  {
    id: "alum-1",
    name: "[Alum 1]",
    role: "alumni",
    msThesis: "MS, IIT Hyderabad",
    nowAt: "Now at [Company / PhD program]",
    graduationYear: 2024,
  },
];

export const peopleGroups: {
  label: string;
  roles: Person["role"][];
  showTopic?: boolean;
  isAlumni?: boolean;
}[] = [
  { label: "Faculty / PI", roles: ["pi", "faculty"] },
  { label: "Postdocs", roles: ["postdoc"] },
  { label: "Visitors", roles: ["visitor"], showTopic: true },
  { label: "Staff", roles: ["staff"] },
  { label: "PhD Students", roles: ["phd"], showTopic: true },
  { label: "MS (By Research) Students", roles: ["ms"], showTopic: true },
  { label: "BTP / Undergraduate Students", roles: ["undergrad"] },
  { label: "Alumni", roles: ["alumni"], isAlumni: true },
];

export function peopleByRole(roles: Person["role"][]) {
  return people.filter((p) => roles.includes(p.role));
}

// ------------------------- PROJECTS -------------------------
// Images live in public/images/projects/ — each project should have a hero
// image (jpg/png/gif). Placeholder names used here match the original
// DysCo repo (`images/lab pic.JPG`) plus descriptive additions.

export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  summary: string;
  image: string;            // filename inside /images/projects/
  gallery?: string[];       // additional slides for the project page
  memberIds: string[];
  longDescription: string;  // can contain multiple paragraphs (use \n\n)
  links?: { label: string; url: string }[];
  active?: boolean;
};

export const projects: Project[] = [
  {
    slug: "thermoacoustics",
    title: "Thermoacoustics and Instabilities",
    image: "thermoacoustics.jpg",
    summary:
      "System identification, reduced-order models, and data-driven prediction for thermoacoustic systems and flutter.",
    memberIds: ["phd-1", "ms-1", "pi"],
    longDescription:
      "Thermoacoustic instability — the feedback between unsteady heat release and acoustic waves in a combustor — is a major technological problem in gas turbines, afterburners, and rocket engines, where it can lead to structural damage or catastrophic failure. At DysCo, we study the transition to instability using experiments on atmospheric-pressure bluff-body stabilized combustors and electrically heated Rijke tubes. We develop data-driven system-identification methods, reduced-order models built around the flame describing function and G-equation, and early-warning precursors (permutation entropy, ordinal pattern complexity, recurrence networks) that detect the onset of high-amplitude oscillations before they are visible in the raw pressure trace.\n\nWe also work on related aeroelastic problems such as flutter and limit-cycle oscillations in lifting surfaces.",
    links: [
      { label: "System identification", url: "#" },
      { label: "Model order reduction", url: "#" },
      { label: "Stability analysis", url: "#" },
    ],
  },
  {
    slug: "dynamical-systems-control",
    title: "Dynamical Systems and Control",
    image: "aerial-robotics.jpg",
    summary:
      "Control and learning strategies for dynamical systems, with an emphasis on aerial robotics.",
    memberIds: ["phd-2", "ug-1", "pi"],
    longDescription:
      "This thrust lies at the intersection of nonlinear dynamical systems theory and modern control. A significant part of the work focuses on aerial robots — quadrotors, fixed-wing UAVs, and multi-vehicle teams — where we design geometric and optimal-control algorithms for aggressive and adaptive flight. Topics include geometric attitude/pose control on SO(3)/SE(3), robust and adaptive control for systems with unknown inertial parameters, distributed trajectory optimization for collaborative payload transport, and safety-critical control with learning-enabled components.\n\nWe also pursue fundamental questions in applied dynamical systems: bifurcations in piecewise-smooth systems, orbital stability, and the interplay between symmetry and controllability.",
    links: [
      { label: "Aerial robotics", url: "#" },
      { label: "Optimal control", url: "#" },
      { label: "Applied mathematics", url: "#" },
    ],
  },
  {
    slug: "complex-systems",
    title: "Complex Systems",
    image: "networks.jpg",
    summary:
      "Fluid flows, networks of oscillators, and human-centered system dynamics.",
    memberIds: ["phd-3", "ms-2", "pi"],
    longDescription:
      "Many natural and engineered systems are composed of many interacting subsystems whose collective behavior cannot be read off from individual components. We investigate such complex systems in three related settings: wall-bounded and free-shear turbulent flows, networks of coupled nonlinear oscillators (including arrays of Rijke tubes), and signals from human-centered dynamical systems. Our tools include modern time-series analysis, network science, manifold learning, Dynamic Mode Decomposition, and Koopman-operator regression.\n\nA recurring goal is to build interpretable, data-driven models that are physically consistent and that can be used for prediction and control.",
    links: [
      { label: "Networks", url: "#" },
      { label: "Signals", url: "#" },
      { label: "Data-driven approaches", url: "#" },
    ],
  },
  // ---------------- supporting, more tightly-focused projects ----------------
  {
    slug: "rijke-network",
    title: "Networked Rijke-tube experiments",
    image: "rijke.jpg",
    summary:
      "A modular experimental platform for synchronization studies in coupled thermoacoustic oscillators.",
    memberIds: ["phd-3", "phd-1", "pi"],
    longDescription:
      "We maintain an array of electrically driven and flame-driven Rijke tubes whose coupling strengths can be varied continuously. The rig serves as a testbed for phase-reduction analysis, cluster synchronization, and data-driven discovery of coupling topologies.",
    links: [],
  },
  {
    slug: "koopman-fluids",
    title: "Koopman / DMD modeling of turbulent wakes",
    image: "wake.jpg",
    summary:
      "Extracting low-dimensional, predictive models from high-dimensional flow data.",
    memberIds: ["ms-2", "pi"],
    longDescription:
      "Dynamic Mode Decomposition and related Koopman-operator methods provide a linear-regression framework for building data-driven models of strongly nonlinear flows. We apply these methods to time-resolved PIV data of wake flows and reacting flows, and study how randomized forcing and known conservation laws can be incorporated into the regression.",
    links: [],
  },
  {
    slug: "flame-dynamics",
    title: "Flame dynamics and reduced-order combustion models",
    image: "flame.jpg",
    summary:
      "Kinematic G-equation models and flame describing functions for acoustically forced premixed flames.",
    memberIds: ["phd-1", "pi"],
    longDescription:
      "We study the kinematic response of premixed flames to acoustic excitation, derive low-order flame describing functions, and embed them in acoustic network models for can and annular combustors.",
    links: [],
  },
];

// ------------------------- PUBLICATIONS -------------------------
export type Pub = {
  title: string;
  authors: string;     // plain text – lab members marked with *
  venue: string;
  location?: string;
  year: number;
  month?: string;
  note?: string;       // e.g. "(Accepted)", "(To appear)", "(Submitted)"
  type: "journal" | "conference" | "preprint" | "thesis";
  links?: { label: string; url: string }[];
};

export const publications: Pub[] = [
  // 2025
  {
    title:
      "Geometric adaptive control for quadrotor UAVs with unknown rotor dynamics",
    authors: "[PhD Student 2]*, [PI Name]",
    venue: "IEEE Conference on Decision and Control (CDC)",
    location: "Rio de Janeiro, Brazil",
    year: 2025,
    month: "December",
    note: "(To appear)",
    type: "conference",
    links: [{ label: "PDF", url: "#" }],
  },
  {
    title:
      "Sparse nonlinear identification of thermoacoustic dynamics near instability onset",
    authors: "[PhD Student 1]*, [MS Student 1]*, [PI Name]",
    venue: "Journal of Fluid Mechanics",
    year: 2025,
    month: "June",
    note: "(Submitted)",
    type: "journal",
    links: [{ label: "arXiv", url: "#" }, { label: "PDF", url: "#" }],
  },
  // 2024
  {
    title:
      "Early detection of thermoacoustic instability using ordinal-pattern complexity",
    authors: "[PhD Student 1]*, [PI Name]",
    venue: "Combustion and Flame",
    year: 2024,
    month: "December",
    type: "journal",
    links: [{ label: "DOI", url: "#" }, { label: "PDF", url: "#" }],
  },
  {
    title:
      "Koopman-operator modeling of turbulent wake flows with randomized forcing",
    authors: "[MS Student 2]*, [PI Name]",
    venue: "Physical Review Fluids",
    year: 2024,
    month: "September",
    type: "journal",
    links: [{ label: "DOI", url: "#" }, { label: "arXiv", url: "#" }],
  },
  {
    title:
      "Synchronization in networks of thermoacoustic oscillators: cluster states and chimeras",
    authors: "[PhD Student 3]*, [PI Name]",
    venue: "Chaos: An Interdisciplinary Journal of Nonlinear Science",
    year: 2024,
    month: "July",
    type: "journal",
    links: [{ label: "DOI", url: "#" }],
  },
  {
    title:
      "Trajectory optimization for multi-UAV collaborative payload transport",
    authors: "[PhD Student 2]*, [BTP Student 1]*, [PI Name]",
    venue: "AIAA SciTech Forum",
    location: "Orlando, FL",
    year: 2024,
    month: "January",
    type: "conference",
    links: [{ label: "PDF", url: "#" }],
  },
  // 2023
  {
    title:
      "A reduced-order framework for limit-cycle prediction in ducted premixed flames",
    authors: "[PhD Student 1]*, [PI Name]",
    venue: "Proceedings of the Combustion Institute",
    year: 2023,
    month: "December",
    type: "journal",
    links: [{ label: "DOI", url: "#" }, { label: "PDF", url: "#" }],
  },
  {
    title:
      "Recurrence-network analysis of intermittency prior to thermoacoustic instability",
    authors: "[PI Name], [PhD Student 1]*",
    venue: "Nonlinear Dynamics",
    year: 2023,
    month: "October",
    type: "journal",
    links: [{ label: "DOI", url: "#" }],
  },
  {
    title:
      "Robust geometric attitude control on SO(3) with bounded disturbances",
    authors: "[PI Name]",
    venue: "IEEE Transactions on Automatic Control",
    year: 2023,
    month: "May",
    type: "journal",
    links: [{ label: "DOI", url: "#" }],
  },
  // 2022
  {
    title:
      "Dynamic mode decomposition of reacting flow fields past a backward-facing step",
    authors: "[PI Name], [Collaborator]",
    venue: "Physics of Fluids",
    year: 2022,
    month: "August",
    type: "journal",
    links: [{ label: "DOI", url: "#" }],
  },
  {
    title: "Chimera states in a ring of coupled Rijke tubes",
    authors: "[PhD Student 3]*, [PI Name]",
    venue: "Physical Review E",
    year: 2022,
    month: "March",
    type: "journal",
    links: [{ label: "DOI", url: "#" }],
  },
];

// ------------------------- SCHEDULE -------------------------
export type Colloquium = {
  date: string;  // YYYY-MM-DD — parsed at render
  time: string;  // "4:00 PM – 5:00 PM IST"
  presenter: string;
  affiliation?: string;
  title: string;
  location: string;
};

// Upcoming / recent weekly DysCo colloquia. Past entries are kept for
// archival. This list is what gets mailed to the mailing list.
export const colloquia: Colloquium[] = [
  {
    date: "2026-01-15",
    time: "4:00 – 5:00 PM IST",
    presenter: "[PhD Student 1]",
    affiliation: "DysCo Lab, IIT Hyderabad",
    title: "Ordinal-pattern precursors for thermoacoustic instability",
    location: "MAE Seminar Room + Zoom",
  },
  {
    date: "2026-01-22",
    time: "4:00 – 5:00 PM IST",
    presenter: "[PhD Student 2]",
    affiliation: "DysCo Lab, IIT Hyderabad",
    title: "Geometric adaptive control for quadrotors with unknown inertia",
    location: "MAE Seminar Room + Zoom",
  },
  {
    date: "2026-01-29",
    time: "4:00 – 5:00 PM IST",
    presenter: "[External Speaker Name]",
    affiliation: "[External Institution]",
    title: "Recent advances in data-driven modeling of fluid flows",
    location: "MAE Seminar Room + Zoom",
  },
  {
    date: "2026-02-05",
    time: "4:00 – 5:00 PM IST",
    presenter: "[PhD Student 3]",
    affiliation: "DysCo Lab, IIT Hyderabad",
    title: "Chimera states in networks of Rijke tubes",
    location: "MAE Seminar Room + Zoom",
  },
];

// Additional, non-colloquium events (group meetings, etc.) are kept in the
// shared Google Calendar.

// ------------------------- HOME-PAGE SLIDER -------------------------
// Image files live in public/images/slides/. Filenames are URL-relative; the
// build will serve them from the same base as the page. "lab pic.JPG" keeps
// its original filename from the upstream DysCo-lab GitHub repo (space and
// all — the browser will encode it automatically).
export const sliderSlides: { src: string; caption: string }[] = [
  { src: "images/slides/lab pic.JPG", caption: "DysCo lab group meeting." },
  { src: "images/slides/combustor.jpg", caption: "Atmospheric combustion rig." },
  { src: "images/slides/rijke.jpg", caption: "Rijke tube oscillator array." },
  { src: "images/slides/quad.jpg", caption: "Quadrotor testbed." },
  { src: "images/slides/piv.jpg", caption: "Time-resolved PIV measurements." },
];

// ------------------------- NEWS -------------------------
export type NewsItem = {
  date: string; // YYYY-MM-DD
  text: string;
};
export const news: NewsItem[] = [
  {
    date: "2025-06-10",
    text: "Our paper on geometric adaptive quadrotor control has been accepted to IEEE CDC 2025.",
  },
  {
    date: "2025-03-02",
    text: "Two new MS students joined the lab this semester.",
  },
  {
    date: "2024-12-20",
    text: "Paper on ordinal-pattern precursors appears in Combustion and Flame.",
  },
];
