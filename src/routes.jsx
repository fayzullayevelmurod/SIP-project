import { Route, Routes } from "react-router-dom";
import {
  Basket,
  Catalog,
  ChatGPT,
  Columns,
  CorrCircuit,
  Dashboard,
  DataTree,
  Directory,
  Estimated,
  ExportBasket,
  ExportBasketUnloading,
  FileManager,
  FileManagerImport,
  GeomodelingDashboard,
  Interpretation,
  Intro,
  Map,
  MapTwo,
  Messenger,
  Modeling,
  MultiMenu,
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
  { path: "map-two", element: <MapTwo /> },
  { path: "file-manager-import", element: <FileManagerImport /> },
  { path: "basket", element: <Basket /> },
  { path: "export-basket", element: <ExportBasket /> },
  { path: "export-basket-unloading", element: <ExportBasketUnloading /> },
  { path: "data-tree", element: <DataTree /> },
  { path: "multi-menu", element: <MultiMenu /> },
  { path: "columns", element: <Columns /> },
  { path: "modeling", element: <Modeling /> },
  { path: "estimated", element: <Estimated /> },
];


{
  /* // 
https://sip-project-qjy2.onrender.com/
https://sip-project-qjy2.onrender.com/*
https://sip-project-qjy2.onrender.com/messenger/*
https://sip-project-qjy2.onrender.com/chat-gpt/*
https://sip-project-qjy2.onrender.com/personal-information
https://sip-project-qjy2.onrender.com/table
https://sip-project-qjy2.onrender.com/directory
https://sip-project-qjy2.onrender.com/file-manager
https://sip-project-qjy2.onrender.com/corr-circuit
https://sip-project-qjy2.onrender.com/object-model
https://sip-project-qjy2.onrender.com/interpretation
https://sip-project-qjy2.onrender.com/visualization-2D
https://sip-project-qjy2.onrender.com/visualization-3D
https://sip-project-qjy2.onrender.com/tablet
https://sip-project-qjy2.onrender.com/catalog
https://sip-project-qjy2.onrender.com/dashboard
https://sip-project-qjy2.onrender.com/report
https://sip-project-qjy2.onrender.com/projects
https://sip-project-qjy2.onrender.com/projects-number
https://sip-project-qjy2.onrender.com/map
https://sip-project-qjy2.onrender.com/map-two
https://sip-project-qjy2.onrender.com/file-manager-import
https://sip-project-qjy2.onrender.com/basket
https://sip-project-qjy2.onrender.com/export-basket
https://sip-project-qjy2.onrender.com/export-basket-unloading
https://sip-project-qjy2.onrender.com/data-tree
https://sip-project-qjy2.onrender.com/multi-menu
https://sip-project-qjy2.onrender.com/columns
https://sip-project-qjy2.onrender.com/modeling
	*/
}