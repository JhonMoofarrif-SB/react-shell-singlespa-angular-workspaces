import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    login?.("Jhon Moofarrif");
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <h1>Hola mundo: {import.meta.env.VITE_HOLA}</h1>
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
