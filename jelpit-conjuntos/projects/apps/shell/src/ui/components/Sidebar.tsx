import { NavLink } from "react-router-dom";

type Props = {};

export const Sidebar = (props: Props) => {

  return (
    <div style={{ width: "20%", background: "#d3bccc" }}>
      <h5 className="p-link">Soy h5 shell</h5>
      <NavLink
        className={({ isActive }) =>
          `nav-item nav-link  ${isActive ? "active" : ""}`
        }
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `nav-item nav-link  ${isActive ? "active" : ""}`
        }
        to="/cuotas"
      >
        Cuotas app
      </NavLink>

      {/* <NavLink
        className={({ isActive }) =>
          `nav-item nav-link  ${isActive ? "active" : ""}`
        }
        to="/app2"
      >
        App2-React
      </NavLink> */}
    </div>
  );
};
