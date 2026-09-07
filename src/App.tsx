import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useHashRoute } from "./hooks/useHashRoute";

import Home from "./pages/Home";
import Research from "./pages/Research";
import People from "./pages/People";
import Publications from "./pages/Publications";
import Schedule from "./pages/Schedule";
import ProjectSheet from "./pages/ProjectSheet";
import Join from "./pages/Join";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  const [parsed, navigate] = useHashRoute();
  const { route, param } = parsed;

  let content;
  switch (route) {
    case "research":
      content = <Research navigate={navigate} />;
      break;
    case "project":
      content = <ProjectDetail slug={param ?? ""} navigate={navigate} />;
      break;
    case "people":
      content = <People />;
      break;
    case "publications":
      content = <Publications />;
      break;
    case "schedule":
      content = <Schedule />;
      break;
    case "projects-sheet":
      content = <ProjectSheet />;
      break;
    case "join":
      content = <Join />;
      break;
    case "home":
    default:
      content = <Home navigate={navigate} />;
  }

  return (
    <div className="page-wrapper">
      <Navbar current={route} navigate={navigate} />
      <main className="main">{content}</main>
      <Footer />
    </div>
  );
}
