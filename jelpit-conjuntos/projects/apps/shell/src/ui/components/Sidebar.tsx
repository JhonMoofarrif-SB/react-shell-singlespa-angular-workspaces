import { NavLink } from "react-router-dom";

type Props = {};

export const Sidebar = (props: Props) => {

  //todo hacer router entre aplicaicones angular y agregar uan de react 17 vite
  return (
    <div style={{ width: "20%", background: "#d3bccc" }}>
      <NavLink
        className={({ isActive }) =>
          `nav-item nav-link  ${isActive ? "active" : ""}`
        }
        to="/app1"
      >
        App1-React
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `nav-item nav-link  ${isActive ? "active" : ""}`
        }
        to="/app2"
      >
        App2-React
      </NavLink>
    </div>
  );
};
