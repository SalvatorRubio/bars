import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const user = sessionStorage.getItem("userName");
  if (!user) return <Navigate to="/login" />;
  return children;
};

export default RequireAuth;
