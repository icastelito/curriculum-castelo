import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { menuNavigation, getComponent } from "../utils.tsx";
import HomePage from "../pages/Home/index.tsx";

function AppRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {menuNavigation.map((item) => {
            const Component = getComponent(item.elementPath);
            return <Route path={item.path} element={<Component />} />;
          })}
        </Routes>
      </Router>
    </div>
  );
}
export default AppRoutes;
