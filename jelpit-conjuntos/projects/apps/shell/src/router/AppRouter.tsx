import { Navigate, Route, Routes, Outlet } from "react-router-dom";

import { HomeRoutes } from "../home";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Auth } from "../container/Auth";
import { LoginPage } from "../auth";
import { App4 } from "../container/App4";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login/*"
          element={
            <PublicRoute>
              <Routes>
                {/* rutas pubicas */}
                <Route path="/" element={<App4 />} />
                <Route path="/b" element={<App4 />} />
                <Route path="/a" element={<App4 />} />

                {/* <Route path="/zone-1" element={<h1>zona publica 1 </h1>} />
                <Route path="/zone-2" element={<h1>zona publica </h1>} /> */}
                {/* <Route path="*" element={<h1>404</h1>}></Route> */}
              </Routes>
            </PublicRoute>
          }
        />

        {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}

        <Route
          path="/*"
          element={
              <HomeRoutes />
            // </PrivateRoute>
          }
        />
        <Route
          path="public-zone/*"
          element={
            <PublicRoute>
              <Routes>
                {/* rutas pubicas */}
                <Route path="/" element={<h1>landing page (?)</h1>} />
                <Route path="/zone-1" element={<h1>zona publica 1 </h1>} />
                <Route path="/zone-2" element={<h1>zona publica 2</h1>} />
                {/* <Route path="*" element={<h1>404</h1>}></Route> */}
              </Routes>
            </PublicRoute>
          }
        />
      </Routes>
      <Outlet />
    </>
  );
};
