import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const CardsSection = lazy(() => import("~/components/Cards"));

const routes = [
  {
    path: "/card",
    element: <CardsSection />,
  },
];

const App: React.FC = () => (
  <>
    <Routes>
      <Route element={<div>Home</div>} path="/" />
      {routes.map((route) => (
        <Route key={route.path} element={route.element} path={route.path} />
      ))}
    </Routes>
  </>
);

export default App;
