import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import { AppProvider } from "./providers/providers";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const CardsSection = lazy(() => import("~/views/Cards"));
const HomeSection = lazy(() => import("~/views/Home"));

const routes = [
  {
    path: "/cards",
    element: <CardsSection />,
  },
];

const App: React.FC = () => (
  <div className="h-screen relative pl-16">
    <AppProvider>
      <Header />
      <Sidebar />

      <Routes>
        <Route element={<HomeSection />} path="/" />
        {routes.map((route) => (
          <Route key={route.path} element={route.element} path={route.path} />
        ))}
      </Routes>
    </AppProvider>
  </div>
);

export default App;
