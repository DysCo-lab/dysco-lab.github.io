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
  imageSrc: "images/dysco_logo.png",
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
  email: "dysco-lab@gmail.com",
  piEmail: "vishnu.runni@mae.iith.ac.in",
  phone: "9677140931",
  mailingList: "dysco-lab@googlegroups.com", // Google Group for reminders
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
    | "dual"
    | "jrf"
    | "intern"
    | "alumni";
  roleLabel?: string; // override group label if needed
  photo?: string; // filename inside /images/people/
  email?: string;
  website?: string;
  topic?: string; // research topic / thesis title; shown under name
  bio?: string; // longer biography / personal description
  links?: { label: string; url: string }[];
  // For alumni:
  phdThesis?: string;
  msThesis?: string;
  nowAt?: string;
  graduationYear?: number;
};

export const people: Person[] = [
  // Faculty / PI
  {
    id: "vishnu-unni",
    name: "Vishnu Rajasekharan Unni",
    role: "pi",
    roleLabel: "Faculty",
    photo: "Vishnu Photo.jpg",
    email: lab.piEmail,
    website: "http://www.vishnurunni.com",
    topic:
      "Principal Investigator, Assistant Professor of Mechanical and Aerospace Engineering",
    bio:
      "Ph.D. in Department of Aerospace Engineering, Indian Institute of Technology Madras, India, 2013 - 2017. Dual Degree (B.Tech & M.Tech) in Aerospace Engineering, Indian Institute of Technology, Madras, India, 2007 - 2012.",
    links: [
      {
        label: "Google Scholar",
        url: "https://scholar.google.co.in/citations?user=xCwczkYAAAAJ&hl=en",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/vishnu-r-unni-318b0b20/",
      },
      { label: "Website", url: "http://www.vishnurunni.com" },
    ],
  },

  // Research Scholars (PhD)
  {
    id: "tathagat-sarangi",
    name: "Tathagat Sarangi",
    role: "phd",
    photo: "Tathagat Sarangi_pic.jpeg",
    email: "me22resch11010@iith.ac.in",
    bio:
      "I’m Tathagat Sarangi, a member of Vishnu's group since its inception in 2022. I’m usually based in the research labs or at C Block 619. In addition to my work, I enjoy swimming, fitness training, cooking, and exploring new places through long drives and bike rides. I’m also an avid Formula One fan.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/tathagat-sarangi-8125b514a/?originalSubdomain=in",
      },
    ],
  },
  {
    id: "yashwanth",
    name: "Yashwanth",
    role: "phd",
    photo: "Yashwanth_pic.jpg",
    email: "yashwanth.contact@gmail.com",
    bio:
      "I am interested in the junction of theoretical and practical aspects of aerial robotic systems. I am currently exploring RL-based optimal control strategies for UAVs. I would love to collaborate on some additional projects (check out my GitHub) or we can grab a coffee if you enjoy math!",
    links: [
      { label: "Website", url: "https://yashwanthprofile.github.io/" },
      { label: "CV", url: "https://yashwanthprofile.github.io/cv.html" },
      {
        label: "Google Scholar",
        url: "https://scholar.google.com/citations?user=YtHC5_kAAAAJ&hl=en",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/yashwanth-m-0030421b2/",
      },
      { label: "GitHub", url: "https://github.com/YashwanthProfile" },
    ],
  },
  {
    id: "misbah-tahir",
    name: "Misbah Tahir",
    role: "phd",
    photo: "Misbah_Tahir.jpeg",
    email: "me24resch11015@iith.ac.in",
    bio:
      "My work at the DySCo Lab lies at the intersection of experimental aerodynamics and flight dynamics, with a particular focus on micro and nano UAV control and stability. Outside the lab, I enjoy reading novels.",
  },
  {
    id: "aditya-kumar-gupta",
    name: "Aditya Kumar Gupta",
    role: "phd",
    photo: "AdityaGupta.png",
    email: "me25resch11007@iith.ac.in",
    bio:
      "I am a Ph.D. researcher in Flight Mechanics at Indian Institute of Technology Hyderabad, with a strong academic background and research interest in Aerospace Engineering. My research focuses on the transition flight dynamics of Vertical Take-Off and Landing (VTOL) configurations designed for Air Taxi applications. Specifically, I investigate the aerodynamic, stability, and control challenges associated with the transition between vertical and forward flight. My work contributes to advancing Urban Air Mobility (UAM) technologies and the development of efficient, safe, and sustainable next-generation aerial transportation systems.",
    links: [
      {
        label: "LinkedIn",
        url: "https://in.linkedin.com/in/aditya-kumar-gupta-26324227b",
      },
    ],
  },
  {
    id: "edmeachew-ayal",
    name: "Edmeachew Ayal",
    role: "phd",
    photo: "Edmeachew.jpg",
    email: "me25resch16001@iith.ac.in",
    bio:
      "Hello! I’m Edmeachew, a Ph.D. scholar from Ethiopia working in the DysCo Lab under the guidance of Vishnu R. Unni. My research focuses on machine learning–based energy management to maximize the flight endurance of solar-powered UAVs using forecast-informed deep reinforcement learning. I feel fortunate to work under Dr. Vishnu Unni’s guidance and to be part of the DysCo Lab. Outside the lab, I enjoy reading business-oriented books, exercising, and spending time with my family.",
    links: [
      { label: "Facebook", url: "https://www.facebook.com/share/173bRkBYxB/" },
    ],
  },

  // Dual Degree Students (Undergrad+Grad)
  {
    id: "harishankar-m",
    name: "Harishankar M",
    role: "dual",
    photo: "Harishankar M_pic.jpg",
    email: "ee21b25m100001@iith.ac.in",
    bio:
      "I am a Dual Degree student (BTech + MTech) in the Dysco Lab, where I explore the effects of topological variations in network dynamics. Outside the lab, I enjoy travelling, watching movies, and listening to music. I’m passionate about connecting scientific discovery with real-world impact and love collaborating with others to solve challenging problems.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/harishankar273/",
      },
    ],
  },
  {
    id: "neeraj-balachandar",
    name: "Neeraj Balachandar",
    role: "dual",
    photo: "IMG_0720.jpeg",
    email: "neerajbalachandar@gmail.com",
    bio:
      "I am a junior year undergrad student in MechE with a minor in Robotics at IIT Hyderabad. Welcome to my portfolio webpage. Have a good time scrolling through!",
    links: [
      {
        label: "CV",
        url: "https://neerajbalachandar.github.io/uploads/resume.pdf",
      },
      {
        label: "Google Scholar",
        url: "https://scholar.google.com/citations?user=r2Zut8kAAAAJ&hl=en",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/neeraj-balachandar-4a2777261/",
      },
      { label: "Website", url: "https://neerajbalachandar.github.io/" },
      { label: "GitHub", url: "https://github.com/neerajbalachandar" },
    ],
  },

  // Graduate Students (M.Tech / MS)
  {
    id: "mandar-mane",
    name: "Mandar Mane",
    role: "ms",
    photo: "mandar.jpeg",
    email: "me24mtech12010@iith.ac.in",
    bio:
      "Hello! I’m Mandar, currently a second-year M.Tech (RA) student in Aerospace Engineering. My research focuses on unsteady aerodynamics and measurement techniques, with hands-on work in developing seeding system for flow visualization using Particle Image Velocimetry (PIV), along with experimental aerodynamics using conventional anemometry. I also have experience in UAV aeromodelling through student team projects during my undergraduate studies. Outside the lab, I enjoy reading mythological sci-fi novels, stargazing and researching astronomy-related paraphernalia, as well as keeping up with Formula 1. More recently, I’ve also been enjoying spending time at the gym.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/mandarmane44/?originalSubdomain=in",
      },
      {
        label: "Google Scholar",
        url: "https://scholar.google.com/citations?user=N87ueGMAAAAJ&hl=en",
      },
      { label: "GitHub", url: "https://github.com/mandarmane44" },
    ],
  },
  {
    id: "manthan-suryvanshi",
    name: "Manthan Suryvanshi",
    role: "ms",
    photo: "manthan.jpeg",
    email: "me24mtech11032@iith.ac.in",
    bio:
      "Hi! I’m Manthan, and I’m in my second year of M.Tech in Aerospace Engineering. I spend most of my time designing and modeling wind generator, diving into aerodynamics, and figuring out how to make propellers and fans perform better. When I’m not in the lab, you’ll find me playing cricket—it's one of my favorite pastimes! And if I’m not on the field, I’m probably roasting my favorite people somewhere.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/manthan-suryvanshi/",
      },
    ],
  },
  {
    id: "sai-japesh-rao-gopu",
    name: "Sai Japesh Rao Gopu",
    role: "ms",
    photo: "Sai Japesh.jpeg",
    email: "japesh1410@gmail.com",
    bio:
      "Passionate aerospace engineer focused on the design and development of unconventional UAVs. My work centers on bridging the gap between theoretical aerospace engineering and practical, real-world applications.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/sai-japesh-rao-gopu-a48004247/",
      },
      { label: "GitHub", url: "https://github.com/saijapesh" },
      { label: "Portfolio", url: "https://www.saijapesh.com" },
    ],
  },
  {
    id: "vivek-yadav",
    name: "Vivek Yadav",
    role: "ms",
    photo: "vivek.JPG",
    email: "em24mtech11002@iith.ac.in",
    bio:
      "I completed my B.Tech in Aerospace Engineering and am currently pursuing an M.Tech Techno-Entrepreneurship at IIT Hyderabad.",
  },
  {
    id: "ravula-siri-reddy",
    name: "Ravula Siri Reddy",
    role: "ms",
    photo: "siri.jpeg",
    email: "ee25mtech12014@iith.ac.in",
    bio:
      "I am Ravula Siri Reddy, pursuing my M.Tech in Power Electronics and Power Systems at IIT Hyderabad. Over the past year, I have been associated with the DySCo Lab, where I gained valuable research and practical experience. I bring strong technical expertise, leadership ability, and a collaborative mindset, ensuring tasks are completed with precision and efficiency. Beyond academics, I am passionate about traveling, music, and badminton.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/ravula-siri-reddy-306302249/",
      },
    ],
  },
  {
    id: "akash-mavurapu",
    name: "Akash Mavurapu",
    role: "ms",
    photo: "akash.jpeg",
    email: "akashmavurapu@gmail.com",
    bio:
      "I have finished my B.Tech. in Electronics and Communication Engineering. My Mtech specialization is in Power Electronics and Power Systems. Currently working on Control system for Unsteady wind wall using FPGA. Previous projects are Custom Flight Controller for Unmanned Aerial and Ground Vehicles, Radio Transceivers, Signal amplifiers. Unmanned Aerial and Ground vehicles, Power Distribution and measurement board for cargo drones.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/mavurapu-akash-196589210/",
      },
    ],
  },
  {
    id: "akhila-shibu",
    name: "Akhila Shibu",
    role: "ms",
    photo: "Akhila_shibu.jpeg",
    email: "me26mtech02001@iith.ac.in",
    bio:
      "I am Akhila Shibu, an M.Tech (RA) student in Aerospace Engineering with hands-on experience in the design, modeling, and experimental analysis of structural systems. My work focuses on the intersection of structural design and aerodynamic experimentation, where engineered systems are modeled and validated through laboratory studies. I use engineering tools such as SolidWorks, CATIA V5, and Fusion 360 for CAD modeling and design. Beyond engineering, I write my thoughts into poems and enjoy playing chess.",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/akhila-shibu002/" },
    ],
  },
  {
    id: "satyadarshi-das",
    name: "Satyadarshi Das",
    role: "ms",
    photo: "SatyadarshiDas.jpg",
    bio:
      "Hello! I'm Satyadarshi, currently pursuing an M.Tech in Aerospace Engineering at IIT Hyderabad. I completed my B. Tech in Mechanical Engineering, and my academic interests lie in aerothermodynamics and flight mechanics, particularly in understanding high-speed flows and flight dynamics. Outside the lab, you will usually find me playing football, checkmating opponents in chess, lifting weights, or playing FPS games.",
  },
  {
    id: "sanjai-v",
    name: "Sanjai V",
    role: "ms",
    photo: "sanjayV.jpg",
    bio:
      "Hello, I'm Sanjai, currently pursuing an M.Tech in Aerospace Engineering at IIT Hyderabad. I completed my B.Tech in Aerospace Engineering, and my academic interests lie in control systems, flight mechanics, and robotics, particularly in understanding the dynamics and control of complex mechanical and aerospace systems. I am interested in problems involving rigid body dynamics, autonomous systems, and the integration of perception and control for robotic and aerospace applications. In my free time, I enjoy watching TV shows, playing football, and closely following Formula 1.",
  },

  // Junior Research Fellows
  {
    id: "ashik-lal-krishna",
    name: "Ashik Lal Krishna",
    role: "jrf",
    photo: "ashik.jpeg",
    email: "ashiklal002@gmail.com",
    bio:
      "At DysCo Lab, I work on data-driven modelling of dynamical systems, where complex behaviour emerges from simple interacting components. I am particularly interested in developing methods to investigate and control emergent behaviour across physical, biological, and engineering domains, with a primary focus on thermoacoustic instability in combustion systems. Outside the lab, I spend a disproportionate amount of time watching films that I confidently recommend and only partially understand. I try to read beyond my comprehension and engage with culture at a distance safe enough to form strong opinions that no one asked for, while remaining comfortably unmoored from any actual social life. I also like to indulge in long, meandering conversations that exhibit neither coherence nor convergence. If you need to find me, I am usually at C-617, likely occupied with something of questionable value.",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/ashik-lal-krishna",
      },
      {
        label: "GitHub",
        url: "https://github.com/ashiklalkrishna?tab=repositories",
      },
    ],
  },
  {
    id: "yogita-dhadphale",
    name: "Yogita Dhadphale",
    role: "jrf",
    photo: "yogitaD.png",
    email: "yogita.dhadphale@prjt.mae.iith.ac.in",
    bio:
      "I am Yogita Dhadphale, a Junior Research Fellow with a background in software engineering and data analysis. I also enjoy outdoor activities and sports in my free time.",
  },
  {
    id: "nitish-kashyap",
    name: "Nitish Kashyap",
    role: "jrf",
    photo: "nitish.png",
    email: "nitish.kashyap@alumni.iith.ac.in",
    bio:
      "Building plasma propulsion systems for satellites and deep-space missions. The work revolves around turning research into working hardware – designing, simulating, and testing what could power the next generation of spacecraft. The larger aim is to push India forward in space propulsion and make deep-tech more accessible for real missions.",
  },

  // Project Staffs
  {
    id: "m-madhusudhan-reddy",
    name: "M. Madhusudhan Reddy",
    role: "staff",
    photo: "Madhu Reddy.png",
    bio:
      "I've completed my B.Tech in Electronics and Communication Engineering. Currently working as project assistant in Dysco Lab. I am working in Runway monitoring system project.",
  },
  {
    id: "mirzapur-naresh",
    name: "Mirzapur Naresh",
    role: "staff",
    photo: "Mirzapur Naresh.jpg",
    bio:
      "I am MIRZAPUR NARESH, currently working as a Project Assistant in the Department of Mechanical and Aerospace Engineering at IIT Hyd, contributing to engineering projects and research activities.",
  },
  {
    id: "abhinav-tj",
    name: "Abhinav TJ",
    role: "staff",
    photo: "AbhinavTJ.jpeg",
    bio:
      "I am currently serving as a Project Assistant at IIT Hyderabad, where I am actively involved in the Windwall and FOD (Foreign Object Debris) projects. My role focuses on the end-to-end process of designing and fabrication. I hold a Diploma in Mechanical Engineering, which established my core expertise in manufacturing and mechanical systems. I am highly proficient in modern engineering design tools, including SolidWorks, Fusion 360, and AutoCAD, and I possess a strong working knowledge of CAM for manufacturing workflows. Beyond my technical expertise, I am a collaborative problem-solver who excels in team work. I am a DIY enthusiast dedicated to conceptualizing and building personal projects, constantly applying my fabrication skills to creative, hands-on challenges.",
  },
  {
    id: "kranthikiran",
    name: "Kranthikiran",
    role: "staff",
    photo: "KranthiKiran.jpg",
    bio:
      "I am Kranthikiran, a Mechanical Engineering graduate currently working as a Project Assistant in the Department of Mechanical and Aerospace Engineering at IIT Hyd, contributing to engineering projects and research activities.",
  },
  {
    id: "dhinesan-sk",
    name: "Dhinesan SK",
    role: "staff",
    photo: "Dhinesan SK.jpeg",
    bio:
      "Off the clock, I try mastering the fine art of sleep, embrace an interest-free lifestyle while keeping my hobbies undefined.",
  },

  // Project Interns
  {
    id: "akhin-p-ajay",
    name: "Akhin P Ajay",
    role: "intern",
    photo: "akhin.jpeg",
    email: "akhinpajay9631@gmail.com",
    bio:
      "I am Akhin P Ajay, currently pursuing my M.Tech in Manufacturing and Automation at the College of Engineering Trivandrum, with a B.Tech in Mechanical Engineering (Production). I have one year of experience as a Project Associate at IIT Madras in Applied Mechanics, where I gained strong practical and analytical skills. My interests lie in design, manufacturing, and production, and I am proficient in tools such as SolidWorks, AutoCAD, Fusion 360, Siemens NX, Autodesk Inventor, and Creo Parametric. I also completed an internship in additive manufacturing at the Rocket Fabrication Facility (RFF), VSSC Trivandrum. I bring strong leadership, team management, and problem-solving abilities, along with a collaborative mindset, and enjoy traveling, playing badminton, and driving in my free time.",
    links: [
      {
        label: "LinkedIn",
        url: "http://linkedin.com/in/akhin-p-ajay-2909a5185",
      },
    ],
  },
  {
    id: "hardik-sanghavi",
    name: "Hardik Sanghavi",
    role: "intern",
    photo: "hardik.jpeg",
    bio:
      "I’m Hardik Vaibhav Sanghavi from Mumbai, currently pursuing my undergraduate studies at Hindustan Institute of Technology and Science. I’m presently working as an intern at Dysco, IIT Hyderabad, where my project focuses on developing an inertial acceleration system for drones. I’m driven by the process of turning ideas into tangible solutions and finding meaning in the details that make them work.",
  },
  {
    id: "ren",
    name: "ren",
    role: "intern",
    photo: "ren_ross.jpeg",
    bio: "I am ren.",
  },

  // Alumni
  {
    id: "v-naresh",
    name: "V Naresh",
    role: "alumni",
    photo: "V Naresh.jpeg",
    bio:
      "Myself Naresh currently working as a Project Assistant in the Mechanical & Aerospace Department at IIT Hyderabad. I involved in supporting research & developing activities related to Electronics Embedded System, Instrumentation, Soldering works etc.",
  },
];

export const peopleGroups: {
  label: string;
  roles: Person["role"][];
  showTopic?: boolean;
  isAlumni?: boolean;
}[] = [
  { label: "Principal Investigator", roles: ["pi", "faculty"] },
  { label: "Research Scholars", roles: ["phd"], showTopic: true },
  {
    label: "Dual Degree Students (Undergrad+Grad)",
    roles: ["dual"],
    showTopic: true,
  },
  { label: "Graduate Students", roles: ["ms"], showTopic: true },
  { label: "Junior Research Fellow", roles: ["jrf"], showTopic: true },
  { label: "Project Staffs", roles: ["staff"], showTopic: true },
  { label: "Project Intern", roles: ["intern"], showTopic: true },
  { label: "Alumni", roles: ["alumni"], isAlumni: true },
];

export function peopleByRole(roles: Person["role"][]) {
  return people.filter((p) => roles.includes(p.role));
}



// ------------------------- PROJECTS -------------------------
// Images live in public/images/projects/ — each project should have a hero
// image (jpg/png/gif). Project detail pages are keyed by `slug`; the
// `longDescription` and remaining fields will be filled in when the
// per-project details are provided.

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
    slug: "Instabilities",
    title: "Thermoacoustics and Aeroelasticity",
    image: "flutter.png",
    summary:
      "Identification of thermoacoustic instability and aeroelastic flutter using reduced-order and data-driven models.",
    memberIds: [],
    longDescription: "",
    links: [
      { label: "System Identification", url: "#ta-pen" },
      { label: "Data-driven Modelling", url: "#ta-ddm" },
      { label: "Reduced Order Modelling", url: "#ta-rom" },
    ],
  },
  {
    slug: "learn-to-fly",
    title: "Learn to Fly",
    image: "LTF.png",
    summary:
      "Experimental platforms and data-driven methods for flight dynamics and control validation.",
    memberIds: [],
    longDescription: "",
    links: [
      { label: "5-DOF Gimbal Structure", url: "#ltf-gimbal" },
      { label: "Coupled System dynamics", url: "#ltf-da" },
      { label: "Data-driven fluid mechanics", url: "#ltf-dd" },
      { label: "Vortex Particle simulations", url: "#ltf-vpm" },
    ],
  },
  {
    slug: "wind-wall",
    title: "Wind Wall",
    shortTitle: "Wind Wall",
    image: "ww1.jpg",
    summary:
      "Unsteady Aerodynamics and Flow Visualization Platform.",
    gallery: [
      "ww2.jpeg",
      "ww3.jpg",
      "ww4.jpg",
      "ww5.jpg",
    ],
    memberIds: [
      "phd-misbah",
      "ms-mandar",
      "ms-manthan",
      "ms-akash",
      "ms-siri",
      "ms-akhila",
      "staff-nitish",
      "staff-mirzapur",
      "staff-madhu",
      "staff-kranthi",
      "staff-abhinav",
      "alum-naresh",
    ],
    longDescription:
      "Wind Wall is a research project in unsteady aerodynamics focused on the development of a controlled flow-generation and visualization platform for large-scale experiments. The module combines actuation, control, structural integration, and diagnostic methods to support experimental studies in flow physics.\n\nThe project is being carried out in collaboration with DRDO-DYSL-AT, under the guidance of the coordinating scientist Mr. V. V. S. M. Ganesh. The work includes remotely actuated bubble generation for flow visualization, fan system design, flight stability analysis, large-scale PIV, and embedded control implementation.",
    links: [
      { label: "Unsteady Aerodynamics", url: "#ww-aero" },
      { label: "System Control", url: "#ww-control" },
      { label: "Large-scale PIV", url: "#ww-piv" },
      { label: "PWM control - FPGA, STM32", url: "#ww-fpga" },
      { label: "Flight stability analysis", url: "#ww-stable" },
      { label: "Propeller design", url: "#ww-fan" },
      { label: "Structural design", url: "#ww-structure" },
    ],
  },
    {
    slug: "computational-data-driven-fluid-mechanics",
    title: "Computational and Data Driven Fluid Mechanics",
    image: "varflexi.png",
    summary:
      "Scientific machine learning, flow reconstruction, and reduced-order modeling for fluid dynamics.",
    memberIds: [],
    longDescription: "",
    links: [
      { label: "Scientific Machine Learning", url: "#cdfm-sml" },
      { label: "Fluid Flow Reconstruction", url: "#cdfm-ffr" },
      {
        label: "Reduced Order Modeling and Aeroelasticity",
        url: "#cdfm-oc",
      },
    ],
  },
    {
    slug: "network-of-oscillators",
    title: "Network of Oscillators",
    image: "networks.png",
    summary:
      "Markov Processes, Clustering, Recurrence plots, and modelling cyber-physical attacks with Laplacian dynamics.",
    memberIds: [],
    longDescription: "",
    links: [
      { label: "Kuramoto oscillators", url: "#ar-vol" },
      { label: "Recurrence plots", url: "#ar-elem" },
    ],
  },
    {
    slug: "dynamics-optimal-control",
    title: "Dynamics and Optimal Control",
    image: "optimalctrl.png",
    summary:
      "Hardware-in-loop control, Koopman operator control, sequential convex programming, and safe control.",
    memberIds: [],
    longDescription: "",
    links: [
      { label: "Data-driven control", url: "#doc-dd" },
      { label: "Optimal control", url: "#doc-op" },
    ],
  },
  {
    slug: "fod",
    title: "FOD (Foreign Object Debris)",
    shortName: "FOD",
    image: "FOD Poster.pptx.png",
    summary:
      "Runway foreign object debris monitoring and detection system.",
    gallery: [
      "fod2.jpg",
      "fod3.jpg",
      "fod4.jpg",
    ],
    memberIds: [
      "staff-madhu",
      "staff-abhinav",
    ],
    longDescription: "",
    links: [],
  },
  {
    slug: "vyom",
    title: "VYOM",
    image: "vyom.png",
    summary:
      "Biomechanical intelligence, physiological signals, and muscle monitoring.",
    gallery: [
      "vyom2.png",
    ],
    memberIds: [],
    longDescription: "",
    links: [
      { label: "Complex systems", url: "#vyom-complex" },
      { label: "Physiological Signals", url: "#vyom-phys" },
      { label: "Muscle monitor", url: "#vyom-muscle" },
    ],
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
  {
    title:
      "On development of hardware-in-loop flight control stratergies for aerial-vehicles",
    authors: "M. Yashwanth, B. Neeraj, S.K. Dhinesan, P.A. Akhin",
    venue: "Transactions in Robotics, IEEE",
    year: 2026,
    note: "(In Preparation)",
    type: "preprint",
    links: [
      {
        label: "Journal",
        url: "https://www.ieee-ras.org/publications/t-ro/",
      },
    ],
  },
  {
    title:
      "Koopman operator based system idendification of nonlinear FSI system",
    authors: "Yashwanth M., Tathagat Sarangi, Ashik Lal Krishna",
    venue: "Chaos: An Interdisciplinary Journal of Nonlinear Science",
    year: 2026,
    note: "(In preparation)",
    type: "preprint",
    links: [
      {
        label: "Journal",
        url: "https://pubs.aip.org/aip/cha",
      },
    ],
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
  { src: "images/slides/lab_group.jpeg", caption: "Welcome to the DysCo Lab" },
  { src: "images/slides/lab pic.JPG", caption: "Lab group dinner at restaurant in Hyderabad" },
  { src: "images/slides/colloquium9.jpeg", caption: "Snapshot from weekly colloquiums (10/05/2026)" },
  { src: "images/slides/cleaning.jpeg", caption: "Lab cleaning session organised" },
  { src: "images/slides/russian_prof.jpg", caption: "Invited Guest" },
];

// ------------------------- NEWS -------------------------
export type NewsItem = {
  date: string; // YYYY-MM-DD
  text: string;
};
export const news: NewsItem[] = [
  {
    date: "2026-04-01",
    text: "Neeraj Balachandar received the Najafi Singh Undergraduate Research Excellence Award for contributions advancing Computational Methods, Scientific Machine Learning, and the Control of Dynamical Systems.",
  },
  {
    date: "2026-01-01",
    text: "Best wishes to Harishankar M. who has joined the PhD program at the University of California, Irvine under Prof. Fabio Pasqualetti.",
  },
  {
    date: "2026-01-01",
    text: "Best wishes to Aryam Sharma who has joined the PhD program at the University of California San Diego under Prof. Sutanu Sarkar.",
  },
  {
    date: "2025-08-30",
    text: "Three papers on drone docking, learn to fly, and sky hooking and rendezvous from DysCo lab, accepted for presentation at the AIAA Sci-Tech in Orlando, FL. Congrats to Yashwanth, Neeraj and Harishankar for their contributions.",
  },
  {
    date: "2025-03-01",
    text: "Students won 2nd place in the Swarm Rescue Challenge conducted by ENSTA Ecole Polytechnique de Paris in collaboration with DRDO - Neeraj, Kevin, Shriram, Padmaprabhan (right to left).",
  },
  {
    date: "2025-05-20",
    text: "Our students Tathagat and Aryam presented three papers on Thermoacoustics for the ICSV31 conference, 2025 held in South Korea.",
  },
  {
    date: "2025-08-01",
    text: "Prof. Dr Vishnu R. Unni has been appointed as the faculty-in-charge of the incubation centre for start-ups in IIT Hyderabad.",
  },
];