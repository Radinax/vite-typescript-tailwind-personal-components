import { AppProvider } from "./providers/providers";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const CardsSection = lazy(() => import("~/views/Cards"));
const HomeSection = lazy(() => import("~/views/Home"));

const routes = [
  {
    path: "/card",
    element: <CardsSection />,
  },
];

const App: React.FC = () => (
  <>
    <AppProvider>
      <Routes>
        <Route element={<HomeSection />} path="/" />
        {routes.map((route) => (
          <Route key={route.path} element={route.element} path={route.path} />
        ))}
      </Routes>
    </AppProvider>
  </>
);

export default App;
