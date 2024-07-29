import { Route, Routes } from "react-router-dom";
import {
  Catalog,
  ChatGPT,
  CorrCircuit,
  Dashboard,
  Directory,
  FileManager,
  GeomodelingDashboard,
  Interpretation,
  Intro,
  Map,
  Messenger,
  NotFound,
  ObjectModel,
  PersonalInformation,
  ProjectNumbers,
  Projects,
  Report,
  Table,
  Tablet,
  Visualization2D,
  Visualization3D,
} from "./pages";

export const AppRoutes = () => (
  <Routes>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}
  </Routes>
);

const routes = [
  { path: "/", element: <Intro /> },
  { path: "*", element: <NotFound /> },
  { path: "/messenger/*", element: <Messenger /> },
  { path: "/chat-gpt/*", element: <ChatGPT /> },
  { path: "personal-information", element: <PersonalInformation /> },
  { path: "table", element: <Table /> },
  { path: "directory", element: <Directory /> },
  { path: "file-manager", element: <FileManager /> },
  { path: "corr-circuit", element: <CorrCircuit /> },
  { path: "object-model", element: <ObjectModel /> },
  { path: "interpretation", element: <Interpretation /> },
  { path: "visualization-2D", element: <Visualization2D /> },
  { path: "visualization-3D", element: <Visualization3D /> },
  { path: "tablet", element: <Tablet /> },
  { path: "catalog", element: <Catalog /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "report", element: <Report /> },
  { path: "projects", element: <Projects /> },
  { path: "projects-number", element: <ProjectNumbers /> },
  { path: "map", element: <Map /> },
  { path: "geomodeling-dashboard", element: <GeomodelingDashboard /> },
];
